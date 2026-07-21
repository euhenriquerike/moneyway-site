const BREVO_LIST_ID = 3;
const ALLOWED_ORIGINS = new Set([
  'https://moneywaycambio.com',
  'https://www.moneywaycambio.com',
]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 200;
const MIN_FILL_TIME_MS = 1500;

function clean(value) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, MAX_LEN);
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  const body = req.body || {};
  const _honey = clean(body._honey);
  if (_honey) {
    return res.status(200).json({ ok: true });
  }

  const loadedAt = Number(body._ts);
  if (loadedAt && Date.now() - loadedAt < MIN_FILL_TIME_MS) {
    return res.status(200).json({ ok: true });
  }

  const nome = clean(body.nome);
  const email = clean(body.email).toLowerCase();
  const whatsapp = clean(body.whatsapp).replace(/[^\d+ ()-]/g, '');
  const canal = clean(body.canal) || 'email';
  const source = clean(body.source) || 'site';

  if (!nome || (!email && !whatsapp)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (email && !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const attributes = { NOME: nome, CANAL: canal, ORIGEM: source };
  if (whatsapp) attributes.WHATSAPP = whatsapp;

  const contactEmail = email || `${whatsapp.replace(/\D/g, '')}@sem-email.moneywaycambio.com`;

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: contactEmail,
        attributes,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok && brevoRes.status !== 400) {
      const errText = await brevoRes.text();
      console.error('Brevo error', brevoRes.status, errText);
      return res.status(502).json({ error: 'Failed to register contact' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Brevo request failed', err);
    return res.status(502).json({ error: 'Failed to register contact' });
  }
};

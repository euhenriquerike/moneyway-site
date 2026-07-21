const BREVO_LIST_ID = 3;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  const { nome, email, whatsapp, canal, source, _honey } = req.body || {};

  if (_honey) {
    return res.status(200).json({ ok: true });
  }
  if (!nome || (!email && !whatsapp)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const attributes = { NOME: nome, CANAL: canal || 'email', ORIGEM: source || 'site' };
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

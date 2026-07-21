/* =========================================================
   MONEY WAY CÂMBIO · app.js
   ========================================================= */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ========== RATES (global, atualizadas pela API) ========== */
  window.MW_RATES = {
    USD: { buy: 4.85,  sell: 5.55,  name: 'Dólar Americano',    sign: 'US$', flag: '🇺🇸' },
    EUR: { buy: 5.65,  sell: 6.40,  name: 'Euro',               sign: '€',   flag: '🇪🇺' },
    AUD: { buy: 3.15,  sell: 3.90,  name: 'Dólar Australiano',  sign: 'A$',  flag: '🇦🇺' },
    CAD: { buy: 3.20,  sell: 4.05,  name: 'Dólar Canadense',    sign: 'C$',  flag: '🇨🇦' },
    NZD: { buy: 2.50,  sell: 3.30,  name: 'Dólar Neozelandês',  sign: 'NZ$', flag: '🇳🇿' },
    CHF: { buy: 5.20,  sell: 7.10,  name: 'Franco Suíço',       sign: 'Fr',  flag: '🇨🇭' },
    GBP: { buy: 6.30,  sell: 7.55,  name: 'Libra Esterlina',    sign: '£',   flag: '🇬🇧' },
    MXN: { buy: 0.20,  sell: 0.39,  name: 'Novo Peso Mexicano', sign: 'MX$', flag: '🇲🇽' },
    ARS: { buy: 0.002, sell: 0.005, name: 'Peso Argentino',     sign: 'AR$', flag: '🇦🇷' },
    CLP: { buy: 0.004, sell: 0.007, name: 'Peso Chileno',       sign: 'CLP$',flag: '🇨🇱' },
    UYU: { buy: 0.11,  sell: 0.16,  name: 'Peso Uruguaio',      sign: '$U',  flag: '🇺🇾' },
    PEN: { buy: 1.25,  sell: 1.75,  name: 'Novo Sol Peruano',   sign: 'S/',  flag: '🇵🇪' },
  };

  /* ========== NAV ========== */
  var nav = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 20);
  }, { passive: true });

  /* ========== MOBILE NAV (hambúrguer + drawer) ========== */
  (function buildMobileNav() {
    var bar = document.querySelector('.nav__bar');
    if (!bar || document.querySelector('.nav__burger')) return;

    var burger = document.createElement('button');
    burger.className = 'nav__burger';
    burger.setAttribute('aria-label', 'Abrir menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = '<span></span><span></span><span></span>';
    bar.appendChild(burger);

    var overlay = document.createElement('div');
    overlay.className = 'mnav__overlay';
    var drawer = document.createElement('aside');
    drawer.className = 'mnav';
    drawer.setAttribute('aria-hidden', 'true');
    var inner = document.createElement('div');
    inner.className = 'mnav__inner';
    drawer.appendChild(inner);

    /* Serviços (accordion) */
    var svcLinks = document.querySelectorAll('.nav__menu-inner a');
    if (svcLinks.length) {
      var grp = document.createElement('div');
      grp.className = 'mnav__group';
      var head = document.createElement('button');
      head.className = 'mnav__grouphead';
      head.type = 'button';
      var svcLabelEl = document.querySelector('.nav__drop > a span, .nav__drop > a');
      head.innerHTML = '<span data-i18n="nav_services">' + (svcLabelEl ? svcLabelEl.textContent.trim() : 'Serviços') +
        '</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';
      var sub = document.createElement('div');
      sub.className = 'mnav__sub';
      svcLinks.forEach(function (a) { sub.appendChild(a.cloneNode(true)); });
      head.addEventListener('click', function () { grp.classList.toggle('open'); });
      grp.appendChild(head); grp.appendChild(sub);
      inner.appendChild(grp);
    }

    /* links principais (empresa, cotações, sobre, blog) */
    document.querySelectorAll('.nav__center > a').forEach(function (a) {
      var c = a.cloneNode(true);
      c.classList.add('mnav__link');
      if (a.classList.contains('nav__pj')) c.classList.add('mnav__link--pj');
      inner.appendChild(c);
    });

    /* idioma — reencaminha para os botões originais */
    var langSw = document.querySelector('.lang-sw');
    if (langSw) {
      var langWrap = document.createElement('div');
      langWrap.className = 'mnav__lang';
      var origBtns = langSw.querySelectorAll('button');
      function syncLang() {
        langWrap.querySelectorAll('button').forEach(function (nb, i) {
          if (origBtns[i]) nb.classList.toggle('active', origBtns[i].classList.contains('active'));
        });
      }
      origBtns.forEach(function (b) {
        var nb = document.createElement('button');
        nb.type = 'button';
        nb.textContent = b.textContent;
        nb.className = b.className;
        nb.addEventListener('click', function () { b.click(); syncLang(); });
        langWrap.appendChild(nb);
      });
      inner.appendChild(langWrap);
    }

    /* CTA principal */
    var cta = document.querySelector('.nav__cta');
    if (cta) {
      var cc = cta.cloneNode(true);
      cc.classList.add('mnav__cta');
      inner.appendChild(cc);
    }

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    function open() {
      drawer.classList.add('open'); overlay.classList.add('open');
      burger.classList.add('open'); burger.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      drawer.classList.remove('open'); overlay.classList.remove('open');
      burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    burger.addEventListener('click', function () {
      drawer.classList.contains('open') ? close() : open();
    });
    overlay.addEventListener('click', close);
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 980) close(); });
  })();

  /* ========== REVEAL + COUNTERS ========== */
  var revEls = document.querySelectorAll('.reveal');
  function revealAll() {
    revEls.forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('[data-count]').forEach(animateCount);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    revEls.forEach(function (el) { io.observe(el); });
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) animateCount(e.target); });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-count]').forEach(function (el) { co.observe(el); });
  } else {
    revealAll();
  }
  window.addEventListener('load', function () {
    setTimeout(function () {
      if (document.querySelectorAll('.reveal.in').length < revEls.length) revealAll();
    }, 1400);
  });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') setTimeout(function () {
      if (document.querySelectorAll('.reveal.in').length < revEls.length) revealAll();
    }, 200);
  });

  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suf = el.getAttribute('data-suf') || '';
    el.textContent = Math.round(target).toLocaleString('pt-BR') + suf;
    if (document.hidden) return;
    var start = null, dur = 1600;
    requestAnimationFrame(function frame(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * ease).toLocaleString('pt-BR') + suf;
      if (p < 1) requestAnimationFrame(frame);
    });
  }

  /* ========== SIMULADOR ========== */
  (function () {
    var SPREAD_ESPECIE = 0.038;
    var SPREAD_DEBITO  = 0.058; /* maior: inclui IOF de cartão (3,38%) */
    var DEBITO_CURS    = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];

    var st = { cur: 'USD', mode: 'buy', amount: 1000, tab: 'especie' };
    var amt = document.getElementById('sim-amt');
    if (!amt) return;
    var sign       = document.getElementById('sim-sign');
    var amtLabel   = document.getElementById('sim-amt-label');
    var rateLabel  = document.getElementById('sim-rate-label');
    var rateEl     = document.getElementById('sim-rate');
    var totalLabel = document.getElementById('sim-total-label');
    var totalEl    = document.getElementById('sim-total');
    var cta        = document.getElementById('sim-cta');
    var typeNote   = document.getElementById('sim-type-note');

    function brl(v) { return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
    function grp(n) { return n.toLocaleString('pt-BR'); }

    function debitoCurs() {
      var d = window.MW_RATES_DEBITO;
      if (d && Object.keys(d).length) return Object.keys(d);
      return DEBITO_CURS;
    }

    function getRates(cur) {
      var base = window.MW_RATES[cur];
      if (st.tab === 'debito') {
        /* usa as taxas de débito que a cliente preenche na aba "Débito" */
        var d = (window.MW_RATES_DEBITO || {})[cur];
        if (d) return { buy: d.buy, sell: d.sell, name: d.name || (base && base.name) || cur,
                        sign: (base && base.sign) || d.sign || cur };
        /* moeda sem taxa de débito na planilha: estima a partir da espécie */
        var midApprox = base.sell / (1 + SPREAD_ESPECIE);
        return {
          buy:  parseFloat((midApprox * (1 - SPREAD_DEBITO)).toFixed(3)),
          sell: parseFloat((midApprox * (1 + SPREAD_DEBITO)).toFixed(3)),
          name: base.name, sign: base.sign
        };
      }
      return base;
    }

    function render() {
      var r = getRates(st.cur);
      var buying = st.mode === 'buy';
      var rate = buying ? r.sell : r.buy;
      var total = (st.amount || 0) * rate;
      if (sign) sign.textContent = r.sign;
      if (amtLabel) amtLabel.textContent = 'Quanto em ' + st.cur;
      if (rateLabel) rateLabel.textContent = buying ? 'Taxa de venda' : 'Taxa de compra';
      if (rateEl) rateEl.textContent = brl(rate);
      if (totalLabel) totalLabel.textContent = buying ? 'Você paga (estimado)' : 'Você recebe (estimado)';
      if (totalEl) totalEl.textContent = brl(total);
      if (cta) {
        var tipo = st.tab === 'debito' ? 'cartão de débito' : 'moeda em espécie';
        var verb = buying ? 'comprar' : 'vender';
        var msg = 'Quero ' + verb + ' ' + r.sign + ' ' + grp(st.amount || 0) + ' em ' + r.name + ' (' + tipo + '). Total estimado ' + brl(total) + '.';
        cta.href = 'https://wa.me/5551999649824?text=' + encodeURIComponent(msg);
      }
    }
    window.MW_RENDER = render;

    function applyTab() {
      var isDebito = st.tab === 'debito';
      if (typeNote) typeNote.textContent = isDebito ? 'para cartão de débito' : 'para moeda em espécie';
      var curs = debitoCurs();
      document.querySelectorAll('#sim-cur button').forEach(function (b) {
        var c = b.getAttribute('data-cur');
        b.style.display = (!isDebito || curs.indexOf(c) !== -1) ? '' : 'none';
      });
      /* se moeda atual não disponível no débito, volta para a primeira disponível */
      if (isDebito && curs.indexOf(st.cur) === -1) {
        st.cur = curs[0] || 'USD';
        document.querySelectorAll('#sim-cur button').forEach(function (b) {
          b.classList.toggle('active', b.getAttribute('data-cur') === st.cur);
        });
      }
      render();
    }
    window.MW_APPLY_TAB = applyTab;

    amt.addEventListener('input', function () {
      var digits = amt.value.replace(/\D/g, '');
      st.amount = parseInt(digits || '0', 10);
      amt.value = st.amount ? grp(st.amount) : '';
      render();
    });

    document.querySelectorAll('.sim__tab').forEach(function (b) {
      b.addEventListener('click', function () {
        st.tab = b.getAttribute('data-tab');
        document.querySelectorAll('.sim__tab').forEach(function (x) { x.classList.toggle('active', x === b); });
        applyTab();
      });
    });

    document.querySelectorAll('#sim-cur button').forEach(function (b) {
      b.addEventListener('click', function () {
        st.cur = b.getAttribute('data-cur');
        document.querySelectorAll('#sim-cur button').forEach(function (x) { x.classList.toggle('active', x === b); });
        render();
      });
    });
    document.querySelectorAll('#sim-mode button').forEach(function (b) {
      b.addEventListener('click', function () {
        st.mode = b.getAttribute('data-mode');
        document.querySelectorAll('#sim-mode button').forEach(function (x) { x.classList.toggle('active', x === b); });
        render();
      });
    });
    render();
  })();

  /* ========== COTAÇÕES DO DIA (planilha Google editável pela cliente) ==========
     A cliente edita as colunas Compra/Venda na planilha toda manhã; o site lê e
     atualiza sozinho. Se a planilha falhar, usa os valores embutidos em MW_RATES. */
  (function () {
    var SHEET_ID         = '136z8PbMHy7C_yMTQl2pQIEYHVDwRgpNljXo305Iy7Zw';
    var SHEET_GID        = '0';          /* aba Espécie */
    var SHEET_GID_DEBITO = '733419888';  /* aba Débito  */
    var ORDER = ['USD','EUR','AUD','CAD','NZD','CHF','GBP','MXN','ARS','CLP','UYU','PEN'];
    var SIGNS = { USD:'US$', EUR:'€', GBP:'£', CHF:'Fr', CAD:'C$', AUD:'A$',
                  NZD:'NZ$', ARS:'AR$', MXN:'MX$', CLP:'CLP$', UYU:'$U', PEN:'S/' };

    function fmt(n) { return 'R$ ' + Number(n).toFixed(3).replace('.', ','); }

    function renderTable(rows) {
      var tbody = document.querySelector('.rates-table tbody');
      if (!tbody) return;
      tbody.innerHTML = rows.map(function (r) {
        return '<tr><td><div class="rates-cur">' +
          '<span class="fl">' + r.flag + '</span>' +
          '<span class="cd">' + r.code + '</span>' +
          '<span class="nm">' + r.name + '</span></div></td>' +
          '<td class="num">' + fmt(r.buy) + '</td>' +
          '<td class="num venda">' + fmt(r.sell) + '</td></tr>';
      }).join('');
    }

    function apply(rows) {
      rows.forEach(function (r) {
        window.MW_RATES[r.code] = { buy: r.buy, sell: r.sell, name: r.name,
                                    sign: SIGNS[r.code] || r.code, flag: r.flag };
      });
      if (window.MW_RENDER) window.MW_RENDER();

      var heroUsd = document.getElementById('hero-usd');
      var heroEur = document.getElementById('hero-eur');
      if (heroUsd && window.MW_RATES.USD) heroUsd.textContent = 'R$ ' + window.MW_RATES.USD.sell.toFixed(2);
      if (heroEur && window.MW_RATES.EUR) heroEur.textContent = 'R$ ' + window.MW_RATES.EUR.sell.toFixed(2);

      renderTable(rows);

      var upd = document.querySelector('.rates-head .upd');
      if (upd) {
        var hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        upd.innerHTML = '<span class="dot"></span> Atualizado: ' + hoje;
      }
      var liveLabel = document.querySelector('.sim__live');
      if (liveLabel) liveLabel.innerHTML = '<span class="dot"></span> cotação do dia';
    }

    function fallback() {
      apply(ORDER.filter(function (c) { return window.MW_RATES[c]; }).map(function (c) {
        var r = window.MW_RATES[c];
        return { code: c, flag: r.flag || '', name: r.name, buy: r.buy, sell: r.sell };
      }));
    }

    function gvizUrl(gid) {
      return 'https://docs.google.com/spreadsheets/d/' + SHEET_ID +
             '/gviz/tq?tqx=out:json&gid=' + gid + '&t=' + Date.now();
    }

    function parseRows(txt) {
      var json = JSON.parse(txt.substring(txt.indexOf('{'), txt.lastIndexOf('}') + 1));
      var rows = [];
      (json.table.rows || []).forEach(function (row) {
        var c = row.c || [];
        var code = c[0] && c[0].v;
        var buy  = c[3] && c[3].v;
        var sell = c[4] && c[4].v;
        if (!code || buy == null || sell == null) return;
        rows.push({ code: String(code).trim(), flag: (c[1] && c[1].v) || '',
                    name: (c[2] && c[2].v) || String(code), buy: Number(buy), sell: Number(sell) });
      });
      return rows;
    }

    /* aba Débito: taxas de cartão de débito que a cliente preenche */
    function loadDebito() {
      fetch(gvizUrl(SHEET_GID_DEBITO))
        .then(function (r) { return r.text(); })
        .then(function (txt) {
          var d = {};
          parseRows(txt).forEach(function (r) {
            d[r.code] = { buy: r.buy, sell: r.sell, name: r.name, flag: r.flag };
          });
          if (Object.keys(d).length) {
            window.MW_RATES_DEBITO = d;
            if (window.MW_APPLY_TAB) window.MW_APPLY_TAB();
          }
        })
        .catch(function () {});
    }

    if (!SHEET_ID || SHEET_ID.indexOf('__') === 0) { fallback(); return; }

    fetch(gvizUrl(SHEET_GID))
      .then(function (r) { return r.text(); })
      .then(function (txt) {
        var rows = parseRows(txt);
        if (!rows.length) throw new Error('planilha vazia');
        apply(rows);
      })
      .catch(fallback);

    loadDebito();
  })();

  /* ========== GLOBO 3D — Canvas com projeção ortográfica ========== */
  (function () {
    var canvas = document.getElementById('globe-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var DPR = Math.min(window.devicePixelRatio || 1, 2);

    /* --- estado de rotação (apenas eixo Y — norte sempre fixo no topo) --- */
    var rotY = 0.4;
    var velY = 0.003;
    var tgtY = rotY;
    var drag = false, px = 0, py = 0;
    var userDragged = false;

    /* --- cidades [lat°, lng°, accent, nome] — coordenadas reais --- */
    var CITIES = [
      [-30.03, -51.23, true,  'Porto Alegre'],   // 0
      [ 40.71, -74.01, false, 'New York'],        // 1
      [ 51.51,  -0.13, false, 'Londres'],         // 2
      [-23.55, -46.63, false, 'São Paulo'],       // 3
      [ 48.85,   2.35, false, 'Paris'],           // 4
      [ 25.20,  55.27, false, 'Dubai'],           // 5
      [  1.35, 103.82, false, 'Singapore'],       // 6
      [ 35.68, 139.69, false, 'Tóquio'],          // 7
      [-33.87, 151.21, false, 'Sydney'],          // 8
      [ 34.05,-118.24, false, 'Los Angeles'],     // 9
      [-33.92,  18.42, false, 'Cidade do Cabo'],  // 10
    ].map(function (c) {
      return { lat: c[0] * Math.PI / 180, lng: c[1] * Math.PI / 180, accent: c[2], name: c[3] };
    });

    /* --- rotas [idx_a, idx_b] --- */
    var ROUTES = [[0,1],[0,2],[0,3],[9,1],[2,4],[2,5],[5,6],[6,7],[7,8],[0,10]];

    /* projeta um ponto esférico — rotação apenas em Y (norte sempre no topo) */
    function project(lat, lng) {
      var x0 = Math.cos(lat) * Math.sin(lng);
      var y0 = Math.sin(lat);
      var z0 = Math.cos(lat) * Math.cos(lng);
      var x1 = x0 * Math.cos(rotY) + z0 * Math.sin(rotY);
      var z1 = -x0 * Math.sin(rotY) + z0 * Math.cos(rotY);
      return { x: x1, y: -y0, z: z1 };
    }

    /* gera pontos de um grande círculo entre dois pontos da esfera */
    function greatArc(la1, lo1, la2, lo2, steps) {
      var pts = [];
      for (var i = 0; i <= steps; i++) {
        var t = i / steps;
        var lat = la1 + (la2 - la1) * t;
        var lng = lo1 + (lo2 - lo1) * t;
        pts.push(project(lat, lng));
      }
      return pts;
    }

    /* --- resize canvas --- */
    function resize() {
      var W = canvas.parentElement.offsetWidth;
      canvas.width  = W * DPR;
      canvas.height = W * DPR;
      canvas.style.width  = W + 'px';
      canvas.style.height = W + 'px';
    }
    resize();
    window.addEventListener('resize', resize);

    /* --- pulse das cidades (Porto Alegre) --- */
    var pulseT = 0;

    /* --- desenha um frame --- */
    function draw() {
      var W = canvas.width, H = canvas.height;
      var R = W * 0.42;
      var cx = W / 2, cy = H / 2;

      ctx.clearRect(0, 0, W, H);

      /* atmosfera exterior (anel azul suave) */
      var atmo = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.22);
      atmo.addColorStop(0, 'rgba(60,140,255,0.22)');
      atmo.addColorStop(0.5, 'rgba(30,80,200,0.08)');
      atmo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.22, 0, Math.PI * 2);
      ctx.fillStyle = atmo; ctx.fill();

      /* esfera — oceano profundo (satélite) */
      var grd = ctx.createRadialGradient(cx - R * 0.28, cy - R * 0.3, R * 0.05, cx + R * 0.1, cy + R * 0.1, R * 1.05);
      grd.addColorStop(0,    '#1a3a5c');
      grd.addColorStop(0.35, '#0d2640');
      grd.addColorStop(0.7,  '#071830');
      grd.addColorStop(1,    '#030d1e');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = grd; ctx.fill();

      /* borda esfera */
      ctx.strokeStyle = 'rgba(60,130,220,0.35)';
      ctx.lineWidth = 1.5 * DPR;
      ctx.stroke();

      /* --- grade de latitude/longitude --- */
      var STEPS = 96;

      /* latitudes */
      for (var lat = -60; lat <= 60; lat += 30) {
        var latR = lat * Math.PI / 180;
        ctx.beginPath();
        var started = false;
        for (var i = 0; i <= STEPS; i++) {
          var lngR = (i / STEPS) * Math.PI * 2 - Math.PI;
          var p = project(latR, lngR);
          if (p.z < 0) { started = false; continue; }
          var sx = cx + p.x * R, sy = cy + p.y * R;
          if (!started) { ctx.moveTo(sx, sy); started = true; }
          else ctx.lineTo(sx, sy);
        }
        ctx.strokeStyle = 'rgba(80,160,255,0.20)';
        ctx.lineWidth = DPR;
        ctx.stroke();
      }

      /* longitudes */
      for (var lng = 0; lng < 360; lng += 30) {
        var lngR2 = lng * Math.PI / 180;
        ctx.beginPath();
        var started2 = false;
        for (var j = 0; j <= STEPS / 2; j++) {
          var latR2 = (j / (STEPS / 2)) * Math.PI - Math.PI / 2;
          var p2 = project(latR2, lngR2);
          if (p2.z < 0) { started2 = false; continue; }
          var sx2 = cx + p2.x * R, sy2 = cy + p2.y * R;
          if (!started2) { ctx.moveTo(sx2, sy2); started2 = true; }
          else ctx.lineTo(sx2, sy2);
        }
        ctx.strokeStyle = 'rgba(80,160,255,0.14)';
        ctx.lineWidth = DPR;
        ctx.stroke();
      }

      /* --- arcos de rota --- */
      ROUTES.forEach(function (r, idx) {
        var a = CITIES[r[0]], b = CITIES[r[1]];
        var pts = greatArc(a.lat, a.lng, b.lat, b.lng, 48);
        var tOffset = (idx * 0.37 + pulseT * 0.6) % 1;

        ctx.beginPath();
        var arcStarted = false;
        pts.forEach(function (p) {
          if (p.z < 0) { arcStarted = false; return; }
          var sx = cx + p.x * R, sy = cy + p.y * R;
          if (!arcStarted) { ctx.moveTo(sx, sy); arcStarted = true; }
          else ctx.lineTo(sx, sy);
        });
        ctx.strokeStyle = 'rgba(80,220,180,0.45)';
        ctx.lineWidth = 1.4 * DPR;
        ctx.setLineDash([5 * DPR, 4 * DPR]);
        ctx.stroke();
        ctx.setLineDash([]);

        /* viajante */
        var ti = Math.floor(tOffset * (pts.length - 1));
        var tp = pts[ti];
        if (tp && tp.z > 0.05) {
          var tx = cx + tp.x * R, ty2 = cy + tp.y * R;
          ctx.beginPath(); ctx.arc(tx, ty2, 3.5 * DPR, 0, Math.PI * 2);
          ctx.fillStyle = '#e8a87c'; ctx.fill();
        }
      });

      /* --- pontos de cidade + nomes --- */
      ctx.save();
      ctx.font = 'bold ' + Math.round(10 * DPR) + 'px "DM Sans", sans-serif';
      CITIES.forEach(function (c) {
        var p = project(c.lat, c.lng);
        if (p.z < 0.05) return;
        var sx = cx + p.x * R, sy = cy + p.y * R;
        var visibility = Math.min(1, (p.z - 0.05) / 0.4); /* fade na borda */
        var size = (c.accent ? 5.5 : 4) * DPR * (0.65 + p.z * 0.35);

        /* pulse para Porto Alegre */
        if (c.accent) {
          var pulse = (Math.sin(pulseT * Math.PI * 2) * 0.5 + 0.5);
          ctx.beginPath();
          ctx.arc(sx, sy, size + pulse * 9 * DPR, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(232,168,124,' + (0.55 * visibility - pulse * 0.45 * visibility) + ')';
          ctx.lineWidth = 1.5 * DPR;
          ctx.stroke();
        }

        ctx.beginPath(); ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = c.accent
          ? 'rgba(232,168,124,' + visibility + ')'
          : 'rgba(80,220,180,' + visibility + ')';
        ctx.fill();

        /* nome da cidade */
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 4 * DPR;
        ctx.fillStyle = c.accent
          ? 'rgba(255,200,150,' + visibility + ')'
          : 'rgba(200,240,255,' + visibility + ')';
        ctx.fillText(c.name, sx + (size + 5 * DPR), sy + 4 * DPR);
        ctx.shadowBlur = 0;
      });
      ctx.restore();

      /* reflexo de luz — atmosfera lateral esquerda */
      var shine = ctx.createRadialGradient(cx - R * 0.6, cy - R * 0.5, 0, cx - R * 0.3, cy - R * 0.25, R * 0.55);
      shine.addColorStop(0, 'rgba(100,180,255,0.12)');
      shine.addColorStop(1, 'rgba(100,180,255,0)');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = shine; ctx.fill();
    }

    /* --- loop principal --- */
    var lastTime = 0;
    function loop(ts) {
      requestAnimationFrame(loop);
      var dt = Math.min((ts - lastTime) / 1000, 0.05);
      lastTime = ts;
      pulseT = (pulseT + dt * 0.5) % 1;

      if (!drag) {
        if (!userDragged) {
          rotY += velY;
        } else {
          velY *= 0.96;
          rotY += velY;
        }
        tgtY = rotY;
      } else {
        rotY += (tgtY - rotY) * 0.18;
      }

      draw();
    }
    requestAnimationFrame(loop);

    /* --- interações --- */

    /* scroll → velocidade proporcional */
    var lastScrollY = 0;
    window.addEventListener('scroll', function () {
      var delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      velY = delta * 0.003;
      userDragged = true;
    }, { passive: true });

    /* mouse drag */
    canvas.addEventListener('mousedown', function (e) {
      drag = true; userDragged = true;
      px = e.clientX;
      velY = 0;
      e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) {
      if (!drag) return;
      var dx = e.clientX - px;
      tgtY += dx * 0.008;
      velY = dx * 0.004;
      px = e.clientX;
    });
    window.addEventListener('mouseup', function () {
      drag = false;
    });

    /* touch */
    canvas.addEventListener('touchstart', function (e) {
      drag = true; userDragged = true;
      px = e.touches[0].clientX;
      velY = 0;
    }, { passive: true });
    canvas.addEventListener('touchmove', function (e) {
      if (!drag) return;
      var dx = e.touches[0].clientX - px;
      tgtY += dx * 0.008;
      velY = dx * 0.004;
      px = e.touches[0].clientX;
    }, { passive: true });
    canvas.addEventListener('touchend', function () { drag = false; });
  })();


  /* ========== CARROSSEL GOOGLE REVIEWS ========== */
  (function () {
    var slides = document.querySelectorAll('.gc__slide');
    var dots   = document.querySelectorAll('.gc__dot');
    if (!slides.length) return;
    var cur = 0, timer;

    function go(i) {
      slides[cur].classList.remove('active');
      dots[cur].classList.remove('active');
      cur = (i + slides.length) % slides.length;
      slides[cur].classList.add('active');
      dots[cur].classList.add('active');
    }

    function autoNext() { go(cur + 1); }
    timer = setInterval(autoNext, 5000);

    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        clearInterval(timer);
        go(Number(d.getAttribute('data-i')));
        timer = setInterval(autoNext, 5000);
      });
    });
  })();

  /* ========== NEWSLETTER — seleção de canal ========== */
  (function () {
    var chBtns = document.querySelectorAll('.nl-ch');
    var emailF = document.querySelector('.nl-field-email');
    var wppF   = document.querySelector('.nl-field-wpp');
    var emailI = document.getElementById('nl-email');
    var wppI   = document.getElementById('nl-wpp');
    var canal  = document.getElementById('nl-canal');
    if (!chBtns.length) return;

    function applyChannel(ch) {
      if (canal) canal.value = ch;
      var showEmail = ch === 'email' || ch === 'ambos';
      var showWpp   = ch === 'whatsapp' || ch === 'ambos';
      if (emailF) emailF.style.display = showEmail ? '' : 'none';
      if (wppF)   wppF.style.display   = showWpp   ? '' : 'none';
      if (emailI) emailI.required = showEmail;
      if (wppI)   wppI.required   = showWpp;
    }
    applyChannel('email');

    chBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        chBtns.forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        applyChannel(b.getAttribute('data-ch'));
      });
    });
  })();

  /* ========== Sincroniza cadastros com o Brevo (não bloqueia o envio pro formsubmit) ========== */
  (function () {
    var forms = document.querySelectorAll('.js-brevo-sync');
    forms.forEach(function (form) {
      form.addEventListener('submit', function () {
        var data = new FormData(form);
        var payload = {
          nome: data.get('nome'),
          email: data.get('email'),
          whatsapp: data.get('whatsapp'),
          canal: data.get('canal'),
          source: form.getAttribute('data-source'),
          _honey: data.get('_honey'),
        };
        fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(function () {});
      });
    });
  })();

})();

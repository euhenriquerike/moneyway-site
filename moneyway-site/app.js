/* =========================================================
   MONEY WAY CÂMBIO · app.js
   ========================================================= */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ========== RATES (global, atualizadas pela API) ========== */
  window.MW_RATES = {
    USD: { buy: 4.85,  sell: 5.50,  name: 'Dólar Americano',   sign: 'US$' },
    EUR: { buy: 5.75,  sell: 6.42,  name: 'Euro',               sign: '€'   },
    GBP: { buy: 6.30,  sell: 7.55,  name: 'Libra Esterlina',    sign: '£'   },
    CHF: { buy: 5.20,  sell: 7.00,  name: 'Franco Suíço',       sign: 'Fr'  },
    CAD: { buy: 3.20,  sell: 4.05,  name: 'Dólar Canadense',    sign: 'C$'  },
    AUD: { buy: 3.15,  sell: 3.90,  name: 'Dólar Australiano',  sign: 'A$'  },
    ARS: { buy: 0.004, sell: 0.006, name: 'Peso Argentino',     sign: 'AR$' },
    UYU: { buy: 0.100, sell: 0.145, name: 'Peso Uruguaio',      sign: '$U'  },
  };

  /* ========== NAV ========== */
  var nav = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 20);
  }, { passive: true });

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

    function getRates(cur) {
      var base = window.MW_RATES[cur];
      if (st.tab === 'debito') {
        /* recalcula com spread de débito sobre o mid */
        var mid = (base.buy + base.sell) / (2 - SPREAD_ESPECIE * 0);
        /* aproximação: inverte spread original para achar mid */
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
      document.querySelectorAll('#sim-cur .especie-only').forEach(function (b) {
        b.style.display = isDebito ? 'none' : '';
      });
      /* se moeda atual não disponível no débito, volta para USD */
      if (isDebito && DEBITO_CURS.indexOf(st.cur) === -1) {
        st.cur = 'USD';
        document.querySelectorAll('#sim-cur button').forEach(function (b) {
          b.classList.toggle('active', b.getAttribute('data-cur') === 'USD');
        });
      }
      render();
    }

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

  /* ========== LIVE RATES (API pública gratuita) ========== */
  (function () {
    var SPREAD = 0.038;

    function applyRates(mid) {
      ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'AUD', 'ARS', 'UYU'].forEach(function (cur) {
        if (!mid[cur]) return;
        window.MW_RATES[cur].buy  = parseFloat((mid[cur] * (1 - SPREAD)).toFixed(4));
        window.MW_RATES[cur].sell = parseFloat((mid[cur] * (1 + SPREAD)).toFixed(4));
      });
      if (window.MW_RENDER) window.MW_RENDER();

      /* hero float cards */
      var heroUsd = document.getElementById('hero-usd');
      var heroEur = document.getElementById('hero-eur');
      if (heroUsd && mid.USD) heroUsd.textContent = 'R$ ' + window.MW_RATES.USD.sell.toFixed(2);
      if (heroEur && mid.EUR) heroEur.textContent = 'R$ ' + window.MW_RATES.EUR.sell.toFixed(2);

      /* tabela de cotações */
      var tbody = document.querySelector('.rates-table tbody');
      if (tbody) {
        tbody.querySelectorAll('tr').forEach(function (row) {
          var cd = row.querySelector('.cd');
          if (!cd) return;
          var cur = cd.textContent.trim();
          var r = window.MW_RATES[cur];
          if (!r) return;
          var cells = row.querySelectorAll('.num');
          if (cells[0]) cells[0].textContent = 'R$ ' + r.buy.toFixed(3);
          if (cells[1]) cells[1].textContent = 'R$ ' + r.sell.toFixed(3);
        });
      }

      /* timestamp */
      var upd = document.querySelector('.rates-head .upd');
      if (upd) {
        var now = new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        upd.innerHTML = '<span class="dot"></span> Atualizado: ' + now;
      }

      /* sim__live label */
      var liveLabel = document.querySelector('.sim__live');
      if (liveLabel) liveLabel.innerHTML = '<span class="dot"></span> cotação ao vivo';
    }

    fetch('https://open.er-api.com/v6/latest/BRL')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.result !== 'success') throw new Error();
        var mid = {};
        ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'AUD', 'ARS', 'UYU'].forEach(function (cur) {
          if (data.rates[cur]) mid[cur] = 1 / data.rates[cur];
        });
        applyRates(mid);
      })
      .catch(function () { /* mantém os valores fallback */ });
  })();

  /* ========== GLOBO 3D — Canvas com projeção ortográfica ========== */
  (function () {
    var canvas = document.getElementById('globe-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var DPR = Math.min(window.devicePixelRatio || 1, 2);

    /* --- estado de rotação --- */
    var rotY = 0.4;   /* ângulo atual Y (rad) */
    var rotX = 0.18;  /* ângulo atual X (rad) — leve tilt inicial */
    var velY = 0.003; /* velocidade de auto-spin */
    var velX = 0;
    var tgtY = rotY, tgtX = rotX;
    var drag = false, px = 0, py = 0;
    var userDragged = false;

    /* --- cidades [lat°, lng°, accent] --- */
    var CITIES = [
      [-30.0, -51.2, true,  'Porto Alegre'],
      [ 40.7, -74.0, false, 'New York'],
      [ 51.5,  -0.1, false, 'Londres'],
      [-23.5, -46.6, false, 'São Paulo'],
      [ 48.8,   2.3, false, 'Paris'],
      [ 25.2,  55.3, false, 'Dubai'],
      [  1.4, 103.8, false, 'Singapore'],
      [ 35.7, 139.7, false, 'Tóquio'],
    ].map(function (c) {
      return { lat: c[0] * Math.PI / 180, lng: c[1] * Math.PI / 180, accent: c[2], name: c[3] };
    });

    /* --- rotas entre cidades [idx_a, idx_b] --- */
    var ROUTES = [[0,1],[0,2],[0,3],[1,2],[2,4],[2,5],[5,6],[6,7]];

    /* projeta um ponto esférico com rotX/rotY atuais
       retorna {x,y} em coordenadas normalizadas [-1,1] e z de profundidade */
    function project(lat, lng) {
      /* ponto na esfera unitária */
      var x0 =  Math.cos(lat) * Math.sin(lng);
      var y0 =  Math.sin(lat);
      var z0 =  Math.cos(lat) * Math.cos(lng);
      /* rotação Y */
      var x1 = x0 * Math.cos(rotY) + z0 * Math.sin(rotY);
      var z1 = -x0 * Math.sin(rotY) + z0 * Math.cos(rotY);
      /* rotação X */
      var y2 = y0 * Math.cos(rotX) - z1 * Math.sin(rotX);
      var z2 = y0 * Math.sin(rotX) + z1 * Math.cos(rotX);
      return { x: x1, y: -y2, z: z2 };
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
          /* auto-spin suave quando o usuário não interagiu */
          rotY += velY;
        } else {
          /* desacelera gradualmente após soltar */
          velY *= 0.96;
          rotY += velY;
          velX *= 0.96;
          rotX += velX;
          rotX = Math.max(-0.7, Math.min(0.7, rotX));
        }
        /* scroll drive */
        tgtY = rotY;
        tgtX = rotX;
      } else {
        rotY += (tgtY - rotY) * 0.18;
        rotX += (tgtX - rotX) * 0.18;
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
      px = e.clientX; py = e.clientY;
      velY = 0; velX = 0;
      e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) {
      if (!drag) return;
      var dx = e.clientX - px, dy = e.clientY - py;
      tgtY += dx * 0.008;
      tgtX -= dy * 0.006;
      tgtX = Math.max(-0.7, Math.min(0.7, tgtX));
      velY = dx * 0.004;
      velX = -dy * 0.003;
      px = e.clientX; py = e.clientY;
    });
    window.addEventListener('mouseup', function () {
      drag = false;
    });

    /* touch */
    canvas.addEventListener('touchstart', function (e) {
      drag = true; userDragged = true;
      px = e.touches[0].clientX; py = e.touches[0].clientY;
      velY = 0; velX = 0;
    }, { passive: true });
    canvas.addEventListener('touchmove', function (e) {
      if (!drag) return;
      var dx = e.touches[0].clientX - px, dy = e.touches[0].clientY - py;
      tgtY += dx * 0.008;
      tgtX -= dy * 0.006;
      tgtX = Math.max(-0.7, Math.min(0.7, tgtX));
      velY = dx * 0.004; velX = -dy * 0.003;
      px = e.touches[0].clientX; py = e.touches[0].clientY;
    }, { passive: true });
    canvas.addEventListener('touchend', function () { drag = false; });
  })();

  /* ========== MULTILÍNGUE ========== */
  (function () {
    var T = {
      pt: {
        nav_pj:  'Empresas PJ',
        nav_cta: 'Falar agora',
        hero_h1: 'Câmbio inteligente para quem se <span class="grad-text">movimenta pelo mundo</span>',
        hero_sub: 'Compra e venda de moedas, remessas internacionais, conta global, seguro viagem e soluções completas para suas viagens e negócios.',
        hero_cta1: 'Falar com especialista',
        hero_cta2: 'Ver cotação',
      },
      en: {
        nav_pj:  'Business / PJ',
        nav_cta: 'Talk now',
        hero_h1: 'Smart currency exchange for those who <span class="grad-text">move around the world</span>',
        hero_sub: 'Buy and sell currencies, international wire transfers, global accounts, travel insurance and complete solutions for travel and business.',
        hero_cta1: 'Talk to a specialist',
        hero_cta2: 'See rates',
      },
      es: {
        nav_pj:  'Empresas PJ',
        nav_cta: 'Hablar ahora',
        hero_h1: 'Cambio inteligente para quienes <span class="grad-text">se mueven por el mundo</span>',
        hero_sub: 'Compra y venta de divisas, remesas internacionales, cuenta global, seguro de viaje y soluciones completas para viajes y negocios.',
        hero_cta1: 'Hablar con especialista',
        hero_cta2: 'Ver cotizaciones',
      },
    };

    var KEYS = {
      'nav_pj':    '[data-i18n="nav_pj"]',
      'nav_cta':   '[data-i18n="nav_cta"]',
      'hero_h1':   '.hero h1',
      'hero_sub':  '.hero__lede',
      'hero_cta1': '.hero__cta .btn--grad',
      'hero_cta2': '.hero__cta .btn--ghost',
    };

    function setLang(lang) {
      var dict = T[lang] || T.pt;
      Object.keys(KEYS).forEach(function (k) {
        var el = document.querySelector(KEYS[k]);
        if (!el || !dict[k]) return;
        if (k === 'hero_h1') { el.innerHTML = dict[k]; return; }
        /* preserve child .ic spans for buttons */
        var ic = el.querySelector('.ic');
        el.childNodes.forEach(function (n) { if (n.nodeType === 3) n.textContent = dict[k]; });
        if (!ic) el.textContent = dict[k];
        else { el.textContent = dict[k]; el.appendChild(ic); }
      });
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
      localStorage.setItem('mw-lang', lang);
    }

    document.querySelectorAll('.lang-sw button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        document.querySelectorAll('.lang-sw button').forEach(function (b) { b.classList.toggle('active', b === btn); });
        setLang(lang);
      });
    });

    /* restaura preferência salva */
    var saved = localStorage.getItem('mw-lang');
    if (saved && saved !== 'pt') {
      var btn = document.querySelector('.lang-sw button[data-lang="' + saved + '"]');
      if (btn) { btn.click(); }
    }
  })();

})();

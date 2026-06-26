/* =========================================================
   MONEY WAY CÂMBIO · app.js
   ========================================================= */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ========== RATES (global, atualizadas pela API) ========== */
  window.MW_RATES = {
    USD: { buy: 4.85, sell: 5.50, name: 'Dólar Americano',   sign: 'US$' },
    EUR: { buy: 5.75, sell: 6.42, name: 'Euro',               sign: '€'   },
    GBP: { buy: 6.30, sell: 7.55, name: 'Libra Esterlina',    sign: '£'   },
    CHF: { buy: 5.20, sell: 7.00, name: 'Franco Suíço',       sign: 'Fr'  },
    CAD: { buy: 3.20, sell: 4.05, name: 'Dólar Canadense',    sign: 'C$'  },
    AUD: { buy: 3.15, sell: 3.90, name: 'Dólar Australiano',  sign: 'A$'  },
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
    var st = { cur: 'USD', mode: 'buy', amount: 1000 };
    var amt = document.getElementById('sim-amt');
    if (!amt) return;
    var sign     = document.getElementById('sim-sign');
    var amtLabel = document.getElementById('sim-amt-label');
    var rateLabel = document.getElementById('sim-rate-label');
    var rateEl   = document.getElementById('sim-rate');
    var totalLabel = document.getElementById('sim-total-label');
    var totalEl  = document.getElementById('sim-total');
    var cta      = document.getElementById('sim-cta');

    function brl(v) { return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
    function grp(n) { return n.toLocaleString('pt-BR'); }

    function render() {
      var r = window.MW_RATES[st.cur];
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
        var verb = buying ? 'comprar' : 'vender';
        var msg = 'Quero ' + verb + ' ' + r.sign + ' ' + grp(st.amount || 0) + ' em ' + r.name + '. Total estimado ' + brl(total) + '.';
        cta.href = 'https://wa.me/5551999649824?text=' + encodeURIComponent(msg);
      }
    }
    window.MW_RENDER = render;

    amt.addEventListener('input', function () {
      var digits = amt.value.replace(/\D/g, '');
      st.amount = parseInt(digits || '0', 10);
      amt.value = st.amount ? grp(st.amount) : '';
      render();
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
      ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'AUD'].forEach(function (cur) {
        if (!mid[cur]) return;
        window.MW_RATES[cur].buy  = parseFloat((mid[cur] * (1 - SPREAD)).toFixed(3));
        window.MW_RATES[cur].sell = parseFloat((mid[cur] * (1 + SPREAD)).toFixed(3));
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
        ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'AUD'].forEach(function (cur) {
          if (data.rates[cur]) mid[cur] = 1 / data.rates[cur];
        });
        applyRates(mid);
      })
      .catch(function () { /* mantém os valores fallback */ });
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

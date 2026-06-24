/* =========================================================
   MONEY WAY CÂMBIO · Site — interações
   ========================================================= */
(function () {
  'use strict';

  /* enable JS-gated hidden state (content is visible by default if JS fails) */
  document.documentElement.classList.add('js');

  /* nav stuck + globo cresce conforme o scroll */
  var nav = document.querySelector('.nav');
  var globe = document.querySelector('.scene__globe');
  var gTick = false;
  function onScroll() {
    if (nav) nav.classList.toggle('is-stuck', (window.scrollY || 0) > 20);
    if (globe && !gTick) {
      gTick = true;
      requestAnimationFrame(function () {
        var p = Math.min(1, (window.scrollY || 0) / (window.innerHeight * 0.9));
        globe.style.setProperty('--g-scale', (1 + p * 0.5).toFixed(3));
        gTick = false;
      });
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* reveal + counters */
  var revs = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    revs.forEach(function (el) { io.observe(el); });

    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) animateCount(e.target);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-count]').forEach(function (el) { co.observe(el); });
  } else {
    revealAll();
  }

  /* fail-safe: if IO never fires (hidden tab, print/PDF, capture contexts),
     force everything visible so content is never blank */
  function revealAll() {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('[data-count]').forEach(function (el) { animateCount(el); });
  }
  function failSafe() {
    if (document.querySelectorAll('.reveal.in').length < document.querySelectorAll('.reveal').length) {
      revealAll();
    }
  }
  window.addEventListener('load', function () { setTimeout(failSafe, 1400); });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') setTimeout(failSafe, 200);
  });
  if (document.visibilityState === 'hidden') setTimeout(failSafe, 1400);

  function formatNum(n) { return Math.round(n).toLocaleString('pt-BR'); }
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suf = el.getAttribute('data-suf') || '';
    /* write the real value up front so it's correct even if rAF can't run
       (hidden tab / print / capture); animate over it only when visible */
    el.textContent = formatNum(target) + suf;
    if (document.hidden) return;
    if (el._raf) cancelAnimationFrame(el._raf);
    el.textContent = formatNum(0) + suf;
    var dur = 1600, start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatNum(target * eased) + suf;
      if (p < 1) el._raf = requestAnimationFrame(frame);
      else el.textContent = formatNum(target) + suf;
    }
    el._raf = requestAnimationFrame(frame);
  }
  /* ---------- SIMULADOR DE CÂMBIO ---------- */
  (function () {
    var rates = {
      USD: { buy: 4.85, sell: 5.50, name: 'Dólar Americano', sign: 'US$' },
      EUR: { buy: 5.75, sell: 6.42, name: 'Euro', sign: '€' },
      GBP: { buy: 6.30, sell: 7.55, name: 'Libra Esterlina', sign: '£' },
      CHF: { buy: 5.20, sell: 7.00, name: 'Franco Suíço', sign: 'Fr' },
      CAD: { buy: 3.20, sell: 4.05, name: 'Dólar Canadense', sign: 'C$' },
      AUD: { buy: 3.15, sell: 3.90, name: 'Dólar Australiano', sign: 'A$' }
    };
    var st = { cur: 'USD', mode: 'buy', amount: 1000 };
    var amt = document.getElementById('sim-amt');
    if (!amt) return;
    var sign = document.getElementById('sim-sign');
    var amtLabel = document.getElementById('sim-amt-label');
    var rateLabel = document.getElementById('sim-rate-label');
    var rateEl = document.getElementById('sim-rate');
    var totalLabel = document.getElementById('sim-total-label');
    var totalEl = document.getElementById('sim-total');
    var cta = document.getElementById('sim-cta');

    function brl(v) { return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
    function grp(n) { return n.toLocaleString('pt-BR'); }

    function render() {
      var r = rates[st.cur];
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

    amt.addEventListener('input', function () {
      var digits = amt.value.replace(/\D/g, '');
      st.amount = parseInt(digits || '0', 10);
      var pos = amt.selectionStart;
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
})();

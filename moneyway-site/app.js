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

  /* ========== GLOBE THREE.JS ========== */
  (function () {
    function init() {
      var canvas = document.getElementById('globe-canvas');
      if (!canvas || !window.THREE) return;

      var parent = canvas.parentElement;
      var W = parent.offsetWidth;
      var isMobile = W < 500;

      var scene    = new THREE.Scene();
      var camera   = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.z = 3.4;

      var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: !isMobile, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, W);
      renderer.setClearColor(0x000000, 0);

      var grp = new THREE.Group();
      scene.add(grp);

      /* lat/lng → Vector3 */
      function ll(lat, lng, r) {
        var phi = (90 - lat) * Math.PI / 180;
        var th  = (lng + 180) * Math.PI / 180;
        return new THREE.Vector3(
          -r * Math.sin(phi) * Math.cos(th),
           r * Math.cos(phi),
           r * Math.sin(phi) * Math.sin(th)
        );
      }

      /* --- base sphere --- */
      var seg = isMobile ? 32 : 64;
      grp.add(new THREE.Mesh(
        new THREE.SphereGeometry(1, seg, seg),
        new THREE.MeshPhongMaterial({
          color:             0x040e18,
          emissive:          0x0B3830,
          emissiveIntensity: 0.7,
          shininess:         90,
          specular:          new THREE.Color(0x0B6E5C),
        })
      ));

      /* --- atmosphere glow --- */
      grp.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.15, 32, 32),
        new THREE.MeshPhongMaterial({
          color: 0x0B6E5C, side: THREE.BackSide,
          transparent: true, opacity: 0.14,
        })
      ));

      /* --- grid lines --- */
      var gMat = new THREE.LineBasicMaterial({ color: 0x12907A, transparent: true, opacity: 0.22 });
      var step = isMobile ? 45 : 30;
      for (var lat = -60; lat <= 60; lat += step) {
        var pts = []; for (var i = 0; i <= 72; i++) pts.push(ll(lat, i * 5, 1.003));
        grp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gMat));
      }
      for (var lng = 0; lng < 360; lng += step) {
        var pts2 = []; for (var j = -90; j <= 90; j += 5) pts2.push(ll(j, lng, 1.003));
        grp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts2), gMat));
      }

      /* --- cidades financeiras [lat, lng, accent] --- */
      var cities = [
        [40.7,  -74.0, 0],  // New York
        [51.5,  -0.12, 0],  // London
        [35.7,  139.7, 0],  // Tokyo
        [-23.5, -46.6, 0],  // São Paulo
        [1.35,  103.8, 0],  // Singapore
        [25.2,   55.3, 0],  // Dubai
        [-30.0, -51.2, 1],  // Porto Alegre ← acento
        [48.8,    2.3, 0],  // Paris
        [19.4,  -99.1, 0],  // Mexico City
      ];
      var dGeo = new THREE.SphereGeometry(isMobile ? 0.018 : 0.022, 8, 8);
      var rGeo = new THREE.RingGeometry(0.028, 0.044, 16);
      cities.forEach(function (c) {
        var col = c[2] ? 0xB65A38 : 0x12907A;
        var dot = new THREE.Mesh(dGeo, new THREE.MeshBasicMaterial({ color: col }));
        dot.position.copy(ll(c[0], c[1], 1.022));
        grp.add(dot);
        if (!isMobile) {
          var ring = new THREE.Mesh(rGeo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.5, side: THREE.DoubleSide }));
          ring.position.copy(ll(c[0], c[1], 1.024));
          ring.lookAt(new THREE.Vector3(0, 0, 0));
          ring.rotateX(Math.PI / 2);
          grp.add(ring);
        }
      });

      /* --- arcos entre cidades --- */
      var arcPairs = [
        [6, 0], [6, 1], [6, 3],  // Porto Alegre → NY, London, SP
        [0, 1], [1, 7],            // NY ↔ London, London ↔ Paris
        [4, 2], [5, 1],            // Singapore → Tokyo, Dubai → London
        [0, 3],                    // NY → SP
      ];
      var arcMat = new THREE.LineBasicMaterial({ color: 0x12907A, transparent: true, opacity: 0.45 });
      var arcCurves = arcPairs.map(function (p) {
        var v0  = ll(cities[p[0]][0], cities[p[0]][1], 1.0);
        var v1  = ll(cities[p[1]][0], cities[p[1]][1], 1.0);
        var mid = v0.clone().add(v1).normalize().multiplyScalar(1.55);
        var curve = new THREE.QuadraticBezierCurve3(v0, mid, v1);
        var geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(60));
        grp.add(new THREE.Line(geo, arcMat.clone()));
        return curve;
      });

      /* --- viajantes nos arcos --- */
      var tGeo = new THREE.SphereGeometry(isMobile ? 0.02 : 0.025, 8, 8);
      var travelers = arcCurves.map(function (curve, i) {
        var mesh = new THREE.Mesh(tGeo, new THREE.MeshBasicMaterial({ color: 0xB65A38 }));
        grp.add(mesh);
        return { mesh: mesh, curve: curve, t: i / arcCurves.length, speed: 0.0022 + Math.random() * 0.002 };
      });

      /* --- luzes --- */
      scene.add(new THREE.AmbientLight(0x1B3346, 2.2));
      var dl = new THREE.DirectionalLight(0x12907A, 1.6);
      dl.position.set(3, 4, 3);
      scene.add(dl);
      var rl = new THREE.DirectionalLight(0xB65A38, 0.6);
      rl.position.set(-3, -2, -2);
      scene.add(rl);

      /* --- mouse parallax --- */
      var mx = 0, my = 0, tx = 0, ty = 0;
      document.addEventListener('mousemove', function (e) {
        mx = (e.clientX / window.innerWidth  - 0.5);
        my = (e.clientY / window.innerHeight - 0.5);
      });

      /* --- animation loop --- */
      var clock = new THREE.Clock();
      (function loop() {
        requestAnimationFrame(loop);
        var t = clock.getElapsedTime();
        tx += (mx * 0.45 - tx) * 0.04;
        ty += (-my * 0.2 - ty) * 0.04;
        grp.rotation.y = t * 0.09 + tx;
        grp.rotation.x = ty;
        travelers.forEach(function (tv) {
          tv.t = (tv.t + tv.speed) % 1;
          tv.mesh.position.copy(tv.curve.getPoint(tv.t));
        });
        renderer.render(scene, camera);
      })();

      /* --- resize --- */
      window.addEventListener('resize', function () {
        var w = parent.offsetWidth;
        renderer.setSize(w, w);
      });
    }

    /* aguarda Three.js carregar (defer) */
    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init);
    }
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

// Money Way Câmbio — rastreamento de conversão (Google Ads)
// Reinstalado em 16/09/2026 após perda das tags na migração pro Vercel.
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "AW-17037077137");

  // Conversão "Visualização de página": disparada na página de Contato.
  // Ajustar aqui se o cliente preferir outra página como sinal de intenção.
  if (location.pathname.indexOf("/subpaginas/contato") !== -1) {
    gtag("event", "conversion", {
      send_to: "AW-17037077137/fppfCKvLtcAaEJHV9Ls_",
      value: 1.0,
      currency: "BRL",
    });
  }

  // Conversão "Whatsapp": qualquer clique em link wa.me, no site inteiro.
  document.addEventListener(
    "click",
    function (e) {
      var link = e.target.closest && e.target.closest('a[href*="wa.me"]');
      if (link) {
        gtag("event", "conversion", {
          send_to: "AW-17037077137/zGk_CIKM5ZQbEJHV9Ls_",
        });
      }
    },
    true
  );
})();

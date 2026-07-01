(function () {
  'use strict';

  var T = {

    /* ===== NAV (shared) ===== */
    nav_cotacoes: { pt: 'Cotações', en: 'Rates', es: 'Cotizaciones' },
    nav_services: { pt: 'Serviços', en: 'Services', es: 'Servicios' },
    nav_about:    { pt: 'Sobre', en: 'About', es: 'Sobre nosotros' },
    nav_how:      { pt: 'Como funciona', en: 'How it works', es: 'Cómo funciona' },
    nav_blog:     { pt: 'Blog', en: 'Blog', es: 'Blog' },
    nav_pj:       { pt: 'Câmbio para sua empresa', en: 'Business Exchange', es: 'Cambio para su empresa' },
    nav_cta:      { pt: 'Falar agora', en: 'Talk now', es: 'Hablar ahora' },

    /* nav dropdown */
    dd_buy_sell:  { pt: 'Compra e venda de moedas', en: 'Buy & sell currency', es: 'Compra y venta de divisas' },
    dd_transfers: { pt: 'Transferência de valores nacionais', en: 'National transfers', es: 'Transferencias nacionales' },
    dd_old_notes: { pt: 'Cédulas Estrangeiras Antigas', en: 'Vintage Foreign Banknotes', es: 'Billetes Extranjeros Antiguos' },
    dd_travel:    { pt: 'Passagem Aérea e Seguro de Viagem', en: 'Flights & Travel Insurance', es: 'Vuelos y Seguro de Viaje' },
    dd_moneygram: { pt: 'MoneyGram', en: 'MoneyGram', es: 'MoneyGram' },
    dd_impexp:    { pt: 'Importação e Exportação', en: 'Import & Export', es: 'Importación y Exportación' },

    /* footer shared */
    ft_copy: {
      pt: '© 2026 Money Way Câmbio. Todos os direitos reservados.',
      en: '© 2026 Money Way Câmbio. All rights reserved.',
      es: '© 2026 Money Way Câmbio. Todos los derechos reservados.'
    },
    ft_back: { pt: 'Voltar ao início →', en: 'Back to top →', es: 'Volver al inicio →' },

    /* ===== PAGE TITLES ===== */
    index_title:       { pt: 'Money Way Câmbio - Câmbio inteligente em Porto Alegre', en: 'Money Way Câmbio - Smart Currency Exchange in Porto Alegre', es: 'Money Way Câmbio - Cambio inteligente en Porto Alegre' },
    cotacoes_title:    { pt: 'Cotações - Money Way Câmbio', en: 'Rates - Money Way Câmbio', es: 'Cotizaciones - Money Way Câmbio' },
    seguro_title:      { pt: 'Seguro Viagem - Money Way Câmbio', en: 'Travel Insurance - Money Way Câmbio', es: 'Seguro de Viaje - Money Way Câmbio' },
    passagens_title:   { pt: 'Passagens Aéreas - Money Way Câmbio', en: 'Flights - Money Way Câmbio', es: 'Pasajes Aéreos - Money Way Câmbio' },
    remessas_title:    { pt: 'Transferências Internacionais - Money Way Câmbio', en: 'International Transfers - Money Way Câmbio', es: 'Transferencias Internacionales - Money Way Câmbio' },
    transferencias_title: { pt: 'Transferências Internacionais - Money Way Câmbio', en: 'International Transfers - Money Way Câmbio', es: 'Transferencias Internacionales - Money Way Câmbio' },
    cedulas_title:     { pt: 'Cédulas Estrangeiras Antigas - Money Way Câmbio', en: 'Vintage Foreign Banknotes - Money Way Câmbio', es: 'Billetes Extranjeros Antiguos - Money Way Câmbio' },
    moneygram_title:   { pt: 'MoneyGram · Money Way Câmbio', en: 'MoneyGram · Money Way Câmbio', es: 'MoneyGram · Money Way Câmbio' },
    viagem_title:      { pt: 'Passagem Aérea e Seguro de Viagem · Money Way Câmbio', en: 'Flights & Travel Insurance · Money Way Câmbio', es: 'Vuelos y Seguro de Viaje · Money Way Câmbio' },
    pj_title:          { pt: 'Câmbio Empresarial PJ - Money Way Câmbio', en: 'Business FX - Money Way Câmbio', es: 'Cambio Empresarial PJ - Money Way Câmbio' },
    conta_title:       { pt: 'Conta Global - Money Way Câmbio', en: 'Global Account - Money Way Câmbio', es: 'Cuenta Global - Money Way Câmbio' },
    visa_title:        { pt: 'Cartão de Débito Internacional - Money Way Câmbio', en: 'International Debit Card - Money Way Câmbio', es: 'Tarjeta de Débito Internacional - Money Way Câmbio' },

    /* ===== BREADCRUMBS ===== */
    crumb_home:      { pt: 'Início', en: 'Home', es: 'Inicio' },
    crumb_services:  { pt: 'Serviços', en: 'Services', es: 'Servicios' },
    crumb_cotacoes:  { pt: 'Cotações', en: 'Rates', es: 'Cotizaciones' },
    crumb_seguro:    { pt: 'Seguro Viagem', en: 'Travel Insurance', es: 'Seguro de Viaje' },
    crumb_passagens: { pt: 'Passagens Aéreas', en: 'Flights', es: 'Pasajes Aéreos' },
    crumb_remessas:  { pt: 'Transferências Internacionais', en: 'International Transfers', es: 'Transferencias Internacionales' },
    crumb_transf:    { pt: 'Transferências Internacionais', en: 'International Transfers', es: 'Transferencias Internacionales' },
    crumb_cedulas:   { pt: 'Cédulas Estrangeiras Antigas', en: 'Vintage Foreign Banknotes', es: 'Billetes Extranjeros Antiguos' },
    crumb_moneygram: { pt: 'MoneyGram', en: 'MoneyGram', es: 'MoneyGram' },
    crumb_viagem:    { pt: 'Passagem Aérea e Seguro de Viagem', en: 'Flights & Travel Insurance', es: 'Vuelos y Seguro de Viaje' },
    crumb_conta:     { pt: 'Conta Global', en: 'Global Account', es: 'Cuenta Global' },
    crumb_visa:      { pt: 'Cartão de Débito Internacional', en: 'International Debit Card', es: 'Tarjeta de Débito Internacional' },

    /* ===== INDEX.HTML ===== */
    hero_pill:   { pt: 'Cotação em tempo real • Porto Alegre / RS', en: 'Live rates • Porto Alegre / RS', es: 'Cotización en tiempo real • Porto Alegre / RS' },
    hero_h1: {
      pt: 'Câmbio inteligente para quem se <span class="grad-text">movimenta pelo mundo</span>',
      en: 'Smart currency exchange for those who <span class="grad-text">move around the world</span>',
      es: 'Cambio inteligente para quienes <span class="grad-text">se mueven por el mundo</span>'
    },
    hero_sub: {
      pt: 'Compra e venda de moedas, transferências internacionais, conta global, seguro viagem e soluções completas para suas viagens e negócios.',
      en: 'Buy and sell currencies, international transfers, global account, travel insurance and complete solutions for travel and business.',
      es: 'Compra y venta de divisas, transferencias internacionales, cuenta global, seguro de viaje y soluciones completas para viajes y negocios.'
    },
    hero_cta1: { pt: 'Falar com especialista', en: 'Talk to a specialist', es: 'Hablar con especialista' },
    hero_cta2: { pt: 'Ver cotação', en: 'See rates', es: 'Ver cotizaciones' },

    /* float cards */
    fc_usd_today:  { pt: 'Dólar hoje', en: 'USD today', es: 'Dólar hoy' },
    fc_eur_today:  { pt: 'Euro hoje', en: 'EUR today', es: 'Euro hoy' },
    fc_transfer:   { pt: 'Transferência', en: 'Transfer', es: 'Transferencia' },
    fc_transfer_v: { pt: 'Atendimento ágil', en: 'Fast service', es: 'Atención ágil' },
    fc_poa:        { pt: 'Porto Alegre', en: 'Porto Alegre', es: 'Porto Alegre' },
    fc_poa_v:      { pt: '+30 países', en: '+30 countries', es: '+30 países' },

    /* simulator section */
    sim_pill:  { pt: 'Cotação atualizada agora', en: 'Rates updated now', es: 'Cotización actualizada ahora' },
    sim_h2:    { pt: 'Simule seu <span class="grad-text">câmbio agora</span>', en: 'Simulate your <span class="grad-text">exchange now</span>', es: 'Simule su <span class="grad-text">cambio ahora</span>' },
    sim_sub:   { pt: 'Trabalhamos com mais de 10 tipos de moedas estrangeiras. Valores com IOF incluso.', en: 'We work with over 10 types of foreign currency. Rates include IOF tax.', es: 'Trabajamos con más de 10 tipos de divisas extranjeras. Valores con IOF incluido.' },
    sim_title: { pt: 'Simulador de câmbio', en: 'Currency simulator', es: 'Simulador de cambio' },
    sim_type_note: { pt: 'para moeda em espécie', en: 'for cash currency', es: 'para moneda en efectivo' },
    sim_tab_cash:  { pt: '💵 Espécie', en: '💵 Cash', es: '💵 Efectivo' },
    sim_tab_card:  { pt: '💳 Cartão de Débito', en: '💳 Debit Card', es: '💳 Tarjeta de Débito' },
    sim_iof:       { pt: 'IOF já incluso na cotação', en: 'IOF tax included in rate', es: 'IOF ya incluido en la cotización' },
    sim_lbl_currency: { pt: 'Moeda', en: 'Currency', es: 'Divisa' },
    sim_lbl_op:    { pt: 'Operação', en: 'Operation', es: 'Operación' },
    sim_buy:       { pt: 'Comprar', en: 'Buy', es: 'Comprar' },
    sim_sell:      { pt: 'Vender', en: 'Sell', es: 'Vender' },
    sim_lock:      { pt: 'Travar essa taxa no WhatsApp', en: 'Lock this rate on WhatsApp', es: 'Fijar esta tasa en WhatsApp' },
    sim_note:      { pt: 'Valores ilustrativos. A cotação oficial é confirmada no atendimento.', en: 'Illustrative values. Official rate confirmed at closing.', es: 'Valores ilustrativos. La cotización oficial se confirma en la atención.' },

    rates_cta_strong: { pt: 'Veja as cotações completas de todas as moedas', en: 'See full rates for all currencies', es: 'Vea las cotizaciones completas de todas las divisas' },
    rates_cta_span:   { pt: 'Dólar, euro, libra, peso argentino, peso uruguaio e mais. Atualizadas diariamente.', en: 'Dollar, euro, pound, Argentine peso, Uruguayan peso and more. Updated daily.', es: 'Dólar, euro, libra, peso argentino, peso uruguayo y más. Actualizadas diariamente.' },
    rates_cta_btn:    { pt: 'Ver todas as cotações', en: 'See all rates', es: 'Ver todas las cotizaciones' },

    /* special banner */
    special_badge: { pt: '✦ Serviço especial', en: '✦ Special service', es: '✦ Servicio especial' },
    special_h2:    { pt: 'Tem dólares antigos guardados?', en: 'Have old dollars stored away?', es: '¿Tiene dólares antiguos guardados?' },
    special_p:     { pt: 'A Money Way avalia e orienta você com segurança, transparência e atendimento especializado. Cédulas antigas, moedas raras e valores especiais, tudo com a expertise de quem entende do mercado.', en: 'Money Way assesses and guides you with security, transparency and specialized service. Old banknotes and special values, with the expertise of those who know the market.', es: 'Money Way evalúa y le orienta con seguridad, transparencia y atención especializada. Billetes antiguos y valores especiales, con la experiencia de quienes conocen el mercado.' },
    special_btn:   { pt: 'Quero avaliar minhas notas', en: 'I want to assess my banknotes', es: 'Quiero evaluar mis billetes' },

    /* numbers section */
    numbers_h2:    { pt: 'Números que mostram <span class="grad-text">nossa história</span>', en: 'Numbers that tell <span class="grad-text">our story</span>', es: 'Números que muestran <span class="grad-text">nuestra historia</span>' },
    numbers_sub:   { pt: 'Duas décadas conectando pessoas e empresas ao mundo, com presença em todo o Brasil.', en: 'Two decades connecting people and businesses to the world, with presence across Brazil.', es: 'Dos décadas conectando personas y empresas con el mundo, con presencia en todo Brasil.' },
    stat1_lab:     { pt: 'Operações realizadas', en: 'Operations completed', es: 'Operaciones realizadas' },
    stat2_lab:     { pt: 'Correspondentes cambiais no Brasil', en: 'Exchange correspondents in Brazil', es: 'Corresponsales cambiarios en Brasil' },
    stat3_lab:     { pt: 'Anos de experiência', en: 'Years of experience', es: 'Años de experiencia' },
    stat4_lab:     { pt: 'Clientes atendidos', en: 'Clients served', es: 'Clientes atendidos' },
    numbers_foot:  { pt: '⚡ Atendimento em até <b>poucos minutos</b>', en: '⚡ Response in <b>just minutes</b>', es: '⚡ Atención en <b>pocos minutos</b>' },

    /* services section */
    svc_eyebrow:   { pt: 'Serviços', en: 'Services', es: 'Servicios' },
    svc_h2:        { pt: 'Conheça <span class="grad-text">nossos serviços</span>', en: 'Explore <span class="grad-text">our services</span>', es: 'Conozca <span class="grad-text">nuestros servicios</span>' },
    svc1_h3:       { pt: 'Compra e venda de moedas estrangeiras', en: 'Buy & sell foreign currency', es: 'Compra y venta de divisas extranjeras' },
    svc1_p:        { pt: 'Mais de 10 moedas estrangeiras em espécie, com cotações competitivas e atendimento personalizado.', en: 'Over 10 foreign currencies in cash, with competitive rates and personalized service.', es: 'Más de 10 divisas extranjeras en efectivo, con cotizaciones competitivas y atención personalizada.' },
    svc1_more:     { pt: 'Saiba mais', en: 'Learn more', es: 'Saber más' },
    svc2_h3:       { pt: 'Transferência de valores nacionais', en: 'National value transfers', es: 'Transferencia de valores nacionales' },
    svc2_p:        { pt: 'Envie valores em reais com agilidade, segurança e atendimento próximo para qualquer banco do Brasil.', en: 'Send amounts in BRL quickly and securely to any bank in Brazil with dedicated support.', es: 'Envíe valores en reales con agilidad, seguridad y atención personalizada a cualquier banco de Brasil.' },
    svc2_more:     { pt: 'Saiba mais', en: 'Learn more', es: 'Saber más' },
    svc3_h3:       { pt: 'Compra de cédula estrangeira antiga', en: 'Purchase of old foreign banknotes', es: 'Compra de billetes extranjeros antiguos' },
    svc3_p:        { pt: 'Avaliamos e compramos cédulas antigas com segurança, transparência e expertise de mercado.', en: 'We assess and purchase old banknotes with security, transparency and market expertise.', es: 'Evaluamos y compramos billetes antiguos con seguridad, transparencia y experiencia de mercado.' },
    svc3_more:     { pt: 'Saiba mais', en: 'Learn more', es: 'Saber más' },
    svc4_h3:       { pt: 'Passagem aérea e seguro de viagem', en: 'Flights & travel insurance', es: 'Pasajes aéreos y seguro de viaje' },
    svc4_p:        { pt: 'Passagens com agente especializado e seguro com cobertura completa; tudo em um só atendimento.', en: 'Flights with a specialist agent and full-coverage insurance; all in one appointment.', es: 'Pasajes con agente especializado y seguro con cobertura completa; todo en una sola atención.' },
    svc4_more:     { pt: 'Saiba mais', en: 'Learn more', es: 'Saber más' },
    svc5_h3:       { pt: 'MoneyGram', en: 'MoneyGram', es: 'MoneyGram' },
    svc5_p:        { pt: 'Envie ou receba dinheiro internacionalmente em minutos, presente em mais de 200 países.', en: 'Send or receive money internationally in minutes, available in over 200 countries.', es: 'Envíe o reciba dinero internacionalmente en minutos, presente en más de 200 países.' },
    svc5_more:     { pt: 'Saiba mais', en: 'Learn more', es: 'Saber más' },
    svc6_h3:       { pt: 'Importação e exportação', en: 'Import & export', es: 'Importación y exportación' },
    svc6_p:        { pt: 'Soluções cambiais completas para empresas que operam no comércio exterior.', en: 'Complete FX solutions for companies operating in international trade.', es: 'Soluciones cambiarias completas para empresas que operan en comercio exterior.' },
    svc6_more:     { pt: 'Ver soluções PJ', en: 'Business solutions', es: 'Ver soluciones PJ' },

    /* google reviews */
    google_score:  { pt: '· 166 avaliações no Google', en: '· 166 Google reviews', es: '· 166 reseñas en Google' },

    /* partners */
    partners_eyebrow: { pt: 'Credenciamentos e parcerias', en: 'Accreditations & partnerships', es: 'Acreditaciones y alianzas' },
    partners_h2:      { pt: 'Operações respaldadas por <span class="grad-text">parceiros de confiança</span>', en: 'Operations backed by <span class="grad-text">trusted partners</span>', es: 'Operaciones respaldadas por <span class="grad-text">socios de confianza</span>' },
    partner1_span:    { pt: 'Correspondente cambial credenciado e autorizado pelo BACEN', en: 'Accredited exchange correspondent authorized by the Brazilian Central Bank', es: 'Corresponsal cambiario acreditado y autorizado por el Banco Central de Brasil' },
    partner2_span:    { pt: 'Corretora parceira para câmbio e transferências internacionais', en: 'Partner broker for exchange and international transfers', es: 'Corredora asociada para cambio y transferencias internacionales' },
    partner3_span:    { pt: 'Parceiros de seguro viagem para destinos nacionais e internacionais', en: 'Travel insurance partners for domestic and international destinations', es: 'Socios de seguro de viaje para destinos nacionales e internacionales' },
    partner4_span:    { pt: 'Emissão de passagens aéreas nacionais e internacionais', en: 'Domestic and international flight ticketing', es: 'Emisión de pasajes aéreos nacionales e internacionales' },

    /* blog */
    blog_eyebrow: { pt: 'Conteúdos', en: 'Content', es: 'Contenidos' },
    blog_h2:      { pt: 'Blog <span class="grad-text">Money Way</span>', en: 'Blog <span class="grad-text">Money Way</span>', es: 'Blog <span class="grad-text">Money Way</span>' },
    post1_cat:  { pt: 'Cédulas Antigas', en: 'Vintage Banknotes', es: 'Billetes Antiguos' },
    post1_h3:   { pt: 'Cédulas estrangeiras antigas: o que fazer com elas?', en: 'Old foreign banknotes: what to do with them?', es: '¿Billetes extranjeros antiguos? ¿Qué hacer con ellos?' },
    post1_p:    { pt: 'Saiba como avaliar, onde vender e qual o valor de notas antigas guardadas em casa.', en: 'Learn how to evaluate, where to sell and what old banknotes stored at home are worth.', es: 'Sepa cómo evaluar, dónde vender y cuánto valen los billetes viejos guardados en casa.' },
    post1_more: { pt: 'Ler mais →', en: 'Read more →', es: 'Leer más →' },
    post2_cat:  { pt: 'Empresas PJ', en: 'Business', es: 'Empresas PJ' },
    post2_h3:   { pt: 'Por que empresas escolhem a Money Way para seu câmbio?', en: 'Why do companies choose Money Way for their FX?', es: '¿Por qué las empresas eligen Money Way para su cambio?' },
    post2_p:    { pt: 'Taxas diferenciadas, agilidade operacional e suporte especializado para negócios que operam no exterior.', en: 'Better rates, operational agility and specialized support for businesses operating abroad.', es: 'Tasas diferenciadas, agilidad operacional y soporte especializado para negocios en el exterior.' },
    post2_more: { pt: 'Ler mais →', en: 'Read more →', es: 'Leer más →' },
    post3_cat:  { pt: 'Conta Global', en: 'Global Account', es: 'Cuenta Global' },
    post3_h3:   { pt: 'Conta global e cartão de débito internacional: como funciona?', en: 'Global account and international debit card: how does it work?', es: 'Cuenta global y tarjeta de débito internacional: ¿cómo funciona?' },
    post3_p:    { pt: 'Entenda a diferença, as taxas envolvidas e quando vale a pena usar cada um.', en: 'Understand the difference, fees involved and when each option is worth using.', es: 'Entienda la diferencia, las tarifas involucradas y cuándo vale la pena usar cada uno.' },
    post3_more: { pt: 'Ler mais →', en: 'Read more →', es: 'Leer más →' },
    post4_cat:  { pt: 'Câmbio', en: 'Exchange', es: 'Cambio' },
    post4_h3:   { pt: 'Moeda física ou cartão de débito? Diferenças e quando usar cada um', en: 'Cash or debit card? Differences and when to use each', es: '¿Efectivo o tarjeta de débito? Diferencias y cuándo usar cada uno' },
    post4_p:    { pt: 'Custos, conveniência e segurança: guia prático para decidir antes de viajar.', en: 'Costs, convenience and safety: a practical guide to decide before travelling.', es: 'Costos, comodidad y seguridad: guía práctica para decidir antes de viajar.' },
    post4_more: { pt: 'Ler mais →', en: 'Read more →', es: 'Leer más →' },
    post5_cat:  { pt: 'Seguro Viagem', en: 'Travel Insurance', es: 'Seguro de Viaje' },
    post5_h3:   { pt: 'Seguro viagem: por que contratar antes de embarcar?', en: 'Travel insurance: why get it before boarding?', es: 'Seguro de viaje: ¿por qué contratarlo antes de embarcar?' },
    post5_p:    { pt: 'O que cobre, quanto custa e como escolher a cobertura certa para o seu destino.', en: 'What it covers, how much it costs and how to choose the right coverage for your destination.', es: 'Qué cubre, cuánto cuesta y cómo elegir la cobertura correcta para su destino.' },
    post5_more: { pt: 'Ler mais →', en: 'Read more →', es: 'Leer más →' },

    /* newsletter */
    nl_h2:         { pt: 'Receba cotações <span class="grad-text">diariamente</span>', en: 'Receive rates <span class="grad-text">daily</span>', es: 'Reciba cotizaciones <span class="grad-text">diariamente</span>' },
    nl_sub:        { pt: 'No seu e-mail, no seu WhatsApp ou nos dois. Gratuito, cancele quando quiser.', en: 'In your email, your WhatsApp or both. Free, cancel anytime.', es: 'En su correo, WhatsApp o ambos. Gratis, cancele cuando quiera.' },
    nl_ch_email:   { pt: 'E-mail', en: 'E-mail', es: 'Correo' },
    nl_ch_wpp:     { pt: 'WhatsApp', en: 'WhatsApp', es: 'WhatsApp' },
    nl_ch_both:    { pt: '✦ Ambos', en: '✦ Both', es: '✦ Ambos' },
    nl_pl_name:    { pt: 'Seu nome', en: 'Your name', es: 'Su nombre' },
    nl_pl_email:   { pt: 'seu@email.com', en: 'your@email.com', es: 'su@email.com' },
    nl_pl_wpp:     { pt: '(51) 9 9999-9999', en: '(51) 9 9999-9999', es: '(51) 9 9999-9999' },
    nl_submit:     { pt: 'Cadastrar', en: 'Subscribe', es: 'Suscribirse' },

    /* footer index */
    ft_about:    { pt: 'Câmbio inteligente, remessas internacionais e soluções globais para quem se movimenta pelo mundo. Atendimento próximo, segurança e tecnologia.', en: 'Smart currency exchange, international transfers and global solutions for those who move around the world. Close service, security and technology.', es: 'Cambio inteligente, remesas internacionales y soluciones globales para quienes se mueven por el mundo. Atención cercana, seguridad y tecnología.' },
    ft_contact_h: { pt: 'Contato', en: 'Contact', es: 'Contacto' },
    ft_hours:     { pt: 'Seg a Sex: 09h30 às 17h. Sáb: confirmar', en: 'Mon–Fri: 09h30–17h. Sat: confirm', es: 'Lun–Vie: 09h30–17h. Sáb: confirmar' },
    ft_pages_h:   { pt: 'Serviços e páginas', en: 'Services & pages', es: 'Servicios y páginas' },
    ft_tagline:   { pt: 'Feito em Porto Alegre, conectado ao mundo.', en: 'Made in Porto Alegre, connected to the world.', es: 'Hecho en Porto Alegre, conectado al mundo.' },

    /* popup */
    popup_h3:     { pt: 'Receba cotações <em>diariamente</em>', en: 'Receive rates <em>daily</em>', es: 'Reciba cotizaciones <em>diariamente</em>' },
    popup_p:      { pt: 'Dólar, euro e mais de 10 moedas no seu WhatsApp. Grátis.', en: 'Dollar, euro and over 10 currencies in your WhatsApp. Free.', es: 'Dólar, euro y más de 10 divisas en su WhatsApp. Gratis.' },
    popup_lbl1:   { pt: 'Seu nome', en: 'Your name', es: 'Su nombre' },
    popup_lbl2:   { pt: 'Seu WhatsApp', en: 'Your WhatsApp', es: 'Su WhatsApp' },
    popup_btn:    { pt: 'Quero receber as cotações', en: 'I want to receive rates', es: 'Quiero recibir las cotizaciones' },
    popup_dismiss:{ pt: 'Agora não', en: 'Not now', es: 'Ahora no' },

    /* ===== COTACOES.HTML ===== */
    cot_h1:       { pt: 'Cotações <span class="grad-text">agora</span>', en: 'Rates <span class="grad-text">now</span>', es: 'Cotizaciones <span class="grad-text">ahora</span>' },
    cot_sub:      { pt: 'Mais de 12 moedas estrangeiras com valores de referência. Para fechamento e melhores condições, fale com um especialista.', en: 'Over 12 foreign currencies with reference values. For closing and best conditions, speak with a specialist.', es: 'Más de 12 divisas extranjeras con valores de referencia. Para el cierre y mejores condiciones, hable con un especialista.' },
    cot_sim_live: { pt: 'cotação ilustrativa', en: 'illustrative rate', es: 'cotización ilustrativa' },
    cot_th_cur:   { pt: 'Moeda', en: 'Currency', es: 'Divisa' },
    cot_th_buy:   { pt: 'Compra (R$)', en: 'Buy (R$)', es: 'Compra (R$)' },
    cot_th_sell:  { pt: 'Venda (R$)', en: 'Sell (R$)', es: 'Venta (R$)' },
    cot_rates_ttl:{ pt: 'Cotações agora', en: 'Rates now', es: 'Cotizaciones ahora' },
    cot_note1:    { pt: 'Valores podem sofrer alterações ao longo do dia. Para fechamento, confirme no atendimento.', en: 'Values may change throughout the day. For closing, confirm with our team.', es: 'Los valores pueden cambiar a lo largo del día. Para el cierre, confirme en la atención.' },
    cot_note2:    { pt: 'Valores sujeitos a alterações sem aviso prévio.', en: 'Values subject to change without prior notice.', es: 'Valores sujetos a cambios sin previo aviso.' },
    cot_note3:    { pt: 'Todas as cotações já estão com o IOF incluso no valor final.', en: 'All rates already include IOF tax in the final value.', es: 'Todas las cotizaciones ya incluyen el IOF en el valor final.' },
    cot_note4:    { pt: 'Para cotações atualizadas, entre em contato conosco no botão abaixo.', en: 'For updated rates, contact us using the button below.', es: 'Para cotizaciones actualizadas, contáctenos con el botón de abajo.' },
    cot_notlisted_t: { pt: 'Precisa de uma moeda que não está na lista?', en: 'Need a currency not on the list?', es: '¿Necesita una divisa que no está en la lista?' },
    cot_notlisted_s: { pt: 'Entre em contato, conseguimos uma taxa para você.', en: 'Contact us and we will find a rate for you.', es: 'Contáctenos y encontramos una tasa para usted.' },
    cot_contact_btn: { pt: 'Entre em contato', en: 'Contact us', es: 'Contáctenos' },
    cot_att_eyebrow: { pt: 'Atendimento', en: 'Support', es: 'Atención' },
    cot_att_h2:      { pt: 'Precisa falar com a <span class="grad-text">nossa equipe?</span>', en: 'Need to speak with <span class="grad-text">our team?</span>', es: '¿Necesita hablar con <span class="grad-text">nuestro equipo?</span>' },
    cc1_h3:  { pt: 'WhatsApp & telefone', en: 'WhatsApp & phone', es: 'WhatsApp y teléfono' },
    cc2_h3:  { pt: 'Horário de atendimento', en: 'Business hours', es: 'Horario de atención' },
    cc2_p1:  { pt: 'Segunda à Sexta: <b>09h30 às 17h</b>', en: 'Monday to Friday: <b>09h30 to 17h</b>', es: 'Lunes a Viernes: <b>09h30 a 17h</b>' },
    cc2_p2:  { pt: 'Sábados: <b>confirmar com a equipe</b>', en: 'Saturdays: <b>confirm with the team</b>', es: 'Sábados: <b>confirmar con el equipo</b>' },
    cc3_h3:  { pt: 'Nossa sede', en: 'Our office', es: 'Nuestra sede' },
    cc3_p3:  { pt: 'Venha nos fazer uma visita! 👋', en: 'Come visit us! 👋', es: '¡Venga a visitarnos! 👋' },
    sim_lock_cot: { pt: 'Travar essa taxa no WhatsApp', en: 'Lock this rate on WhatsApp', es: 'Fijar esta tasa en WhatsApp' },
    sim_note_cot: { pt: 'Valores ilustrativos. A cotação oficial é confirmada no atendimento, no momento do fechamento.', en: 'Illustrative values. The official rate is confirmed at service, at the time of closing.', es: 'Valores ilustrativos. La cotización oficial se confirma en la atención, al momento del cierre.' },
    sim_currencies_note: { pt: 'Trabalhamos com mais de 10 moedas. <a href="https://wa.me/5551999649824?text=Preciso%20de%20uma%20moeda%20que%20n%C3%A3o%20est%C3%A1%20na%20lista." target="_blank" rel="noopener">Fale conosco</a> para outras cotações.', en: 'We work with over 10 currencies. <a href="https://wa.me/5551999649824?text=Preciso%20de%20uma%20moeda%20que%20n%C3%A3o%20est%C3%A1%20na%20lista." target="_blank" rel="noopener">Contact us</a> for other rates.', es: 'Trabajamos con más de 10 divisas. <a href="https://wa.me/5551999649824?text=Preciso%20de%20uma%20moeda%20que%20n%C3%A3o%20est%C3%A1%20na%20lista." target="_blank" rel="noopener">Contáctenos</a> para otras cotizaciones.' },

    /* ===== SEGURO-VIAGEM.HTML ===== */
    seg_h1:       { pt: 'Viaje tranquilo com <em>seguro viagem</em>', en: 'Travel worry-free with <em>travel insurance</em>', es: 'Viaje tranquilo con <em>seguro de viaje</em>' },
    seg_lede:     { pt: 'Aproveite a sua viagem com tranquilidade e a <strong>proteção do seguro viagem</strong> em qualquer destino.', en: 'Enjoy your trip with peace of mind and <strong>travel insurance protection</strong> at any destination.', es: 'Disfrute su viaje con tranquilidad y la <strong>protección del seguro de viaje</strong> en cualquier destino.' },
    seg_cta1:     { pt: 'Falar com especialista', en: 'Talk to a specialist', es: 'Hablar con especialista' },
    seg_cta2:     { pt: 'Ver cotações', en: 'See rates', es: 'Ver cotizaciones' },
    seg_ben1_h3:  { pt: 'Cobertura completa', en: 'Full coverage', es: 'Cobertura completa' },
    seg_ben1_p:   { pt: 'Saúde, bagagem e imprevistos cobertos durante a viagem.', en: 'Health, luggage and unforeseen events covered during the trip.', es: 'Salud, equipaje e imprevistos cubiertos durante el viaje.' },
    seg_ben2_h3:  { pt: 'Qualquer destino', en: 'Any destination', es: 'Cualquier destino' },
    seg_ben2_p:   { pt: 'Planos para o mundo todo, conforme o seu roteiro.', en: 'Plans for the whole world, tailored to your itinerary.', es: 'Planes para todo el mundo, según su itinerario.' },
    seg_ben3_h3:  { pt: 'Exigido em vários países', en: 'Required in many countries', es: 'Requerido en varios países' },
    seg_ben3_p:   { pt: 'Atende exigências como o Tratado de Schengen na Europa.', en: 'Meets requirements such as the Schengen Treaty in Europe.', es: 'Cumple requisitos como el Tratado de Schengen en Europa.' },
    seg_how_ey:   { pt: 'Como funciona', en: 'How it works', es: 'Cómo funciona' },
    seg_how_h2:   { pt: 'Proteção do embarque ao retorno', en: 'Protection from departure to return', es: 'Protección del embarque al regreso' },
    seg_prose1:   { pt: 'Um imprevisto não pode estragar a sua viagem. Com o <strong>seguro viagem</strong>, você tem assistência médica, cobertura de bagagem e suporte onde estiver.', en: 'An unexpected event should not ruin your trip. With <strong>travel insurance</strong>, you have medical assistance, luggage coverage and support wherever you are.', es: 'Un imprevisto no puede arruinar su viaje. Con el <strong>seguro de viaje</strong>, tiene asistencia médica, cobertura de equipaje y soporte donde esté.' },
    seg_prose2:   { pt: 'Ajudamos você a escolher o plano ideal para o seu destino e perfil de viagem. Fale com a gente e viaje protegido.', en: 'We help you choose the ideal plan for your destination and travel profile. Talk to us and travel protected.', es: 'Le ayudamos a elegir el plan ideal para su destino y perfil de viaje. Hable con nosotros y viaje protegido.' },
    seg_cta3:     { pt: 'Chamar no WhatsApp', en: 'Chat on WhatsApp', es: 'Contactar por WhatsApp' },

    /* ===== PASSAGENS.HTML ===== */
    pas_h1:       { pt: 'Passagens aéreas com <em>quem entende de viagem</em>', en: 'Flights with <em>travel experts</em>', es: 'Pasajes aéreos con <em>quienes entienden de viajes</em>' },
    pas_lede:     { pt: 'Encontre as melhores passagens com a ajuda de <strong>um de nossos agentes</strong>.', en: 'Find the best flights with the help of <strong>one of our agents</strong>.', es: 'Encuentre los mejores pasajes con la ayuda de <strong>uno de nuestros agentes</strong>.' },
    pas_cta1:     { pt: 'Falar com especialista', en: 'Talk to a specialist', es: 'Hablar con especialista' },
    pas_cta2:     { pt: 'Ver cotações', en: 'See rates', es: 'Ver cotizaciones' },
    pas_ben1_h3:  { pt: 'Atendimento de agente', en: 'Agent service', es: 'Atención de agente' },
    pas_ben1_p:   { pt: 'Um especialista monta o melhor roteiro e tarifa para você.', en: 'A specialist builds the best itinerary and fare for you.', es: 'Un especialista diseña el mejor itinerario y tarifa para usted.' },
    pas_ben2_h3:  { pt: 'Tudo junto', en: 'All together', es: 'Todo junto' },
    pas_ben2_p:   { pt: 'Câmbio, seguro e passagem em um só atendimento.', en: 'Exchange, insurance and flights in one single appointment.', es: 'Cambio, seguro y pasaje en una sola atención.' },
    pas_ben3_h3:  { pt: 'Sem complicação', en: 'No hassle', es: 'Sin complicaciones' },
    pas_ben3_p:   { pt: 'Você economiza tempo e viaja com tranquilidade.', en: 'You save time and travel with peace of mind.', es: 'Ahorra tiempo y viaja con tranquilidad.' },
    pas_how_ey:   { pt: 'Como funciona', en: 'How it works', es: 'Cómo funciona' },
    pas_how_h2:   { pt: 'A sua viagem começa aqui', en: 'Your trip starts here', es: 'Su viaje comienza aquí' },
    pas_prose1:   { pt: 'Buscar passagem dá trabalho, e a gente facilita. Nossos <strong>agentes de viagem</strong> encontram as melhores opções de voo e ainda cuidam do seu câmbio e seguro.', en: 'Finding flights takes effort, and we make it easy. Our <strong>travel agents</strong> find the best flight options and also handle your exchange and insurance.', es: 'Buscar pasajes es complicado, y nosotros lo facilitamos. Nuestros <strong>agentes de viaje</strong> encuentran las mejores opciones de vuelo y también cuidan su cambio y seguro.' },
    pas_prose2:   { pt: 'Conte com a experiência de quem vive viagens low-cost e mochilão. Entre em contato e comece a planejar.', en: 'Count on the experience of those who live budget and backpacker travel. Get in touch and start planning.', es: 'Cuente con la experiencia de quienes viven los viajes económicos y de mochilero. Contáctenos y empiece a planear.' },
    pas_cta3:     { pt: 'Chamar no WhatsApp', en: 'Chat on WhatsApp', es: 'Contactar por WhatsApp' },

    /* ===== REMESSAS.HTML ===== */
    rem_h1:       { pt: 'Remessa expressa e <em>internacional</em>', en: 'Express and <em>international</em> wire transfer', es: 'Remesa expresa e <em>internacional</em>' },
    rem_lede:     { pt: 'Envie e receba dinheiro ao redor do mundo com <strong>segurança e comodidade</strong>, com câmbio transparente.', en: 'Send and receive money around the world with <strong>security and convenience</strong>, with transparent exchange.', es: 'Envíe y reciba dinero alrededor del mundo con <strong>seguridad y comodidad</strong>, con cambio transparente.' },
    rem_cta1:     { pt: 'Falar com especialista', en: 'Talk to a specialist', es: 'Hablar con especialista' },
    rem_cta2:     { pt: 'Ver cotações', en: 'See rates', es: 'Ver cotizaciones' },
    rem_ben1_h3:  { pt: 'Envio e recebimento', en: 'Send & receive', es: 'Envío y recepción' },
    rem_ben1_p:   { pt: 'Para estudos, família, salário ou pagamentos no exterior.', en: 'For studies, family, salary or payments abroad.', es: 'Para estudios, familia, salario o pagos en el exterior.' },
    rem_ben2_h3:  { pt: 'Expressa', en: 'Express', es: 'Expresa' },
    rem_ben2_p:   { pt: 'Operações ágeis, com fechamento rápido e acompanhamento.', en: 'Agile operations, with fast closing and tracking.', es: 'Operaciones ágiles, con cierre rápido y seguimiento.' },
    rem_ben3_h3:  { pt: 'Transparente', en: 'Transparent', es: 'Transparente' },
    rem_ben3_p:   { pt: 'Sem letra miúda, você sabe exatamente o que vai pagar.', en: 'No fine print; you know exactly what you will pay.', es: 'Sin letra pequeña, sabe exactamente lo que pagará.' },
    rem_how_ey:   { pt: 'Como funciona', en: 'How it works', es: 'Cómo funciona' },
    rem_how_h2:   { pt: 'Dinheiro pelo mundo, sem complicação', en: 'Money across the world, no hassle', es: 'Dinero por el mundo, sin complicaciones' },
    rem_prose1:   { pt: 'Precisa <strong>enviar ou receber valores do exterior</strong>? A Money Way cuida de toda a operação de câmbio com segurança e conformidade, do começo ao fim.', en: 'Need to <strong>send or receive funds abroad</strong>? Money Way handles the entire exchange operation safely and compliantly, from start to finish.', es: '¿Necesita <strong>enviar o recibir valores del exterior</strong>? Money Way gestiona toda la operación de cambio con seguridad y conformidad, de principio a fin.' },
    rem_prose2:   { pt: 'Conte com atendimento humano para tirar dúvidas e garantir a melhor taxa para a sua remessa. Chame no WhatsApp e simule a sua operação.', en: 'Count on human support to answer questions and get the best rate for your transfer. Chat on WhatsApp and simulate your operation.', es: 'Cuente con atención humana para resolver dudas y garantizar la mejor tasa para su remesa. Contáctenos por WhatsApp y simule su operación.' },
    rem_cta3:     { pt: 'Chamar no WhatsApp', en: 'Chat on WhatsApp', es: 'Contactar por WhatsApp' },

    /* ===== CONTA-GLOBAL.HTML ===== */
    cg_h1:        { pt: 'Conta Global <em>sem fronteiras</em>', en: 'Global Account <em>without borders</em>', es: 'Cuenta Global <em>sin fronteras</em>' },
    cg_lede:      { pt: 'Tenha uma conta multimoeda para <strong>pagar despesas e fazer compras em milhões de estabelecimentos</strong> ao redor do mundo.', en: 'Have a multi-currency account to <strong>pay expenses and shop at millions of establishments</strong> around the world.', es: 'Tenga una cuenta multidivisa para <strong>pagar gastos y comprar en millones de establecimientos</strong> alrededor del mundo.' },
    cg_cta1:      { pt: 'Falar com especialista', en: 'Talk to a specialist', es: 'Hablar con especialista' },
    cg_cta2:      { pt: 'Ver cotações', en: 'See rates', es: 'Ver cotizaciones' },
    cg_ben1_h3:   { pt: 'Aceita no mundo todo', en: 'Accepted worldwide', es: 'Aceptada en todo el mundo' },
    cg_ben1_p:    { pt: 'Use em milhões de estabelecimentos e saques internacionais.', en: 'Use at millions of establishments and international ATMs.', es: 'Úsela en millones de establecimientos y retiros internacionales.' },
    cg_ben2_h3:   { pt: 'Multimoeda', en: 'Multi-currency', es: 'Multidivisa' },
    cg_ben2_p:    { pt: 'Mantenha saldo em diferentes moedas e gaste na cotação certa.', en: 'Hold balances in different currencies and spend at the right rate.', es: 'Mantenga saldo en diferentes divisas y gaste a la cotización correcta.' },
    cg_ben3_h3:   { pt: 'Segurança total', en: 'Full security', es: 'Seguridad total' },
    cg_ben3_p:    { pt: 'Controle e proteção para o seu dinheiro em qualquer lugar.', en: 'Control and protection for your money anywhere.', es: 'Control y protección para su dinero en cualquier lugar.' },
    cg_how_ey:    { pt: 'Como funciona', en: 'How it works', es: 'Cómo funciona' },
    cg_how_h2:    { pt: 'A sua conta para gastar fora do país', en: 'Your account for spending abroad', es: 'Su cuenta para gastar fuera del país' },
    cg_prose1:    { pt: 'A <strong>Conta Global Money Way</strong> foi pensada para quem viaja, estuda ou faz negócios no exterior. Você carrega a conta em reais e gasta na moeda local, sem a burocracia de abrir conta em outro país.', en: 'The <strong>Money Way Global Account</strong> was designed for those who travel, study or do business abroad. You load it in BRL and spend in the local currency, without the hassle of opening an account in another country.', es: 'La <strong>Cuenta Global Money Way</strong> fue diseñada para quienes viajan, estudian o hacen negocios en el exterior. Carga la cuenta en reales y gasta en la moneda local, sin la burocracia de abrir una cuenta en otro país.' },
    cg_prose2:    { pt: 'Nossa equipe te orienta em cada etapa, da ativação ao uso no dia a dia. Fale com a gente e descubra como movimentar seu dinheiro pelo mundo com tranquilidade.', en: 'Our team guides you at every step, from activation to daily use. Talk to us and discover how to move your money around the world with peace of mind.', es: 'Nuestro equipo lo orienta en cada etapa, desde la activación hasta el uso diario. Hable con nosotros y descubra cómo mover su dinero por el mundo con tranquilidad.' },
    cg_cta3:      { pt: 'Chamar no WhatsApp', en: 'Chat on WhatsApp', es: 'Contactar por WhatsApp' },

    /* ===== MONEYGRAM.HTML ===== */
    mg_h1:        { pt: 'Enviando dinheiro de forma <em>rápida e segura</em>', en: 'Sending money <em>fast and securely</em>', es: 'Enviando dinero de forma <em>rápida y segura</em>' },
    mg_lede:      { pt: 'A <strong>MoneyGram</strong>, presente em mais de 200 países, agora está disponível na Money Way para facilitar suas transações internacionais. Envie em espécie para qualquer lugar do mundo em apenas <strong>10 minutos</strong>!', en: '<strong>MoneyGram</strong>, present in over 200 countries, is now available at Money Way to facilitate your international transactions. Send cash anywhere in the world in just <strong>10 minutes</strong>!', es: '<strong>MoneyGram</strong>, presente en más de 200 países, ya está disponible en Money Way para facilitar sus transacciones internacionales. ¡Envíe en efectivo a cualquier parte del mundo en solo <strong>10 minutos</strong>!' },
    mg_ben1_h3:   { pt: 'Seguro', en: 'Secure', es: 'Seguro' },
    mg_ben1_p:    { pt: 'A MoneyGram oferece transações seguras e rápidas em mais de 200 países. Com autenticação e tecnologia de ponta, seu dinheiro chega com confiança!', en: 'MoneyGram offers secure and fast transactions in over 200 countries. With authentication and cutting-edge technology, your money arrives with confidence!', es: 'MoneyGram ofrece transacciones seguras y rápidas en más de 200 países. ¡Con autenticación y tecnología de vanguardia, su dinero llega con confianza!' },
    mg_ben2_h3:   { pt: 'Facilidade', en: 'Easy', es: 'Facilidad' },
    mg_ben2_p:    { pt: 'Faça transações internacionais pelo celular, via Pix ou WhatsApp. Prático, rápido e sem complicações; envie dinheiro em minutos!', en: 'Make international transactions via mobile, Pix or WhatsApp. Practical, fast and hassle-free; send money in minutes!', es: '¡Realice transacciones internacionales desde el celular, vía Pix o WhatsApp. Práctico, rápido y sin complicaciones; envíe dinero en minutos!' },
    mg_ben3_h3:   { pt: 'Global', en: 'Global', es: 'Global' },
    mg_ben3_p:    { pt: 'Rede presente em mais de 200 países com milhares de pontos de retirada; seu destinatário recebe onde estiver.', en: 'Network present in over 200 countries with thousands of pick-up points; your recipient receives wherever they are.', es: 'Red presente en más de 200 países con miles de puntos de retiro; su destinatario recibe donde esté.' },
    mg_how_ey:    { pt: 'Como posso ajudar?', en: 'How can I help?', es: '¿Cómo puedo ayudar?' },
    mg_how_h2:    { pt: 'Enviar ou receber com a <span class="grad-text">MoneyGram</span>', en: 'Send or receive with <span class="grad-text">MoneyGram</span>', es: 'Enviar o recibir con <span class="grad-text">MoneyGram</span>' },
    mg_how_sub:   { pt: 'Escolha o que você quer fazer, preencha os dados e abriremos o WhatsApp com a mensagem já pronta.', en: 'Choose what you want to do, fill in the details and we will open WhatsApp with the message ready.', es: 'Elija lo que quiere hacer, complete los datos y abriremos WhatsApp con el mensaje ya listo.' },
    mg_tab_send:  { pt: 'Enviar dinheiro', en: 'Send money', es: 'Enviar dinero' },
    mg_tab_recv:  { pt: 'Receber dinheiro', en: 'Receive money', es: 'Recibir dinero' },
    mg_lbl_name:  { pt: 'Seu nome completo', en: 'Your full name', es: 'Su nombre completo' },
    mg_lbl_dest:  { pt: 'País de destino', en: 'Destination country', es: 'País de destino' },
    mg_lbl_val:   { pt: 'Valor a enviar', en: 'Amount to send', es: 'Monto a enviar' },
    mg_lbl_code:  { pt: 'Código de recebimento', en: 'Receive code', es: 'Código de recepción' },
    mg_pl_name_s: { pt: 'Ex: João Silva', en: 'E.g.: John Smith', es: 'Ej: Juan García' },
    mg_pl_name_r: { pt: 'Ex: Maria Santos', en: 'E.g.: Mary Johnson', es: 'Ej: María López' },
    mg_pl_code:   { pt: 'Ex: 12345678 (se tiver)', en: 'E.g.: 12345678 (if available)', es: 'Ej: 12345678 (si lo tiene)' },
    mg_pl_country:{ pt: 'Selecione o país', en: 'Select country', es: 'Seleccione el país' },
    mg_btn_wa:    { pt: 'Iniciar no WhatsApp', en: 'Start on WhatsApp', es: 'Iniciar en WhatsApp' },
    mg_wa_note:   { pt: 'Você será direcionado ao WhatsApp com a mensagem já preenchida.', en: 'You will be directed to WhatsApp with the message already filled in.', es: 'Será dirigido a WhatsApp con el mensaje ya completado.' },

    /* ===== CEDULAS-ANTIGAS.HTML ===== */
    ced_h1:       { pt: 'Cédulas estrangeiras <em>antigas</em>', en: 'Old foreign <em>banknotes</em>', es: 'Billetes extranjeros <em>antiguos</em>' },
    ced_lede:     { pt: 'Guardou notas de outras épocas? A Money Way avalia, orienta e compra suas cédulas com <strong>segurança, transparência e expertise de mercado</strong>.', en: 'Stored banknotes from other eras? Money Way assesses, advises and purchases your banknotes with <strong>security, transparency and market expertise</strong>.', es: '¿Guardó billetes de otras épocas? Money Way evalúa, orienta y compra sus billetes con <strong>seguridad, transparencia y experiencia de mercado</strong>.' },
    ced_cta1:     { pt: 'Quero avaliar minhas cédulas', en: 'I want to assess my banknotes', es: 'Quiero evaluar mis billetes' },
    ced_cta2:     { pt: 'Ver cotações', en: 'See rates', es: 'Ver cotizaciones' },
    ced_ben1_h3:  { pt: 'Avaliação especializada', en: 'Expert assessment', es: 'Evaluación especializada' },
    ced_ben1_p:   { pt: 'Nossa equipe tem mais de 20 anos de experiência em câmbio e conhece o mercado de cédulas antigas.', en: 'Our team has over 20 years of experience in currency exchange and knows the vintage banknote market.', es: 'Nuestro equipo tiene más de 20 años de experiencia en cambio de divisas y conoce el mercado de billetes antiguos.' },
    ced_ben2_h3:  { pt: 'Preço justo', en: 'Fair price', es: 'Precio justo' },
    ced_ben2_p:   { pt: 'Pagamos o valor correto pelas suas cédulas, com total transparência nos critérios usados.', en: 'We pay the right value for your banknotes, with full transparency in the criteria used.', es: 'Pagamos el valor correcto por sus billetes, con total transparencia en los criterios utilizados.' },
    ced_ben3_h3:  { pt: 'Transação segura', en: 'Secure transaction', es: 'Transacción segura' },
    ced_ben3_p:   { pt: 'Operação regulamentada, com documentação e rastreabilidade em conformidade com o Banco Central.', en: 'Regulated operation, with documentation and traceability in compliance with the Central Bank.', es: 'Operación regulada, con documentación y trazabilidad en conformidad con el Banco Central.' },
    ced_what_ey:  { pt: 'O que avaliamos', en: 'What we assess', es: 'Lo que evaluamos' },
    ced_what_h2:  { pt: 'Quais cédulas a <span class="grad-text">Money Way compra</span>', en: 'Which banknotes <span class="grad-text">Money Way buys</span>', es: 'Qué billetes <span class="grad-text">compra Money Way</span>' },
    ced_type1_h3: { pt: 'Dólares antigos', en: 'Old dollars', es: 'Dólares antiguos' },
    ced_type1_p:  { pt: 'Notas de dólar americano de séries antigas, incluindo cédulas com design anterior a 1996 que podem ter valor acima do facial.', en: 'American dollar banknotes from old series, including notes with pre-1996 design that may have value above face.', es: 'Billetes de dólar americano de series antiguas, incluidos billetes con diseño anterior a 1996 que pueden tener valor sobre el facial.' },
    ced_type2_h3: { pt: 'Moedas europeias antigas', en: 'Old European currencies', es: 'Monedas europeas antiguas' },
    ced_type2_p:  { pt: 'Marcos alemães, liras italianas, francos franceses e outras moedas pré-Euro que ainda podem ter valor de mercado.', en: 'German marks, Italian liras, French francs and other pre-Euro currencies that may still have market value.', es: 'Marcos alemanes, liras italianas, francos franceses y otras monedas pre-Euro que aún pueden tener valor de mercado.' },
    ced_type3_h3: { pt: 'Raridades e coleções', en: 'Rare & special issues', es: 'Rarezas y ediciones especiales' },
    ced_type3_p:  { pt: 'Cédulas de edições comemorativas, erros de impressão, séries limitadas ou de países extintos com valor histórico.', en: 'Commemorative edition banknotes, printing errors, limited series or from extinct countries with historical value.', es: 'Billetes de ediciones conmemorativas, errores de impresión, series limitadas o de países extintos con valor histórico.' },
    ced_how_ey:   { pt: 'Como funciona', en: 'How it works', es: 'Cómo funciona' },
    ced_how_h2:   { pt: 'Do WhatsApp ao pagamento em <span style="font-style:italic">quatro passos</span>', en: 'From WhatsApp to payment in <span style="font-style:italic">four steps</span>', es: 'Del WhatsApp al pago en <span style="font-style:italic">cuatro pasos</span>' },
    ced_step1_h4: { pt: 'Você envia as fotos', en: 'You send the photos', es: 'Usted envía las fotos' },
    ced_step1_p:  { pt: 'Fotografe frente e verso das cédulas com boa iluminação e mande no nosso WhatsApp.', en: 'Photograph the front and back of the banknotes in good light and send to our WhatsApp.', es: 'Fotografíe el frente y dorso de los billetes con buena iluminación y envíe a nuestro WhatsApp.' },
    ced_step2_h4: { pt: 'Nossa equipe avalia', en: 'Our team assesses', es: 'Nuestro equipo evalúa' },
    ced_step2_p:  { pt: 'Especialistas analisam estado de conservação, série, raridade e procedência das notas.', en: 'Specialists analyse condition, series, rarity and origin of the banknotes.', es: 'Especialistas analizan el estado de conservación, serie, rareza y procedencia de los billetes.' },
    ced_step3_h4: { pt: 'Você recebe a proposta', en: 'You receive the offer', es: 'Usted recibe la propuesta' },
    ced_step3_p:  { pt: 'Apresentamos o valor de compra com critérios claros. Sem pressão para decidir.', en: 'We present the purchase value with clear criteria. No pressure to decide.', es: 'Presentamos el valor de compra con criterios claros. Sin presión para decidir.' },
    ced_step4_h4: { pt: 'Entrega e pagamento', en: 'Delivery and payment', es: 'Entrega y pago' },
    ced_step4_p:  { pt: 'Combinamos a entrega presencial ou por correspondência registrada, com pagamento imediato.', en: 'We arrange in-person delivery or registered mail, with immediate payment.', es: 'Acordamos la entrega presencial o por correo certificado, con pago inmediato.' },
    ced_faq_ey:   { pt: 'Dúvidas frequentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes' },
    ced_faq_h2:   { pt: 'Respostas sobre <span class="grad-text">cédulas antigas</span>', en: 'Answers about <span class="grad-text">old banknotes</span>', es: 'Respuestas sobre <span class="grad-text">billetes antiguos</span>' },
    ced_faq1_q:   { pt: 'Minhas notas velhas têm valor?', en: 'Do my old banknotes have value?', es: '¿Mis billetes viejos tienen valor?' },
    ced_faq1_a:   { pt: 'Depende da moeda, ano, série e conservação. Cédulas americanas antigas ainda são aceitas nos EUA pelo valor facial, mas séries antigas podem ter valor acima disso. Avaliamos caso a caso sem compromisso.', en: 'It depends on the currency, year, series and condition. Old American banknotes are still accepted in the US at face value, but old series may have value above that. We assess case by case without commitment.', es: 'Depende de la divisa, año, serie y conservación. Los billetes americanos antiguos aún son aceptados en EE.UU. por su valor facial, pero las series antiguas pueden tener valor por encima de eso. Evaluamos caso a caso sin compromiso.' },
    ced_faq2_q:   { pt: 'E se as notas estiverem amassadas ou rasgadas?', en: 'What if the banknotes are creased or torn?', es: '¿Y si los billetes están arrugados o rasgados?' },
    ced_faq2_a:   { pt: 'O estado de conservação influencia o valor, mas mesmo cédulas com desgaste podem ser avaliadas. Envie as fotos e nossa equipe dá um parecer honesto.', en: 'The condition affects the value, but even worn banknotes can be assessed. Send the photos and our team gives an honest opinion.', es: 'El estado de conservación influye en el valor, pero incluso los billetes desgastados pueden evaluarse. Envíe las fotos y nuestro equipo dará una opinión honesta.' },
    ced_faq3_q:   { pt: 'Vocês compram moedas metálicas também?', en: 'Do you also buy metal coins?', es: '¿También compran monedas metálicas?' },
    ced_faq3_a:   { pt: 'Trabalhamos principalmente com cédulas. Para moedas metálicas raras, entre em contato e analisamos o caso.', en: 'We mainly work with banknotes. For rare metal coins, contact us and we will analyse the case.', es: 'Trabajamos principalmente con billetes. Para monedas metálicas raras, contáctenos y analizamos el caso.' },
    ced_faq4_q:   { pt: 'Posso enviar as notas pelos Correios?', en: 'Can I send the banknotes by post?', es: '¿Puedo enviar los billetes por correo?' },
    ced_faq4_a:   { pt: 'Sim, para clientes fora de Porto Alegre trabalhamos com envio por SEDEX com declaração de valor. Combinamos os detalhes após a avaliação inicial por foto.', en: 'Yes, for clients outside Porto Alegre we work with SEDEX with declared value. We arrange the details after the initial photo assessment.', es: 'Sí, para clientes fuera de Porto Alegre trabajamos con envío SEDEX con declaración de valor. Acordamos los detalles después de la evaluación inicial por foto.' },
    ced_cta_strong: { pt: 'Tem cédulas antigas para avaliar?', en: 'Have old banknotes to assess?', es: '¿Tiene billetes antiguos para evaluar?' },
    ced_cta_span:   { pt: 'Mande as fotos no WhatsApp. Resposta com avaliação especializada em até 24 horas.', en: 'Send the photos on WhatsApp. Response with expert assessment within 24 hours.', es: 'Envíe las fotos por WhatsApp. Respuesta con evaluación especializada en hasta 24 horas.' },
    ced_cta_btn:    { pt: 'Chamar no WhatsApp', en: 'Chat on WhatsApp', es: 'Contactar por WhatsApp' },

    /* ===== TRANSFERENCIAS.HTML ===== */
    tf_h1:        { pt: 'Transferências <em>internacionais</em>', en: 'International <em>transfers</em>', es: 'Transferencias <em>internacionales</em>' },
    tf_lede:      { pt: 'Envie ou receba dinheiro do exterior com <strong>segurança, transparência e atendimento ágil</strong>. Operações autorizadas e regulamentadas pelo Banco Central do Brasil.', en: 'Send or receive money from abroad with <strong>security, transparency and fast service</strong>. Operations authorized and regulated by the Brazilian Central Bank.', es: 'Envíe o reciba dinero del exterior con <strong>seguridad, transparencia y atención ágil</strong>. Operaciones autorizadas y reguladas por el Banco Central de Brasil.' },
    tf_cta1:      { pt: 'Falar com especialista', en: 'Talk to a specialist', es: 'Hablar con especialista' },
    tf_cta2:      { pt: 'Ver cotações', en: 'See rates', es: 'Ver cotizaciones' },
    tf_ben1_h3:   { pt: 'Regulamentado pelo Banco Central', en: 'Regulated by the Central Bank', es: 'Regulado por el Banco Central' },
    tf_ben1_p:    { pt: 'Operações devidamente autorizadas e supervisionadas, com total conformidade legal.', en: 'Operations duly authorized and supervised, with full legal compliance.', es: 'Operaciones debidamente autorizadas y supervisadas, con total conformidad legal.' },
    tf_ben2_h3:   { pt: 'Atendimento ágil', en: 'Fast service', es: 'Atención ágil' },
    tf_ben2_p:    { pt: 'Operações processadas com rapidez. Você acompanha cada etapa com nosso suporte próximo.', en: 'Operations processed quickly. You follow each step with our close support.', es: 'Operaciones procesadas rápidamente. Usted sigue cada etapa con nuestro soporte cercano.' },
    tf_ben3_h3:   { pt: '100% online se preferir', en: '100% online if you prefer', es: '100% online si lo prefiere' },
    tf_ben3_p:    { pt: 'Todo o processo pode ser feito remotamente. Sem precisar sair de casa para fechar sua operação.', en: 'The entire process can be done remotely. No need to leave home to close your operation.', es: 'Todo el proceso puede hacerse de forma remota. Sin necesidad de salir de casa para cerrar su operación.' },
    tf_svc_ey:    { pt: 'O serviço', en: 'The service', es: 'El servicio' },
    tf_svc_h2:    { pt: 'Dinheiro pelo mundo, <span class="grad-text">sem complicação</span>', en: 'Money across the world, <span class="grad-text">no hassle</span>', es: 'Dinero por el mundo, <span class="grad-text">sin complicaciones</span>' },
    tf_prose1:    { pt: 'Oferecemos aos nossos clientes a possibilidade de efetuar ou receber transferências financeiras internacionais, devidamente autorizadas e regulamentadas pelo Banco Central do Brasil. Com a Money Way, você conta com total rapidez, transparência e segurança em todas as transações.', en: 'We offer our clients the ability to make or receive international financial transfers, duly authorized and regulated by the Brazilian Central Bank. With Money Way, you have full speed, transparency and security in all transactions.', es: 'Ofrecemos a nuestros clientes la posibilidad de realizar o recibir transferencias financieras internacionales, debidamente autorizadas y reguladas por el Banco Central de Brasil. Con Money Way, cuenta con total rapidez, transparencia y seguridad en todas las transacciones.' },
    tf_prose2:    { pt: 'Nosso atendimento pode ser totalmente online e garante que suas transferências sejam processadas de forma ágil e confiável, seja para enviar ou para receber valores do exterior.', en: 'Our service can be fully online and ensures that your transfers are processed quickly and reliably, whether sending or receiving funds from abroad.', es: 'Nuestra atención puede ser totalmente online y garantiza que sus transferencias sean procesadas de forma ágil y confiable, ya sea para enviar o recibir valores del exterior.' },
    tf_when_ey:   { pt: 'Quando usar', en: 'When to use', es: 'Cuándo usar' },
    tf_when_h2:   { pt: 'Em quais situações você pode <span class="grad-text">transferir</span>', en: 'In which situations can you <span class="grad-text">transfer</span>', es: 'En qué situaciones puede <span class="grad-text">transferir</span>' },
    tf_caso1_h3:  { pt: 'Disponibilidade de recursos no exterior ou transferência de patrimônio', en: 'Availability of funds abroad or asset transfer', es: 'Disponibilidad de recursos en el exterior o transferencia de patrimonio' },
    tf_caso1_p:   { pt: 'Operações entre contas de mesma titularidade, de uma conta sua no Brasil para o exterior ou vice-versa.', en: 'Operations between accounts of the same holder, from your account in Brazil to abroad or vice-versa.', es: 'Operaciones entre cuentas del mismo titular, de una cuenta suya en Brasil al exterior o viceversa.' },
    tf_caso2_h3:  { pt: 'Manutenção de residente no exterior', en: 'Support for a resident abroad', es: 'Mantenimiento de residente en el exterior' },
    tf_caso2_p:   { pt: 'Quando você tem filhos, cônjuge ou parentes próximos morando fora do Brasil e precisa enviar recursos regularmente.', en: 'When you have children, a spouse or close relatives living outside Brazil and need to send funds regularly.', es: 'Cuando tiene hijos, cónyuge o parientes cercanos viviendo fuera de Brasil y necesita enviar recursos regularmente.' },
    tf_caso3_h3:  { pt: 'Pagamento de cursos e eventos internacionais', en: 'Payment for international courses and events', es: 'Pago de cursos y eventos internacionales' },
    tf_caso3_p:   { pt: 'Pague matrículas, mensalidades e inscrições em programas no exterior de forma facilitada, sem grandes burocracias.', en: 'Pay enrolment fees, tuition and registrations for programmes abroad in an easy way, without major bureaucracy.', es: 'Pague matrículas, mensualidades e inscripciones en programas en el exterior de forma facilitada, sin grandes burocracias.' },
    tf_caso4_h3:  { pt: 'Processos de cidadania, vistos e documentação', en: 'Citizenship, visa and documentation processes', es: 'Procesos de ciudadanía, visas y documentación' },
    tf_caso4_p:   { pt: 'Pague honorários de advogados, taxas consulares e custos de processos de regularização migratória no exterior.', en: 'Pay attorney fees, consular fees and costs for immigration regularisation processes abroad.', es: 'Pague honorarios de abogados, tasas consulares y costos de procesos de regularización migratoria en el exterior.' },
    tf_caso5_h3:  { pt: 'Importação e exportação', en: 'Import and export', es: 'Importación y exportación' },
    tf_caso5_p:   { pt: 'Pagamento de comércio exterior para empresas que operam com fornecedores ou clientes em outros países.', en: 'International trade payments for companies operating with suppliers or clients in other countries.', es: 'Pago de comercio exterior para empresas que operan con proveedores o clientes en otros países.' },
    tf_sim_ey:    { pt: 'Simule agora', en: 'Simulate now', es: 'Simule ahora' },
    tf_sim_h2:    { pt: 'Preencha e fale com <span class="grad-text">um especialista</span>', en: 'Fill in and talk to <span class="grad-text">a specialist</span>', es: 'Complete y hable con <span class="grad-text">un especialista</span>' },
    tf_sim_sub:   { pt: 'Informe os dados abaixo e ao clicar em "Enviar" abriremos o WhatsApp com a mensagem já preparada.', en: 'Fill in the details below and clicking "Send" will open WhatsApp with the message ready.', es: 'Ingrese los datos a continuación y al hacer clic en "Enviar" abriremos WhatsApp con el mensaje listo.' },

    /* ===== VIAGEM.HTML ===== */
    vg_h1:        { pt: 'Passagem aérea e seguro de viagem <em>em um só lugar</em>', en: 'Flights and travel insurance <em>in one place</em>', es: 'Pasaje aéreo y seguro de viaje <em>en un solo lugar</em>' },
    vg_lede:      { pt: 'Na Money Way você resolve tudo para a sua viagem: <strong>passagens aéreas</strong> com atendimento de agente especializado e <strong>seguro viagem</strong> com cobertura completa para qualquer destino.', en: 'At Money Way you sort everything for your trip: <strong>flights</strong> with specialist agent service and <strong>travel insurance</strong> with full coverage for any destination.', es: 'En Money Way resuelve todo para su viaje: <strong>pasajes aéreos</strong> con atención de agente especializado y <strong>seguro de viaje</strong> con cobertura completa para cualquier destino.' },
    vg_cta1:      { pt: 'Falar com especialista', en: 'Talk to a specialist', es: 'Hablar con especialista' },
    vg_cta2:      { pt: 'Ver cotações', en: 'See rates', es: 'Ver cotizaciones' },
    vg_card1_h3:  { pt: 'Passagens Aéreas', en: 'Flights', es: 'Pasajes Aéreos' },
    vg_card1_p:   { pt: 'Nossos agentes especialistas encontram as melhores tarifas e roteiros para você. Mais praticidade, menos estresse.', en: 'Our specialist agents find the best fares and itineraries for you. More convenience, less stress.', es: 'Nuestros agentes especialistas encuentran las mejores tarifas e itinerarios para usted. Más practicidad, menos estrés.' },
    vg_card1_li1: { pt: 'Atendimento personalizado por agente especializado', en: 'Personalised service by specialist agent', es: 'Atención personalizada por agente especializado' },
    vg_card1_li2: { pt: 'Busca das melhores tarifas e conexões', en: 'Search for best fares and connections', es: 'Búsqueda de las mejores tarifas y conexiones' },
    vg_card1_li3: { pt: 'Roteiros nacionais e internacionais', en: 'Domestic and international itineraries', es: 'Itinerarios nacionales e internacionales' },
    vg_card1_li4: { pt: 'Planejamento completo da viagem', en: 'Complete trip planning', es: 'Planificación completa del viaje' },
    vg_card1_li5: { pt: 'Câmbio e seguro no mesmo atendimento', en: 'Exchange and insurance in the same appointment', es: 'Cambio y seguro en la misma atención' },
    vg_card1_btn: { pt: 'Solicitar passagem', en: 'Request flight', es: 'Solicitar pasaje' },
    vg_card2_h3:  { pt: 'Seguro Viagem', en: 'Travel Insurance', es: 'Seguro de Viaje' },
    vg_card2_p:   { pt: 'Viaje com tranquilidade. Coberturas completas para saúde, bagagem e imprevistos em qualquer destino do mundo.', en: 'Travel with peace of mind. Full coverage for health, luggage and unforeseen events at any destination worldwide.', es: 'Viaje con tranquilidad. Coberturas completas para salud, equipaje e imprevistos en cualquier destino del mundo.' },
    vg_card2_li1: { pt: 'Assistência médica e hospitalar', en: 'Medical and hospital assistance', es: 'Asistencia médica y hospitalaria' },
    vg_card2_li2: { pt: 'Cobertura de bagagem extraviada', en: 'Lost luggage coverage', es: 'Cobertura de equipaje extraviado' },
    vg_card2_li3: { pt: 'Cancelamento e atraso de voo', en: 'Flight cancellation and delay', es: 'Cancelación y demora de vuelo' },
    vg_card2_li4: { pt: 'Atende exigência do Tratado de Schengen', en: 'Meets Schengen Treaty requirements', es: 'Cumple exigencia del Tratado de Schengen' },
    vg_card2_li5: { pt: 'Planos para qualquer destino e duração', en: 'Plans for any destination and duration', es: 'Planes para cualquier destino y duración' },
    vg_card2_btn: { pt: 'Solicitar seguro', en: 'Request insurance', es: 'Solicitar seguro' },
    vg_sim_ey:    { pt: 'Simule agora', en: 'Simulate now', es: 'Simule ahora' },
    vg_sim_h2:    { pt: 'Preencha e fale com <span class="grad-text">um especialista</span>', en: 'Fill in and talk to <span class="grad-text">a specialist</span>', es: 'Complete y hable con <span class="grad-text">un especialista</span>' },
    vg_sim_sub:   { pt: 'Escolha o serviço abaixo, preencha os dados e ao clicar em "Enviar" abriremos o WhatsApp com a mensagem já pronta.', en: 'Choose the service below, fill in the details and clicking "Send" will open WhatsApp with the message ready.', es: 'Elija el servicio a continuación, complete los datos y al hacer clic en "Enviar" abriremos WhatsApp con el mensaje listo.' },
    vg_tab_seg:   { pt: 'Seguro de Viagem', en: 'Travel Insurance', es: 'Seguro de Viaje' },
    vg_tab_pas:   { pt: 'Passagem Aérea', en: 'Flight', es: 'Pasaje Aéreo' },
    vg_adv_ey:    { pt: 'Vantagem exclusiva', en: 'Exclusive advantage', es: 'Ventaja exclusiva' },
    vg_adv_h2:    { pt: 'Tudo junto: <span class="grad-text">câmbio, passagem e seguro</span>', en: 'All together: <span class="grad-text">exchange, flight and insurance</span>', es: 'Todo junto: <span class="grad-text">cambio, pasaje y seguro</span>' },
    vg_adv_p1:    { pt: 'Você não precisa ir a vários lugares para organizar sua viagem. Na Money Way, resolvemos o câmbio da moeda estrangeira, encontramos a passagem ideal com nosso agente especializado e emitimos o seguro viagem; tudo no mesmo atendimento.', en: 'You do not need to go to several places to organise your trip. At Money Way, we handle the foreign exchange, find the ideal flight with our specialist agent and issue the travel insurance; all in the same appointment.', es: 'No necesita ir a varios lugares para organizar su viaje. En Money Way, resolvemos el cambio de divisa extranjera, encontramos el pasaje ideal con nuestro agente especializado y emitimos el seguro de viaje; todo en la misma atención.' },
    vg_adv_p2:    { pt: 'Conte com a nossa experiência de mais de 20 anos para viajar com segurança e praticidade.', en: 'Count on our 20+ years of experience to travel with safety and convenience.', es: 'Cuente con nuestra experiencia de más de 20 años para viajar con seguridad y practicidad.' },
    vg_adv_cta:   { pt: 'Começar a planejar minha viagem', en: 'Start planning my trip', es: 'Empezar a planear mi viaje' },

    /* ===== PJ.HTML ===== */
    pj_ey:        { pt: 'Para empresas', en: 'For businesses', es: 'Para empresas' },
    pj_badge:     { pt: 'Cliente PJ, condições diferenciadas', en: 'Business client, preferential rates', es: 'Cliente PJ, condiciones diferenciadas' },
    pj_h1:        { pt: 'Câmbio empresarial com <span class="grad-text">taxas que fazem sentido</span>', en: 'Business FX with <span class="grad-text">rates that make sense</span>', es: 'Cambio empresarial con <span class="grad-text">tasas que tienen sentido</span>' },
    pj_sub:       { pt: 'Importação, exportação, pagamentos internacionais e remessas para sua empresa. Atendimento dedicado, cotação personalizada e agilidade que o seu negócio precisa.', en: 'Import, export, international payments and transfers for your company. Dedicated service, personalised rates and the agility your business needs.', es: 'Importación, exportación, pagos internacionales y remesas para su empresa. Atención dedicada, cotización personalizada y agilidad que su negocio necesita.' },
    pj_cta1:      { pt: 'Solicitar cotação PJ', en: 'Request business quote', es: 'Solicitar cotización PJ' },
    pj_cta2:      { pt: 'Ver cotações ao vivo', en: 'See live rates', es: 'Ver cotizaciones en vivo' },
    pj_diff1_p:   { pt: 'Spread médio para clientes PJ (abaixo do mercado)', en: 'Average spread for business clients (below market)', es: 'Spread promedio para clientes PJ (por debajo del mercado)' },
    pj_diff2_p:   { pt: 'Liquidação rápida para operações programadas', en: 'Fast settlement for scheduled operations', es: 'Liquidación rápida para operaciones programadas' },
    pj_diff3_p:   { pt: 'Moedas disponíveis para operações empresariais', en: 'Currencies available for business operations', es: 'Divisas disponibles para operaciones empresariales' },
    pj_diff4_p:   { pt: 'Gestor dedicado para sua conta empresarial', en: 'Dedicated manager for your business account', es: 'Gestor dedicado para su cuenta empresarial' },
    pj_live_ey:   { pt: 'Cotações ao vivo, spread PJ', en: 'Live rates, business spread', es: 'Cotizaciones en vivo, spread PJ' },
    pj_live_h2:   { pt: 'Taxas <span class="grad-text">para sua empresa</span>', en: 'Rates <span class="grad-text">for your company</span>', es: 'Tasas <span class="grad-text">para su empresa</span>' },
    pj_live_sub:  { pt: 'Valores de referência com spread PJ. Para fechamento e volume acima de US$ 5.000, solicite cotação personalizada.', en: 'Reference values with business spread. For closing and volume above US$ 5,000, request a personalised quote.', es: 'Valores de referencia con spread PJ. Para el cierre y volumen superior a US$ 5.000, solicite cotización personalizada.' },
    pj_strip_h2:  { pt: 'Precisa fechar uma operação agora?', en: 'Need to close a deal now?', es: '¿Necesita cerrar una operación ahora?' },
    pj_strip_p:   { pt: 'Nossa mesa de câmbio responde em até 15 minutos.', en: 'Our FX desk responds within 15 minutes.', es: 'Nuestra mesa de cambio responde en hasta 15 minutos.' },
    pj_strip_btn: { pt: 'Falar com a mesa de câmbio', en: 'Talk to the FX desk', es: 'Hablar con la mesa de cambio' },
    pj_why_ey:    { pt: 'Por que Money Way PJ', en: 'Why Money Way Business', es: 'Por qué Money Way PJ' },
    pj_why_h2:    { pt: 'Soluções que <span class="grad-text">acompanham seu negócio</span>', en: 'Solutions that <span class="grad-text">grow with your business</span>', es: 'Soluciones que <span class="grad-text">acompañan su negocio</span>' },
    pj_ben1_h3:   { pt: 'Taxas diferenciadas', en: 'Preferential rates', es: 'Tasas diferenciadas' },
    pj_ben1_p:    { pt: 'Spread reduzido para operações PJ. Quanto maior o volume, melhor a taxa negociada.', en: 'Reduced spread for business operations. The higher the volume, the better the negotiated rate.', es: 'Spread reducido para operaciones PJ. Cuanto mayor el volumen, mejor la tasa negociada.' },
    pj_ben2_h3:   { pt: 'Remessas internacionais', en: 'International transfers', es: 'Remesas internacionales' },
    pj_ben2_p:    { pt: 'Pagamento de fornecedores no exterior, recebimento de exportação e transferências corporativas.', en: 'Payment to overseas suppliers, export receipts and corporate transfers.', es: 'Pago de proveedores en el exterior, recepción de exportaciones y transferencias corporativas.' },
    pj_ben3_h3:   { pt: 'Conta global empresarial', en: 'Business global account', es: 'Cuenta global empresarial' },
    pj_ben3_p:    { pt: 'Movimente recursos em múltiplas moedas com uma conta multi-currency dedicada ao seu CNPJ.', en: 'Move funds in multiple currencies with a multi-currency account dedicated to your company.', es: 'Mueva recursos en múltiples divisas con una cuenta multi-currency dedicada a su empresa.' },
    pj_ben4_h3:   { pt: 'Gestor dedicado', en: 'Dedicated manager', es: 'Gestor dedicado' },
    pj_ben4_p:    { pt: 'Atendimento exclusivo com gestor que conhece o seu negócio e acompanha cada operação.', en: 'Exclusive service with a manager who knows your business and follows every operation.', es: 'Atención exclusiva con gestor que conoce su negocio y acompaña cada operación.' },
    pj_ben5_h3:   { pt: 'Documentação facilitada', en: 'Simplified documentation', es: 'Documentación facilitada' },
    pj_ben5_p:    { pt: 'Suporte completo na regularização de câmbio, SISCOMEX, BACEN e documentação de exportação/importação.', en: 'Full support in FX regularisation, SISCOMEX, BACEN and export/import documentation.', es: 'Soporte completo en la regularización de cambio, SISCOMEX, BACEN y documentación de exportación/importación.' },
    pj_ben6_h3:   { pt: 'Conformidade regulatória', en: 'Regulatory compliance', es: 'Conformidad regulatoria' },
    pj_ben6_p:    { pt: 'Operações auditáveis, conformes com as normas do BACEN e totalmente rastreáveis para sua contabilidade.', en: 'Auditable operations, compliant with BACEN regulations and fully traceable for your accounting.', es: 'Operaciones auditables, conformes con las normas del BACEN y totalmente rastreables para su contabilidad.' },
    pj_ie_ey:     { pt: 'Comércio exterior', en: 'International trade', es: 'Comercio exterior' },
    pj_ie_h2:     { pt: 'Câmbio para <span class="grad-text">importação e exportação</span>', en: 'FX for <span class="grad-text">import and export</span>', es: 'Cambio para <span class="grad-text">importación y exportación</span>' },
    pj_ie_sub:    { pt: 'A Money Way é correspondente cambial autorizado pelo Banco Central do Brasil. Facilitamos operações de câmbio para comércio exterior através de nossa corretora parceira, com total segurança regulatória e agilidade operacional.', en: 'Money Way is an exchange correspondent authorized by the Brazilian Central Bank. We facilitate FX operations for international trade through our partner broker, with full regulatory safety and operational agility.', es: 'Money Way es correspondiente cambiario autorizado por el Banco Central de Brasil. Facilitamos operaciones de cambio para comercio exterior a través de nuestra corredora asociada, con total seguridad regulatoria y agilidad operacional.' }
  };

  /* ---- renderer ---- */
  function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = T[key];
      if (!val || !val[lang]) return;
      var ic = el.querySelector('.ic');
      el.textContent = val[lang];
      if (ic) el.appendChild(ic);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = T[key];
      if (val && val[lang]) el.innerHTML = val[lang];
    });
    document.querySelectorAll('[data-i18n-pl]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-pl');
      var val = T[key];
      if (val && val[lang]) el.placeholder = val[lang];
    });
    /* page title */
    var page = document.body && document.body.getAttribute('data-page');
    var titleEl = document.querySelector('title');
    if (page && titleEl) {
      var tv = T[page + '_title'];
      if (tv && tv[lang]) titleEl.textContent = tv[lang];
    }
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    localStorage.setItem('mw-lang', lang);
  }

  function initSwitcher() {
    document.querySelectorAll('.lang-sw button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        document.querySelectorAll('.lang-sw button').forEach(function (b) {
          b.classList.toggle('active', b === btn);
        });
        setLang(lang);
      });
    });
    var saved = localStorage.getItem('mw-lang');
    if (saved && saved !== 'pt') {
      var btn = document.querySelector('.lang-sw button[data-lang="' + saved + '"]');
      if (btn) btn.click();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwitcher);
  } else {
    initSwitcher();
  }

  window.MW_SETLANG = setLang;
})();

/**
 * ============================================================================
 *  MANARI EXPERIÊNCIAS — CONTEÚDO DO SITE (arquivo central de edição)
 * ============================================================================
 *
 *  Edite TUDO por aqui: textos, contatos, links, experiências e imagens.
 *  É o único arquivo que você precisa abrir para ajustar o conteúdo do site.
 *
 *  Regras importantes (do briefing oficial):
 *  - Não inventar preço, disponibilidade, duração, mínimo de participantes
 *    ou locais específicos não confirmados.
 *  - Nenhuma experiência de bem-estar deve alegar cura médica ou benefício clínico.
 *  - Não criar endereço, CNPJ, horários, selos ou biografias extras.
 *  - As imagens vieram do material institucional: confirme o direito de uso
 *    comercial na web antes de publicar.
 * ============================================================================
 */

const IMG = "/images/manari";

/**
 * Dicionário de conteúdo em PORTUGUÊS (idioma principal).
 * Para adicionar inglês, veja a seção "IDIOMAS" no fim deste arquivo.
 */
const pt = {
  brand: {
    name: "MANARI EXPERIÊNCIAS",
    shortName: "MANARI",
    // Assinatura oficial da marca.
    signature: "Amazônia sensorial, imersiva e responsável",
    // Significado do nome (conceito oficial).
    meaning: "Manari significa acolhimento, riacho, corredeiras.",
    description:
      "MANARI Experiências cria vivências exclusivas e personalizadas na Amazônia e em Manaus — encontros autênticos que honram saberes ancestrais, despertam os sentidos e respeitam a natureza e as comunidades.",
  },

  /**
   * CONTATO — dados reais fornecidos pela empresa.
   */
  contact: {
    whatsapp: {
      number: "5592981270248", // DDI + DDD + número (apenas dígitos)
      display: "(92) 98127-0248",
      // Mensagem padrão (quando não é sobre uma experiência específica).
      message:
        "Olá, MANARI! Gostaria de conhecer as experiências e conversar sobre uma proposta personalizada.",
    },
    email: "manarieventos@gmail.com",
    instagram: {
      handle: "@manariexperiencias",
      url: "https://www.instagram.com/manariexperiencias/",
    },
  },

  nav: [
    { label: "Essência", href: "#essencia" },
    { label: "Experiências", href: "#experiencias" },
    { label: "Personalização", href: "#personalizacao" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],

  headerCta: "Fale com a MANARI",

  hero: {
    // Fotografia amazônica de grande impacto (fundo do hero).
    image: {
      src: "/images/manari/amazonia-hero.webp",
      alt: "Floresta amazônica banhada pela luz, vista do alto",
    },
    // Headline emocional sugerida (NÃO é o slogan oficial).
    headline: "A Amazônia se vive\ncom todos os sentidos.",
    support:
      "Experiências exclusivas e personalizadas em Manaus e na Amazônia — para sentir, viver e se conectar.",
    primaryCta: "Explorar experiências",
    primaryCtaHref: "#experiencias",
    secondaryCta: "Fale com a MANARI",
  },

  /**
   * DOIS CAMINHOS — dois públicos com igual destaque.
   */
  caminhos: {
    kicker: "Dois caminhos, uma Amazônia",
    intro:
      "Seja você de longe ou daqui, há um jeito MANARI de viver experiências que ficam.",
    items: [
      {
        title: "Para quem visita Manaus",
        text: "Descubra a Amazônia por dentro, com curadoria que vai além dos roteiros comuns — experiências sensoriais, culturais e exclusivas, pensadas para marcar a sua passagem.",
        cta: "Conhecer as experiências",
        href: "#experiencias",
      },
      {
        title: "Para quem vive Manaus",
        text: "Celebre datas, ocasiões e desejos com vivências singulares na sua própria cidade — novos olhares sobre a Amazônia que é sua, com o cuidado de quem conhece cada detalhe.",
        cta: "Conhecer as experiências",
        href: "#experiencias",
      },
    ],
  },

  /**
   * ESSÊNCIA MANARI — manifesto + 4 compromissos do propósito oficial.
   */
  essencia: {
    kicker: "Essência MANARI",
    title: "Mais do que turismo:\nsentir, viver e se conectar.",
    paragraphs: [
      "A MANARI nasceu do desejo de proporcionar encontros autênticos com a Amazônia. Cada detalhe é pensado para quem busca mais do que turismo — quem quer sentir, viver e se conectar.",
      "Manari significa acolhimento, riacho, corredeiras. É esse espírito que conduz cada experiência: o movimento das águas, a hospitalidade da floresta e o tempo que convida a estar presente.",
    ],
    compromissos: [
      { title: "Saberes ancestrais", text: "Honramos os conhecimentos e as culturas que vivem na floresta." },
      { title: "Sentidos despertos", text: "Criamos vivências que tocam o corpo, a memória e a emoção." },
      { title: "Respeito ao meio", text: "Cuidamos do meio ambiente e das comunidades em cada escolha." },
      { title: "Tempo e presença", text: "Valorizamos a natureza, o tempo e o estar inteiro no momento." },
    ],
  },

  /**
   * PORTFÓLIO — as 4 experiências oficiais.
   * `ctaLabel` é o botão de cada card; a mensagem de WhatsApp é montada
   * automaticamente com o nome exato da experiência.
   */
  experiences: {
    kicker: "Portfólio de experiências",
    title: "Quatro formas de viver a Amazônia",
    intro:
      "Experiências do portfólio institucional da MANARI. Todas podem ser personalizadas conforme perfil, datas, número de participantes e propósitos especiais.",
    ctaLabel: "Quero saber mais",
    items: [
      {
        slug: "encantaria-do-jambu",
        title: "Encantaria do Jambu",
        text: "Jantar imersivo para casais ou grupos, com etapas gastronômicas, música, apresentações culturais ao vivo e uma lembrança artesanal. Local a definir com o cliente.",
        image: { src: `${IMG}/encantaria-do-jambu.webp`, alt: "Encantaria do Jambu — jantar imersivo da MANARI" },
      },
      {
        slug: "rio-em-preto-e-ouro",
        title: "Rio em Preto & Ouro",
        text: "Passeio fluvial privativo de luxo ao pôr do sol no Rio Negro, com drinks amazônicos, música instrumental e performance poética.",
        image: { src: `${IMG}/rio-em-preto-e-ouro.webp`, alt: "Rio em Preto & Ouro — passeio fluvial ao pôr do sol no Rio Negro" },
      },
      {
        slug: "manari-receptivo",
        title: "Manari Receptivo",
        text: "Recepção personalizada para grupos em aeroporto, hotel, porto ou eventos, com kit de boas-vindas, snacks, drinks e música regional, adaptada ao local do cliente.",
        image: { src: `${IMG}/manari-receptivo-1.webp`, alt: "Manari Receptivo — recepção personalizada para grupos" },
        // Carrossel do card: a ordem aqui é a ordem de exibição. Para trocar/
        // adicionar foto, coloque o arquivo em /public/images/manari/ e edite
        // esta lista.
        gallery: [
          { src: `${IMG}/manari-receptivo-1.webp`, alt: "Manari Receptivo — mesas de boas-vindas montadas no deque do barco" },
          { src: `${IMG}/manari-receptivo-2.webp`, alt: "Manari Receptivo — espumantes amazônicos e taças no kit de boas-vindas" },
          { src: `${IMG}/manari-receptivo-3.webp`, alt: "Manari Receptivo — toalhas geladas de boas-vindas com bambu" },
          { src: `${IMG}/manari-receptivo-4.webp`, alt: "Manari Receptivo — buffet regional servido à beira do rio" },
          { src: `${IMG}/manari-receptivo-5.webp`, alt: "Manari Receptivo — recepção da equipe para o grupo" },
        ],
      },
      {
        slug: "manari-floating",
        title: "MANARI WELLNESS FLOATING",
        text: "Um dia no flutuante com manhã de bem-estar, massagens amazônicas e banhos terapêuticos, seguido de gastronomia local, lazer e passeio pelos rios, encerrando com um jantar especial servido em 3 etapas. (Ideal para casais e grupos).",
        image: { src: `${IMG}/manari-floating.webp`, alt: "MANARI WELLNESS FLOATING — um dia no flutuante com bem-estar e gastronomia" },
        // Galeria do carrossel da experiência-assinatura. Para adicionar uma
        // foto: coloque o arquivo em /public/images/manari/ e inclua mais um
        // item { src, alt } nesta lista — a ordem aqui é a ordem de exibição.
        gallery: [
          { src: `${IMG}/manari-floating.webp`, alt: "MANARI WELLNESS FLOATING — massagens amazônicas no flutuante à beira do rio" },
          { src: `${IMG}/manari-floating-massagem.webp`, alt: "MANARI WELLNESS FLOATING — massagem terapêutica em detalhe" },
          { src: `${IMG}/manari-floating-flutuante.webp`, alt: "MANARI WELLNESS FLOATING — vista do flutuante privativo na Amazônia" },
        ],
      },
    ],
  },

  /**
   * SOB MEDIDA — processo de personalização (sem prometer orçamento
   * instantâneo ou disponibilidade garantida).
   */
  personalizacao: {
    kicker: "Sob medida",
    title: "Uma experiência\ndesenhada com você",
    intro:
      "Nada aqui é de prateleira. A cada conversa, desenhamos algo que faça sentido para a sua ocasião.",
    ctaLabel: "Criar minha experiência",
    steps: [
      { title: "Compartilhe", text: "Conte a ocasião, o propósito e o que desperta o seu interesse." },
      { title: "Combinamos", text: "Alinhamos participantes, data e detalhes a partir do seu desejo." },
      { title: "Definimos juntos", text: "A proposta é construída diretamente com a MANARI, no seu tempo." },
    ],
  },

  /**
   * CULTURA E SENSORIALIDADE — galeria editorial de atmosferas.
   */
  galeria: {
    kicker: "Cultura e sensorialidade",
    title: "Gastronomia, rio, arte e contemplação",
    intro:
      "Um recorte visual das texturas da Amazônia que inspiram a MANARI.",
    images: [
      { src: `${IMG}/encantaria-do-jambu.webp`, alt: "Jantar imersivo com cultura local (MANARI)" },
      { src: `${IMG}/rio-em-preto-e-ouro.webp`, alt: "Rio Negro ao pôr do sol (MANARI)" },
      { src: `${IMG}/manari-floating-massagem.webp`, alt: "Massagem terapêutica amazônica no flutuante (MANARI)" },
      { src: `${IMG}/manari-floating-flutuante.webp`, alt: "Flutuante privativo na Amazônia (MANARI)" },
      { src: `${IMG}/manari-receptivo-2.webp`, alt: "Espumantes amazônicos de boas-vindas (MANARI)" },
      { src: `${IMG}/manari-receptivo-4.webp`, alt: "Buffet regional à beira do rio (MANARI)" },
    ],
  },

  /**
   * IDEALIZADORES — texto institucional, sem biografias adicionais.
   */
  idealizadores: {
    kicker: "Quem idealiza",
    title: "Idealizadores",
    intro:
      "A MANARI nasce do encontro de duas trajetórias dedicadas a cuidar de pessoas e de momentos.",
    // `photo`: deixe "" enquanto não houver foto oficial — o espaço fica
    // preparado para inserir o retrato depois (ex.: "/images/manari/amanda.webp").
    people: [
      { name: "Amanda Fadul", role: "Relações públicas e empresária no ramo de saúde e bem-estar", photo: "" },
      { name: "Raphael Galvão", role: "Advogado e empresário no ramo de eventos", photo: "" },
    ],
  },

  ctaFinal: {
    kicker: "Vamos começar",
    title: "Sua próxima experiência\ncom a Amazônia começa aqui.",
    text: "Conte a ocasião e o que você imagina. Nossa equipe responde pessoalmente pelo WhatsApp e desenha, com calma, uma experiência só sua.",
    whatsappLabel: "Conversar no WhatsApp",
    emailLabel: "Enviar um e-mail",
  },

  footer: {
    partnerLabel: "Seja nosso parceiro",
    partnerMessage:
      "Olá, MANARI! Tenho interesse em ser parceiro(a) e gostaria de conversar sobre possibilidades.",
    note: "Experiências exclusivas e personalizadas na Amazônia e em Manaus.",
  },
} as const;

/* ==========================================================================
 *  IDIOMAS (arquitetura simples PT/EN)
 * --------------------------------------------------------------------------
 *  - `pt` é o idioma PRINCIPAL e está 100% preenchido (acima).
 *  - `en` está PREPARADO como estrutura; hoje espelha o PT (placeholder).
 *    Para ativar o inglês de verdade: crie um objeto `en` com a MESMA forma
 *    de `pt`, traduzindo todos os textos, e troque `defaultLocale` para "en"
 *    (ou use um seletor de idioma). Veja o resumo de esforço no README.
 *  - Todos os componentes consomem `site`, que aponta para o idioma ativo —
 *    assim a troca de idioma acontece só aqui, sem mexer nos componentes.
 * ========================================================================== */

export type Locale = "pt" | "en";
export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

// Placeholder: enquanto o inglês não for traduzido, espelha o português.
const en = pt;

export const dictionaries: Record<Locale, typeof pt> = { pt, en };

/** Conteúdo do idioma ativo, consumido por todos os componentes. */
export const site = dictionaries[defaultLocale];

/** URL do WhatsApp com uma mensagem opcional (usa a padrão se nada for passado). */
export function whatsappUrl(message?: string): string {
  const number: string = site.contact.whatsapp.number;
  const text = message ?? site.contact.whatsapp.message;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** URL do WhatsApp para uma experiência específica, com o nome exato do produto. */
export function experienceWhatsappUrl(experienceTitle: string): string {
  return whatsappUrl(
    `Olá, MANARI! Tenho interesse em ${experienceTitle} e gostaria de conversar sobre uma proposta personalizada.`,
  );
}

export type Site = typeof site;

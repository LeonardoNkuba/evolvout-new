/**
 * Portfolio projects configuration
 * Define todos os projetos a serem exibidos no portfólio
 */

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "design" | "consulting";
  link?: string;
  linkLabel?: string;
  github?: string;
  details: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "polastore",
    title: "Polastore - E-commerce de Memórias",
    shortDescription: "Loja virtual de impressão de fotos e presentes",
    description: "Plataforma de e-commerce personalizada permitindo o upload e customização de fotos estilo Polaroid e presentes personalizados.",
    image: "/polar_store.webp",
    category: "web",
    tags: ["Next.js", "Stripe", "Image Processing", "UI/UX Design"],
    link: "https://instagram.com/polastore_",
    linkLabel: "Ver no Instagram",
    details: {
      challenge:
        "O processo de encomendas via DM do Instagram era manual e propenso a erros, dificultando a escala das vendas de itens personalizados.",
      solution:
        "Desenvolvimento de um e-commerce intuitivo com ferramenta de upload e crop de imagens em tempo real, integrando pagamentos e gestão de pedidos.",
      results: [
        "Fluxo digital para organizar encomendas",
        "Apresentação visual das opções personalizadas",
        "Experiência adaptada a dispositivos móveis",
      ],
    },
  },
  {
    id: "pea-angola",
    title: "PEA - Programa de Extensão Acadêmica",
    shortDescription: "Plataforma educacional e comunidade acadêmica",
    description: "Hub educacional completo para gestão de cursos, emissão de certificações e construção da maior comunidade acadêmica de Angola.",
    image: "/pea.webp",
    category: "web",
    tags: ["React", "Node.js", "LMS", "Community", "Database"],
    link: "https://instagram.com/pea.ao",
    linkLabel: "Ver no Instagram",
    details: {
      challenge:
        "Centralizar a comunicação, inscrições e entrega de conteúdos para uma comunidade acadêmica em rápido crescimento.",
      solution:
        "Criação de um portal do aluno robusto com áreas para cursos, validação de certificados digitais e networking entre membros.",
      results: [
        "Gestão centralizada de membros e conteúdos",
        "Emissão automatizada de certificações",
        "Centralização de parcerias e materiais didáticos",
      ],
    },
  },
  {
    id: "afrotalent",
    title: "AfroTalent - Conexão Internacional",
    shortDescription: "Portal de vagas e recrutamento Angola-Brasil",
    description: "Plataforma de RH focada em conectar talentos angolanos a oportunidades de trabalho remoto em empresas brasileiras.",
    image: "/afrotalent.webp",
    category: "consulting",
    tags: ["TypeScript", "Job Board", "Filter System", "Automation"],
    link: "https://www.afrotalent.com.br",
    linkLabel: "Abrir website",
    details: {
      challenge:
        "Dificuldade em filtrar candidatos qualificados e gerenciar o fluxo de aplicações entre dois países diferentes.",
      solution:
        "Implementação de um portal de vagas com filtros avançados de competências e sistema de triagem automatizada de currículos.",
      results: [
        "Fluxo de triagem organizado por competências",
        "Banco de talentos digitalizado e pesquisável",
        "Facilitação do onboarding remoto para empresas parceiras",
      ],
    },
  },
  {
    id: "planeta-virtual",
    title: "Planeta Virtual - Viagens & Turismo",
    shortDescription: "Consultoria de vistos e gestão de viagens",
    description: "Plataforma de apoio para agência de turismo, focada em consultoria de vistos, reservas de hotéis e pacotes de viagem.",
    image: "/planeta.webp",
    category: "web",
    tags: ["Booking System", "Visa Consulting", "Travel Tech", "Automation"],
    link: "https://linktr.ee/planetavirtual",
    linkLabel: "Abrir Linktree",
    details: {
      challenge:
          "A complexidade burocrática dos processos de vistos e a falta de centralização das informações de viagem geravam insegurança nos clientes.",
      solution:
          "Implementação de fluxos digitais para pré-avaliação de requisitos de visto e sistema unificado para gestão de pacotes turísticos.",
      results: [
        "Processo de visto apresentado com maior clareza",
        "Informações de viagem reunidas num único fluxo",
        "Comunicação clara dos requisitos para destinos internacionais",
      ],
    },
  },
  {
    id: "ponto-quente",
    title: "Ponto Quente - Delivery & Menu",
    shortDescription: "Sistema de pedidos digitais para gastronomia",
    description: "Solução digital para padaria e churrascaria, facilitando a visualização do cardápio e agilizando pedidos de takeaway e delivery.",
    image: "/pq.webp",
    category: "mobile",
    tags: ["React Native", "WhatsApp API", "Digital Menu", "Local SEO"],
    link: "https://linktr.ee/ponto_quente",
    linkLabel: "Abrir Linktree",
    details: {
      challenge:
        "Alto volume de pedidos em horários de pico causava congestionamento no atendimento telefônico e erros nos pedidos.",
      solution:
        "Cardápio digital interativo integrado à API do WhatsApp para envio de pedidos estruturados e diretos para a cozinha.",
      results: [
        "Agilidade no atendimento (Pede e Passa Pegar)",
        "Pedidos enviados num formato mais consistente",
        "Atualização em tempo real de itens do cardápio",
      ],
    },
  },
  {
    id: "okuti-angola",
    title: "Okuti Angola - Descubra a Aventura",
    shortDescription: "Plataforma digital de turismo e exploração de Angola",
    description: "Web app dedicado a promover o turismo nacional, destacando roteiros de aventura, cultura e as belezas naturais das províncias de Angola.",
    image: "/okuti.webp",
    category: "web",
    tags: ["Next.js", "Maps Integration", "Tourism", "UI Design"],
    link: "https://okuti-angola.vercel.app/",
    linkLabel: "Abrir website",
    details: {
      challenge:
        "O turismo em Angola carecia de uma plataforma digital moderna que centralizasse informações sobre roteiros de aventura e 'joias escondidas' do país de forma visualmente atraente.",
      solution:
        "Desenvolvimento de uma interface imersiva e rápida hospedada na Vercel, focada em contar histórias visuais e facilitar a descoberta de destinos locais.",
      results: [
        "Catálogo digital de destinos em expansão",
        "Interface otimizada para descoberta visual",
        "Promoção da identidade cultural e biodiversidade angolana",
      ],
    },
  },
  {
    id: "angola-startup",
    title: "Angola Startup - Ecossistema Empreendedor",
    shortDescription: "Portal de conteúdos e visibilidade para startups angolanas",
    description:
      "Plataforma web focada em fortalecer o ecossistema de inovação em Angola, conectando empreendedores, oportunidades e conteúdos estratégicos.",
    image: "/angohub.webp",
    category: "web",
    tags: ["Next.js", "Branding", "Startup Ecosystem", "Content Platform"],
    link: "https://angola-startup.vercel.app/",
    linkLabel: "Abrir website",
    details: {
      challenge:
        "Dar visibilidade a iniciativas empreendedoras locais e organizar informações úteis para quem está construindo uma startup em Angola.",
      solution:
        "Desenvolvimento de uma presença digital moderna e responsiva, com foco em comunicação clara, autoridade da marca e fácil acesso aos conteúdos.",
      results: [
        "Maior presença digital para o projeto Angola Startup",
        "Canal centralizado para apresentar iniciativas e conteúdos",
        "Experiência otimizada para navegação em dispositivos móveis",
      ],
    },
  },
];

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Aplicações" },
  { id: "consulting", label: "Consultoria" },
] as const;

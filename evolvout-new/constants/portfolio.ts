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
    image: "/polar_store.jpeg", // Certifique-se de ter essa imagem na pasta
    category: "web",
    tags: ["Next.js", "Stripe", "Image Processing", "UI/UX Design"],
    link: "https://instagram.com/polastore_",
    details: {
      challenge:
        "O processo de encomendas via DM do Instagram era manual e propenso a erros, dificultando a escala das vendas de itens personalizados.",
      solution:
        "Desenvolvimento de um e-commerce intuitivo com ferramenta de upload e crop de imagens em tempo real, integrando pagamentos e gestão de pedidos.",
      results: [
        "Automatização de 90% dos pedidos",
        "Aumento de 60% no ticket médio com upsell visual",
        "Melhoria na experiência do usuário mobile",
      ],
    },
  },
  {
    id: "pea-angola",
    title: "PEA - Programa de Extensão Acadêmica",
    shortDescription: "Plataforma educacional e comunidade acadêmica",
    description: "Hub educacional completo para gestão de cursos, emissão de certificações e construção da maior comunidade acadêmica de Angola.",
    image: "/pea.jpeg", // Certifique-se de ter essa imagem na pasta
    category: "web",
    tags: ["React", "Node.js", "LMS", "Community", "Database"],
    link: "https://instagram.com/pea.ao",
    details: {
      challenge:
        "Centralizar a comunicação, inscrições e entrega de conteúdos para uma comunidade acadêmica em rápido crescimento.",
      solution:
        "Criação de um portal do aluno robusto com áreas para cursos, validação de certificados digitais e networking entre membros.",
      results: [
        "Gestão eficiente de +100 membros ativos",
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
    image: "/afrotalent.jpeg", // Certifique-se de ter essa imagem na pasta
    category: "consulting",
    tags: ["TypeScript", "Job Board", "Filter System", "Automation"],
    link: "https://www.afrotalent.com.br",
    details: {
      challenge:
        "Dificuldade em filtrar candidatos qualificados e gerenciar o fluxo de aplicações entre dois países diferentes.",
      solution:
        "Implementação de um portal de vagas com filtros avançados de competências e sistema de triagem automatizada de currículos.",
      results: [
        "Redução de 50% no tempo de triagem",
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
    image: "/planeta.jpeg", // Lembre-se de salvar a imagem com este nome
    category: "web",
    tags: ["Booking System", "Visa Consulting", "Travel Tech", "Automation"],
    link: "https://linktr.ee/planetavirtual",
    details: {
      challenge:
          "A complexidade burocrática dos processos de vistos e a falta de centralização das informações de viagem geravam insegurança nos clientes.",
      solution:
          "Implementação de fluxos digitais para pré-avaliação de requisitos de visto e sistema unificado para gestão de pacotes turísticos.",
      results: [
        "Maior taxa de aprovação em processos de visto",
        "Otimização do tempo de agendamento de viagens",
        "Comunicação clara dos requisitos para destinos internacionais",
      ],
    },
  },
  {
    id: "ponto-quente",
    title: "Ponto Quente - Delivery & Menu",
    shortDescription: "Sistema de pedidos digitais para gastronomia",
    description: "Solução digital para padaria e churrascaria, facilitando a visualização do cardápio e agilizando pedidos de takeaway e delivery.",
    image: "/pq.jpeg", // Certifique-se de ter essa imagem na pasta
    category: "mobile",
    tags: ["React Native", "WhatsApp API", "Digital Menu", "Local SEO"],
    link: "https://linktr.ee/ponto_quente",
    details: {
      challenge:
        "Alto volume de pedidos em horários de pico causava congestionamento no atendimento telefônico e erros nos pedidos.",
      solution:
        "Cardápio digital interativo integrado à API do WhatsApp para envio de pedidos estruturados e diretos para a cozinha.",
      results: [
        "Agilidade no atendimento (Pede e Passa Pegar)",
        "Redução drástica de erros nos pedidos",
        "Atualização em tempo real de itens do cardápio",
      ],
    },
  },
  {
    id: "okuti-angola",
    title: "Okuti Angola - Descubra a Aventura",
    shortDescription: "Plataforma digital de turismo e exploração de Angola",
    description: "Web app dedicado a promover o turismo nacional, destacando roteiros de aventura, cultura e as belezas naturais das províncias de Angola.",
    image: "/okuti.jpeg", // Renomeie a imagem do logo para este nome
    category: "web",
    tags: ["Next.js", "Maps Integration", "Tourism", "UI Design"],
    link: "https://okuti-angola.vercel.app/",
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
];

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
  { id: "consulting", label: "Consulting" },
] as const;
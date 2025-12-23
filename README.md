# EvolvOut - Modern Landing Page

## 🇦🇴 Transformando Ideias em Soluções Digitais Inteligentes

![EvolvOut Banner](https://img.shields.io/badge/EvolvOut-ONDE%20A%20MUDANÇA%20COMEÇA-00ff88?style=for-the-badge&logoColor=white)
![Angola Tech](https://img.shields.io/badge/MADE%20IN-ANGOLA-FF0000?style=for-the-badge&logo=angola&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-08122c?style=for-the-badge&logo=responsive)
![Modern Design](https://img.shields.io/badge/Design-Modern-00ff88?style=for-the-badge)

> Uma landing page moderna e interativa para a **EvolvOut**, empresa angolana de inovação, design, marketing e tecnologia. Criamos experiências reais e práticas para negócios que desejam crescer no mundo digital.

## 🎨 Demonstração

![EvolvOut Preview](https://img.shields.io/badge/Preview-Live%20Demo-08122c?style=for-the-badge)
🔗 **Demo Link**: [Em breve]

## ✨ Características Principais

### 🎯 **Design Moderno Angolano**
- 🎨 Paleta de cores exclusiva (`#08122c` + `#00ff88`)
- 🌙 Modo escuro como padrão
- 📱 Design 100% responsivo
- 🌀 Animações suaves e interativas

### 💡 **Seções Completas**
1. **Hero Section** - Apresentação impactante com gradientes dinâmicos
2. **Serviços** - 4 categorias de soluções digitais com hover effects
3. **Estatísticas** - Números interativos que falam por nós
4. **Sobre Nós** - Missão e valores da empresa
5. **Depoimentos** - Carrossel automático de clientes satisfeitos
6. **FAQ** - Acordeão interativo de perguntas frequentes
7. **Contacto** - Formulário moderno com validação
8. **Footer** - Informações completas com newsletter

### 🛠 **Tecnologias Utilizadas**


⚛️ Next.js 13+ - Framework React com App Router

📘 TypeScript - Tipagem estática para melhor desenvolvimento

🎨 Tailwind CSS - Framework CSS utility-first

✨ Framer Motion - Animações fluidas e interativas

🎯 React Hook Form - Gerenciamento de formulários

📦 Lucide React - Ícones modernos e leves

## 🚀 Começando

### Pré-requisitos
- Navegador moderno (Chrome 90+, Firefox 88+, Safari 14+)
- Editor de código (VS Code recomendado)
- Git instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/evolvout.git

# Entre no diretório
cd evolvout-new 

# Abra no VS Code
code .

# Execute com Live Server
# Ou simplesmente abra index.html no navegador
```

### Estrutura do Projeto
```
evolvout/
├── 📁 app/                    # App Router (Next.js 13+)
│   ├── 📄 layout.tsx         # Layout principal
│   ├── 📄 page.tsx           # Página inicial
│   └── 📁 components/        # Componentes da página
├── 📁 components/            # Componentes reutilizáveis
│   ├── 📁 ui/               # Componentes UI básicos
│   ├── 📁 sections/         # Seções da landing page
│   └── 📁 effects/          # Efeitos e animações
├── 📁 lib/                  # Utilitários e helpers
│   ├── 📄 utils.ts          # Funções utilitárias
│   └── 📄 cn.ts             # clsx + tailwind-merge
├── 📁 constants/            # Constantes e dados
│   ├── 📄 theme.ts          # Cores e temas
│   ├── 📄 features.ts       # Serviços e features
│   ├── 📄 stats.ts          # Estatísticas
│   ├── 📄 testimonials.ts   # Depoimentos
│   └── 📄 faq.ts           # Perguntas frequentes
├── 📁 public/               # Assets estáticos
│   ├── 📁 images/          # Imagens otimizadas
│   └── 📁 icons/           # Ícones e SVGs
├── 📁 styles/              # Estilos globais
│   └── 📄 globals.css      # CSS global e Tailwind
├── tailwind.config.js      # Configuração do Tailwind
├── tsconfig.json          # Configuração TypeScript
├── next.config.js         # Configuração Next.js
└── package.json           # Dependências do projeto
```

## 🎨 Personalização

### Cores da Marca
```css
:root {
  --primary-dark: #08122c;      /* Azul marinho profundo */
  --primary-accent: #00ff88;    /* Verde/Ciano elétrico */
  --secondary-dark: #0a1a3a;    /* Azul secundário */
  --light-bg: #f5f7fa;          /* Fundo claro */
}
```

### Atualizar Conteúdo
1. **Texto**: Edite diretamente no `index.html`
2. **Imagens**: Substitua em `assets/images/`
3. **Cores**: Modifique as variáveis CSS
4. **Contactos**: Atualize no footer e seção de contacto

## 📱 Responsividade

| Dispositivo | Breakpoint | Características |
|------------|------------|-----------------|
| 📱 Mobile | < 640px | Layout vertical, menus compactos |
| 📟 Tablet | 640px - 1024px | Grid adaptável, tipografia média |
| 💻 Desktop | > 1024px | Layout completo, animações totais |

## ⚡ Performance

![Performance](https://img.shields.io/badge/Performance-Optimized-00ff88?style=for-the-badge)
- ⚡ Carregamento rápido (< 3s)
- 🖼️ Imagens otimizadas
- 📦 CSS/JS minificados (em produção)
- 🔄 Lazy loading para imagens

## ♿ Acessibilidade

![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG%202.1%20AA-08122c?style=for-the-badge)
- ✅ HTML semântico
- ✅ Navegação por teclado
- ✅ Contraste de cores adequado
- ✅ ARIA labels implementados

## 🚀 Deployment

### Opções Simples

1. **Netlify** (Recomendado)
```bash
# Instale o CLI do Netlify
npm install netlify-cli -g

# Faça deploy
netlify deploy
```

2. **Vercel**
```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

3. **GitHub Pages**
- Push para o repositório
- Settings → Pages → Source: main branch

## 📊 Estatísticas do Projeto

![GitHub repo size](https://img.shields.io/github/repo-size/seu-usuario/evolvout-landing?color=00ff88&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/seu-usuario/evolvout-landing?color=08122c&style=for-the-badge)
![Lines of code](https://img.shields.io/tokei/lines/github/seu-usuario/evolvout-landing?color=00ff88&style=for-the-badge)

## 📞 Contacto da EvolvOut

### Informações Empresariais
- **📍 Localização**: Luanda, Angola
- **📧 Email**: contacto@evolvout.com
- **📞 Telefone**: +244 945 367 487
- **🌐 Website**: www.evolvout.com

### Serviços Oferecidos
- 🎯 Marketing Digital
- 💻 Desenvolvimento Web & Apps
- 🎨 Design & Audiovisual
- ⚙️ Hardware & Software

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da **EvolvOut**. Todos os direitos reservados.

## 🙏 Reconhecimentos

- Design inspirado em [mungenstudio.framer.website](https://mungenstudio.framer.website/)
- Ícones por [Font Awesome](https://fontawesome.com/)
- Fontes por [Google Fonts](https://fonts.google.com/)
- Avatares por [DiceBear](https://dicebear.com/)

---

## 🎯 Missão da EvolvOut

> "Transformamos ideias em soluções digitais inteligentes. Criamos experiências reais e práticas para negócios que desejam crescer e se adaptar ao novo mundo digital."

**Para a nova geração angolana 🇦🇴**

---

<div align="center">

### ✨ Feito com ❤️ para o crescimento digital de Angola

[![EvolvOut Logo](https://img.shields.io/badge/EVOLVOUT-ONDE%20A%20MUDANÇA%20COMEÇA-00ff88?style=for-the-badge&logo=star&logoColor=white)](https://github.com/seu-usuario/evolvout-landing)

*"Inovação digital para o futuro de Angola"*

</div>

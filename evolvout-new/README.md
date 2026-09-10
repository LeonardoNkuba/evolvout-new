# EvolvOut

Landing page institucional da EvolvOut, uma empresa angolana de tecnologia, design e estratégia digital.

Produção: [www.evolvout.com](https://www.evolvout.com)

## Funcionalidades

- Apresentação dos serviços e processo de trabalho
- Portfólio com estudos de caso acessíveis
- Formulário de contacto integrado à API da Resend
- Protecção básica contra spam e abuso no formulário
- Páginas de suporte, documentação, privacidade, termos e cookies
- Metadados Open Graph e Twitter
- Sitemap, robots.txt, manifesto e dados estruturados
- Vercel Analytics e eventos de conversão
- Interface responsiva e suporte a movimento reduzido

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion para animações pontuais
- Radix UI
- Lucide React
- Vercel Analytics

## Requisitos

- Node.js 20 ou mais recente
- npm
- Uma conta Resend e um domínio de envio verificado para o formulário em produção

## Instalação

```bash
git clone <URL-DO-REPOSITORIO>
cd evolvout-new/evolvout-new
npm install
cp .env.example .env.local
npm run dev
```

A aplicação fica disponível em [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Crie `.env.local` a partir de `.env.example`:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=contacto@evolvout.com
CONTACT_FROM_EMAIL=noreply@evolvout.com
```

- `RESEND_API_KEY`: chave utilizada para enviar mensagens.
- `CONTACT_EMAIL`: endereço que recebe os pedidos enviados pelo site.
- `CONTACT_FROM_EMAIL`: remetente verificado no Resend.

Consulte [EMAIL_SETUP.md](./EMAIL_SETUP.md) para a configuração detalhada do email.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento
npm run lint     # análise estática
npm run build    # build de produção e validação TypeScript
npm start        # inicia o build de produção
```

## Estrutura principal

```text
app/
  api/contact/       Endpoint do formulário
  layout.tsx         Metadados, Analytics e dados estruturados
  page.tsx           Composição da página principal
  manifest.ts        Manifesto web
  robots.ts          Regras para motores de pesquisa
  sitemap.ts         Mapa do site
components/
  layout/            Cabeçalho e navegação
  sections/          Secções da landing page
  ui/                Componentes de interface reutilizáveis
constants/           Conteúdo e configurações da página
public/              Imagens optimizadas e identidade visual
```

## Actualização de conteúdo

- Serviços: `constants/features.ts`
- Portfólio: `constants/portfolio.ts`
- FAQ: `constants/faq.ts`
- Navegação: `constants/navigation.ts`
- Contactos: `components/sections/Contact.tsx` e `components/sections/Footer.tsx`

Ao adicionar um projecto ao portfólio, inclua uma imagem WebP optimizada, descrição, desafio, solução, destaques e um link público verificável.

## Formulário de contacto

O endpoint valida tipo, conteúdo e tamanho dos campos, escapa texto inserido no email, utiliza um honeypot e aplica limitação básica por endereço IP. Em ambientes serverless, a limitação em memória não substitui uma solução persistente como Vercel KV ou Upstash Redis.

## Verificação antes de publicar

```bash
npm run lint
npm run build
```

Antes de cada publicação, confirme também:

- Contactos e links externos
- Conteúdo e responsabilidade da EvolvOut em cada projecto
- Variáveis de ambiente da Resend
- Políticas legais aplicáveis ao negócio
- Visualização em dispositivos móveis

## Deploy

O projecto está preparado para a Vercel. Configure as variáveis de ambiente no projecto, faça o deploy e confirme o envio do formulário no domínio de produção.

## Direitos

© EvolvOut. Todos os direitos reservados.

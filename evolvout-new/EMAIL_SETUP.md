# 📧 Configuração de Email - EvolvOut

## Guia Rápido de Configuração

Este documento descreve como configurar o envio de emails para o formulário de contacto da EvolvOut.

### Opção 1: Resend (Recomendado) ✅

Resend é o serviço mais simples de configurar e oferece plano gratuito.

#### Passos:
1. Acesse [resend.com](https://resend.com) e crie uma conta
2. Copie sua API key da dashboard
3. Crie um arquivo `.env.local` na raiz do projeto:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=contacto@evolvout.com
```
4. Reinicie o servidor: `npm run dev`
5. Teste o formulário em `http://localhost:3000/#contact`

**Benefícios:**
- Configuração simples
- Plano gratuito: 100 emails/dia
- Sem cartão de crédito necessário
- Excelente entregabilidade

---

### Opção 2: SendGrid

#### Passos:
1. Acesse [sendgrid.com](https://sendgrid.com) e crie uma conta
2. Vá para Settings → API Keys
3. Crie uma nova API key (com permissão "Mail Send")
4. Adicione ao `.env.local`:
```
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxx
```

---

### Opção 3: Gmail + Nodemailer

#### Passos:
1. Ative 2FA na sua conta Google
2. Crie uma [App Password](https://myaccount.google.com/apppasswords)
3. Instale nodemailer:
```bash
npm install nodemailer
npm install -D @types/nodemailer
```
4. Adicione ao `.env.local`:
```
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_app_password_16_caracteres
```
5. Modifique `app/api/contact/route.ts` para usar nodemailer

---

## 🔒 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# Resend (Recomendado)
RESEND_API_KEY=your_key_here
CONTACT_EMAIL=contacto@evolvout.com

# Ou SendGrid
SENDGRID_API_KEY=your_key_here

# Ou Gmail
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=seu_app_password
```

**Importante:** Nunca commite `.env.local` para o repositório!

---

## ✅ Testando a Configuração

1. Inicie o servidor:
```bash
npm run dev
```

2. Navegue para `http://localhost:3000`

3. Preencha o formulário "Entre em Contacto"

4. Clique "Enviar Mensagem"

5. Verifique:
   - **Desenvolvimento:** Mensagem aparecerá no console
   - **Produção:** Email será enviado para `CONTACT_EMAIL`

---

## 🔧 Implementação Personalizada

Se deseja usar outro serviço de email, edite `app/api/contact/route.ts`:

```typescript
async function sendEmail(data: ContactFormData): Promise<boolean> {
  // Adicione sua lógica de email aqui
  // Use fetch, SDK ou biblioteca específica do serviço
}
```

---

## 📋 Páginas Criadas

### Legais
- `/privacy` - Política de Privacidade
- `/terms` - Termos e Condições
- `/cookies` - Política de Cookies

### Recursos
- `/docs` - Documentação
- `/support` - Centro de Suporte

Todos os links foram atualizados no Footer para apontar a estas páginas.

---

## 🚀 Deploy em Produção

Quando fizer deploy (Vercel, Netlify, etc):

1. Adicione a variável de ambiente no painel de controle:
   ```
   RESEND_API_KEY=sua_chave_real
   CONTACT_EMAIL=contacto@evolvout.com
   ```

2. Redeploy a aplicação

3. Teste o formulário no site em produção

---

## 📞 Suporte

Para questões sobre a configuração de email:
- Email: contacto@evolvout.com
- WhatsApp: +244 945 367 487
- Página de Suporte: /support

---

**Última atualização:** 29 de dezembro de 2025

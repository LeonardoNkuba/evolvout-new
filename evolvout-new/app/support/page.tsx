'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/theme';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Mail, Phone, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const faqItems = {
    general: [
      {
        q: 'Como posso entrar em contacto com a EvolvOut?',
        a: 'Você pode nos contactar através do formulário de contacto na página inicial, por email em contacto@evolvout.com, ou por WhatsApp no +244 945 367 487.',
      },
      {
        q: 'Qual é o tempo de resposta esperado?',
        a: 'Respondemos a todas as enquiries dentro de 24 horas em dias úteis (segunda a sexta, 9h às 18h).',
      },
      {
        q: 'Vocês oferecem suporte em português?',
        a: 'Sim! Oferecemos suporte completo em português angolano e português europeu.',
      },
    ],
    technical: [
      {
        q: 'Como integro a API da EvolvOut?',
        a: 'Consulte a nossa documentação em /docs para guias de integração completos e exemplos de código.',
      },
      {
        q: 'Quais são os requisitos de sistema?',
        a: 'Os nossos serviços funcionam em qualquer navegador moderno e plataforma que suporte HTTP/HTTPS.',
      },
      {
        q: 'Existe limite de requisições na API?',
        a: 'Limites específicos dependem do seu plano de serviço. Entre em contacto para mais informações.',
      },
    ],
    billing: [
      {
        q: 'Como funciona o modelo de preços?',
        a: 'Oferecemos diferentes planos conforme suas necessidades. Contacte-nos para uma cotação personalizada.',
      },
      {
        q: 'Posso cancelar minha subscrição a qualquer momento?',
        a: 'Sim! Pode cancelar sua subscrição a qualquer momento sem penalidades.',
      },
      {
        q: 'Oferecem testes gratuitos?',
        a: 'Sim, oferecemos períodos de teste gratuito para novos clientes. Contacte-nos para mais detalhes.',
      },
    ],
  };

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Envie-nos um email',
      value: 'contacto@evolvout.com',
      href: 'mailto:contacto@evolvout.com',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      description: 'Chat rápido',
      value: '+244 945 367 487',
      href: 'https://wa.me/244945367487',
    },
    {
      icon: MessageSquare,
      title: 'Formulário',
      description: 'Entre em contacto conosco',
      value: 'Formulário de contacto',
      href: '/#contact',
    },
    {
      icon: Clock,
      title: 'Horário',
      description: 'Segunda a Sexta',
      value: '9h às 18h',
      href: '#',
    },
  ];

  return (
    <main
      className="relative min-h-screen"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header com volta */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-green-500 transition">
            <ArrowLeft size={20} />
            Voltar
          </Link>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">Centro de Suporte</h1>
          <p className="text-xl text-gray-400 mb-12">
            Estamos aqui para ajudar. Encontre respostas rápidas ou contacte-nos diretamente.
          </p>

          {/* Support Channels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={idx}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-green-500/50 hover:bg-green-500/5 transition group cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-green-500/20 w-fit mb-4 group-hover:bg-green-500/30 transition">
                    <Icon className="text-green-500" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{channel.description}</p>
                  <p className="text-green-400 font-medium">{channel.value}</p>
                </motion.a>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Perguntas Frequentes</h2>

            {/* Category Selector */}
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.keys(faqItems).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-6 py-2 rounded-full font-medium transition',
                    selectedCategory === category
                      ? 'bg-green-500 text-slate-950'
                      : 'border border-white/20 text-gray-300 hover:text-white'
                  )}
                >
                  {category === 'general' && 'Geral'}
                  {category === 'technical' && 'Técnico'}
                  {category === 'billing' && 'Faturamento'}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqItems[selectedCategory as keyof typeof faqItems].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-green-500 mt-1">Q:</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex items-start gap-3">
                    <span className="text-green-400 mt-1">A:</span>
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-green-500/30 bg-green-500/10 backdrop-blur-sm p-12 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-lg bg-green-500/20">
                <AlertCircle className="text-green-500" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Não encontrou a resposta?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nosso equipe está disponível para ajudar. Contacte-nos através de qualquer um dos canais acima ou use o formulário de contacto.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 rounded-lg bg-green-500 text-slate-950 font-semibold hover:bg-green-400 transition"
            >
              Enviar Mensagem
            </Link>
          </motion.div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 mb-2">
              Tempo de resposta médio: <span className="text-white font-semibold">24 horas</span>
            </p>
            <p className="text-gray-400">
              Última atualização: {new Date().toLocaleDateString('pt-PT')}
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

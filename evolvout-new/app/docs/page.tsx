'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/theme';
import Link from 'next/link';
import { ArrowLeft, FileText, Code, BookOpen, HelpCircle } from 'lucide-react';

export default function DocsPage() {
  const sections = [
    {
      title: 'Começar',
      icon: BookOpen,
      items: [
        { label: 'Introdução', id: 'intro' },
        { label: 'Instalação', id: 'install' },
        { label: 'Configuração Inicial', id: 'setup' },
      ],
    },
    {
      title: 'Guias',
      icon: FileText,
      items: [
        { label: 'Usar Serviços', id: 'services' },
        { label: 'Integração API', id: 'api' },
        { label: 'Melhores Práticas', id: 'practices' },
      ],
    },
    {
      title: 'Desenvolvimento',
      icon: Code,
      items: [
        { label: 'Arquitetura', id: 'arch' },
        { label: 'Componentes', id: 'components' },
        { label: 'Exemplos de Código', id: 'examples' },
      ],
    },
    {
      title: 'FAQ',
      icon: HelpCircle,
      items: [
        { label: 'Perguntas Frequentes', id: 'faq' },
        { label: 'Solução de Problemas', id: 'troubleshooting' },
        { label: 'Suporte', id: 'support' },
      ],
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
          <h1 className="text-5xl font-bold text-white mb-4">Documentação</h1>
          <p className="text-xl text-gray-400 mb-12">
            Tudo o que você precisa saber sobre os nossos serviços e soluções
          </p>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-green-500/50 transition"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-green-500/20">
                      <Icon className="text-green-500" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>

                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                      >
                        <a
                          href={`#${item.id}`}
                          className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500/60 group-hover:bg-green-400 transition" />
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section id="intro" className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Introdução</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bem-vindo à documentação da EvolvOut! Aqui você encontrará guias detalhados, exemplos de código e melhores práticas para utilizar os nossos serviços.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nossa plataforma foi projetada para ser fácil de usar e altamente personalizada para atender às suas necessidades específicas.
              </p>
            </section>

            <section id="install" className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Instalação & Configuração</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Para começar a usar os nossos serviços, siga estes passos simples:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-300 mb-6">
                <li>Crie uma conta no nosso platform</li>
                <li>Configure seu perfil e preferências</li>
                <li>Integre a API (se necessário)</li>
                <li>Comece a utilizar os serviços</li>
              </ol>
              <p className="text-gray-300 leading-relaxed">
                Para questões detalhadas, consulte nossos <Link href="/support" className="text-green-400 hover:text-green-300">recursos de suporte</Link>.
              </p>
            </section>

            <section id="api" className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Integração da API</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nossa API RESTful fornece acesso programático a todos os recursos da plataforma.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
{`POST /api/contact
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "subject": "Meu projeto",
  "message": "Gostaria de conversar..."
}`}
                </pre>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Todas as requisições devem incluir headers apropriados e validação de entrada.
              </p>
            </section>

            <section id="support" className="rounded-xl border border-green-500/30 bg-green-500/10 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Precisa de Ajuda?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Se tiver dúvidas ou precisar de suporte adicional, não hesite em entrar em contacto connosco.
              </p>
              <Link
                href="/support"
                className="inline-block px-6 py-3 rounded-lg bg-green-500 text-slate-950 font-semibold hover:bg-green-400 transition"
              >
                Contactar Suporte
              </Link>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              Última atualização: {new Date().toLocaleDateString('pt-PT')}
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

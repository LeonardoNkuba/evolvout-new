'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/theme';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introdução</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A EvolvOut ("nós", "nosso" ou "EvolvOut") é responsável pela proteção dos seus dados pessoais e está comprometida com a transparência na forma como os utilizamos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Informações que Recolhemos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Recolhemos informações que você nos fornece voluntariamente através de formulários de contato, incluindo:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
                <li>Mensagens e conteúdo de comunicação</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Como Utilizamos os Seus Dados</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Os dados pessoais que recolhemos são utilizados para:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Responder às suas enquiries e solicitações</li>
                <li>Enviar comunicações relacionadas com os nossos serviços</li>
                <li>Melhorar a experiência do utilizador</li>
                <li>Cumprir com obrigações legais</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Segurança dos Dados</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Seus Direitos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Acessar os seus dados pessoais</li>
                <li>Solicitar a correção de dados inexatos</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Revogar o seu consentimento</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contacto</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Para questões sobre esta política de privacidade, entre em contato conosco em: <br />
                <span className="text-green-500 font-semibold">contacto@evolvout.com</span>
              </p>
            </section>

            <section className="mb-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Última atualização: {new Date().toLocaleDateString('pt-PT')}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/theme';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
          <h1 className="text-5xl font-bold text-white mb-8">Termos e Condições</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ao acessar e utilizar o website da EvolvOut, você concorda em aceitar e estar vinculado pelos termos e condições definidos neste documento.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Licença de Utilização</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A EvolvOut concede-lhe uma licença limitada, não-exclusiva e revogável para acessar e utilizar este website para fins pessoais e não comerciais.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Restrições de Utilização</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Você concorda em não:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Usar o website para fins ilegais ou prejudiciais</li>
                <li>Tentar obter acesso não autorizado aos sistemas</li>
                <li>Transmitir conteúdo ofensivo ou prejudicial</li>
                <li>Interferir com o funcionamento do website</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Conteúdo e Propriedade Intelectual</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Todo o conteúdo, incluindo textos, imagens e gráficos, é propriedade da EvolvOut ou dos seus fornecedores e está protegido por leis de direitos autorais.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Isenção de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                O website é fornecido "tal como está" sem garantias de qualquer tipo. A EvolvOut não se responsabiliza por danos diretos ou indiretos resultantes do uso ou incapacidade de uso do website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A EvolvOut não será responsável por perdas de dados, lucros cessantes ou danos especiais resultantes do acesso ou uso do website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Alterações aos Termos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A EvolvOut reserva-se o direito de modificar estes termos a qualquer momento. As alterações serão efetivas imediatamente após serem publicadas no website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Lei Aplicável</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Estes termos e condições são regidos pelas leis da República de Angola.
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

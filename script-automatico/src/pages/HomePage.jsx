import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Target, TrendingUp, Users, Award, CheckCircle2, Building2, Briefcase, GraduationCap, BarChart3, Clock, FileText, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import SEOHead from '@/components/SEOHead.jsx'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')

  // Dados de impacto com metodologia
  const impactoMetricas = [
    {
      valor: '+25%',
      metrica: 'melhoria comunicação interna',
      metodologia: 'PDA Assessment + Feedback 360',
      participantes: '120 líderes',
      periodo: '6 meses',
      setor: 'Indústria'
    },
    {
      valor: '+30%',
      metrica: 'coesão interdepartamental',
      metodologia: 'VCW + Neuromap™',
      participantes: '85 gestores',
      periodo: '4 meses',
      setor: 'Serviços'
    },
    {
      valor: '+35%',
      metrica: 'produtividade organizacional',
      metodologia: 'Feedback 360 + KPIs trimestrais',
      participantes: '200+ colaboradores',
      periodo: '12 meses',
      setor: 'Tecnologia'
    },
    {
      valor: '-20%',
      metrica: 'redução de conflitos de equipa',
      metodologia: 'PDA + Coaching executivo',
      participantes: '45 equipas',
      periodo: '3 meses',
      setor: 'Setor Público'
    }
  ]

  // Perfis de público-alvo (ICP)
  const publicoAlvo = [
    {
      perfil: 'Executivos e C-Level',
      icon: Briefcase,
      dores: [
        'Dificuldade em alinhar visão estratégica com execução',
        'Comunicação ineficaz entre departamentos',
        'Falta de métricas objetivas de liderança'
      ],
      resultados: [
        'Decisões mais rápidas e assertivas',
        'Alinhamento estratégico mensurável',
        'ROI claro em desenvolvimento de liderança'
      ],
      exemplo: 'CEO de empresa tecnológica aumentou engagement da equipa em 40% em 90 dias'
    },
    {
      perfil: 'Diretores de RH e Gestão de Pessoas',
      icon: Users,
      dores: [
        'Programas de formação sem impacto mensurável',
        'Alta rotatividade e baixo engagement',
        'Dificuldade em desenvolver líderes internos'
      ],
      resultados: [
        'Programas com KPIs claros e ROI comprovado',
        'Redução de turnover em 25-30%',
        'Pipeline de liderança sustentável'
      ],
      exemplo: 'Diretora de RH implementou sistema de desenvolvimento com 95% de retenção de talentos'
    },
    {
      perfil: 'Líderes de Equipa e Gestores',
      icon: Target,
      dores: [
        'Conflitos recorrentes na equipa',
        'Dificuldade em dar feedback eficaz',
        'Falta de ferramentas práticas de liderança'
      ],
      resultados: [
        'Comunicação clara e assertiva',
        'Equipas mais coesas e produtivas',
        'Protocolos práticos aplicáveis no dia-a-dia'
      ],
      exemplo: 'Gestor de operações reduziu conflitos em 60% usando protocolos CAT™'
    }
  ]

  // Como funciona (3 passos)
  const comoFunciona = [
    {
      numero: '1',
      titulo: 'Diagnóstico',
      subtitulo: 'Conhece',
      descricao: 'Avaliação completa com PDA Assessment, Feedback 360, VCW e Neuromap™ para mapear estado atual',
      tempo: '2-3 semanas',
      entregaveis: ['Relatório base de diagnóstico', 'Mapa de competências', 'Plano de desenvolvimento personalizado']
    },
    {
      numero: '2',
      titulo: 'Protocolos',
      subtitulo: 'Aplica',
      descricao: 'Formação intensiva, workshops práticos e acompanhamento personalizado com metodologias validadas',
      tempo: '3-6 meses',
      entregaveis: ['21h de formação presencial', 'Toolkit de protocolos práticos', 'Sessões de coaching individual']
    },
    {
      numero: '3',
      titulo: 'KPIs & Follow-up',
      subtitulo: 'Transforma',
      descricao: 'Medição de impacto com relatórios trimestrais, ajustes contínuos e acompanhamento de resultados',
      tempo: 'Contínuo',
      entregaveis: ['Relatórios trimestrais', 'Dashboard de KPIs', 'Sessões de follow-up']
    }
  ]

  // Mini-casos de sucesso
  const miniCasos = [
    {
      empresa: 'Indústria Alimentar',
      tamanho: '500+ colaboradores',
      desafio: 'Comunicação fragmentada entre 5 departamentos causava atrasos de 30% nos projetos',
      intervencao: 'Programa Neurocomunicação (21h) + Coaching executivo para 15 líderes',
      resultado: '+35% melhoria em comunicação interdepartamental',
      metrica: 'Medido via Feedback 360 e VCW em 6 meses',
      testemunho: 'A metodologia CAT™ transformou a forma como a nossa equipa comunica. Os resultados são visíveis e mensuráveis.',
      cargo: 'Diretora de Operações'
    },
    {
      empresa: 'Setor Tecnologia',
      tamanho: '200+ colaboradores',
      desafio: 'Turnover de 40% em cargos de liderança e baixo engagement',
      intervencao: 'Programa Neuroliderança (21h) + Neuromap™ para 25 gestores',
      resultado: 'Turnover reduzido para 12% e engagement aumentou 45%',
      metrica: 'PDA Assessment + métricas de RH em 12 meses',
      testemunho: 'O Modelo CAT™ deu-nos ferramentas práticas e métricas claras. Mudou a cultura da organização.',
      cargo: 'Diretor de RH'
    }
  ]

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen bg-[#0E0E10] text-white">
        
        {/* Hero Section OTIMIZADO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/neural-network-1.jpg" 
              alt="Neurociência aplicada" 
              className="w-full h-full object-cover opacity-30"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/80 via-[#0E0E10]/60 to-[#0E0E10]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Neurociência aplicada para líderes<br />
                e equipas com <span className="text-[#E2B94B]">resultados mensuráveis</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#D9D9E0] mb-8 max-w-4xl mx-auto">
                Protocolos práticos + KPIs (PDA, 360, Neuromap™) para melhorar comunicação, coesão e produtividade em <strong>90 dias</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-[#E2B94B] hover:bg-[#E2B94B]/90 text-[#0E0E10] font-bold text-lg px-8 py-6"
                >
                  <Calendar className="mr-2" />
                  Agendar Diagnóstico
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#0A7BFF] text-[#0A7BFF] hover:bg-[#0A7BFF] hover:text-white font-bold text-lg px-8 py-6"
                >
                  Ver como funciona <ArrowRight className="ml-2" />
                </Button>
              </div>
              <p className="text-sm text-[#9AA0A6]">
                ✓ Resultados validados em equipas de 20–500 pessoas, em PT/CV/AO
              </p>
            </motion.div>
          </div>
        </section>

        {/* Como Medimos - NOVA SECÇÃO */}
        <section className="py-20 px-4 bg-[#1A1A1D]">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">
                Neurocomunicação com <span className="text-[#E2B94B]">impacto mensurável</span>
              </h2>
              <p className="text-[#D9D9E0] text-center mb-12 max-w-3xl mx-auto">
                Métricas baseadas em <strong>PDA Assessment, Feedback 360 e Neuromap™</strong>, analisadas trimestralmente.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactoMetricas.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#0E0E10] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all h-full">
                      <CardContent className="p-6">
                        <div className="text-5xl font-bold text-[#E2B94B] mb-2">{item.valor}</div>
                        <div className="text-lg text-white mb-4">{item.metrica}</div>
                        <div className="text-sm text-[#9AA0A6] space-y-1">
                          <div><strong>Metodologia:</strong> {item.metodologia}</div>
                          <div><strong>N:</strong> {item.participantes}</div>
                          <div><strong>Período:</strong> {item.periodo}</div>
                          <div><strong>Setor:</strong> {item.setor}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Para Quem - NOVA SECÇÃO */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">
                Para <span className="text-[#E2B94B]">Quem</span>
              </h2>
              <p className="text-[#D9D9E0] text-center mb-12 max-w-3xl mx-auto">
                Programas desenhados para perfis específicos com dores e objetivos claros
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {publicoAlvo.map((perfil, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#0A7BFF]/50 transition-all h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-[#E2B94B]">
                          <perfil.icon size={32} />
                          {perfil.perfil}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-[#0A7BFF] mb-2">Dores comuns:</h4>
                          <ul className="space-y-1">
                            {perfil.dores.map((dor, i) => (
                              <li key={i} className="text-sm text-[#D9D9E0] flex items-start gap-2">
                                <span className="text-red-400 mt-1">✗</span>
                                {dor}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#E2B94B] mb-2">Resultados esperados:</h4>
                          <ul className="space-y-1">
                            {perfil.resultados.map((resultado, i) => (
                              <li key={i} className="text-sm text-[#D9D9E0] flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-green-400 mt-1 flex-shrink-0" />
                                {resultado}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-[#2A2A2F]">
                          <p className="text-xs text-[#9AA0A6] italic">
                            <strong>Exemplo:</strong> {perfil.exemplo}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Como Funciona - NOVA SECÇÃO */}
        <section className="py-20 px-4 bg-[#1A1A1D]">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">
                Como <span className="text-[#E2B94B]">Funciona</span>
              </h2>
              <p className="text-[#D9D9E0] text-center mb-12 max-w-3xl mx-auto">
                3 passos claros com tempo médio e entregáveis definidos
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {comoFunciona.map((passo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#0E0E10] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-full bg-[#E2B94B] flex items-center justify-center text-[#0E0E10] text-2xl font-bold">
                            {passo.numero}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{passo.titulo}</h3>
                            <p className="text-[#E2B94B] font-semibold">{passo.subtitulo}</p>
                          </div>
                        </div>
                        <p className="text-[#D9D9E0] mb-4">{passo.descricao}</p>
                        <div className="flex items-center gap-2 text-sm text-[#9AA0A6] mb-4">
                          <Clock size={16} />
                          <span><strong>Tempo médio:</strong> {passo.tempo}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0A7BFF] mb-2 flex items-center gap-2">
                            <FileText size={16} />
                            Entregáveis:
                          </h4>
                          <ul className="space-y-1">
                            {passo.entregaveis.map((item, i) => (
                              <li key={i} className="text-sm text-[#D9D9E0] flex items-start gap-2">
                                <CheckCircle2 size={14} className="text-green-400 mt-1 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-[#E2B94B] hover:bg-[#E2B94B]/90 text-[#0E0E10] font-bold text-lg px-8 py-6"
                >
                  <Calendar className="mr-2" />
                  Agendar Diagnóstico Gratuito
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mini-Casos de Sucesso - NOVA SECÇÃO */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">
                Casos de <span className="text-[#E2B94B]">Sucesso</span>
              </h2>
              <p className="text-[#D9D9E0] text-center mb-12 max-w-3xl mx-auto">
                Resultados reais com KPIs antes/depois
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {miniCasos.map((caso, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#0A7BFF]/50 transition-all h-full">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-[#E2B94B]">{caso.empresa}</h3>
                            <p className="text-sm text-[#9AA0A6]">{caso.tamanho}</p>
                          </div>
                          <Building2 className="text-[#0A7BFF]" size={32} />
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-bold text-white mb-1">Desafio:</h4>
                            <p className="text-sm text-[#D9D9E0]">{caso.desafio}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-bold text-white mb-1">Intervenção:</h4>
                            <p className="text-sm text-[#D9D9E0]">{caso.intervencao}</p>
                          </div>

                          <div className="bg-[#0E0E10] p-4 rounded-lg border border-[#E2B94B]/30">
                            <h4 className="text-sm font-bold text-[#E2B94B] mb-1">Resultado:</h4>
                            <p className="text-lg font-bold text-white mb-2">{caso.resultado}</p>
                            <p className="text-xs text-[#9AA0A6]">{caso.metrica}</p>
                          </div>

                          <div className="pt-4 border-t border-[#2A2A2F]">
                            <p className="text-sm text-[#D9D9E0] italic mb-2">"{caso.testemunho}"</p>
                            <p className="text-xs text-[#9AA0A6]">— {caso.cargo}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#0A7BFF] text-[#0A7BFF] hover:bg-[#0A7BFF] hover:text-white font-bold text-lg px-8 py-6"
                >
                  Ver mais casos de sucesso <ArrowRight className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#E2B94B]/20 to-[#0A7BFF]/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pronto para transformar a sua organização?
              </h2>
              <p className="text-xl text-[#D9D9E0] mb-8">
                Agende um diagnóstico gratuito e descubra como o Modelo CAT™ pode gerar resultados mensuráveis em 90 dias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#E2B94B] hover:bg-[#E2B94B]/90 text-[#0E0E10] font-bold text-xl px-10 py-7"
                >
                  <Calendar className="mr-2" size={24} />
                  Agendar Diagnóstico Gratuito
                </Button>
              </div>
              <p className="text-sm text-[#9AA0A6] mt-6">
                ✓ Resposta em 1–2 dias úteis | ✓ Sem compromisso
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  )
}


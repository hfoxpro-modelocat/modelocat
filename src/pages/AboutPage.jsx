import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Award, Target, Heart, Globe, CheckCircle2, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'

export default function AboutPage() {
  const entities = [
    {
      name: 'Psicotraining Internacional',
      role: 'Entidade Principal',
      description: 'Entidade certificada pela DGERT em Portugal, em parceria com o IPDD - Instituto Politécnico Democracia e Desenvolvimento, entidade formadora certificada em Cabo Verde, e com o apoio da Kombersu RH.',
      logo: '/images/psicotraining-logo.png',
      link: 'https://psicotraining.pt',
      certifications: ['DGERT Portugal', 'Certificação Internacional']
    },
    {
      name: 'IPDD',
      role: 'Parceiro Institucional - Cabo Verde',
      description: 'Instituto Politécnico Democracia e Desenvolvimento, entidade formadora certificada em Cabo Verde, parceiro estratégico na implementação do Modelo CAT™ em África.',
      logo: '/images/ipdd-logo.png',
      certifications: ['Certificação Cabo Verde']
    },
    {
      name: 'Kombersu RH',
      role: 'Parceiro de Recursos Humanos',
      description: 'Parceiro especializado em Recursos Humanos, apoiando a implementação de programas de desenvolvimento organizacional e gestão de talento.',
      logo: '/images/kombersu-logo.png',
      certifications: ['Consultoria RH']
    }
  ]

  const conselhoEstrategico = [
    {
      name: 'Heitor Fox',
      role: 'Fundador e Mentor do Modelo CAT™',
      bio: 'Co-autor do Modelo CAT™, especialista em Neurocomunicação, Neurocoaching e Neuroliderança com mais de 30 anos de experiência internacional.',
      photo: '/images/hero-heitor-fox.webp'
    },
    {
      name: 'Ana Calvário',
      role: 'Direção Técnica e Científica',
      bio: 'Responsável pela validação científica e metodológica dos programas de formação e certificação internacional.',
      photo: '/images/placeholder-avatar.jpg'
    },
    {
      name: 'José Ramalho',
      role: 'Sustentabilidade e Governança',
      bio: 'Especialista em governança corporativa e sustentabilidade organizacional, garantindo o alinhamento estratégico do projeto.',
      photo: '/images/placeholder-avatar.jpg'
    },
    {
      name: 'Joffre Justino',
      role: 'Comunicação e Relações Institucionais',
      bio: 'Responsável pela comunicação institucional e desenvolvimento de parcerias estratégicas na CPLP.',
      photo: '/images/placeholder-avatar.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      {/* Hero Section com Imagem */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/team-collaboration-1.jpg" 
            alt="Equipa colaborativa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/80 via-[#0E0E10]/60 to-[#0E0E10]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-6xl h-full flex items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Sobre Nós
            </h1>
            <p className="text-xl md:text-2xl text-[#D9D9E0] mb-8">
              Transformamos organizações através da neurociência aplicada, inteligência emocional e liderança consciente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Building2 className="text-[#E2B94B]" size={40} />
              Quem Somos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-[#1A1A1D] border-[#2A2A2F]">
                <CardHeader>
                  <CardTitle className="text-[#E2B94B] flex items-center gap-2">
                    <Target size={24} />
                    Missão
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#D9D9E0]">
                  Transformar líderes e organizações através da neurociência aplicada, inteligência emocional e comunicação eficaz, gerando impacto mensurável e sustentável.
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A1D] border-[#2A2A2F]">
                <CardHeader>
                  <CardTitle className="text-[#0A7BFF] flex items-center gap-2">
                    <Globe size={24} />
                    Visão
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#D9D9E0]">
                  Ser a referência internacional em formação executiva baseada em neurociência, presente em três continentes até 2030.
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A1D] border-[#2A2A2F]">
                <CardHeader>
                  <CardTitle className="text-[#E2B94B] flex items-center gap-2">
                    <Heart size={24} />
                    Valores
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#D9D9E0]">
                  Rigor científico, humanização, ética, resultados mensuráveis e transformação sustentável.
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entidades Associadas */}
      <section className="py-20 px-4 bg-[#1A1A1D]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <Building2 className="text-[#E2B94B]" size={40} />
              Entidades Associadas
            </h2>
            <div className="space-y-8">
              {entities.map((entity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#0E0E10] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#E2B94B] mb-2">{entity.name}</h3>
                          <p className="text-sm text-[#9AA0A6] mb-4">{entity.role}</p>
                          <p className="text-[#D9D9E0] mb-4">{entity.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {entity.certifications.map((cert, i) => (
                              <span key={i} className="px-3 py-1 bg-[#E2B94B]/10 text-[#E2B94B] rounded-full text-sm flex items-center gap-1">
                                <CheckCircle2 size={14} />
                                {cert}
                              </span>
                            ))}
                          </div>
                          {entity.link && (
                            <a 
                              href={entity.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#0A7BFF] hover:text-[#E2B94B] transition-colors text-sm"
                            >
                              Visitar website →
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conselho Estratégico */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <Users className="text-[#E2B94B]" size={40} />
              Conselho Estratégico
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {conselhoEstrategico.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[#2A2A2F]">
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#E2B94B] mb-2">{member.name}</h3>
                      <p className="text-sm text-[#0A7BFF] mb-3">{member.role}</p>
                      <p className="text-[#D9D9E0] text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fundamentação Científica */}
      <section className="py-20 px-4 bg-[#1A1A1D]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-[#E2B94B]" size={40} />
              Fundamentação Científica
            </h2>
            <p className="text-[#D9D9E0] mb-12 text-lg">
              O Modelo CAT™ é fundamentado em investigação científica rigorosa e nas contribuições de autores de referência mundial em neurociência, liderança e inteligência emocional.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#0E0E10] border-[#2A2A2F]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#E2B94B] mb-2">Daniel Goleman</h3>
                  <p className="text-sm text-[#0A7BFF] mb-3">Inteligência Emocional</p>
                  <p className="text-[#D9D9E0] mb-3 text-sm">
                    A inteligência emocional é essencial para liderar e inspirar mudanças. Base fundamental do Modelo CAT™.
                  </p>
                  <p className="text-xs text-[#9AA0A6] italic">Emotional Intelligence (1995)</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0E0E10] border-[#2A2A2F]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#E2B94B] mb-2">António Damásio</h3>
                  <p className="text-sm text-[#0A7BFF] mb-3">Neurociência Aplicada</p>
                  <p className="text-[#D9D9E0] mb-3 text-sm">
                    O ser humano e a organização como um todo – mente, emoção e comportamento – interligados para criar impacto sustentável.
                  </p>
                  <p className="text-xs text-[#9AA0A6] italic">Descartes' Error (1994)</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0E0E10] border-[#2A2A2F]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#E2B94B] mb-2">Simon Sinek</h3>
                  <p className="text-sm text-[#0A7BFF] mb-3">Liderança Inspiradora</p>
                  <p className="text-[#D9D9E0] mb-3 text-sm">
                    Começar pelo "porquê" transforma a forma como comunicamos e lideramos. Golden Circle integrado no Modelo CAT™.
                  </p>
                  <p className="text-xs text-[#9AA0A6] italic">Start with Why (2009)</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0E0E10] border-[#2A2A2F]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#E2B94B] mb-2">Brené Brown</h3>
                  <p className="text-sm text-[#0A7BFF] mb-3">Vulnerabilidade e Coragem</p>
                  <p className="text-[#D9D9E0] mb-3 text-sm">
                    A vulnerabilidade é o berço da inovação, criatividade e mudança. Essencial para liderança autêntica.
                  </p>
                  <p className="text-xs text-[#9AA0A6] italic">Daring Greatly (2012)</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


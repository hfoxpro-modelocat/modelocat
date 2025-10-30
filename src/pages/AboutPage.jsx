import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Award, Target, Heart, Globe, CheckCircle2 } from 'lucide-react'
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
    },
    {
      name: 'IPDD & Kombersu RH',
      role: 'Validação Pedagógica e Certificação',
      bio: 'Parceiros institucionais responsáveis pela validação pedagógica e certificação formativa em Cabo Verde.',
      photo: '/images/placeholder-avatar.jpg'
    }
  ]

  const conselhoCientifico = [
    {
      area: 'Neurociência Aplicada',
      description: 'Investigação em neurociência aplicada à comunicação e liderança'
    },
    {
      area: 'Psicologia e Coaching Organizacional',
      description: 'Especialistas em desenvolvimento humano e coaching de alta performance'
    },
    {
      area: 'Sustentabilidade e Ética Aplicada',
      description: 'Foco em práticas sustentáveis e ética organizacional'
    },
    {
      area: 'Neurotecnologia e IA',
      description: 'Colaboração com DCG Lab e BrainBox.Center para inovação tecnológica'
    },
    {
      area: 'VCW Lab @ Nova SBE',
      description: 'Parceria com Prof. Luís Filipe Lages para metodologias de criação de valor e inovação'
    }
  ]

  const fundadores = [
    { name: 'Heitor Fox', year: '1995', role: 'Fundador e CEO' },
    { name: 'Psicotraining Portugal', year: '2000', role: 'Entidade Formadora' },
    { name: 'IPDD - Cabo Verde', year: '2015', role: 'Parceiro Institucional' },
    { name: 'Kombersu RH', year: '2018', role: 'Parceiro RH' },
    { name: 'A Definir', year: '---', role: 'Co-Fundador' },
    { name: 'A Definir', year: '---', role: 'Co-Fundador' },
    { name: 'A Definir', year: '---', role: 'Co-Fundador' }
  ]

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      {/* Hero Section com Imagem */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <img 
            src="/images/team-collaboration-1.jpg" 
            alt="Equipa colaborativa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/80 via-[#0E0E10]/60 to-[#0E0E10]"></div>
        </div>
        
        {/* Conteúdo */}
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

      {/* Conteúdo Principal */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/workshop-dinamico-1.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">
              Sobre <span className="text-[#E2B94B]">Nós</span>
            </h1>
            <p className="text-2xl text-[#D9D9E0] max-w-3xl mx-auto">
              Transformamos organizações através da ciência da comunicação, liderança e emoção
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
                              className="text-[#0A7BFF] hover:text-[#E2B94B] transition-colors"
                            >
                              {entity.link.replace('https://', '')} →
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

      {/* Equipa - Heitor Fox */}
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
              Equipa
            </h2>
            
            <Card className="bg-[#1A1A1D] border-[#2A2A2F]">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="/images/hero-heitor-fox.webp" 
                      alt="Heitor Fox" 
                      className="rounded-lg shadow-2xl w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Heitor Fox</h3>
                    <p className="text-xl text-[#E2B94B] mb-4">Fundador e CEO</p>
                    <p className="text-sm text-[#9AA0A6] italic mb-6">
                      It's All About Your Brain "Heart & Soul"
                    </p>
                    <p className="text-[#D9D9E0] mb-4">
                      Com mais de 30 anos de experiência internacional, Heitor Fox é especialista em Neurocomunicação, Neurocoaching e Neuroliderança. Co-autor do Modelo CAT™, trabalha com organizações em Portugal, Cabo Verde e Angola, transformando líderes e equipas através da ciência aplicada à comunicação e à emoção.
                    </p>
                    <p className="text-[#D9D9E0] mb-6">
                      A sua abordagem integra ferramentas como PDA International, VCW (Nova SBE), Neuromap™, Golden Circle (Simon Sinek), MyPDA Coach, VCW Sprint e metodologias de inteligência emocional, sempre com foco em resultados mensuráveis e mudança sustentável.
                    </p>
                    <div className="flex gap-4">
                      <a 
                        href="https://www.heitorfox.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#E2B94B] text-black rounded-lg hover:bg-[#E2B94B]/80 transition-colors"
                      >
                        heitorfox.com
                      </a>
                      <a 
                        href="https://psicotraining.pt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-[#E2B94B] text-[#E2B94B] rounded-lg hover:bg-[#E2B94B]/10 transition-colors"
                      >
                        psicotraining.pt
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Governança */}
      <section className="py-20 px-4 bg-[#1A1A1D]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <Award className="text-[#E2B94B]" size={40} />
              Governança
            </h2>

            {/* Conselho Estratégico */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#E2B94B] mb-8">Conselho Estratégico</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conselho.map((membro, idx) => (
                  <Card key={idx} className="bg-[#0E0E10] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E2B94B] to-[#0A7BFF] p-1">
                        <div className="w-full h-full rounded-full bg-[#1A1A1D] flex items-center justify-center">
                          <Users className="text-[#E2B94B]" size={32} />
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{membro.name}</h4>
                      <p className="text-sm text-[#E2B94B] mb-3">{membro.role}</p>
                      <p className="text-sm text-[#9AA0A6]">{membro.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Conselho Científico */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#0A7BFF] mb-4">Conselho Científico</h3>
              <p className="text-[#D9D9E0] mb-8">
                Órgão de validação científica e metodológica da certificação internacional, garantindo rigor, inovação e sustentabilidade epistemológica do Modelo CAT™.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {conselhoCientifico.map((area, idx) => (
                  <Card key={idx} className="bg-[#0E0E10] border-[#2A2A2F] hover:border-[#0A7BFF]/50 transition-all">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-[#0A7BFF] mb-2">{area.area}</h4>
                      <p className="text-sm text-[#9AA0A6]">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Fundadores */}
            <div>
              <h3 className="text-2xl font-bold text-[#E2B94B] mb-8">Fundadores</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fundadores.map((fundador, idx) => (
                  <Card key={idx} className="bg-[#0E0E10] border-[#2A2A2F]">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#E2B94B]/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#E2B94B] font-bold">{fundador.year}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{fundador.name}</h4>
                          <p className="text-sm text-[#9AA0A6]">{fundador.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fundamentação Científica */}
      <section className="py-20 px-4">
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
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  author: 'Daniel Goleman',
                  area: 'Inteligência Emocional',
                  contribution: 'A inteligência emocional é essencial para liderar e inspirar mudanças. Base fundamental do Modelo CAT™.',
                  reference: 'Emotional Intelligence (1995)'
                },
                {
                  author: 'António Damásio',
                  area: 'Neurociência Aplicada',
                  contribution: 'O ser humano e a organização como um todo – mente, emoção e comportamento – interligados para criar impacto sustentável.',
                  reference: 'Descartes\' Error (1994)'
                },
                {
                  author: 'Peter Senge',
                  area: 'Organizações que Aprendem',
                  contribution: 'As organizações que prosperam são aquelas que aprendem. Sustentabilidade Ativa como alicerce do programa.',
                  reference: 'The Fifth Discipline (1990)'
                },
                {
                  author: 'David Rock',
                  area: 'Neurocoaching',
                  contribution: 'Técnicas fundamentadas na neuroplasticidade para romper barreiras e atingir metas. Alinhamento entre quem somos e quem podemos ser.',
                  reference: 'Your Brain at Work (2009)'
                },
                {
                  author: 'Christophe Morin & Patrick Renvoisé',
                  area: 'Neurocomunicação',
                  contribution: 'Como o cérebro processa mensagens emocionais, criando conexões autênticas que mobilizam equipas.',
                  reference: 'The Persuasion Code (2018)'
                },
                {
                  author: 'Luís Filipe Lages',
                  area: 'Value Creation Wheel (VCW)',
                  contribution: 'Metodologia científica reconhecida internacionalmente aplicada em contextos de inovação, liderança e transformação organizacional.',
                  reference: 'Nova SBE - VCW Lab'
                }
              ].map((ref, idx) => (
                <Card key={idx} className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#E2B94B] mb-2">{ref.author}</h3>
                    <p className="text-sm text-[#0A7BFF] mb-3">{ref.area}</p>
                    <p className="text-[#D9D9E0] mb-3 text-sm">{ref.contribution}</p>
                    <p className="text-xs text-[#9AA0A6] italic">{ref.reference}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


import React from 'react'
import { motion } from 'framer-motion'
import { Handshake, Globe, Building2, GraduationCap, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

export default function PartnersPage() {
  const parceirosInstitucionais = [
    {
      name: 'DGERT - Direção-Geral do Emprego e das Relações de Trabalho',
      category: 'Certificação',
      description: 'Entidade certificadora oficial em Portugal para formação profissional',
      logo: '/images/dgert-logo.png',
      icon: Award
    },
    {
      name: 'Nova School of Business & Economics',
      category: 'Parceiro Académico',
      description: 'Parceria para metodologias VCW (Value Creation Wheel) e programas executivos',
      logo: '/images/nova-sbe-logo.png',
      icon: GraduationCap
    },
    {
      name: 'PDA International',
      category: 'Ferramentas de Assessment',
      description: 'Parceiro oficial para PDA Assessment e certificação de practitioners',
      logo: '/images/pda-logo.png',
      icon: Award
    },
    {
      name: 'IPDD - Instituto Politécnico Democracia e Desenvolvimento',
      category: 'Parceiro Institucional - Cabo Verde',
      description: 'Entidade formadora certificada em Cabo Verde, parceiro estratégico para África',
      logo: '/images/ipdd-logo.png',
      icon: Building2
    },
    {
      name: 'Kombersu RH',
      category: 'Parceiro de Recursos Humanos',
      description: 'Consultoria especializada em RH e desenvolvimento organizacional',
      logo: '/images/kombersu-logo.png',
      icon: Building2
    },
    {
      name: 'DCG Lab',
      category: 'Neurotecnologia e Inovação',
      description: 'Laboratório de investigação em neurotecnologia e inteligência artificial aplicada',
      logo: '/images/dcg-lab-logo.png',
      icon: GraduationCap
    },
    {
      name: 'BrainBox.Center',
      category: 'Neurociência Aplicada',
      description: 'Centro de excelência em neurociência aplicada à liderança e comunicação',
      logo: '/images/brainbox-logo.png',
      icon: GraduationCap
    },
    {
      name: 'VCW Lab @ Nova SBE',
      category: 'Metodologias de Inovação',
      description: 'Laboratório de Value Creation Wheel liderado pelo Prof. Luís Filipe Lages - metodologias de criação de valor e inovação',
      logo: '/images/vcw-lab-logo.png',
      icon: GraduationCap
    }
  ]

  const parceirosCorporativos = [
    {
      name: 'Setor Público - Portugal',
      description: 'Múltiplas organizações públicas em programas de liderança e comunicação',
      projects: '15+ projetos'
    },
    {
      name: 'Setor Privado - Cabo Verde',
      description: 'Empresas privadas em transformação cultural e desenvolvimento de talento',
      projects: '10+ projetos'
    },
    {
      name: 'Organizações Internacionais',
      description: 'Parcerias em Portugal, Cabo Verde e Angola',
      projects: '20+ projetos'
    }
  ]

  const redeInternacional = [
    {
      country: 'Portugal',
      city: 'Lisboa',
      description: 'Sede principal - Psicotraining Internacional',
      contact: 'coach@heitorfox.com'
    },
    {
      country: 'Cabo Verde',
      city: 'Praia',
      description: 'Academia Internacional Psicotraining Cabo Verde - Epicentro da primeira certificação internacional africana',
      contact: 'Via IPDD',
      highlight: true
    },
    {
      country: 'Angola',
      city: 'Luanda',
      description: 'Programas executivos e consultoria',
      contact: 'Via Psicotraining'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      {/* Hero Section com Imagem */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <img 
            src="/images/leadership-team.jpg" 
            alt="Parceiros e Colaborações" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/80 via-[#0E0E10]/60 to-[#0E0E10]"></div>
        </div>
        
        {/* Conteúdo */}
        <div className="relative z-10 container mx-auto max-w-6xl h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-[#E2B94B]">Parceiros</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[#D9D9E0] max-w-3xl mx-auto">
              Colaborações estratégicas que amplificam o impacto do Modelo CAT™
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parceiros Institucionais */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <Handshake className="text-[#E2B94B]" size={40} />
              Parceiros Institucionais
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {parceirosInstitucionais.map((parceiro, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all h-full group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-full bg-[#E2B94B]/10 group-hover:bg-[#E2B94B]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                          <parceiro.icon className="text-[#E2B94B]" size={32} />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-[#E2B94B] uppercase tracking-wide">{parceiro.category}</span>
                          <h3 className="text-xl font-bold text-white mt-1 mb-3">{parceiro.name}</h3>
                          <p className="text-[#D9D9E0] text-sm">{parceiro.description}</p>
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

      {/* Parceiros Corporativos */}
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
              Parceiros Corporativos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {parceirosCorporativos.map((parceiro, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#0E0E10] border-[#2A2A2F] hover:border-[#0A7BFF]/50 transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E2B94B] to-[#0A7BFF] p-1">
                        <div className="w-full h-full rounded-full bg-[#1A1A1D] flex items-center justify-center">
                          <Building2 className="text-[#E2B94B]" size={32} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{parceiro.name}</h3>
                      <p className="text-[#D9D9E0] text-sm mb-3">{parceiro.description}</p>
                      <span className="inline-block px-3 py-1 bg-[#E2B94B]/10 text-[#E2B94B] rounded-full text-sm">
                        {parceiro.projects}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rede Internacional */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <Globe className="text-[#E2B94B]" size={40} />
              Rede Internacional
            </h2>
            
            {/* Mapa Visual */}
            <div className="mb-12 p-8 bg-[#1A1A1D] rounded-lg border border-[#2A2A2F]">
              <div className="text-center mb-8">
                <Globe className="text-[#E2B94B] mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold text-white mb-2">Presença em 3 Países</h3>
                <p className="text-[#D9D9E0]">Portugal • Cabo Verde • Angola</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {redeInternacional.map((local, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#0E0E10] border-[#2A2A2F]">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 rounded-full bg-[#E2B94B]"></div>
                          <h4 className="text-xl font-bold text-white">{local.country}</h4>
                        </div>
                        <p className="text-[#0A7BFF] font-semibold mb-2">{local.city}</p>
                        <p className="text-[#D9D9E0] text-sm mb-3">{local.description}</p>
                        <p className="text-[#9AA0A6] text-xs">{local.contact}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-[#E2B94B]/10 to-[#0A7BFF]/10 border-[#E2B94B]/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Interessado em Parceria?</h3>
                  <p className="text-[#D9D9E0] mb-6 max-w-2xl mx-auto">
                    Estamos sempre abertos a novas colaborações estratégicas que ampliem o impacto do Modelo CAT™
                  </p>
                  <a 
                    href="mailto:coach@heitorfox.com"
                    className="inline-block px-8 py-3 bg-[#E2B94B] text-black font-semibold rounded-lg hover:bg-[#E2B94B]/80 transition-colors"
                  >
                    Contactar
                  </a>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


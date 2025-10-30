import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Quote, Play, Award, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { useState } from 'react'

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: '/images/leadership-team.jpg', title: 'Formação Executiva 2024', category: 'Liderança' },
    { src: '/images/workshop-collab.jpg', title: 'Workshop Neurocomunicação', category: 'Comunicação' },
    { src: '/images/team-executive.jpg', title: 'Programa CAT™ - Cabo Verde', category: 'Internacional' },
    { src: '/images/leadership-meeting.jpg', title: 'Coaching Executivo', category: 'Coaching' },
    { src: '/images/team-document.jpg', title: 'Certificação Psicotraining', category: 'Certificação' },
    { src: '/images/team-tech.jpg', title: 'Workshop Neuroliderança', category: 'Liderança' },
  ]

  const casosSuccesso = [
    {
      empresa: 'Empresa do Setor Público',
      desafio: 'Baixa coesão interdepartamental e comunicação ineficaz entre líderes',
      solucao: 'Programa CAT™ de 21h com PDA Assessment e Feedback 360º',
      resultados: ['+35% produtividade', '+30% coesão', '-20% conflitos'],
      icon: TrendingUp
    },
    {
      empresa: 'Organização Privada Internacional',
      desafio: 'Necessidade de transformação cultural e desenvolvimento de liderança',
      solucao: 'Formação Executiva em Neuroliderança com acompanhamento trimestral',
      resultados: ['+25% satisfação líderes', '+40% engagement', '90% retenção talento'],
      icon: Users
    },
    {
      empresa: 'Startup Tecnológica',
      desafio: 'Rápido crescimento com necessidade de estruturação de equipas',
      solucao: 'Workshops CAT™ + Coaching 1:1 para fundadores',
      resultados: ['3x crescimento equipa', '+50% performance', 'Cultura sólida'],
      icon: Award
    }
  ]

  const testimonials = [
    {
      text: 'O Modelo CAT™ transformou a forma como a nossa equipa comunica e decide. Os resultados são visíveis e mensuráveis.',
      author: 'Diretor Executivo',
      company: 'Setor Público',
      video: null
    },
    {
      text: 'A abordagem de Heitor Fox é única: científica, prática e profundamente humana. Mudou a cultura da nossa organização.',
      author: 'Líder de RH',
      company: 'Setor Privado',
      video: null
    },
    {
      text: 'Nunca tinha visto uma formação tão transformadora. O impacto foi imediato e sustentável.',
      author: 'CEO',
      company: 'Startup Tecnológica',
      video: null
    },
    {
      text: 'O diagnóstico PDA e o acompanhamento personalizado fizeram toda a diferença. Recomendo vivamente.',
      author: 'Gestor de Equipas',
      company: 'Multinacional',
      video: null
    }
  ]

  const videos = [
    {
      title: 'Heitor Fox - Keynote: O Futuro da Liderança',
      thumbnail: '/images/video-thumb-1.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:30'
    },
    {
      title: 'Testemunho: Transformação com o Modelo CAT™',
      thumbnail: '/images/video-thumb-2.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '5:20'
    },
    {
      title: 'Making-of: Formação Executiva 2024',
      thumbnail: '/images/video-thumb-3.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '8:45'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      {/* Hero Section com Imagem Grande */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <img 
            src="/images/workshop-dinamico-1.png" 
            alt="Formações e Workshops Dinâmicos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/70 via-[#0E0E10]/50 to-[#0E0E10]"></div>
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
              <span className="text-[#E2B94B]">Portfolio</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[#D9D9E0] max-w-3xl mx-auto">
              Transformações reais, resultados mensuráveis, impacto sustentável
            </p>
          </motion.div>
        </div>
      </section>

      {/* Galeria de Formações */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <Camera className="text-[#E2B94B]" size={40} />
              Galeria de Formações
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-bold">{image.title}</p>
                        <p className="text-[#E2B94B] text-sm">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casos de Sucesso */}
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
              Casos de Sucesso
            </h2>
            <div className="space-y-6">
              {casosSuccesso.map((caso, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#0E0E10] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-full bg-[#E2B94B]/10 flex items-center justify-center flex-shrink-0">
                          <caso.icon className="text-[#E2B94B]" size={32} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{caso.empresa}</h3>
                          <div className="grid md:grid-cols-3 gap-6 mt-4">
                            <div>
                              <h4 className="text-[#E2B94B] font-semibold mb-2">Desafio</h4>
                              <p className="text-[#D9D9E0] text-sm">{caso.desafio}</p>
                            </div>
                            <div>
                              <h4 className="text-[#0A7BFF] font-semibold mb-2">Solução CAT™</h4>
                              <p className="text-[#D9D9E0] text-sm">{caso.solucao}</p>
                            </div>
                            <div>
                              <h4 className="text-[#E2B94B] font-semibold mb-2">Resultados</h4>
                              <ul className="space-y-1">
                                {caso.resultados.map((resultado, i) => (
                                  <li key={i} className="text-[#D9D9E0] text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E2B94B]"></span>
                                    {resultado}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
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

      {/* Testemunhos */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <Quote className="text-[#E2B94B]" size={40} />
              Testemunhos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#1A1A1D] border-[#2A2A2F] h-full">
                    <CardContent className="p-6">
                      <Quote className="text-[#E2B94B] mb-4" size={32} />
                      <p className="text-[#D9D9E0] italic mb-6">{testimonial.text}</p>
                      <div className="border-t border-[#2A2A2F] pt-4">
                        <p className="text-white font-semibold">{testimonial.author}</p>
                        <p className="text-[#9AA0A6] text-sm">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vídeos */}
      <section className="py-20 px-4 bg-[#1A1A1D]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <Play className="text-[#E2B94B]" size={40} />
              Vídeos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#0E0E10] border-[#2A2A2F] hover:border-[#E2B94B]/50 transition-all group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-[#1A1A1D] rounded-t-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-[#E2B94B]/20 group-hover:bg-[#E2B94B]/30 flex items-center justify-center transition-colors">
                            <Play className="text-[#E2B94B]" size={32} fill="currentColor" />
                          </div>
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold">{video.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-[#E2B94B]">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


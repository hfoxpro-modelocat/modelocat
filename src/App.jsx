import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
  Linkedin,
  MessageSquare,
  Sparkles,
  Zap,
  Heart,
  Star,
  Globe
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'modelo', 'aplicacoes', 'programas', 'heitor', 'impacto', 'contacto']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#D9D9E0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0E0E10]/95 backdrop-blur-md border-b border-[#2A2A2F]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#E2B94B]">
              Modelo CAT™
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Início', 'O Modelo', 'Aplicações', 'Programas', 'Heitor Fox', 'Impacto', 'Contacto'].map((item, idx) => {
                const sectionId = ['home', 'modelo', 'aplicacoes', 'programas', 'heitor', 'impacto', 'contacto'][idx]
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-sm font-medium transition-colors hover:text-[#E2B94B] ${
                      activeSection === sectionId ? 'text-[#E2B94B]' : 'text-[#9AA0A6]'
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90 font-semibold"
              >
                Agendar Diagnóstico
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img src="/images/neural-network-1.jpg" alt="Neural Network" className="w-full h-full object-cover" />
        </div>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0A7BFF]/10 via-transparent to-transparent" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#E2B94B] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white"
          >
            Conhece. Aplica. Transforma.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-12 text-[#9AA0A6]"
          >
            Neurociência aplicada à comunicação, liderança e mudança real.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => scrollToSection('modelo')}
              size="lg"
              className="bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90 font-semibold text-lg px-8 py-6"
            >
              Explorar o Modelo CAT™
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              size="lg"
              variant="outline"
              className="border-[#E2B94B] text-[#E2B94B] hover:bg-[#E2B94B]/10 text-lg px-8 py-6"
            >
              Agendar Diagnóstico
            </Button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-[#E2B94B]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tríade CAT */}
      <section className="py-24 px-4 bg-[#0E0E10]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: 'Conhece', desc: 'Consciência e métricas que iluminam decisões.' },
              { icon: Target, title: 'Aplica', desc: 'Prática guiada, feedback e iteração.' },
              { icon: TrendingUp, title: 'Transforma', desc: 'Mudança mensurável e sustentável.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#E2B94B] transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,185,75,0.2)] h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-[#E2B94B]/10 flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-[#E2B94B]" />
                    </div>
                    <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#9AA0A6]">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infográfico CAT™ Completo */}
      <section className="py-16 px-4 bg-[#1A1A1D]/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img 
              src="/images/infografico-cat-completo.webp" 
              alt="Infográfico Conhece, Aplica, Transforma - Modelo CAT™" 
              className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Claims: Performance, Resultados, Futuro */}
      <section className="py-16 px-4 bg-[#0E0E10]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/claims-performance-resultados-futuro.png" 
              alt="+ Performance + Resultados + Futuro" 
              className="w-full max-w-3xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 px-4 bg-[#1A1A1D]/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-[#9AA0A6] mb-8">Aplicado em contextos empresariais, académicos e públicos</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <Globe className="w-12 h-12" />
            <Users className="w-12 h-12" />
            <Award className="w-12 h-12" />
            <Brain className="w-12 h-12" />
          </div>
        </div>
      </section>

      {/* Destaque Valor */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Neurocomunicação com impacto mensurável
              </h2>
              <div className="space-y-4">
                {[
                  '+25% melhoria comunicação interna',
                  '+30% coesão interdepartamental',
                  '+35% produtividade organizacional',
                  '-20% redução de conflitos de equipa'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#E2B94B] flex-shrink-0" />
                    <span className="text-lg text-[#D9D9E0]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-64 h-64 mx-auto relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#2A2A2F" strokeWidth="2" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#2A2A2F" strokeWidth="2" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#2A2A2F" strokeWidth="2" />
                  <motion.circle 
                    cx="100" 
                    cy="100" 
                    r="80" 
                    fill="none" 
                    stroke="#E2B94B" 
                    strokeWidth="3"
                    strokeDasharray="502"
                    strokeDashoffset="502"
                    animate={{ strokeDashoffset: 125 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.circle 
                    cx="100" 
                    cy="100" 
                    r="60" 
                    fill="none" 
                    stroke="#0A7BFF" 
                    strokeWidth="3"
                    strokeDasharray="377"
                    strokeDashoffset="377"
                    animate={{ strokeDashoffset: 75 }}
                    transition={{ duration: 2, delay: 0.7 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-[#E2B94B]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O Modelo */}
      <section id="modelo" className="py-24 px-4 bg-[#1A1A1D]/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              O Modelo CAT™
            </h2>
            <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto leading-relaxed">
              O Modelo CAT™ integra neurociência aplicada, inteligência emocional e sustentabilidade activa para transformar a forma como líderes e equipas pensam, comunicam e decidem. Conhece (diagnóstico e consciência), Aplica (protocolos práticos e feedback) e Transforma (resultados mensuráveis) compõem uma abordagem rigorosa, humana e orientada ao impacto real.
            </p>
          </motion.div>

          {/* Diagrama do Modelo CAT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-center"
          >
            <img 
              src="/images/diagrama-modelo-cat.webp" 
              alt="Diagrama do Modelo CAT™" 
              className="max-w-2xl w-full rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Ciclo CAT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
              {[
                { label: 'Conhece', icon: Brain, color: '#E2B94B' },
                { label: 'Aplica', icon: Target, color: '#0A7BFF' },
                { label: 'Transforma', icon: TrendingUp, color: '#E2B94B' }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center border-2 bg-[#0E0E10]"
                      style={{ borderColor: step.color }}
                    >
                      <step.icon className="w-12 h-12" style={{ color: step.color }} />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ 
                        background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`,
                      }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                    />
                    <div className="text-center mt-4">
                      <p className="font-bold text-lg text-white">{step.label}</p>
                    </div>
                  </motion.div>
                  {idx < 2 && (
                    <ArrowRight className="hidden md:block w-8 h-8 text-[#E2B94B]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pilares */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: 'Neurocomunicação', 
                icon: MessageSquare,
                desc: 'Como o cérebro processa mensagens e emoções. Message framing baseado em evidência científica para maximizar impacto e compreensão.' 
              },
              { 
                title: 'Neurocoaching', 
                icon: Lightbulb,
                desc: 'Transformar potencial em ação consciente. Hábitos, autoconsciência e protocolos práticos para mudança sustentável.' 
              },
              { 
                title: 'Neuroliderança', 
                icon: Users,
                desc: 'Liderar com empatia e propósito. Ética, decisão sob pressão e construção de culturas organizacionais resilientes.' 
              }
            ].map((pilar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#0A7BFF] transition-all duration-300 h-full">
                  <CardHeader>
                    <pilar.icon className="w-10 h-10 text-[#0A7BFF] mb-4" />
                    <CardTitle className="text-2xl text-white">{pilar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#9AA0A6] leading-relaxed">{pilar.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('aplicacoes')}
              size="lg"
              className="bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90 font-semibold"
            >
              Ver Aplicações Reais
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section id="aplicacoes" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Aplicações e Resultados
            </h2>
            <p className="text-xl text-[#9AA0A6]">
              Da sala de decisão ao terreno
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Liderança Executiva', metric: '+25% satisfação de líderes', sector: 'Corporativo', image: '/images/leadership-team.jpg' },
              { title: 'Comunicação Interna', metric: '+35% produtividade', sector: 'Organizacional', image: '/images/team-collaboration-1.jpg' },
              { title: 'Coesão de Equipas', metric: '+30% coesão interdepartamental', sector: 'Gestão', image: '/images/team-innovation.png' },
              { title: 'Transformação Cultural', metric: 'Mudança mensurável', sector: 'Público', image: '/images/executive-meeting.jpg' },
              { title: 'Desenvolvimento de Talento', metric: 'Impacto sustentável', sector: 'Académico', image: '/images/workshop-participantes.webp' },
              { title: 'Estratégia Organizacional', metric: 'Decisões conscientes', sector: 'Consultoria', image: '/images/tech-collaboration.jpg' }
            ].map((caso, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#E2B94B] transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,185,75,0.2)] h-full group cursor-pointer overflow-hidden">
                  <CardHeader>
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                      <img 
                        src={caso.image} 
                        alt={caso.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent opacity-60"></div>
                    </div>
                    <CardTitle className="text-xl text-white">{caso.title}</CardTitle>
                    <CardDescription className="text-[#0A7BFF]">{caso.sector}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#E2B94B] font-bold text-lg">{caso.metric}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Como funciona */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1D] border border-[#2A2A2F] rounded-lg p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Como funciona na prática</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Diagnóstico', subtitle: 'Conhece', desc: 'Avaliação PDA, Feedback 360, VCW e Neuromap™ para mapear estado atual.' },
                { step: '2', title: 'Protocolos', subtitle: 'Aplica', desc: 'Formação intensiva, workshops práticos e acompanhamento personalizado.' },
                { step: '3', title: 'KPIs & Follow-up', subtitle: 'Transforma', desc: 'Medição de impacto, relatórios trimestrais e ajustes contínuos.' }
              ].map((etapa, idx) => (
                <div key={idx} className="relative">
                  <div className="text-6xl font-bold text-[#E2B94B]/20 mb-2">{etapa.step}</div>
                  <h4 className="text-xl font-bold text-white mb-1">{etapa.title}</h4>
                  <p className="text-[#0A7BFF] font-semibold mb-3">{etapa.subtitle}</p>
                  <p className="text-[#9AA0A6]">{etapa.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Destinatários da Formação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Para Quem é Este Programa</h3>
            <img 
              src="/images/destinatarios-formacao.webp" 
              alt="Destinatários da Formação - Líderes, Gestores, Equipas" 
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Programas */}
      <section id="programas" className="py-24 px-4 bg-[#1A1A1D]/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Programas e Certificações
            </h2>
            <p className="text-xl text-[#9AA0A6]">
              Forma o teu cérebro para liderar
            </p>
          </motion.div>

          {/* Destaque 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#E2B94B]/10 to-[#0A7BFF]/10 border border-[#E2B94B] rounded-lg p-8 mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Plano de Formação Executiva 2026 – Liderar com o Modelo CAT™
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                {[
                  'Cursos executivos de 21h (3 dias intensivos)',
                  'Workshops práticos de 4h',
                  'Integração PDA Assessment e VCW'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E2B94B] flex-shrink-0" />
                    <span className="text-[#D9D9E0]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  'Certificação internacional',
                  'Acompanhamento pós-formação',
                  'Acesso a rede global de practitioners'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E2B94B] flex-shrink-0" />
                    <span className="text-[#D9D9E0]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90 font-semibold"
              >
                Solicitar Proposta
              </Button>
              <Button 
                variant="outline"
                className="border-[#E2B94B] text-[#E2B94B] hover:bg-[#E2B94B]/10"
              >
                Download Programa
              </Button>
            </div>
          </motion.div>

          {/* Catálogo */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Neurocomunicação', 
                duration: '21h',
                desc: 'Dominar a ciência da comunicação persuasiva e emocional. Como o cérebro processa, retém e age sobre mensagens.',
                topics: ['Message framing', 'Storytelling neural', 'Comunicação não-verbal']
              },
              { 
                title: 'Neurocoaching', 
                duration: '21h',
                desc: 'Técnicas avançadas de coaching baseadas em neurociência. Transformar consciência em ação e resultados mensuráveis.',
                topics: ['Mudança de hábitos', 'Autoconsciência', 'Feedback eficaz']
              },
              { 
                title: 'Neuroliderança', 
                duration: '21h',
                desc: 'Liderar com propósito, empatia e impacto. Construir culturas organizacionais resilientes e orientadas ao crescimento.',
                topics: ['Liderança ética', 'Decisão consciente', 'Gestão emocional']
              },
              { 
                title: 'Neuroestratégia', 
                duration: '21h',
                desc: 'Inteligência emocional aplicada à estratégia organizacional. Decisões baseadas em dados, emoção e propósito.',
                topics: ['IE estratégica', 'Análise de contexto', 'Visão sistémica']
              },
              { 
                title: 'Workshop Psicotraining', 
                duration: '4h',
                desc: 'Certificação internacional Psicotraining Certified Trainers. Metodologia CAT™ para formadores e consultores.',
                topics: ['Metodologia CAT™', 'Facilitação', 'Certificação']
              },
              { 
                title: 'Atelier de Arte-Terapia CAT™', 
                duration: '1 dia',
                desc: 'Fundação Misa Kouassi. Integração de conhecimentos através da expressão artística. Sustentabilidade Humana e Ativa.',
                topics: ['Arte e reflexão', 'RSO e Cultura', 'Coesão de equipa']
              },
              { 
                title: 'Programa Personalizado', 
                duration: 'Variável',
                desc: 'Desenhamos programas à medida das necessidades da tua organização. Diagnóstico, formação e acompanhamento integrados.',
                topics: ['Diagnóstico custom', 'Formação in-company', 'Follow-up dedicado']
              }
            ].map((programa, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#0A7BFF] transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl text-white">{programa.title}</CardTitle>
                      <span className="text-[#E2B94B] font-bold">{programa.duration}</span>
                    </div>
                    <CardDescription className="text-[#9AA0A6] leading-relaxed">
                      {programa.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {programa.topics.map((topic, tidx) => (
                        <div key={tidx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0A7BFF]" />
                          <span className="text-sm text-[#D9D9E0]">{topic}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => scrollToSection('contacto')}
                      variant="outline" 
                      className="w-full border-[#E2B94B] text-[#E2B94B] hover:bg-[#E2B94B]/10"
                    >
                      Saber mais
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heitor Fox */}
      <section id="heitor" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Heitor Fox
            </h2>
            <p className="text-2xl text-[#E2B94B] italic mb-2">
              "Não ensino técnicas. Provoco mudanças."
            </p>
            <p className="text-lg text-[#9AA0A6] italic">
              It's All About Your Brain "Heart & Soul"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero-heitor-fox.webp" 
                  alt="Heitor Fox em formação" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <p className="text-lg text-[#D9D9E0] leading-relaxed mb-6">
                Com mais de 30 anos de experiência internacional, Heitor Fox é especialista em Neurocomunicação, Neurocoaching e Neuroliderança. Co-autor do Modelo CAT™, trabalha com organizações em Portugal, Cabo Verde e Angola, transformando líderes e equipas através da ciência aplicada à comunicação e à emoção.
              </p>
              <p className="text-lg text-[#D9D9E0] leading-relaxed mb-6">
                A sua abordagem integra ferramentas como PDA International, VCW (Nova SBE), Neuromap™, Golden Circle (Simon Sinek), MyPDA Coach, VCW Sprint e metodologias de inteligência emocional, sempre com foco em resultados mensuráveis e mudança sustentável.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="outline"
                  className="border-[#E2B94B] text-[#E2B94B] hover:bg-[#E2B94B]/10"
                  onClick={() => window.open('https://www.heitorfox.com', '_blank')}
                >
                  heitorfox.com
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#E2B94B] text-[#E2B94B] hover:bg-[#E2B94B]/10"
                  onClick={() => window.open('https://www.psicotraining.pt', '_blank')}
                >
                  psicotraining.pt
                </Button>
              </div>
            </motion.div>
          </div>

          {/* IKIGAI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1D] border border-[#2A2A2F] rounded-lg p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">O meu IKIGAI</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: 'Amo', desc: 'Inspirar pessoas a descobrir o seu potencial e propósito' },
                { icon: Star, title: 'Bom a fazer', desc: 'Comunicar com ciência, emoção e clareza transformadora' },
                { icon: Globe, title: 'O mundo precisa', desc: 'Líderes conscientes, empáticos e orientados ao impacto real' },
                { icon: Award, title: 'Sou pago para', desc: 'Formar, acompanhar e transformar organizações e pessoas' }
              ].map((quadrante, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E2B94B]/10 flex items-center justify-center flex-shrink-0">
                    <quadrante.icon className="w-6 h-6 text-[#E2B94B]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{quadrante.title}</h4>
                    <p className="text-[#9AA0A6]">{quadrante.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Diferenciais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">O que me distingue</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Diagnóstico de "pain" → mudança comportamental',
                'Integra ciência, emoção e propósito',
                'Resultados mensuráveis (PDA, 360, VCW, Neuromap™)'
              ].map((item, idx) => (
                <Card key={idx} className="bg-[#1A1A1D] border-[#2A2A2F] text-center">
                  <CardContent className="pt-6">
                    <p className="text-[#D9D9E0]">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impacto */}
      <section id="impacto" className="py-24 px-4 bg-[#1A1A1D]/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Impacto Global
            </h2>
            <p className="text-xl text-[#9AA0A6]">
              Mensurar para transformar
            </p>
          </motion.div>

          {/* KPIs */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { metric: '+35%', label: 'Produtividade Organizacional', method: 'PDA Assessment & Feedback 360' },
              { metric: '+25%', label: 'Satisfação de Líderes', method: 'VCW & Neuromap™' },
              { metric: '+30%', label: 'Coesão Interdepartamental', method: 'Relatórios Trimestrais' },
              { metric: '-20%', label: 'Redução de Conflitos', method: 'Neurocomunicação & Feedback 360º' }
            ].map((kpi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1A1A1D] border-[#2A2A2F] text-center hover:border-[#E2B94B] transition-all duration-300">
                  <CardHeader>
                    <div className="text-5xl font-bold text-[#E2B94B] mb-2">{kpi.metric}</div>
                    <CardTitle className="text-xl text-white">{kpi.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#9AA0A6]">Método: {kpi.method}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Testemunhos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1D] border border-[#2A2A2F] rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Testemunhos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  text: 'O Modelo CAT™ transformou a forma como a nossa equipa comunica e decide. Os resultados são visíveis e mensuráveis.',
                  role: 'Diretor Executivo, Setor Público'
                },
                {
                  text: 'A abordagem de Heitor Fox é única: científica, prática e profundamente humana. Mudou a cultura da nossa organização.',
                  role: 'Líder de RH, Setor Privado'
                }
              ].map((testemunho, idx) => (
                <div key={idx} className="relative">
                  <div className="text-6xl text-[#E2B94B]/20 absolute -top-4 -left-2">"</div>
                  <p className="text-lg text-[#D9D9E0] italic mb-4 relative z-10 pl-6">
                    {testemunho.text}
                  </p>
                  <p className="text-[#9AA0A6] pl-6">— {testemunho.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Agenda a tua sessão de diagnóstico
            </h2>
            <p className="text-xl text-[#9AA0A6]">
              Transforma o teu modo de comunicar, liderar e viver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1A1A1D] border-[#2A2A2F]">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Formulário de Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="nome" className="text-[#D9D9E0]">Nome</Label>
                      <Input 
                        id="nome" 
                        className="bg-[#0E0E10] border-[#2A2A2F] text-white focus:border-[#E2B94B]" 
                        placeholder="O teu nome"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#D9D9E0]">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        className="bg-[#0E0E10] border-[#2A2A2F] text-white focus:border-[#E2B94B]" 
                        placeholder="email@exemplo.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone" className="text-[#D9D9E0]">Telemóvel</Label>
                      <Input 
                        id="telefone" 
                        className="bg-[#0E0E10] border-[#2A2A2F] text-white focus:border-[#E2B94B]" 
                        placeholder="+351..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="organizacao" className="text-[#D9D9E0]">Organização</Label>
                      <Input 
                        id="organizacao" 
                        className="bg-[#0E0E10] border-[#2A2A2F] text-white focus:border-[#E2B94B]" 
                        placeholder="Nome da organização"
                      />
                    </div>
                    <div>
                      <Label htmlFor="funcao" className="text-[#D9D9E0]">Função</Label>
                      <Input 
                        id="funcao" 
                        className="bg-[#0E0E10] border-[#2A2A2F] text-white focus:border-[#E2B94B]" 
                        placeholder="A tua função"
                      />
                    </div>
                    <div>
                      <Label htmlFor="mensagem" className="text-[#D9D9E0]">Mensagem</Label>
                      <Textarea 
                        id="mensagem" 
                        className="bg-[#0E0E10] border-[#2A2A2F] text-white focus:border-[#E2B94B] min-h-[100px]" 
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rgpd" className="border-[#2A2A2F]" />
                      <label htmlFor="rgpd" className="text-sm text-[#9AA0A6]">
                        Aceito a política de privacidade (RGPD)
                      </label>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90 font-semibold"
                    >
                      Agendar Diagnóstico
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contactos Diretos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-[#1A1A1D] border-[#2A2A2F]">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Contactos Diretos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#E2B94B]" />
                    <a href="mailto:coach@heitorfox.com" className="text-[#D9D9E0] hover:text-[#E2B94B]">
                      coach@heitorfox.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#E2B94B]" />
                    <span className="text-[#D9D9E0]">WhatsApp Business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#E2B94B]" />
                    <span className="text-[#D9D9E0]">LinkedIn</span>
                  </div>
                  <div className="pt-4 border-t border-[#2A2A2F]">
                    <p className="text-sm text-[#9AA0A6]">
                      <strong className="text-[#E2B94B]">Resposta em 1–2 dias úteis</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A1D] border-[#2A2A2F]">
                <CardHeader>
                  <CardTitle className="text-xl text-white">FAQ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Como funciona a metodologia?</h4>
                    <p className="text-sm text-[#9AA0A6]">
                      Integramos diagnóstico (Conhece), protocolos práticos (Aplica) e medição de impacto (Transforma).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Quais as métricas usadas?</h4>
                    <p className="text-sm text-[#9AA0A6]">
                      PDA Assessment, Feedback 360, VCW, Neuromap™ e relatórios trimestrais personalizados.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Existe certificação?</h4>
                    <p className="text-sm text-[#9AA0A6]">
                      Sim, oferecemos certificação internacional Psicotraining Certified Trainers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1D] border-t border-[#2A2A2F] py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-[#E2B94B] mb-2">Modelo CAT™</div>
              <p className="text-sm text-[#9AA0A6] italic">It's All About Your Brain "Heart & Soul"</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Navegação</h4>
              <div className="space-y-2">
                {['Início', 'O Modelo', 'Aplicações', 'Programas'].map((item, idx) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(['home', 'modelo', 'aplicacoes', 'programas'][idx])}
                    className="block text-sm text-[#9AA0A6] hover:text-[#E2B94B]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Mais</h4>
              <div className="space-y-2">
                {['Heitor Fox', 'Impacto', 'Contacto'].map((item, idx) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(['heitor', 'impacto', 'contacto'][idx])}
                    className="block text-sm text-[#9AA0A6] hover:text-[#E2B94B]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Links</h4>
              <div className="space-y-2">
                <a href="https://www.heitorfox.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#9AA0A6] hover:text-[#E2B94B]">
                  heitorfox.com
                </a>
                <a href="https://www.psicotraining.pt" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#9AA0A6] hover:text-[#E2B94B]">
                  psicotraining.pt
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#2A2A2F] pt-8 text-center space-y-2">
            <p className="text-xs text-[#9AA0A6]">
              Certificado por: <span className="text-[#E2B94B]">Psicotraining (DGERT Portugal)</span> | <span className="text-[#E2B94B]">IPDD (Cabo Verde)</span> | <span className="text-[#E2B94B]">Kombersu RH</span>
            </p>
            <p className="text-sm text-[#9AA0A6]">
              © 2025 Modelo CAT™ (Conhece. Aplica. Transforma.) | Heitor Fox | Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


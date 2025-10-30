import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Brain, Clock, User, Search, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('Todos')

  const categories = ['Todos', 'Neurociência', 'Liderança', 'Comunicação', 'Comportamento', 'Inteligência Emocional']

  const blogPosts = [
    {
      id: 1,
      slug: 'neurociencia-lideranca',
      title: 'Como o Cérebro Processa a Liderança: Neurociência Aplicada',
      excerpt: 'Descubra como a neurociência revela os mecanismos cerebrais por trás da liderança eficaz e como aplicar este conhecimento na prática.',
      category: 'Neurociência',
      author: 'Heitor Fox',
      date: '15 Out 2025',
      readTime: '8 min',
      image: '/images/neurocomunicacao-hero.png'
    },
    {
      id: 2,
      slug: 'modelo-cat-casos-sucesso',
      title: 'O Modelo CAT™ na Prática: Casos de Sucesso',
      excerpt: 'Análise detalhada de como organizações transformaram a sua cultura através do Modelo CAT™ com resultados mensuráveis.',
      category: 'Liderança',
      author: 'Heitor Fox',
      date: '12 Out 2025',
      readTime: '10 min',
      image: '/images/transformacao-resultados.png'
    },
    {
      id: 3,
      slug: 'neurocomunicacao-impacto',
      title: 'Neurocomunicação: A Ciência de Comunicar com Impacto',
      excerpt: 'Como a neurociência aplicada à comunicação pode aumentar em 35% a eficácia das suas mensagens e apresentações.',
      category: 'Comunicação',
      author: 'Heitor Fox',
      date: '10 Out 2025',
      readTime: '7 min',
      image: '/images/workshop-dinamico-1.png'
    },
    {
      id: 4,
      title: 'Inteligência Emocional e Tomada de Decisão',
      excerpt: 'O papel das emoções nas decisões estratégicas e como desenvolver inteligência emocional para liderar com empatia.',
      category: 'Inteligência Emocional',
      author: 'Heitor Fox',
      date: '8 Out 2025',
      readTime: '9 min',
      image: '/images/executive-meeting.jpg'
    },
    {
      id: 5,
      title: 'Comportamento Humano em Contexto Organizacional',
      excerpt: 'Compreender os padrões de comportamento humano é essencial para criar culturas organizacionais resilientes e inovadoras.',
      category: 'Comportamento',
      author: 'Heitor Fox',
      date: '5 Out 2025',
      readTime: '6 min',
      image: '/images/team-collaboration-1.jpg'
    },
    {
      id: 6,
      title: 'PDA Assessment: Mapeando Comportamentos para Resultados',
      excerpt: 'Como o PDA Assessment revela padrões comportamentais e permite criar estratégias personalizadas de desenvolvimento.',
      category: 'Neurociência',
      author: 'Heitor Fox',
      date: '3 Out 2025',
      readTime: '8 min',
      image: '/images/leadership-team.jpg'
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A7BFF]/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-15">
          <img src="/images/neurocomunicacao-hero.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-[#E2B94B]">Blog</span> Modelo CAT™
            </h1>
            <p className="text-2xl text-[#D9D9E0] max-w-3xl mx-auto">
              Insights sobre neurociência, liderança e comportamento humano
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-[#1A1A1D]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9AA0A6]" />
              <Input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#0E0E10] border-[#2A2A2F] text-white focus:border-[#E2B94B]"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={selectedCategory === category 
                    ? 'bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90' 
                    : 'border-[#2A2A2F] text-[#9AA0A6] hover:border-[#E2B94B] hover:text-[#E2B94B]'
                  }
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-[#9AA0A6]">Nenhum artigo encontrado.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={post.slug ? `/blog/${post.slug}` : '#'} className="block h-full">
                    <Card className="bg-[#1A1A1D] border-[#2A2A2F] hover:border-[#E2B94B] transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,185,75,0.2)] h-full group cursor-pointer overflow-hidden">
                    <div className="w-full h-48 overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#E2B94B] text-[#0E0E10] px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white group-hover:text-[#E2B94B] transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-[#9AA0A6]">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-[#9AA0A6]">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-[#9AA0A6]">{post.date}</span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-[#E2B94B] hover:text-[#E2B94B]/80 hover:bg-[#E2B94B]/10"
                        >
                          Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#E2B94B]/10 to-[#0A7BFF]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Brain className="w-16 h-16 text-[#E2B94B] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Não percas nenhum artigo
            </h2>
            <p className="text-lg text-[#D9D9E0] mb-8">
              Subscreve a nossa newsletter e recebe conteúdos exclusivos sobre neurociência, liderança e comportamento humano.
            </p>
            <Button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90 font-semibold px-8 py-6 text-lg"
            >
              Subscrever Newsletter
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


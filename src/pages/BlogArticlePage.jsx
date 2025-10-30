import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import SocialShare from '@/components/SocialShare.jsx'

// Artigos completos
const articles = {
  'neurociencia-lideranca': {
    id: 1,
    slug: 'neurociencia-lideranca',
    title: 'Como o Cérebro Processa a Liderança: Neurociência Aplicada',
    category: 'Neurociência',
    author: 'Heitor Fox',
    date: '15 Out 2025',
    readTime: '8 min',
    image: '/images/neurocomunicacao-hero.png',
    content: `
## A Fronteira da Liderança: O Cérebro

Durante décadas, a liderança foi estudada através de prismas comportamentais, psicológicos e sociológicos. No entanto, uma nova fronteira está a revolucionar a nossa compreensão sobre o que torna um líder eficaz: a **neurociência**.

Ao aplicar os princípios da neurociência à liderança, não estamos apenas a especular sobre comportamentos. Estamos a mergulhar nos mecanismos biológicos que governam a tomada de decisão, a empatia, a confiança e a motivação. No **Modelo CAT™**, esta abordagem não é um complemento; é o pilar fundamental.

> "Compreender o cérebro não é apenas uma vantagem competitiva; é a base da liderança consciente e impactante do século XXI."

## O Cérebro Social e a Liderança

O cérebro humano é uma entidade inerentemente social. Circuitos neurais complexos, como o **sistema de neurónios-espelho**, permitem-nos compreender as intenções e emoções dos outros. Um líder que ativa estes circuitos de forma positiva gera confiança e coesão. Um líder que os ignora, gera medo e desconfiança.

### 1. Confiança: A Química da Segurança Psicológica

A confiança não é um conceito abstrato. É uma resposta neuroquímica. Quando os líderes criam um ambiente de **segurança psicológica**, o cérebro liberta **oxitocina**, o neurotransmissor da ligação social. Isto reduz os níveis de **cortisol** (a hormona do stress) e aumenta a colaboração, a inovação e o engagement.

**Como o Modelo CAT™ aplica isto:**
- **Diagnóstico (Conhece):** Utilizamos o PDA Assessment para mapear os estilos de comunicação e identificar potenciais barreiras à confiança.
- **Protocolos (Aplica):** Implementamos práticas de feedback construtivo que ativam a libertação de oxitocina e fortalecem as ligações da equipa.

### 2. Empatia: Ver o Mundo com Outros Olhos (e Cérebros)

A empatia é a capacidade de nos colocarmos no lugar do outro. Neurologicamente, envolve a ativação da **ínsula anterior** e do **córtex cingulado anterior**. Líderes empáticos são capazes de antecipar as necessidades da sua equipa, gerir conflitos de forma mais eficaz e criar um ambiente de trabalho mais inclusivo.

**Como o Modelo CAT™ aplica isto:**
- **Neurocomunicação (Aplica):** Treinamos líderes a reconhecer microexpressões e a adaptar a sua comunicação para ressoar com o estado emocional da equipa.
- **Feedback 360º (Conhece):** Fornecemos uma visão completa de como a liderança é percebida, permitindo ajustes comportamentais baseados em dados.

## A Tomada de Decisão: Entre a Emoção e a Razão

Contrariamente ao mito do líder puramente racional, a neurociência demonstra que a emoção é um componente essencial da tomada de decisão. O **córtex pré-frontal ventromedial** integra inputs emocionais para guiar as nossas escolhas. Líderes que ignoram a sua intuição (ou a dos outros) tomam decisões subótimas.

### O Papel do Córtex Pré-Frontal

O **córtex pré-frontal** é o nosso "CEO cerebral". É responsável pelo planeamento, pela regulação de impulsos e pela antecipação de consequências. No entanto, sob stress crónico, esta área do cérebro torna-se menos ativa, e o controlo é assumido pela **amígdala**, o nosso centro de resposta a ameaças. O resultado? Decisões reativas, de curto prazo e, muitas vezes, erradas.

**Como o Modelo CAT™ aplica isto:**
- **Gestão de Stress (Aplica):** Ensinamos técnicas baseadas em mindfulness e biofeedback para regular a resposta ao stress e manter o córtex pré-frontal "online".
- **Neuromap™ (Conhece):** Mapeamos os gatilhos emocionais que influenciam a tomada de decisão, permitindo a criação de estratégias de regulação personalizadas.

## Conclusão: Liderar com o Cérebro em Mente

A neurociência aplicada à liderança não é uma moda passageira. É uma mudança de paradigma. Ao compreendermos como o cérebro funciona, podemos desenhar intervenções mais eficazes, criar culturas organizacionais mais saudáveis e, em última análise, gerar resultados mensuráveis e sustentáveis.

O Modelo CAT™ é a ponte entre a ciência e a prática. Não pedimos aos líderes que mudem quem são. Damos-lhes as ferramentas para compreenderem como funcionam – e como podem funcionar ainda melhor.

**A transformação começa no cérebro.**
    `
  },
  'modelo-cat-casos-sucesso': {
    id: 2,
    slug: 'modelo-cat-casos-sucesso',
    title: 'O Modelo CAT™ na Prática: Casos de Sucesso',
    category: 'Liderança',
    author: 'Heitor Fox',
    date: '12 Out 2025',
    readTime: '10 min',
    image: '/images/transformacao-resultados.png',
    content: `
## Da Teoria à Transformação: O Impacto Real do Modelo CAT™

O Modelo CAT™ (Conhece, Aplica, Transforma) não é um conceito teórico. É uma metodologia pragmática, desenhada para gerar impacto mensurável em organizações reais. Neste artigo, vamos explorar casos de sucesso anonimizados que ilustram como a aplicação rigorosa do nosso modelo resultou em transformações profundas e sustentáveis.

> "A verdadeira medida de uma metodologia não está na sua elegância teórica, mas nos resultados que produz no terreno."

## Caso de Sucesso 1: Empresa de Tecnologia em Crescimento Acelerado

### O Desafio (A Dor)

Uma empresa de software com 150 colaboradores estava a sofrer com o seu próprio sucesso. O crescimento rápido levou a uma diluição da cultura, silos departamentais e uma quebra na comunicação entre a equipa de engenharia e a equipa de vendas. A liderança sentia-se distante e a inovação estava a estagnar.

### A Intervenção (O Modelo CAT™)

**1. Conhece (Diagnóstico):**
- **PDA Assessment:** Mapeou os perfis comportamentais de todos os líderes de equipa. Revelou uma predominância de perfis orientados a tarefas em detrimento de perfis orientados a pessoas.
- **Feedback 360º:** Demonstrou que os líderes eram percebidos como "micro-managers" e pouco acessíveis.
- **Value Creation Wheel (VCW):** Identificou que a "colaboração interdepartamental" era o principal ponto de dor em toda a organização.

**2. Aplica (Ação):**
- **Workshops de Neurocomunicação:** Foco em escuta ativa e comunicação empática para todos os líderes.
- **Sessões de Coaching Executivo:** Coaching individual com os C-Levels para desenvolver um estilo de liderança mais delegativo e inspirador.
- **Implementação de Rituais:** Criação de reuniões interdepartamentais semanais (sprints de colaboração) com uma metodologia clara para garantir a partilha de informação.

**3. Transforma (Resultados):**
- **+30% de Coesão Interdepartamental:** Medido através de inquéritos de pulso trimestrais.
- **Redução de 25% no Time-to-Market:** A melhoria na comunicação entre engenharia e vendas acelerou o ciclo de desenvolvimento de produto.
- **Aumento de 15% na Retenção de Talentos:** Particularmente nas equipas de engenharia, onde o turnover era mais elevado.

## Caso de Sucesso 2: Instituição Financeira Tradicional

### O Desafio (A Dor)

Um banco com uma longa história enfrentava uma crise de agilidade. A hierarquia rígida e a aversão ao risco estavam a impedir a transformação digital. Os colaboradores sentiam-se desmotivados e a concorrência das fintechs era cada vez mais ameaçadora.

### A Intervenção (O Modelo CAT™)

**1. Conhece (Diagnóstico):**
- **Neuromap™:** Revelou que a cultura organizacional estava fortemente ancorada no "medo do erro", ativando constantemente a amígdala e inibindo o pensamento criativo do córtex pré-frontal.
- **Análise de Redes Organizacionais (ONA):** Mapeou os fluxos de comunicação e demonstrou que a informação estava a ser retida em poucos nós centrais, criando bottlenecks.

**2. Aplica (Ação):**
- **Programa "Liderança Corajosa":** Workshops focados em segurança psicológica e na desmistificação do erro como parte do processo de inovação.
- **Criação de Squads Multidisciplinares:** Equipas pequenas e autónomas foram criadas para trabalhar em projetos de inovação, quebrando a estrutura hierárquica tradicional.
- **Formação em Liderança Adaptativa:** Treino para os gestores de topo sobre como liderar em ambientes de incerteza, abdicando do controlo e promovendo a autonomia.

**3. Transforma (Resultados):**
- **Lançamento de 3 Novos Produtos Digitais em 12 Meses:** Comparado com zero no ano anterior.
- **+40% de Engagement dos Colaboradores:** Medido pelo inquérito anual de clima organizacional.
- **Aumento de 20% na Satisfação do Cliente:** Relacionado com a maior agilidade e capacidade de resposta da organização.

## Conclusão: Um Modelo, Múltiplas Realidades

Estes casos demonstram a versatilidade e o poder do Modelo CAT™. Não oferecemos uma solução "one-size-fits-all". Oferecemos um **framework rigoroso e adaptável** que começa por um diagnóstico profundo (Conhece), implementa ações cirúrgicas e baseadas em ciência (Aplica) e, acima de tudo, mede o impacto de forma obsessiva (Transforma).

A transformação não é um evento. É um processo. E com o Modelo CAT™, as organizações têm um parceiro estratégico para navegar esse processo com confiança e clareza.
    `
  },
  'neurocomunicacao-impacto': {
    id: 3,
    slug: 'neurocomunicacao-impacto',
    title: 'Neurocomunicação: A Ciência de Comunicar com Impacto',
    category: 'Comunicação',
    author: 'Heitor Fox',
    date: '10 Out 2025',
    readTime: '7 min',
    image: '/images/workshop-dinamico-1.png',
    content: `
## Mais do que Palavras: A Comunicação no Cérebro

Comunicar é muito mais do que a simples troca de informações. É a arte e a ciência de criar uma ponte entre duas mentes. A **neurocomunicação**, uma das pedras angulares do Modelo CAT™, estuda como o cérebro processa, interpreta e reage às mensagens, permitindo-nos comunicar de uma forma que gera impacto, influência e conexão genuína.

> "A comunicação eficaz não é sobre o que você diz, mas sobre como o cérebro de quem ouve o recebe."

## O Cérebro Triuno e a Comunicação

Para comunicar com impacto, é essencial compreender a estrutura do cérebro. O modelo do **Cérebro Triuno** de Paul MacLean, embora simplificado, oferece um mapa útil:

**1. Cérebro Reptiliano (Tronco Cerebral):** O nosso cérebro mais primitivo, focado na sobrevivência (instintos, segurança). Para captar a sua atenção, a mensagem tem de ser **simples, visual e focada no contraste** (antes/depois, risco/recompensa).

**2. Cérebro Límbico (Sistema Emocional):** O centro das emoções (amígdala, hipocampo). Para ressoar aqui, a mensagem precisa de ter uma **carga emocional**. Histórias, metáforas e uma linguagem que evoca sentimentos são extremamente eficazes.

**3. Neocórtex (Cérebro Racional):** A nossa camada mais evoluída, responsável pelo pensamento lógico, pela linguagem e pelo planeamento. Para o convencer, a mensagem precisa de **dados, lógica e argumentos estruturados**.

Um erro comum na comunicação corporativa é focar-se exclusivamente no neocórtex, ignorando os outros dois cérebros. Uma comunicação verdadeiramente impactante segue a ordem: **Reptiliano → Límbico → Neocórtex**.

**Como o Modelo CAT™ aplica isto:**
- **Neuromap™ (Conhece):** Ajudamos os líderes a estruturar as suas mensagens para apelar primeiro aos instintos de sobrevivência e às emoções do público, antes de apresentar os dados racionais.

## Neurónios-Espelho: A Base da Conexão

Descobertos por Giacomo Rizzolatti, os **neurónios-espelho** são células cerebrais que disparam tanto quando executamos uma ação como quando observamos alguém executar essa mesma ação. São a base da empatia, da aprendizagem por imitação e da conexão humana.

Quando um líder comunica com congruência – alinhando as suas palavras, o seu tom de voz e a sua linguagem corporal – os neurónios-espelho da audiência disparam em ressonância. Isto cria uma sensação de **sincronia e confiança**.

**Como o Modelo CAT™ aplica isto:**
- **Treino de Comunicação Não-Verbal (Aplica):** Analisamos e treinamos a linguagem corporal, as microexpressões e o tom de voz para garantir que a mensagem é congruente e ativa os neurónios-espelho de forma positiva.

## O Poder do Storytelling: O Cérebro em Modo de Simulação

Quando ouvimos uma história, o nosso cérebro não se limita a processar a linguagem. Ativa as mesmas áreas que seriam ativadas se estivéssemos a viver essa experiência. Uma história sobre correr ativa o córtex motor. Uma descrição de um cheiro ativa o córtex olfativo. A isto chama-se **acoplamento neural**.

O storytelling é a ferramenta mais poderosa da neurocomunicação porque coloca o cérebro da audiência num estado de simulação, tornando a mensagem mais memorável, persuasiva e emocionalmente relevante.

**Como o Modelo CAT™ aplica isto:**
- **Workshops de Corporate Storytelling (Aplica):** Ensinamos líderes a transformar dados e estratégias em narrativas envolventes que captam a atenção, geram emoção e inspiram à ação.

## Conclusão: Comunique para o Cérebro

A neurocomunicação transforma a forma como vemos a comunicação. Deixa de ser uma "soft skill" e passa a ser uma **competência técnica baseada em ciência**.

Ao compreender os mecanismos cerebrais que governam a atenção, a emoção e a decisão, os líderes podem:

- **Aumentar o impacto** das suas mensagens.
- **Construir confiança** de forma mais rápida e duradoura.
- **Inspirar e motivar** as suas equipas para a ação.
- **Reduzir conflitos** e mal-entendidos.

No Modelo CAT™, não ensinamos a falar. Ensinamos a conectar, cérebro a cérebro.
    `
  }
}

export default function BlogArticlePage() {
  const { slug } = useParams()
  const article = articles[slug]

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0E0E10] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog">
            <Button className="bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90">
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={article.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/80 to-[#0E0E10]"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="inline-flex items-center text-[#E2B94B] hover:text-[#E2B94B]/80 mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-[#E2B94B] text-[#0E0E10] px-4 py-2 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-[#9AA0A6]">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>
          </motion.div>

          {/* Social Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-[#2A2A2F]"
          >
            <SocialShare 
              url={window.location.href}
              title={article.title}
              description={article.content.substring(0, 200)}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-[#D9D9E0] prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-[#E2B94B] prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-[#E2B94B] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#D9D9E0]
              prose-ul:text-[#D9D9E0] prose-li:mb-2
            "
            dangerouslySetInnerHTML={{ __html: article.content.split('\n').map(line => {
              if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`
              if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`
              if (line.startsWith('> ')) return `<blockquote><p>${line.substring(2)}</p></blockquote>`
              if (line.startsWith('**') && line.endsWith('**')) return `<p><strong>${line.slice(2, -2)}</strong></p>`
              if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`
              if (line.trim() === '') return ''
              return `<p>${line}</p>`
            }).join('') }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#E2B94B]/10 to-[#0A7BFF]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para transformar a sua organização?
            </h2>
            <p className="text-lg text-[#D9D9E0] mb-8">
              Agende uma sessão de diagnóstico e descubra como o Modelo CAT™ pode gerar impacto real na sua equipa.
            </p>
            <Link to="/#contacto">
              <Button className="bg-[#E2B94B] text-[#0E0E10] hover:bg-[#E2B94B]/90 font-semibold px-8 py-6 text-lg">
                Agendar Diagnóstico
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


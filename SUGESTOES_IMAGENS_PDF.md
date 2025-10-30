# Sugestões de Imagens do PDF para Adicionar ao Website

## 📋 Análise Completa das Imagens Disponíveis

Após análise detalhada do PDF "Plano de Formação Executiva 2026", identifiquei **várias imagens e infográficos** que podem enriquecer ainda mais o website.

---

## ✅ Imagens Já Implementadas

1. **001.webp** - Foto de Heitor Fox em formação ✅ (Secção Heitor Fox)
2. **003.webp** - Diagrama do Modelo CAT™ ✅ (Secção O Modelo)
3. **005.webp** - Workshop com participantes ✅ (Card de Aplicações)

---

## 🎯 Imagens Recomendadas para Adicionar

### 1. **Infográfico Conhece-Aplica-Transforma** (004.webp)

**Conteúdo:**
- Fluxo visual: Pessoa → Cérebro → Engrenagens → Troféu → Certificação
- Ícones de "CONHECE", "APLICA", "TRANSFORMA"
- Símbolos: + Performance, + Resultados, + Futuro

**Onde adicionar:**
- **Secção "Tríade CAT"** - Substituir ou complementar os cards atuais
- Posição: Logo após o hero section, antes da secção de métricas

**Impacto:**
- ✅ Visualização clara do processo CAT™
- ✅ Infográfico profissional e colorido
- ✅ Reforça a metodologia de forma visual

**Implementação sugerida:**
```jsx
<div className="flex justify-center mb-16">
  <img 
    src="/images/infografico-cat.webp" 
    alt="Infográfico Conhece, Aplica, Transforma" 
    className="max-w-3xl w-full"
  />
</div>
```

---

### 2. **Ícones dos Programas com Preços** (009.webp)

**Conteúdo:**
- 3 ícones profissionais:
  - **Executive Courses** - 3850 CVE / 3 DIAS
  - **Executive Workshops** - 95.000 CVE / 1/2 DIA
  - **Art-Therapy Atelier** - 3500 CVE / 1 DIA

**Onde adicionar:**
- **Secção "Programas e Certificações"** - No topo, antes dos cards individuais
- Alternativa: Criar uma subsecção "Modalidades e Investimento"

**Impacto:**
- ✅ Transparência nos preços (para Cabo Verde)
- ✅ Comparação visual rápida entre programas
- ✅ Ícones profissionais e consistentes

**Implementação sugerida:**
```jsx
<motion.div className="mb-12">
  <h3 className="text-2xl font-bold text-white mb-6 text-center">
    Modalidades e Investimento
  </h3>
  <img 
    src="/images/programas-icones.webp" 
    alt="Modalidades de Formação" 
    className="max-w-4xl w-full mx-auto rounded-lg shadow-xl"
  />
</motion.div>
```

**Nota:** Os preços são em CVE (Cabo Verde). Para Portugal, pode adicionar texto explicativo ou ocultar preços.

---

### 3. **Tabela de Serviços Disponibilizados** (010.webp)

**Conteúdo:**
- Tabela completa com 5 serviços:
  1. Cursos Executivos (3 dias / 21h)
  2. Workshops Executivos (1/2 dia)
  3. Atelier de Arte-Terapia (1 dia)
  4. Coaching Executivo de Alta Performance
  5. Consultoria de Neuroestratégia: Visão 360º

- Inclui ícones, descrições e investimentos

**Onde adicionar:**
- **Nova secção "Serviços Complementares"** - Após a secção de Programas
- Alternativa: Substituir os cards atuais de programas por esta tabela

**Impacto:**
- ✅ Visão completa de todos os serviços
- ✅ Informação estruturada e profissional
- ✅ Inclui serviços adicionais (Coaching, Consultoria)

**Implementação sugerida:**
```jsx
<section className="py-24 px-4 bg-[#1A1A1D]/30">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-5xl font-bold text-white mb-12 text-center">
      Serviços Complementares
    </h2>
    <img 
      src="/images/servicos-disponiveis.webp" 
      alt="Tabela de Serviços Disponibilizados" 
      className="w-full rounded-lg shadow-2xl"
    />
  </div>
</section>
```

**Vantagem:** Mostra a gama completa de serviços de forma profissional e organizada.

---

### 4. **Benefícios Organizacionais** (006.webp)

**Conteúdo:**
- 4 pilares visuais de benefícios para organizações
- Design profissional com ícones

**Onde adicionar:**
- **Secção "Aplicações e Resultados"** - Após os cards de casos práticos
- Alternativa: Nova subsecção "Benefícios para a Organização"

**Impacto:**
- ✅ Destaca valor para organizações
- ✅ Visual profissional e estruturado
- ✅ Complementa os casos práticos

**Implementação sugerida:**
```jsx
<motion.div className="mt-16">
  <h3 className="text-3xl font-bold text-white mb-8 text-center">
    Benefícios para a Organização
  </h3>
  <img 
    src="/images/beneficios-organizacao.webp" 
    alt="Benefícios Organizacionais do Modelo CAT™" 
    className="max-w-4xl w-full mx-auto rounded-lg shadow-xl"
  />
</motion.div>
```

---

### 5. **Página de Introdução Completa** (002.webp)

**Conteúdo:**
- Texto completo da introdução do Plano 2026
- Contexto VUCA
- Metodologia CAT™
- Ferramentas (PDA, Feedback 360º, Neuromap™, etc.)
- Infográfico Conhece-Aplica-Transforma na parte inferior

**Onde adicionar:**
- **Secção "O Modelo CAT™"** - Como imagem de contexto adicional
- Alternativa: Criar modal "Saiba Mais" com esta página

**Impacto:**
- ✅ Contexto completo e profissional
- ✅ Mostra a profundidade do programa
- ✅ Credibilidade institucional

**Implementação sugerida:**
```jsx
// Como modal ou página expandida
<Button onClick={() => setShowDetails(true)}>
  Ver Plano Completo 2026
</Button>

{showDetails && (
  <Modal>
    <img src="/images/plano-introducao.webp" alt="Plano Formação 2026" />
  </Modal>
)}
```

---

### 6. **Página de Destinatários** (005.webp - parte superior)

**Conteúdo:**
- Lista de destinatários da formação:
  - Líderes e Executivos
  - Gestores de Equipas e RH
  - Profissionais em Cargos de Decisão Estratégica
  - Organizações Públicas e Privadas
  - Equipas Multidisciplinares

**Onde adicionar:**
- **Nova secção "Para Quem é Este Programa"** - Após Programas, antes de Heitor Fox
- Alternativa: Expandir a secção de Aplicações

**Impacto:**
- ✅ Clarifica o público-alvo
- ✅ Ajuda visitantes a identificarem-se
- ✅ Profissionalismo institucional

---

## 🎨 Priorização de Implementação

### **Alta Prioridade** (Impacto Imediato)

1. **Infográfico Conhece-Aplica-Transforma** (004.webp)
   - Impacto: ⭐⭐⭐⭐⭐
   - Facilidade: ⭐⭐⭐⭐⭐
   - **Recomendação: IMPLEMENTAR JÁ**

2. **Ícones dos Programas com Preços** (009.webp)
   - Impacto: ⭐⭐⭐⭐
   - Facilidade: ⭐⭐⭐⭐
   - **Recomendação: IMPLEMENTAR JÁ**

### **Média Prioridade** (Valor Adicional)

3. **Tabela de Serviços Disponibilizados** (010.webp)
   - Impacto: ⭐⭐⭐⭐
   - Facilidade: ⭐⭐⭐
   - Recomendação: Adicionar como secção nova

4. **Benefícios Organizacionais** (006.webp)
   - Impacto: ⭐⭐⭐
   - Facilidade: ⭐⭐⭐⭐
   - Recomendação: Complementar Aplicações

### **Baixa Prioridade** (Contexto Adicional)

5. **Página de Introdução** (002.webp)
   - Impacto: ⭐⭐
   - Facilidade: ⭐⭐
   - Recomendação: Modal ou página "Saiba Mais"

6. **Página de Destinatários** (005.webp superior)
   - Impacto: ⭐⭐
   - Facilidade: ⭐⭐⭐
   - Recomendação: Secção adicional opcional

---

## 📐 Layout Sugerido para Nova Estrutura

### Ordem de Secções (com novas imagens):

1. **Hero** (com fundo neural) ✅
2. **Tríade CAT** + **Infográfico CAT™** (004.webp) 🆕
3. **Métricas** ✅
4. **O Modelo CAT™** + Diagrama (003.webp) ✅
5. **Aplicações e Resultados** (com imagens) ✅ + **Benefícios** (006.webp) 🆕
6. **Como Funciona na Prática** ✅
7. **Programas e Certificações** + **Ícones/Preços** (009.webp) 🆕
8. **Serviços Complementares** (010.webp) 🆕
9. **Heitor Fox** (com foto) ✅
10. **IKIGAI e Diferenciais** ✅
11. **Impacto Global** ✅
12. **Testemunhos** ✅
13. **Contacto** ✅
14. **Footer** ✅

---

## 🔧 Implementação Técnica

### Passo 1: Copiar Imagens Adicionais
```bash
cp /tmp/pdf_images/.../004.webp /home/ubuntu/modelo-cat-website/public/images/infografico-cat.webp
cp /tmp/pdf_images/.../009.webp /home/ubuntu/modelo-cat-website/public/images/programas-precos.webp
cp /tmp/pdf_images/.../010.webp /home/ubuntu/modelo-cat-website/public/images/servicos-disponiveis.webp
```

### Passo 2: Atualizar App.jsx
Adicionar as imagens nas secções apropriadas com animações fade-in.

### Passo 3: Rebuild e Test
```bash
pnpm run build
```

---

## ⚠️ Considerações Importantes

### Preços em CVE
- As imagens 009 e 010 mostram preços em **Escudos de Cabo Verde (CVE)**
- **Opções:**
  1. Usar as imagens e adicionar nota: "Preços para Cabo Verde. Consulte para Portugal."
  2. Editar as imagens para remover preços
  3. Criar versões diferentes para CV e PT

### Texto vs Imagem
- Algumas imagens (002, 005 superior) são principalmente **texto**
- **Recomendação:** Extrair o texto e criar secções HTML em vez de usar imagens
- **Vantagem:** SEO, acessibilidade, responsividade

### Qualidade Visual
- Todas as imagens do PDF são de **alta qualidade** (WEBP)
- Tamanho médio: ~150-200KB cada
- **Impacto no performance:** Mínimo

---

## 🎯 Recomendação Final

### **Implementar Agora (Máximo Impacto):**

1. ✅ **Infográfico Conhece-Aplica-Transforma** (004.webp)
   - Local: Após Tríade CAT
   - Justificação: Visualização clara do processo

2. ✅ **Ícones dos Programas** (009.webp)
   - Local: Topo da secção Programas
   - Justificação: Comparação visual rápida

### **Considerar para Futuro:**

3. 📋 **Tabela de Serviços** (010.webp)
   - Criar secção "Serviços Complementares"

4. 📊 **Benefícios Organizacionais** (006.webp)
   - Adicionar após Aplicações

---

## 📞 Próximos Passos

Quer que eu implemente as **2 imagens prioritárias** agora (Infográfico CAT™ e Ícones dos Programas)?

Estas duas adições terão **máximo impacto visual** com **mínimo esforço** e complementarão perfeitamente o website existente.

---

**Documento criado em:** 10 de Outubro de 2025  
**Análise baseada em:** Plano_FormacaoExecutiva2026_CAT_Institucional_A.pdf  
**Status:** Aguardando aprovação para implementação


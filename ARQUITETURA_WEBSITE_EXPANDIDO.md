# Arquitetura do Website Modelo CAT™ - Versão Institucional Expandida

## 📋 Estrutura de Navegação

### Menu Principal

1. **Início** (/)
2. **Sobre Nós** (/sobre-nos) - NOVO
   - Quem Somos
   - Entidades Associadas
   - Equipa
   - Governança
3. **Modelo CAT™** (/modelo-cat)
4. **Programas** (/programas)
5. **Portfolio** (/portfolio) - NOVO
   - Galeria
   - Testemunhos
   - Vídeos
6. **Parceiros** (/parceiros) - NOVO
7. **Impacto** (/impacto)
8. **Contacto** (/contacto)

---

## 🏢 Página: Sobre Nós

### Secção 1: Quem Somos
- Missão, Visão, Valores
- História da Psicotraining Internacional
- Diferenciais Competitivos

### Secção 2: Entidades Associadas
**Psicotraining Internacional** (Principal)
- Logo
- Descrição
- Certificação DGERT Portugal
- Link: psicotraining.pt

**IPDD - Instituto Politécnico Democracia e Desenvolvimento** (Cabo Verde)
- Logo
- Descrição
- Parceria institucional

**Kombersu RH** (Parceiro RH)
- Logo
- Descrição
- Área de actuação

### Secção 3: Equipa
**Heitor Fox** - Fundador e CEO
- Foto
- Bio completa
- Assinatura: "It's All About Your Brain 'Heart & Soul'"
- Links: heitorfox.com, LinkedIn

**Formadores Certificados**
- Lista de formadores
- Certificações

### Secção 4: Governança

**Conselho Estratégico** (5 membros)
- Nome
- Cargo/Função
- Foto
- Bio resumida

**Fundadores** (7 entidades)
- Nome da entidade/pessoa
- Ano de fundação
- Contributo

**Comité Científico** (Opcional)
- Académicos e investigadores
- Validação científica

---

## 📸 Página: Portfolio

### Secção 1: Galeria de Formações
- Grid de imagens de formações realizadas
- Filtros: Ano, Programa, País
- Lightbox para visualização

### Secção 2: Casos de Sucesso
- Cards com estudos de caso
- Empresa/Organização
- Desafio
- Solução CAT™
- Resultados mensuráveis

### Secção 3: Testemunhos
**Vídeo-Testemunhos**
- Embed de vídeos YouTube/Vimeo
- Thumbnails com play button

**Testemunhos Escritos**
- Cards com citações
- Nome, cargo, empresa
- Foto do testemunhante

### Secção 4: Vídeos
- Palestras e Keynotes
- Entrevistas com Heitor Fox
- Making-of de formações
- Grid com thumbnails

---

## 🤝 Página: Parceiros

### Secção 1: Parceiros Institucionais
- Universidades (Nova SBE, etc.)
- Entidades Certificadoras (DGERT)
- Organizações Internacionais
- Grid de logos + descrição ao hover

### Secção 2: Parceiros Corporativos
- Empresas clientes recorrentes
- Logos em grid
- Testemunhos associados

### Secção 3: Rede Internacional
- Mapa interativo
- Presença: Portugal, Cabo Verde, Angola
- Contactos por país

---

## 🎯 Tecnologia e Implementação

### Opção 1: Single Page Application (SPA) com Rotas
- React Router
- Navegação sem reload
- Animações entre páginas

### Opção 2: Multi-Page (Recomendado para SEO)
- Páginas HTML separadas
- Melhor para indexação Google
- Partilha de componentes

### Decisão: **Opção 1 - SPA com React Router**
- Melhor experiência de utilizador
- Animações fluidas
- Código mais organizado
- SEO pode ser optimizado com React Helmet

---

## 📦 Componentes a Criar

1. **AboutPage.jsx** - Página Sobre Nós
2. **PortfolioPage.jsx** - Página Portfolio
3. **PartnersPage.jsx** - Página Parceiros
4. **GovernanceSection.jsx** - Secção de Governança
5. **TeamSection.jsx** - Secção de Equipa
6. **GalleryGrid.jsx** - Grid de galeria com lightbox
7. **VideoGrid.jsx** - Grid de vídeos
8. **TestimonialCard.jsx** - Card de testemunho
9. **PartnerLogo.jsx** - Logo de parceiro com hover

---

## 🎨 Design Guidelines

### Paleta de Cores (Mantida)
- Dourado Neural: #E2B94B
- Azul Sináptico: #0A7BFF
- Preto Carvão: #0E0E10
- Cinza Texto: #D9D9E0

### Tipografia
- Headings: Inter Bold
- Body: Inter Regular
- Citações: Inter Italic

### Animações
- Fade in ao scroll
- Hover effects com glow dourado
- Transições suaves entre páginas

---

## 📊 Conteúdo Necessário

### Para Governança:
- [ ] 5 nomes + bios do Conselho Estratégico
- [ ] 7 nomes dos Fundadores
- [ ] Fotos oficiais

### Para Portfolio:
- [ ] 10-20 imagens de formações
- [ ] 3-5 vídeos (links YouTube/Vimeo)
- [ ] 5-10 testemunhos adicionais

### Para Parceiros:
- [ ] Logos de parceiros (PNG transparente)
- [ ] Descrições breves
- [ ] Links para websites

---

## 🚀 Plano de Implementação

### Fase 1: Setup (30 min)
- Instalar React Router
- Criar estrutura de pastas
- Configurar rotas

### Fase 2: Páginas Base (1h)
- AboutPage
- PortfolioPage
- PartnersPage

### Fase 3: Componentes (1h)
- Governança
- Equipa
- Galeria
- Vídeos

### Fase 4: Conteúdo (30 min)
- Inserir textos
- Adicionar imagens placeholder
- Configurar links

### Fase 5: Testes (30 min)
- Navegação
- Responsividade
- Performance

**Total estimado: 3-4 horas**

---

## ✅ Checklist de Implementação

- [ ] Instalar react-router-dom
- [ ] Criar estrutura de rotas
- [ ] Atualizar menu de navegação
- [ ] Criar AboutPage.jsx
- [ ] Criar PortfolioPage.jsx
- [ ] Criar PartnersPage.jsx
- [ ] Adicionar secção Governança
- [ ] Adicionar secção Equipa
- [ ] Criar galeria de imagens
- [ ] Criar grid de vídeos
- [ ] Adicionar testemunhos expandidos
- [ ] Adicionar logos de parceiros
- [ ] Testar navegação
- [ ] Testar responsividade
- [ ] Build e deploy

---

**Documento criado em:** 13 de Outubro de 2025
**Versão:** 1.0
**Status:** Pronto para implementação


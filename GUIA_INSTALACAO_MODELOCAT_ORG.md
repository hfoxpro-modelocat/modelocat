# Guia de Instalação - Website Modelo CAT™
## Domínio: modelocat.org

Este guia explica como instalar o website do Modelo CAT™ no seu domínio personalizado `modelocat.org`.

---

## 📦 Ficheiros Incluídos

O ficheiro `modelocat-org-website.zip` contém todos os ficheiros necessários para o website:

```
dist/
├── index.html          # Página principal
├── favicon.ico         # Ícone do website
└── assets/
    ├── index-CZXtFnk7.css    # Estilos CSS
    └── index-DbB2eHhb.js     # JavaScript React
```

---

## 🚀 Opções de Alojamento

### Opção 1: Cloudflare Pages (Recomendado - Gratuito)

**Vantagens:** Gratuito, CDN global, SSL automático, deploy em minutos.

**Passos:**

1. Aceda a [pages.cloudflare.com](https://pages.cloudflare.com)
2. Crie uma conta ou faça login
3. Clique em **"Create a project"**
4. Escolha **"Upload assets"**
5. Faça upload da pasta `dist` (extraia o ZIP primeiro)
6. Configure o domínio personalizado:
   - Vá a **"Custom domains"**
   - Adicione `modelocat.org`
   - Siga as instruções para configurar DNS

**DNS (se o domínio estiver na Cloudflare):**
- Tipo: `CNAME`
- Nome: `@` (ou `www`)
- Conteúdo: `[seu-projeto].pages.dev`

---

### Opção 2: Netlify (Gratuito)

**Vantagens:** Interface simples, SSL automático, deploy por drag & drop.

**Passos:**

1. Aceda a [netlify.com](https://www.netlify.com)
2. Crie uma conta ou faça login
3. Clique em **"Add new site"** → **"Deploy manually"**
4. Arraste a pasta `dist` para a área de upload
5. Após o deploy, vá a **"Domain settings"**
6. Clique em **"Add custom domain"**
7. Digite `modelocat.org` e siga as instruções

**DNS (no seu registador de domínio):**
- Tipo: `A`
- Nome: `@`
- Valor: `75.2.60.5`

E/ou:
- Tipo: `CNAME`
- Nome: `www`
- Valor: `[seu-site].netlify.app`

---

### Opção 3: Vercel (Gratuito)

**Vantagens:** Otimizado para React, performance excelente, SSL automático.

**Passos:**

1. Aceda a [vercel.com](https://vercel.com)
2. Crie uma conta ou faça login
3. Clique em **"Add New"** → **"Project"**
4. Escolha **"Deploy from filesystem"**
5. Faça upload da pasta `dist`
6. Após o deploy, vá a **"Settings"** → **"Domains"**
7. Adicione `modelocat.org`

**DNS (no seu registador de domínio):**
- Tipo: `A`
- Nome: `@`
- Valor: `76.76.21.21`

---

### Opção 4: Hostinger (Pago - €2-5/mês)

**Vantagens:** Suporte em português, painel cPanel simples, bom para iniciantes.

**Passos:**

1. Contrate um plano de hosting na [Hostinger](https://www.hostinger.pt)
2. Registe ou transfira o domínio `modelocat.org`
3. Aceda ao **cPanel** ou **File Manager**
4. Navegue até a pasta `public_html`
5. Extraia o conteúdo da pasta `dist` do ZIP
6. Faça upload de todos os ficheiros para `public_html`
7. O website ficará disponível em `modelocat.org`

**Estrutura no servidor:**
```
public_html/
├── index.html
├── favicon.ico
└── assets/
    ├── index-CZXtFnk7.css
    └── index-DbB2eHhb.js
```

---

### Opção 5: GitHub Pages (Gratuito)

**Vantagens:** Gratuito, integração com Git, SSL automático.

**Passos:**

1. Crie um repositório no GitHub
2. Faça upload dos ficheiros da pasta `dist`
3. Vá a **"Settings"** → **"Pages"**
4. Configure a fonte como **"Deploy from a branch"**
5. Escolha a branch `main` e pasta `/` (root)
6. Em **"Custom domain"**, adicione `modelocat.org`

**DNS (no seu registador de domínio):**
```
Tipo: A
Nome: @
Valores:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

Tipo: CNAME
Nome: www
Valor: [seu-username].github.io
```

---

## 🔧 Configuração de DNS

Independentemente do serviço escolhido, precisará de configurar o DNS do domínio `modelocat.org`.

### Onde configurar DNS?

Configure no **registador** onde comprou o domínio (ex: GoDaddy, Namecheap, Cloudflare, etc.).

### Registos DNS típicos:

**Para serviços com IP fixo:**
```
Tipo: A
Nome: @
Valor: [IP fornecido pelo serviço]
TTL: 3600
```

**Para serviços com CNAME:**
```
Tipo: CNAME
Nome: @
Valor: [dominio-fornecido].pages.dev (ou .netlify.app, etc.)
TTL: 3600
```

**Para www:**
```
Tipo: CNAME
Nome: www
Valor: modelocat.org
TTL: 3600
```

---

## ✅ Checklist de Instalação

- [ ] Extrair o ficheiro `modelocat-org-website.zip`
- [ ] Escolher serviço de hosting
- [ ] Criar conta no serviço escolhido
- [ ] Fazer upload dos ficheiros da pasta `dist`
- [ ] Configurar domínio personalizado `modelocat.org`
- [ ] Configurar registos DNS no registador
- [ ] Aguardar propagação DNS (pode demorar 1-48h)
- [ ] Verificar SSL/HTTPS ativo
- [ ] Testar website em `https://modelocat.org`

---

## 🔒 SSL/HTTPS

Todos os serviços recomendados (Cloudflare Pages, Netlify, Vercel) fornecem **SSL/HTTPS automático e gratuito** através de Let's Encrypt.

O certificado é gerado automaticamente após configurar o domínio personalizado.

---

## ⏱️ Tempo de Propagação DNS

Após configurar os registos DNS, pode demorar:
- **Mínimo:** 15 minutos a 1 hora
- **Típico:** 2-6 horas
- **Máximo:** 24-48 horas

Durante este período, o website pode não estar acessível ou mostrar conteúdo antigo.

---

## 🆘 Suporte e Resolução de Problemas

### Website não carrega

1. Verifique se os registos DNS estão corretos
2. Use [whatsmydns.net](https://www.whatsmydns.net) para verificar propagação
3. Limpe cache do browser (Ctrl+Shift+Delete)
4. Tente aceder em modo anónimo/privado

### Erro de SSL/Certificado

1. Aguarde algumas horas - o certificado pode estar a ser gerado
2. Verifique se o domínio está corretamente configurado no serviço
3. Force renovação do certificado nas configurações do serviço

### Ficheiros não carregam (CSS/JS)

1. Verifique se todos os ficheiros da pasta `assets` foram enviados
2. Confirme que a estrutura de pastas está correta
3. Verifique permissões dos ficheiros no servidor (644 para ficheiros, 755 para pastas)

---

## 📞 Contactos de Suporte

**Cloudflare:** [support.cloudflare.com](https://support.cloudflare.com)  
**Netlify:** [answers.netlify.com](https://answers.netlify.com)  
**Vercel:** [vercel.com/support](https://vercel.com/support)  
**Hostinger:** [hostinger.pt/contactos](https://www.hostinger.pt/contactos)

---

## 🎯 Recomendação Final

Para o domínio `modelocat.org`, recomendo **Cloudflare Pages** ou **Netlify**:

- **Gratuito** para sempre
- **SSL automático**
- **CDN global** (carregamento rápido em todo o mundo)
- **Deploy em minutos**
- **Interface simples**
- **Sem manutenção**

---

## 📝 Notas Importantes

1. **Backup:** Guarde sempre uma cópia do ficheiro ZIP
2. **Atualizações:** Para atualizar o website, basta fazer upload dos novos ficheiros
3. **Performance:** Todos os serviços recomendados têm CDN incluída
4. **SEO:** O website já está otimizado para motores de busca
5. **Mobile:** O design é totalmente responsivo

---

**Desenvolvido por:** Manus AI  
**Data:** 09 de Outubro de 2025  
**Website:** Modelo CAT™ - Conhece. Aplica. Transforma.  
**Domínio:** modelocat.org


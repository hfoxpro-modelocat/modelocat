import { Helmet } from 'react-helmet-async'

/**
 * Componente SEO Head com meta tags, Open Graph, Schema.org
 * Implementa todas as best practices de SEO
 */
export default function SEOHead({
  title = "Modelo CAT™ – Neurociência aplicada à liderança e comunicação | Heitor Fox",
  description = "Melhore comunicação interna, coesão e produtividade com o Modelo CAT™. Diagnóstico, protocolos práticos e KPIs (PDA, 360, Neuromap™). Agende um diagnóstico.",
  keywords = "neurociência aplicada liderança, neurocomunicação, neuroliderança, feedback 360 neurociência, PDA assessment liderança, coaching executivo, formação liderança",
  image = "https://modelocat.netlify.app/images/og-image.jpg",
  url = "https://modelocat.netlify.app",
  type = "website"
}) {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Modelo CAT™",
    "url": url,
    "logo": `${url}/images/logo.png`,
    "description": description,
    "founder": {
      "@type": "Person",
      "name": "Heitor Fox",
      "jobTitle": "Fundador e Mentor do Modelo CAT™",
      "description": "Especialista em Neurocomunicação, Neurocoaching e Neuroliderança com mais de 30 anos de experiência internacional"
    },
    "sameAs": [
      "https://www.linkedin.com/company/modelo-cat",
      "https://www.youtube.com/@modelocat",
      "https://www.instagram.com/modelocat",
      "https://www.facebook.com/modelocat"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+351-XXX-XXX-XXX",
      "contactType": "customer service",
      "areaServed": ["PT", "CV", "AO"],
      "availableLanguage": ["Portuguese"]
    }
  }

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Formação Executiva em Neuroliderança",
    "provider": {
      "@type": "Organization",
      "name": "Modelo CAT™"
    },
    "areaServed": ["PT", "CV", "AO"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Programas de Formação",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Neurocomunicação - Comunicação de Alto Impacto",
            "description": "21h (3 dias) de formação intensiva",
            "provider": {
              "@type": "Organization",
              "name": "Modelo CAT™"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Neurocoaching - Coaching de Alta Performance",
            "description": "21h (3 dias) de formação intensiva",
            "provider": {
              "@type": "Organization",
              "name": "Modelo CAT™"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Neuroliderança - Liderança Inspiradora",
            "description": "21h (3 dias) de formação intensiva",
            "provider": {
              "@type": "Organization",
              "name": "Modelo CAT™"
            }
          }
        }
      ]
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Heitor Fox" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:site_name" content="Modelo CAT™" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrganization)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaService)}
      </script>
    </Helmet>
  )
}


import type { Payload } from 'payload'

export async function seedStaticPages(payload: Payload): Promise<void> {
  payload.logger.info('— Seeding static pages (prezzi, contatti, progetti)…')

  // ── /prezzi ──────────────────────────────────────────────────────────────

  await payload.create({
    collection: 'static-pages',
    data: {
      title: 'Prezzi',
      slug: 'prezzi',
      heroTitle: 'Scegli il piano giusto',
      heroSubtitle:
        'Nessun costo nascosto, nessuna sorpresa. Prezzi chiari per ogni fase della tua crescita digitale.',
      plans: [
        {
          name: 'Starter',
          price: '990',
          period: 'una tantum',
          description:
            'Perfetto per professionisti e piccole imprese che vogliono una presenza online efficace.',
          features: [
            { text: 'Sito vetrina fino a 5 pagine' },
            { text: 'Design responsive mobile-first' },
            { text: 'Ottimizzazione SEO on-page' },
            { text: 'CMS per gestione autonoma' },
            { text: 'Integrazione Google Analytics' },
            { text: 'Supporto 30 giorni post-lancio' },
          ],
          cta: 'Inizia con Starter',
          highlighted: false,
        },
        {
          name: 'Pro',
          price: '2.490',
          period: 'una tantum',
          description:
            'La scelta ideale per aziende che vogliono crescere online con funzionalità avanzate.',
          features: [
            { text: 'Tutto di Starter, più:' },
            { text: 'E-commerce o landing page' },
            { text: 'Integrazioni CRM & newsletter' },
            { text: 'A/B testing e ottimizzazione CRO' },
            { text: 'Dashboard analytics avanzata' },
            { text: 'Strategia SEO + content plan' },
            { text: 'Supporto 90 giorni post-lancio' },
          ],
          cta: 'Scegli il piano Pro',
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: 'su preventivo',
          description:
            'Soluzioni su misura per aziende con esigenze complesse e obiettivi ambiziosi.',
          features: [
            { text: 'Tutto di Pro, più:' },
            { text: 'Sviluppo custom illimitato' },
            { text: 'Chatbot AI e automazioni' },
            { text: 'Analisi predittiva & BI' },
            { text: 'Account manager dedicato' },
            { text: 'SLA garantito' },
            { text: 'Supporto prioritario 12 mesi' },
          ],
          cta: 'Richiedi preventivo',
          highlighted: false,
        },
      ],
      publishedAt: new Date().toISOString(),
    } as any,
  })

  // ── /contatti ─────────────────────────────────────────────────────────────

  await payload.create({
    collection: 'static-pages',
    data: {
      title: 'Contatti',
      slug: 'contatti',
      heroTitle: 'Contattaci',
      heroSubtitle:
        'Raccontaci il tuo progetto. Ti risponderemo entro 24 ore con una proposta su misura.',
      contactInfo: {
        email: 'ciao@nadiamaar.dev',
        phone: '+39 333 000 0000',
        address: 'Italia — lavoriamo da remoto',
        responseTime:
          'Rispondiamo entro 24 ore lavorative. Per urgenze, scrivici direttamente su WhatsApp.',
      },
      publishedAt: new Date().toISOString(),
    } as any,
  })

  // ── /progetti ─────────────────────────────────────────────────────────────

  await payload.create({
    collection: 'static-pages',
    data: {
      title: 'Progetti',
      slug: 'progetti',
      heroTitle: 'I nostri progetti',
      heroSubtitle:
        'Risultati reali per clienti reali. Ogni progetto è una storia di crescita digitale.',
      projects: [
        {
          title: 'FashionStore Italia',
          category: 'E-commerce Shopify',
          description:
            'Store Shopify custom per brand di moda con 1.200+ prodotti, integrazione CRM e +42% conversion rate.',
          tags: [{ tag: 'Shopify' }, { tag: 'CRO' }, { tag: 'Integrazioni' }],
          gradient: 'from-violet-500/20 to-fuchsia-500/10',
        },
        {
          title: 'StudioLegale Bianchi',
          category: 'Sito Vetrina',
          description:
            'Restyling completo per studio legale con nuovo CMS, SEO on-page e incremento traffico organico del 180%.',
          tags: [{ tag: 'Next.js' }, { tag: 'SEO' }, { tag: 'CMS' }],
          gradient: 'from-blue-500/20 to-violet-500/10',
        },
        {
          title: 'TechStart Assistant',
          category: 'Servizi AI',
          description:
            'Chatbot AI multilingue per startup SaaS con integrazione HubSpot e 3.200 conversazioni/mese gestite autonomamente.',
          tags: [{ tag: 'Chatbot AI' }, { tag: 'HubSpot' }, { tag: 'WhatsApp' }],
          gradient: 'from-emerald-500/20 to-blue-500/10',
        },
        {
          title: 'Arredo Casa Luxury',
          category: 'SEO & Google Ads',
          description:
            'Campagna Google Ads e SEO per e-commerce di arredamento. ROAS 4.8x e +230% traffico organico in 6 mesi.',
          tags: [{ tag: 'Google Ads' }, { tag: 'SEO' }, { tag: 'E-commerce' }],
          gradient: 'from-amber-500/20 to-orange-500/10',
        },
        {
          title: 'MedClinic Network',
          category: 'Automazione Workflow',
          description:
            'Automazione completa dei processi di prenotazione, reminder e follow-up per catena di cliniche mediche.',
          tags: [{ tag: 'n8n' }, { tag: 'AI' }, { tag: 'Automazione' }],
          gradient: 'from-rose-500/20 to-pink-500/10',
        },
        {
          title: 'FoodDelivery Pro',
          category: 'Landing Page & Ads',
          description:
            'Landing page ad alta conversione per app food delivery con Meta Ads. CPL ridotto del 60% in 30 giorni.',
          tags: [{ tag: 'Meta Ads' }, { tag: 'CRO' }, { tag: 'Landing Page' }],
          gradient: 'from-orange-500/20 to-red-500/10',
        },
      ],
      publishedAt: new Date().toISOString(),
    } as any,
  })

  payload.logger.info('✓ Static pages seeded.')
}

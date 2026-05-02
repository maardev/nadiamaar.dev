import type { Payload, PayloadRequest } from 'payload'

type FeatureInput = {
  icon: string
  title: string
  description: string
}

type ServicePageInput = {
  slug: string
  title: string
  category: string
  subtitle: string
  description: string
  features: FeatureInput[]
  featuredTitle: string
  featuredDescription: string
  featuredCta?: string
  featuredHref?: string
}

const pages: ServicePageInput[] = [
  // ── Siti Aziendali ──────────────────────────────────────────────────────────
  {
    slug: 'servizi/siti-aziendali/vetrina',
    title: 'Siti Vetrina',
    category: 'Siti Aziendali',
    subtitle: 'Presenza online elegante e professionale',
    description:
      'Un sito vetrina efficace non è solo bello da vedere: è ottimizzato per i motori di ricerca, veloce su ogni dispositivo e progettato per trasmettere fiducia e professionalità ai tuoi visitatori.',
    features: [
      { icon: 'Palette', title: 'Design su misura', description: "Ogni sito è progettato da zero per riflettere l'identità unica del tuo brand." },
      { icon: 'Search', title: 'SEO nativo', description: 'Struttura tecnica ottimizzata per Google fin dal primo giorno di lancio.' },
      { icon: 'Settings', title: 'Gestione CMS', description: 'Aggiorna contenuti, immagini e pagine in autonomia senza toccare il codice.' },
      { icon: 'Globe', title: 'Mobile-first', description: 'Esperienza fluida e impeccabile su smartphone, tablet e desktop.' },
    ],
    featuredTitle: 'Demo live in 48 ore',
    featuredDescription: 'Ricevi un mockup interattivo del tuo nuovo sito in due giorni lavorativi. Vedilo prima di decidere.',
    featuredCta: 'Richiedi la demo',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/siti-aziendali/restyling',
    title: 'Restyling Web',
    category: 'Siti Aziendali',
    subtitle: 'Rinnova il tuo sito senza perdere nulla',
    description:
      'Il tuo sito è datato, lento o non converte come dovrebbe? Lo analizziamo, lo riprogettiam e lo migriamo preservando il tuo storico SEO e migliorando ogni metrica che conta davvero.',
    features: [
      { icon: 'Search', title: 'Audit completo', description: 'Analisi tecnica, SEO e UX del sito attuale prima di intervenire.' },
      { icon: 'Sparkles', title: 'Nuovo design', description: "Restyling moderno che rispecchia i valori del tuo brand e cattura l'attenzione." },
      { icon: 'TrendingUp', title: 'SEO preservato', description: 'Redirect e struttura ottimizzati per non perdere un solo punto di ranking.' },
      { icon: 'Gauge', title: 'Velocità ottimizzata', description: 'Il nuovo sito è significativamente più veloce del precedente su ogni device.' },
    ],
    featuredTitle: 'È ora di rinnovare la tua presenza online',
    featuredDescription: "Richiedi un'analisi gratuita del tuo sito attuale. Ti mostriamo i 5 problemi principali e come risolverli.",
    featuredCta: 'Analisi gratuita',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/siti-aziendali/blog',
    title: 'Blog Aziendali',
    category: 'Siti Aziendali',
    subtitle: 'Content marketing che porta traffico qualificato',
    description:
      'Un blog aziendale ben strutturato è un asset che lavora 24/7 per portare traffico organico, affermare la tua expertise nel settore e alimentare il funnel di vendita con contenuti di valore.',
    features: [
      { icon: 'FileText', title: 'Architettura SEO', description: 'Struttura dei contenuti progettata per scalare i cluster semantici su Google.' },
      { icon: 'Settings', title: 'CMS intuitivo', description: 'Editor visuale per pubblicare articoli senza dipendere da uno sviluppatore.' },
      { icon: 'Mail', title: 'Newsletter integrata', description: 'Cattura iscritti e invia newsletter automatiche ai lettori più fedeli.' },
      { icon: 'BarChart3', title: 'Analisi performance', description: 'Dashboard con metriche di traffico, engagement e conversioni degli articoli.' },
    ],
    featuredTitle: 'Costruisci la tua autorità online',
    featuredDescription: 'Ti aiutiamo a creare un blog aziendale che generi traffico organico costante e posizioni il tuo brand come leader di settore.',
    featuredCta: 'Parliamo della strategia',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/siti-aziendali/landing-page',
    title: 'Landing Page',
    category: 'Siti Aziendali',
    subtitle: 'Pagine ad alta conversione per ogni campagna',
    description:
      'Landing page progettate per convertire. Ogni elemento — dal copy alle CTA, dalla struttura visiva alle micro-animazioni — è ottimizzato per trasformare i click delle tue campagne in lead e vendite.',
    features: [
      { icon: 'MessageSquare', title: 'Copy persuasivo', description: "Testi scritti con tecniche di copywriting per massimizzare l'engagement." },
      { icon: 'GitBranch', title: 'A/B Testing', description: 'Varianti multiple testate per trovare la versione con il conversion rate più alto.' },
      { icon: 'Zap', title: 'Caricamento rapido', description: 'Performance ottimizzata per non perdere visitatori durante il caricamento.' },
      { icon: 'Activity', title: 'Analytics integrato', description: 'Tracciamento completo di eventi, form e micro-conversioni in tempo reale.' },
    ],
    featuredTitle: 'La tua campagna merita una landing page vincente',
    featuredDescription: 'Raccontaci la tua prossima campagna. Progettiamo una landing page su misura in tempi record.',
    featuredCta: 'Inizia il progetto',
    featuredHref: '/contatti',
  },
  // ── AI ──────────────────────────────────────────────────────────────────────
  {
    slug: 'servizi/ai/chatbot',
    title: 'Chatbot Intelligenti',
    category: 'Servizi AI',
    subtitle: 'Assistenza clienti attiva 24 ore su 24, 7 giorni su 7',
    description:
      'Chatbot AI addestrati sui tuoi dati aziendali, integrabili con WhatsApp, il tuo sito e il CRM. Rispondono, qualificano i lead e gestiscono le richieste anche quando il tuo team è offline.',
    features: [
      { icon: 'Clock', title: 'Disponibile 24/7', description: 'Il chatbot risponde istantaneamente a qualsiasi ora, senza interruzioni.' },
      { icon: 'Languages', title: 'Multilingue', description: 'Supporto nativo in italiano, inglese e altre lingue per clienti internazionali.' },
      { icon: 'Database', title: 'Integrazione CRM', description: 'I dati delle conversazioni fluiscono direttamente nel tuo CRM in tempo reale.' },
      { icon: 'Activity', title: 'Analisi conversazioni', description: 'Dashboard con metriche di soddisfazione, topic frequenti e performance.' },
    ],
    featuredTitle: 'Chatbot AI personalizzato per la tua azienda',
    featuredDescription: 'Allenato sui tuoi dati, integrato con WhatsApp, sito e CRM. Ti mostriamo una demo live basata sul tuo settore.',
    featuredCta: 'Vedi la demo',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/ai/content-gen',
    title: 'AI Content Generation',
    category: 'Servizi AI',
    subtitle: 'Contenuti su scala senza compromessi sulla qualità',
    description:
      'Articoli SEO, post social, descrizioni prodotto, video script: generiamo contenuti di qualità su larga scala grazie a workflow AI personalizzati e calibrati sul tono di voce del tuo brand.',
    features: [
      { icon: 'FileText', title: 'Articoli SEO', description: 'Contenuti ottimizzati per keyword con struttura semantica che piace a Google.' },
      { icon: 'Image', title: 'Immagini AI', description: 'Creazione di asset visivi coerenti con il brand senza costi di agenzia.' },
      { icon: 'Video', title: 'Video & Reel', description: 'Script, caption e copy per video short-form sui principali canali social.' },
      { icon: 'Layers', title: 'Brand consistency', description: 'Tono di voce, stile e messaggi calibrati e costanti su tutti i canali.' },
    ],
    featuredTitle: 'Scala la tua produzione di contenuti',
    featuredDescription: "Mostraci il tuo piano editoriale attuale. Ti proponiamo come triplicare l'output mantenendo qualità e coerenza del brand.",
    featuredCta: 'Scopri come',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/ai/analisi-predittiva',
    title: 'Analisi Predittiva',
    category: 'Servizi AI',
    subtitle: 'Decisioni strategiche basate sui dati',
    description:
      'Con modelli di machine learning e business intelligence, trasformiamo i tuoi dati storici in previsioni affidabili che guidano le decisioni strategiche del tuo business e ti danno un vantaggio competitivo reale.',
    features: [
      { icon: 'TrendingUp', title: 'Forecasting vendite', description: 'Previsioni accurate di ricavi, domanda e trend per pianificare in anticipo.' },
      { icon: 'Activity', title: 'Dashboard real-time', description: 'KPI e metriche chiave aggiornati in tempo reale su una singola dashboard.' },
      { icon: 'Shield', title: 'Risk management', description: 'Modelli di rilevamento anomalie per identificare rischi prima che diventino problemi.' },
      { icon: 'BarChart3', title: 'Insight competitivi', description: 'Analisi del mercato e dei competitor per posizionarti strategicamente.' },
    ],
    featuredTitle: 'I tuoi dati valgono più di quanto pensi',
    featuredDescription: 'Mostraci i dati che hai. Ti mostriamo le previsioni che puoi ottenere e le decisioni che potresti prendere diversamente.',
    featuredCta: 'Analizza i miei dati',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/ai/automazione-workflow',
    title: 'Automazione Workflow',
    category: 'Servizi AI',
    subtitle: 'Elimina i processi ripetitivi e scala il business',
    description:
      'Analizziamo i processi aziendali e li automatizziamo con AI e strumenti no-code/low-code. Risparmia ore di lavoro ogni giorno, riduci gli errori umani e libera il tuo team per attività ad alto valore.',
    features: [
      { icon: 'Settings', title: 'Audit dei processi', description: 'Mappatura completa dei flussi aziendali per identificare le priorità di automazione.' },
      { icon: 'Workflow', title: 'Automazione n8n/Zapier', description: 'Workflow personalizzati che connettono i tuoi strumenti senza scrivere codice.' },
      { icon: 'Shield', title: 'Riduzione errori', description: 'I processi automatizzati eliminano gli errori umani nei task ripetitivi.' },
      { icon: 'BarChart3', title: 'Reporting automatico', description: 'Report e dashboard aggiornati in automatico senza intervento manuale.' },
    ],
    featuredTitle: 'Quante ore perde il tuo team ogni settimana?',
    featuredDescription: "Un'analisi gratuita dei tuoi processi per stimare il risparmio di tempo ottenibile con l'automazione. Risultati concreti, non promesse.",
    featuredCta: 'Calcola il risparmio',
    featuredHref: '/contatti',
  },
  // ── E-commerce ───────────────────────────────────────────────────────────────
  {
    slug: 'servizi/e-commerce/sviluppo-store',
    title: 'Sviluppo Store Shopify',
    category: 'E-commerce',
    subtitle: 'Store ottimizzati per la conversione',
    description:
      'Progettiamo e sviluppiamo store Shopify su misura che convertono visitatori in clienti. Dal design alla configurazione avanzata, ogni dettaglio è pensato per massimizzare le vendite e offrire una esperienza di acquisto memorabile.',
    features: [
      { icon: 'Zap', title: 'Performance fulminea', description: 'Tempi di caricamento sotto i 2 secondi per ridurre il tasso di abbandono.' },
      { icon: 'Palette', title: 'UX su misura', description: 'Design personalizzato allineato al tuo brand e ottimizzato per la conversione.' },
      { icon: 'TrendingUp', title: 'CRO integrato', description: "Funnel di acquisto progettato per massimizzare il valore medio dell'ordine." },
      { icon: 'Layers', title: 'Scalabile', description: 'Architettura robusta pronta a crescere insieme al tuo business.' },
    ],
    featuredTitle: 'Audit Shopify Gratuito',
    featuredDescription: "Analizziamo il tuo store e ti mostriamo come aumentare le conversioni del 30% in 90 giorni. Senza impegno.",
    featuredCta: "Prenota l'audit",
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/e-commerce/ottimizzazione',
    title: 'Ottimizzazione Conversioni',
    category: 'E-commerce',
    subtitle: 'Trasforma il traffico esistente in fatturato',
    description:
      "Con CRO, A/B testing e analisi approfondita del comportamento utente, identifichiamo le frizioni nel tuo funnel di acquisto e le eliminiamo. Più conversioni, stesso traffico.",
    features: [
      { icon: 'GitBranch', title: 'A/B Testing', description: 'Sperimentiamo varianti di pagine e flussi per trovare la combinazione vincente.' },
      { icon: 'Activity', title: 'Heatmap & Analytics', description: 'Analisi del comportamento reale degli utenti su ogni pagina del tuo store.' },
      { icon: 'TrendingUp', title: 'Funnel Analysis', description: "Mappa completa del percorso d'acquisto con identificazione dei punti di abbandono." },
      { icon: 'Target', title: 'ROI misurabile', description: "Ogni ottimizzazione è tracciata e il ritorno sull'investimento è documentato." },
    ],
    featuredTitle: 'Scopri dove stai perdendo vendite',
    featuredDescription: 'Un audit CRO gratuito per identificare i 3 principali punti di abbandono nel tuo store. Risultati in 48 ore.',
    featuredCta: 'Richiedi audit CRO',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/e-commerce/migrazione',
    title: 'Migrazione E-commerce',
    category: 'E-commerce',
    subtitle: 'Trasferimento sicuro da qualsiasi piattaforma',
    description:
      "Migrare da Magento, WooCommerce o altre piattaforme non deve essere un rischio. Gestiamo l'intero processo con zero downtime, senza perdere dati e senza impatti sul tuo posizionamento SEO.",
    features: [
      { icon: 'Clock', title: 'Zero downtime', description: 'Il tuo store rimane operativo durante tutta la fase di migrazione.' },
      { icon: 'Search', title: 'SEO preservato', description: 'Redirect 301, struttura URL e ranking mantenuti intatti dopo il trasferimento.' },
      { icon: 'Database', title: 'Dati integri', description: 'Prodotti, clienti, ordini e cronologia migrati con precisione chirurgica.' },
      { icon: 'Shield', title: 'Supporto post-migrazione', description: 'Assistenza dedicata per 30 giorni dopo il go-live per risolvere ogni imprevisto.' },
    ],
    featuredTitle: 'Migra il tuo store in sicurezza',
    featuredDescription: 'Contattaci per una valutazione gratuita della tua migrazione. Ti diciamo tempi, costi e rischi prima di iniziare.',
    featuredCta: 'Richiedi valutazione',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/e-commerce/integrazioni',
    title: 'Integrazioni Custom',
    category: 'E-commerce',
    subtitle: 'Connetti il tuo store con ogni sistema',
    description:
      "API, webhook e connettori custom per integrare il tuo e-commerce con CRM, ERP, sistemi di pagamento e qualsiasi tool del tuo stack tecnologico. Automatizza i flussi e elimina il lavoro manuale.",
    features: [
      { icon: 'Plug', title: 'API RESTful', description: 'Integrazione bidirezionale con qualsiasi sistema tramite API standard o custom.' },
      { icon: 'Database', title: 'CRM & ERP', description: 'Sincronizzazione automatica con Salesforce, HubSpot, SAP e altri gestionali.' },
      { icon: 'Layers', title: 'Gateway di pagamento', description: 'Stripe, PayPal, Klarna, Scalapay e metodi di pagamento locali integrati.' },
      { icon: 'Zap', title: 'Automazioni', description: 'Trigger e workflow automatici per ordini, spedizioni, notifiche e resi.' },
    ],
    featuredTitle: "Hai un'integrazione specifica in mente?",
    featuredDescription: "Raccontaci il tuo stack tecnologico. Progettiamo la soluzione di integrazione più efficiente per il tuo caso d'uso.",
    featuredCta: 'Parliamo del progetto',
    featuredHref: '/contatti',
  },
  // ── SEO & Social ─────────────────────────────────────────────────────────────
  {
    slug: 'servizi/seo-social/on-page',
    title: 'SEO On-Page',
    category: 'SEO & Social',
    subtitle: 'Ottimizzazione tecnica e contenutistica',
    description:
      "Dall'audit tecnico alla struttura dei contenuti, ottimizziamo ogni aspetto on-page del tuo sito per scalare le posizioni su Google e portare traffico organico qualificato giorno dopo giorno.",
    features: [
      { icon: 'Search', title: 'Keyword research', description: 'Analisi delle parole chiave più profittevoli per il tuo settore e target.' },
      { icon: 'FileText', title: 'Ottimizzazione contenuti', description: 'Title, meta description, heading e testi ottimizzati per le query target.' },
      { icon: 'Code', title: 'Structured data', description: 'Implementazione di schema markup per rich snippet e maggiore visibilità.' },
      { icon: 'Gauge', title: 'Core Web Vitals', description: 'Ottimizzazione LCP, INP e CLS per soddisfare i requisiti di Google.' },
    ],
    featuredTitle: 'Strategia SEO gratuita per il tuo settore',
    featuredDescription: 'Un piano di crescita organica pensato per il tuo mercato. Keyword, competitor analysis e roadmap di azione. Senza impegno.',
    featuredCta: 'Voglio la strategia',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/seo-social/google-meta-ads',
    title: 'Google & Meta Ads',
    category: 'SEO & Social',
    subtitle: 'Campagne paid che portano risultati misurabili',
    description:
      'Campagne Google Search, Display e Meta Ads gestite da esperti certificati. Targeting preciso, creatività che convertono e ottimizzazione continua per massimizzare il ROAS e il ROI di ogni euro investito.',
    features: [
      { icon: 'Megaphone', title: 'Campagne su misura', description: 'Struttura e strategia costruite attorno ai tuoi obiettivi e al tuo budget.' },
      { icon: 'Target', title: 'Targeting avanzato', description: 'Audience personalizzate, lookalike e remarketing per raggiungere chi converte.' },
      { icon: 'GitBranch', title: 'A/B Testing Ads', description: 'Test continui su copy, creatività e landing page per ottimizzare le performance.' },
      { icon: 'TrendingUp', title: 'ROI trasparente', description: 'Report settimanali con metriche chiare: ROAS, CPA, CPL e revenue generate.' },
    ],
    featuredTitle: 'Campagna di prova senza rischi',
    featuredDescription: 'Gestiamo il tuo primo mese di campagne con supervisione dedicata. Ti mostriamo i risultati prima di qualsiasi impegno a lungo termine.',
    featuredCta: 'Inizia la campagna',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/seo-social/link-building',
    title: 'Link Building',
    category: 'SEO & Social',
    subtitle: "Costruisci l'autorità del tuo dominio",
    description:
      "Backlink di qualità da siti autorevoli del tuo settore. Strategie white-hat che aumentano il Domain Authority, migliorano il ranking in modo sostenibile e resistono agli aggiornamenti di Google.",
    features: [
      { icon: 'Link2', title: 'Backlink di qualità', description: 'Solo link da siti con alta autorità e pertinenza tematica al tuo settore.' },
      { icon: 'Users', title: 'Outreach mirato', description: 'Campagne di digital PR per ottenere menzioni e link su media di settore.' },
      { icon: 'TrendingUp', title: 'Domain Authority', description: 'Crescita costante e misurabile del profilo backlink nel tempo.' },
      { icon: 'Activity', title: 'Monitoraggio costante', description: 'Tracciamento del profilo link e rimozione di eventuali link tossici.' },
    ],
    featuredTitle: 'Analisi gratuita del tuo profilo backlink',
    featuredDescription: 'Ti mostriamo lo stato attuale dei tuoi link, i gap rispetto ai competitor e le opportunità immediate da cogliere.',
    featuredCta: 'Analizza i miei link',
    featuredHref: '/contatti',
  },
  {
    slug: 'servizi/seo-social/social-media',
    title: 'Social Media Management',
    category: 'SEO & Social',
    subtitle: 'Costruisci una community attiva attorno al tuo brand',
    description:
      'Strategia, contenuti e gestione quotidiana dei tuoi profili social. Ti rappresentiamo online con coerenza e creatività, costruendo engagement reale con il tuo pubblico su ogni piattaforma.',
    features: [
      { icon: 'Share2', title: 'Strategia editoriale', description: 'Piano contenuti mensile allineato agli obiettivi di business e al pubblico target.' },
      { icon: 'Calendar', title: 'Calendario editoriale', description: 'Post pianificati, approvati e pubblicati con cadenza regolare e coerente.' },
      { icon: 'Users', title: 'Community management', description: 'Gestione di commenti, DM e interazioni per costruire relazioni autentiche.' },
      { icon: 'BarChart3', title: 'Report mensile', description: 'Analisi delle performance con insight e raccomandazioni per il mese successivo.' },
    ],
    featuredTitle: 'Vuoi che i tuoi social lavorino per te?',
    featuredDescription: 'Gestiamo i tuoi profili come se fossero i nostri. Ti occupi del business, noi della presenza digitale.',
    featuredCta: 'Discuti la strategia',
    featuredHref: '/contatti',
  },
]

export const seedServicePages = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info(`— Seeding service pages (${pages.length})...`)

  await Promise.all(
    pages.map((page) =>
      payload.create({
        collection: 'service-pages',
        depth: 0,
        context: { disableRevalidate: true },
        data: {
          ...page,
          _status: 'published',
          publishedAt: new Date().toISOString(),
        },
      }),
    ),
  )
}

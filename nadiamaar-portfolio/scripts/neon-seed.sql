-- =============================================================================
-- Neon seed script — service_pages collection
-- =============================================================================
-- Prerequisites:
--   1. Run `yarn payload migrate` to let Payload create the tables.
--   2. Run this script AFTER migration to seed the initial page records.
--      psql $DATABASE_URL -f scripts/neon-seed.sql
--
-- Alternatively, seed via the Payload admin UI or run `yarn seed`.
-- =============================================================================

BEGIN;

-- Service pages (main records)
INSERT INTO service_pages (
  id, title, slug, category, subtitle, description,
  featured_title, featured_description, featured_cta, featured_href,
  _status, published_at, created_at, updated_at
) VALUES
  (gen_random_uuid(), 'Siti Vetrina',            'servizi/siti-aziendali/vetrina',          'Siti Aziendali', 'Presenza online elegante e professionale',                'Un sito vetrina efficace non è solo bello da vedere: è ottimizzato per i motori di ricerca, veloce su ogni dispositivo e progettato per trasmettere fiducia e professionalità ai tuoi visitatori.',          'Demo live in 48 ore',                           'Ricevi un mockup interattivo del tuo nuovo sito in due giorni lavorativi. Vedilo prima di decidere.',                                                                             'Richiedi la demo',      '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Restyling Web',            'servizi/siti-aziendali/restyling',         'Siti Aziendali', 'Rinnova il tuo sito senza perdere nulla',                  'Il tuo sito è datato, lento o non converte come dovrebbe? Lo analizziamo, lo riprogettiam e lo migriamo preservando il tuo storico SEO e migliorando ogni metrica che conta davvero.',                 'È ora di rinnovare la tua presenza online',     'Richiedi un''analisi gratuita del tuo sito attuale. Ti mostriamo i 5 problemi principali e come risolverli.',                                                                    'Analisi gratuita',      '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Blog Aziendali',           'servizi/siti-aziendali/blog',              'Siti Aziendali', 'Content marketing che porta traffico qualificato',          'Un blog aziendale ben strutturato è un asset che lavora 24/7 per portare traffico organico, affermare la tua expertise nel settore e alimentare il funnel di vendita con contenuti di valore.',          'Costruisci la tua autorità online',             'Ti aiutiamo a creare un blog aziendale che generi traffico organico costante e posizioni il tuo brand come leader di settore.',                                                   'Parliamo della strategia', '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Landing Page',             'servizi/siti-aziendali/landing-page',      'Siti Aziendali', 'Pagine ad alta conversione per ogni campagna',             'Landing page progettate per convertire. Ogni elemento è ottimizzato per trasformare i click delle tue campagne in lead e vendite.',                                                                          'La tua campagna merita una landing page vincente', 'Raccontaci la tua prossima campagna. Progettiamo una landing page su misura in tempi record.',                                                                                  'Inizia il progetto',    '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Chatbot Intelligenti',     'servizi/ai/chatbot',                       'Servizi AI',     'Assistenza clienti attiva 24 ore su 24, 7 giorni su 7',    'Chatbot AI addestrati sui tuoi dati aziendali, integrabili con WhatsApp, il tuo sito e il CRM. Rispondono, qualificano i lead e gestiscono le richieste anche quando il tuo team è offline.',            'Chatbot AI personalizzato per la tua azienda',  'Allenato sui tuoi dati, integrato con WhatsApp, sito e CRM. Ti mostriamo una demo live basata sul tuo settore.',                                                                 'Vedi la demo',          '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'AI Content Generation',    'servizi/ai/content-gen',                   'Servizi AI',     'Contenuti su scala senza compromessi sulla qualità',        'Articoli SEO, post social, descrizioni prodotto, video script: generiamo contenuti di qualità su larga scala grazie a workflow AI personalizzati e calibrati sul tono di voce del tuo brand.',              'Scala la tua produzione di contenuti',          'Mostraci il tuo piano editoriale attuale. Ti proponiamo come triplicare l''output mantenendo qualità e coerenza del brand.',                                                     'Scopri come',           '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Analisi Predittiva',       'servizi/ai/analisi-predittiva',             'Servizi AI',     'Decisioni strategiche basate sui dati',                     'Con modelli di machine learning e business intelligence, trasformiamo i tuoi dati storici in previsioni affidabili che guidano le decisioni strategiche del tuo business.',                               'I tuoi dati valgono più di quanto pensi',       'Mostraci i dati che hai. Ti mostriamo le previsioni che puoi ottenere e le decisioni che potresti prendere diversamente.',                                                       'Analizza i miei dati',  '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Automazione Workflow',     'servizi/ai/automazione-workflow',           'Servizi AI',     'Elimina i processi ripetitivi e scala il business',          'Analizziamo i processi aziendali e li automatizziamo con AI e strumenti no-code/low-code. Risparmia ore di lavoro ogni giorno, riduci gli errori umani e libera il tuo team per attività ad alto valore.', 'Quante ore perde il tuo team ogni settimana?',  'Un''analisi gratuita dei tuoi processi per stimare il risparmio di tempo ottenibile con l''automazione. Risultati concreti, non promesse.',                                      'Calcola il risparmio',  '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Sviluppo Store Shopify',   'servizi/e-commerce/sviluppo-store',         'E-commerce',     'Store ottimizzati per la conversione',                      'Progettiamo e sviluppiamo store Shopify su misura che convertono visitatori in clienti. Dal design alla configurazione avanzata, ogni dettaglio è pensato per massimizzare le vendite.',                  'Audit Shopify Gratuito',                        'Analizziamo il tuo store e ti mostriamo come aumentare le conversioni del 30% in 90 giorni. Senza impegno.',                                                                     'Prenota l''audit',      '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Ottimizzazione Conversioni','servizi/e-commerce/ottimizzazione',        'E-commerce',     'Trasforma il traffico esistente in fatturato',              'Con CRO, A/B testing e analisi approfondita del comportamento utente, identifichiamo le frizioni nel tuo funnel di acquisto e le eliminiamo. Più conversioni, stesso traffico.',                           'Scopri dove stai perdendo vendite',             'Un audit CRO gratuito per identificare i 3 principali punti di abbandono nel tuo store. Risultati in 48 ore.',                                                                   'Richiedi audit CRO',    '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Migrazione E-commerce',    'servizi/e-commerce/migrazione',             'E-commerce',     'Trasferimento sicuro da qualsiasi piattaforma',             'Migrare da Magento, WooCommerce o altre piattaforme non deve essere un rischio. Gestiamo l''intero processo con zero downtime, senza perdere dati e senza impatti sul tuo posizionamento SEO.',            'Migra il tuo store in sicurezza',               'Contattaci per una valutazione gratuita della tua migrazione. Ti diciamo tempi, costi e rischi prima di iniziare.',                                                              'Richiedi valutazione',  '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Integrazioni Custom',      'servizi/e-commerce/integrazioni',           'E-commerce',     'Connetti il tuo store con ogni sistema',                    'API, webhook e connettori custom per integrare il tuo e-commerce con CRM, ERP, sistemi di pagamento e qualsiasi tool del tuo stack tecnologico. Automatizza i flussi e elimina il lavoro manuale.',       'Hai un''integrazione specifica in mente?',      'Raccontaci il tuo stack tecnologico. Progettiamo la soluzione di integrazione più efficiente per il tuo caso d''uso.',                                                           'Parliamo del progetto', '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'SEO On-Page',              'servizi/seo-social/on-page',                'SEO & Social',   'Ottimizzazione tecnica e contenutistica',                   'Dall''audit tecnico alla struttura dei contenuti, ottimizziamo ogni aspetto on-page del tuo sito per scalare le posizioni su Google e portare traffico organico qualificato giorno dopo giorno.',           'Strategia SEO gratuita per il tuo settore',     'Un piano di crescita organica pensato per il tuo mercato. Keyword, competitor analysis e roadmap di azione. Senza impegno.',                                                     'Voglio la strategia',   '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Google & Meta Ads',        'servizi/seo-social/google-meta-ads',        'SEO & Social',   'Campagne paid che portano risultati misurabili',            'Campagne Google Search, Display e Meta Ads gestite da esperti certificati. Targeting preciso, creatività che convertono e ottimizzazione continua per massimizzare il ROAS e il ROI di ogni euro investito.','Campagna di prova senza rischi',                'Gestiamo il tuo primo mese di campagne con supervisione dedicata. Ti mostriamo i risultati prima di qualsiasi impegno a lungo termine.',                                         'Inizia la campagna',    '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Link Building',            'servizi/seo-social/link-building',          'SEO & Social',   'Costruisci l''autorità del tuo dominio',                    'Backlink di qualità da siti autorevoli del tuo settore. Strategie white-hat che aumentano il Domain Authority, migliorano il ranking in modo sostenibile e resistono agli aggiornamenti di Google.',      'Analisi gratuita del tuo profilo backlink',     'Ti mostriamo lo stato attuale dei tuoi link, i gap rispetto ai competitor e le opportunità immediate da cogliere.',                                                              'Analizza i miei link',  '/contatti', 'published', NOW(), NOW(), NOW()),
  (gen_random_uuid(), 'Social Media Management',  'servizi/seo-social/social-media',           'SEO & Social',   'Costruisci una community attiva attorno al tuo brand',      'Strategia, contenuti e gestione quotidiana dei tuoi profili social. Ti rappresentiamo online con coerenza e creatività, costruendo engagement reale con il tuo pubblico su ogni piattaforma.',             'Vuoi che i tuoi social lavorino per te?',       'Gestiamo i tuoi profili come se fossero i nostri. Ti occupi del business, noi della presenza digitale.',                                                                         'Discuti la strategia',  '/contatti', 'published', NOW(), NOW(), NOW());

-- Features for each page (order follows the INSERT above)
-- Uses a CTE to look up parent IDs by slug
WITH sp AS (SELECT id, slug FROM service_pages)
INSERT INTO service_pages_features (id, _order, _parent_id, icon, title, description)
SELECT gen_random_uuid(), f._order, sp.id, f.icon, f.title, f.description
FROM sp
JOIN (VALUES
  -- vetrina
  ('servizi/siti-aziendali/vetrina', 1, 'Palette',      'Design su misura',       'Ogni sito è progettato da zero per riflettere l''identità unica del tuo brand.'),
  ('servizi/siti-aziendali/vetrina', 2, 'Search',        'SEO nativo',             'Struttura tecnica ottimizzata per Google fin dal primo giorno di lancio.'),
  ('servizi/siti-aziendali/vetrina', 3, 'Settings',      'Gestione CMS',           'Aggiorna contenuti, immagini e pagine in autonomia senza toccare il codice.'),
  ('servizi/siti-aziendali/vetrina', 4, 'Globe',         'Mobile-first',           'Esperienza fluida e impeccabile su smartphone, tablet e desktop.'),
  -- restyling
  ('servizi/siti-aziendali/restyling', 1, 'Search',      'Audit completo',         'Analisi tecnica, SEO e UX del sito attuale prima di intervenire.'),
  ('servizi/siti-aziendali/restyling', 2, 'Sparkles',    'Nuovo design',           'Restyling moderno che rispecchia i valori del tuo brand e cattura l''attenzione.'),
  ('servizi/siti-aziendali/restyling', 3, 'TrendingUp',  'SEO preservato',         'Redirect e struttura ottimizzati per non perdere un solo punto di ranking.'),
  ('servizi/siti-aziendali/restyling', 4, 'Gauge',       'Velocità ottimizzata',   'Il nuovo sito è significativamente più veloce del precedente su ogni device.'),
  -- blog
  ('servizi/siti-aziendali/blog', 1, 'FileText',         'Architettura SEO',        'Struttura dei contenuti progettata per scalare i cluster semantici su Google.'),
  ('servizi/siti-aziendali/blog', 2, 'Settings',         'CMS intuitivo',           'Editor visuale per pubblicare articoli senza dipendere da uno sviluppatore.'),
  ('servizi/siti-aziendali/blog', 3, 'Mail',             'Newsletter integrata',    'Cattura iscritti e invia newsletter automatiche ai lettori più fedeli.'),
  ('servizi/siti-aziendali/blog', 4, 'BarChart3',        'Analisi performance',     'Dashboard con metriche di traffico, engagement e conversioni degli articoli.'),
  -- landing-page
  ('servizi/siti-aziendali/landing-page', 1, 'MessageSquare', 'Copy persuasivo',   'Testi scritti con tecniche di copywriting per massimizzare l''engagement.'),
  ('servizi/siti-aziendali/landing-page', 2, 'GitBranch',     'A/B Testing',        'Varianti multiple testate per trovare la versione con il conversion rate più alto.'),
  ('servizi/siti-aziendali/landing-page', 3, 'Zap',           'Caricamento rapido', 'Performance ottimizzata per non perdere visitatori durante il caricamento.'),
  ('servizi/siti-aziendali/landing-page', 4, 'Activity',      'Analytics integrato','Tracciamento completo di eventi, form e micro-conversioni in tempo reale.'),
  -- chatbot
  ('servizi/ai/chatbot', 1, 'Clock',       'Disponibile 24/7',    'Il chatbot risponde istantaneamente a qualsiasi ora, senza interruzioni.'),
  ('servizi/ai/chatbot', 2, 'Languages',   'Multilingue',         'Supporto nativo in italiano, inglese e altre lingue per clienti internazionali.'),
  ('servizi/ai/chatbot', 3, 'Database',    'Integrazione CRM',    'I dati delle conversazioni fluiscono direttamente nel tuo CRM in tempo reale.'),
  ('servizi/ai/chatbot', 4, 'Activity',    'Analisi conversazioni','Dashboard con metriche di soddisfazione, topic frequenti e performance.'),
  -- content-gen
  ('servizi/ai/content-gen', 1, 'FileText', 'Articoli SEO',      'Contenuti ottimizzati per keyword con struttura semantica che piace a Google.'),
  ('servizi/ai/content-gen', 2, 'Image',    'Immagini AI',        'Creazione di asset visivi coerenti con il brand senza costi di agenzia.'),
  ('servizi/ai/content-gen', 3, 'Video',    'Video & Reel',       'Script, caption e copy per video short-form sui principali canali social.'),
  ('servizi/ai/content-gen', 4, 'Layers',   'Brand consistency',  'Tono di voce, stile e messaggi calibrati e costanti su tutti i canali.'),
  -- analisi-predittiva
  ('servizi/ai/analisi-predittiva', 1, 'TrendingUp', 'Forecasting vendite',  'Previsioni accurate di ricavi, domanda e trend per pianificare in anticipo.'),
  ('servizi/ai/analisi-predittiva', 2, 'Activity',   'Dashboard real-time',  'KPI e metriche chiave aggiornati in tempo reale su una singola dashboard.'),
  ('servizi/ai/analisi-predittiva', 3, 'Shield',     'Risk management',      'Modelli di rilevamento anomalie per identificare rischi prima che diventino problemi.'),
  ('servizi/ai/analisi-predittiva', 4, 'BarChart3',  'Insight competitivi',  'Analisi del mercato e dei competitor per posizionarti strategicamente.'),
  -- automazione-workflow
  ('servizi/ai/automazione-workflow', 1, 'Settings',   'Audit dei processi',       'Mappatura completa dei flussi aziendali per identificare le priorità di automazione.'),
  ('servizi/ai/automazione-workflow', 2, 'Workflow',   'Automazione n8n/Zapier',   'Workflow personalizzati che connettono i tuoi strumenti senza scrivere codice.'),
  ('servizi/ai/automazione-workflow', 3, 'Shield',     'Riduzione errori',         'I processi automatizzati eliminano gli errori umani nei task ripetitivi.'),
  ('servizi/ai/automazione-workflow', 4, 'BarChart3',  'Reporting automatico',     'Report e dashboard aggiornati in automatico senza intervento manuale.'),
  -- sviluppo-store
  ('servizi/e-commerce/sviluppo-store', 1, 'Zap',       'Performance fulminea', 'Tempi di caricamento sotto i 2 secondi per ridurre il tasso di abbandono.'),
  ('servizi/e-commerce/sviluppo-store', 2, 'Palette',   'UX su misura',         'Design personalizzato allineato al tuo brand e ottimizzato per la conversione.'),
  ('servizi/e-commerce/sviluppo-store', 3, 'TrendingUp','CRO integrato',        'Funnel di acquisto progettato per massimizzare il valore medio dell''ordine.'),
  ('servizi/e-commerce/sviluppo-store', 4, 'Layers',    'Scalabile',            'Architettura robusta pronta a crescere insieme al tuo business.'),
  -- ottimizzazione
  ('servizi/e-commerce/ottimizzazione', 1, 'GitBranch', 'A/B Testing',       'Sperimentiamo varianti di pagine e flussi per trovare la combinazione vincente.'),
  ('servizi/e-commerce/ottimizzazione', 2, 'Activity',  'Heatmap & Analytics','Analisi del comportamento reale degli utenti su ogni pagina del tuo store.'),
  ('servizi/e-commerce/ottimizzazione', 3, 'TrendingUp','Funnel Analysis',    'Mappa completa del percorso d''acquisto con identificazione dei punti di abbandono.'),
  ('servizi/e-commerce/ottimizzazione', 4, 'Target',    'ROI misurabile',     'Ogni ottimizzazione è tracciata e il ritorno sull''investimento è documentato.'),
  -- migrazione
  ('servizi/e-commerce/migrazione', 1, 'Clock',    'Zero downtime',           'Il tuo store rimane operativo durante tutta la fase di migrazione.'),
  ('servizi/e-commerce/migrazione', 2, 'Search',   'SEO preservato',          'Redirect 301, struttura URL e ranking mantenuti intatti dopo il trasferimento.'),
  ('servizi/e-commerce/migrazione', 3, 'Database', 'Dati integri',            'Prodotti, clienti, ordini e cronologia migrati con precisione chirurgica.'),
  ('servizi/e-commerce/migrazione', 4, 'Shield',   'Supporto post-migrazione','Assistenza dedicata per 30 giorni dopo il go-live per risolvere ogni imprevisto.'),
  -- integrazioni
  ('servizi/e-commerce/integrazioni', 1, 'Plug',     'API RESTful',          'Integrazione bidirezionale con qualsiasi sistema tramite API standard o custom.'),
  ('servizi/e-commerce/integrazioni', 2, 'Database', 'CRM & ERP',            'Sincronizzazione automatica con Salesforce, HubSpot, SAP e altri gestionali.'),
  ('servizi/e-commerce/integrazioni', 3, 'Layers',   'Gateway di pagamento', 'Stripe, PayPal, Klarna, Scalapay e metodi di pagamento locali integrati.'),
  ('servizi/e-commerce/integrazioni', 4, 'Zap',      'Automazioni',          'Trigger e workflow automatici per ordini, spedizioni, notifiche e resi.'),
  -- on-page
  ('servizi/seo-social/on-page', 1, 'Search',   'Keyword research',        'Analisi delle parole chiave più profittevoli per il tuo settore e target.'),
  ('servizi/seo-social/on-page', 2, 'FileText', 'Ottimizzazione contenuti','Title, meta description, heading e testi ottimizzati per le query target.'),
  ('servizi/seo-social/on-page', 3, 'Code',     'Structured data',         'Implementazione di schema markup per rich snippet e maggiore visibilità.'),
  ('servizi/seo-social/on-page', 4, 'Gauge',    'Core Web Vitals',         'Ottimizzazione LCP, INP e CLS per soddisfare i requisiti di Google.'),
  -- google-meta-ads
  ('servizi/seo-social/google-meta-ads', 1, 'Megaphone',  'Campagne su misura', 'Struttura e strategia costruite attorno ai tuoi obiettivi e al tuo budget.'),
  ('servizi/seo-social/google-meta-ads', 2, 'Target',     'Targeting avanzato', 'Audience personalizzate, lookalike e remarketing per raggiungere chi converte.'),
  ('servizi/seo-social/google-meta-ads', 3, 'GitBranch',  'A/B Testing Ads',   'Test continui su copy, creatività e landing page per ottimizzare le performance.'),
  ('servizi/seo-social/google-meta-ads', 4, 'TrendingUp', 'ROI trasparente',   'Report settimanali con metriche chiare: ROAS, CPA, CPL e revenue generate.'),
  -- link-building
  ('servizi/seo-social/link-building', 1, 'Link2',      'Backlink di qualità',  'Solo link da siti con alta autorità e pertinenza tematica al tuo settore.'),
  ('servizi/seo-social/link-building', 2, 'Users',      'Outreach mirato',      'Campagne di digital PR per ottenere menzioni e link su media di settore.'),
  ('servizi/seo-social/link-building', 3, 'TrendingUp', 'Domain Authority',     'Crescita costante e misurabile del profilo backlink nel tempo.'),
  ('servizi/seo-social/link-building', 4, 'Activity',   'Monitoraggio costante','Tracciamento del profilo link e rimozione di eventuali link tossici.'),
  -- social-media
  ('servizi/seo-social/social-media', 1, 'Share2',    'Strategia editoriale',  'Piano contenuti mensile allineato agli obiettivi di business e al pubblico target.'),
  ('servizi/seo-social/social-media', 2, 'Calendar',  'Calendario editoriale', 'Post pianificati, approvati e pubblicati con cadenza regolare e coerente.'),
  ('servizi/seo-social/social-media', 3, 'Users',     'Community management',  'Gestione di commenti, DM e interazioni per costruire relazioni autentiche.'),
  ('servizi/seo-social/social-media', 4, 'BarChart3', 'Report mensile',        'Analisi delle performance con insight e raccomandazioni per il mese successivo.')
) AS f(_slug, _order, icon, title, description) ON sp.slug = f._slug;

COMMIT;

'use client'

import { Clock, Languages, Database, Activity } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'Servizi AI',
  title: 'Chatbot Intelligenti',
  subtitle: 'Assistenza clienti attiva 24 ore su 24, 7 giorni su 7',
  description:
    'Chatbot AI addestrati sui tuoi dati aziendali, integrabili con WhatsApp, il tuo sito e il CRM. Rispondono, qualificano i lead e gestiscono le richieste anche quando il tuo team è offline.',
  features: [
    {
      icon: Clock,
      title: 'Disponibile 24/7',
      description: 'Il chatbot risponde istantaneamente a qualsiasi ora, senza interruzioni.',
    },
    {
      icon: Languages,
      title: 'Multilingue',
      description: 'Supporto nativo in italiano, inglese e altre lingue per clienti internazionali.',
    },
    {
      icon: Database,
      title: 'Integrazione CRM',
      description: 'I dati delle conversazioni fluiscono direttamente nel tuo CRM in tempo reale.',
    },
    {
      icon: Activity,
      title: 'Analisi conversazioni',
      description: 'Dashboard con metriche di soddisfazione, topic frequenti e performance.',
    },
  ],
  featuredTitle: 'Chatbot AI personalizzato per la tua azienda',
  featuredDescription:
    'Allenato sui tuoi dati, integrato con WhatsApp, sito e CRM. Ti mostriamo una demo live basata sul tuo settore.',
  featuredCta: 'Vedi la demo',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}

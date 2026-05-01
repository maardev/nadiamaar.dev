'use client'

import { Settings, Workflow, Shield, BarChart3 } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'Servizi AI',
  title: 'Automazione Workflow',
  subtitle: 'Elimina i processi ripetitivi e scala il business',
  description:
    'Analizziamo i processi aziendali e li automatizziamo con AI e strumenti no-code/low-code. Risparmia ore di lavoro ogni giorno, riduci gli errori umani e libera il tuo team per attività ad alto valore.',
  features: [
    {
      icon: Settings,
      title: 'Audit dei processi',
      description: 'Mappatura completa dei flussi aziendali per identificare le priorità di automazione.',
    },
    {
      icon: Workflow,
      title: 'Automazione n8n/Zapier',
      description: 'Workflow personalizzati che connettono i tuoi strumenti senza scrivere codice.',
    },
    {
      icon: Shield,
      title: 'Riduzione errori',
      description: 'I processi automatizzati eliminano gli errori umani nei task ripetitivi.',
    },
    {
      icon: BarChart3,
      title: 'Reporting automatico',
      description: 'Report e dashboard aggiornati in automatico senza intervento manuale.',
    },
  ],
  featuredTitle: 'Quante ore perde il tuo team ogni settimana?',
  featuredDescription:
    'Un\'analisi gratuita dei tuoi processi per stimare il risparmio di tempo ottenibile con l\'automazione. Risultati concreti, non promesse.',
  featuredCta: 'Calcola il risparmio',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}

'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
	LucideIcon,
	ShoppingBag,
	Repeat,
	TrendingUp,
	Plug,
	Globe,
	Layout,
	PenTool,
	Sparkles,
	Bot,
	FileText,
	Workflow,
	BarChart3,
	Search,
	Link2,
	Share2,
	Megaphone,
	ArrowRight,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

type Featured = {
	title: string;
	description: string;
	href: string;
	cta: string;
};

type MegaSection = {
	label: string;
	sublabel: string;
	items: LinkItem[];
	featured: Featured;
};

// ─── Mega-menu data ───────────────────────────────────────────────────────────

const ecommerceLinks: LinkItem[] = [
	{ title: 'Sviluppo Store Shopify', href: '/servizi/e-commerce/sviluppo-store', description: 'Store ottimizzati per la conversione', icon: ShoppingBag },
	{ title: 'Migrazione E-commerce', href: '/servizi/e-commerce/migrazione', description: 'Trasferimento da altre piattaforme', icon: Repeat },
	{ title: 'Ottimizzazione Conversioni', href: '/servizi/e-commerce/ottimizzazione', description: 'CRO, A/B testing e performance', icon: TrendingUp },
	{ title: 'Integrazioni Custom', href: '/servizi/e-commerce/integrazioni', description: 'API, plugin e funzionalità su misura', icon: Plug },
];

const sitiAziendaliLinks: LinkItem[] = [
	{ title: 'Siti Vetrina', href: '/servizi/siti-aziendali/vetrina', description: 'Presenza online elegante e professionale', icon: Globe },
	{ title: 'Landing Page', href: '/servizi/siti-aziendali/landing-page', description: 'Pagine ad alta conversione', icon: Layout },
	{ title: 'Blog Aziendali', href: '/servizi/siti-aziendali/blog', description: 'Content marketing che funziona', icon: PenTool },
	{ title: 'Restyling Web', href: '/servizi/siti-aziendali/restyling', description: 'Rinnova il tuo sito attuale', icon: Sparkles },
];

const aiServicesLinks: LinkItem[] = [
	{ title: 'Chatbot Intelligenti', href: '/servizi/ai/chatbot', description: 'Customer care attivo 24/7', icon: Bot },
	{ title: 'AI Content Generation', href: '/servizi/ai/content-gen', description: 'Articoli, immagini e video su scala', icon: FileText },
	{ title: 'Automazione Workflow', href: '/servizi/ai/automazione-workflow', description: 'Risparmia tempo sui processi ripetitivi', icon: Workflow },
	{ title: 'Analisi Predittiva', href: '/servizi/ai/analisi-predittiva', description: 'Decisioni basate sui dati', icon: BarChart3 },
];

const seoSocialLinks: LinkItem[] = [
	{ title: 'SEO On-Page', href: '/servizi/seo-social/on-page', description: 'Ottimizzazione contenuti e tecnica', icon: Search },
	{ title: 'Link Building', href: '/servizi/seo-social/link-building', description: 'Autorità di dominio e backlink', icon: Link2 },
	{ title: 'Social Media Management', href: '/servizi/seo-social/social-media', description: 'Strategia e gestione contenuti', icon: Share2 },
	{ title: 'Google & Meta Ads', href: '/servizi/seo-social/google-meta-ads', description: 'Campagne paid ad alta resa', icon: Megaphone },
];

const megaSections: MegaSection[] = [
	{
		label: 'E-commerce',
		sublabel: 'Soluzioni Shopify',
		items: ecommerceLinks,
		featured: {
			title: 'Audit Shopify Gratuito',
			description: 'Analizziamo il tuo store e ti mostriamo come aumentare le conversioni del 30% in 90 giorni.',
			href: '/servizi/e-commerce/sviluppo-store',
			cta: 'Prenota audit',
		},
	},
	{
		label: 'Siti Aziendali',
		sublabel: 'Professionalità Web',
		items: sitiAziendaliLinks,
		featured: {
			title: 'Demo live in 48h',
			description: 'Ricevi un mockup interattivo del tuo nuovo sito in due giorni lavorativi.',
			href: '/servizi/siti-aziendali/vetrina',
			cta: 'Richiedi demo',
		},
	},
	{
		label: 'Servizi AI',
		sublabel: 'Automazione e Contenuti',
		items: aiServicesLinks,
		featured: {
			title: 'Chatbot AI personalizzato',
			description: 'Allenato sui tuoi dati aziendali, integrato con WhatsApp, sito e CRM.',
			href: '/servizi/ai/chatbot',
			cta: 'Scopri come',
		},
	},
	{
		label: 'SEO & Social',
		sublabel: 'Crescita Digitale',
		items: seoSocialLinks,
		featured: {
			title: 'Strategia SEO gratuita',
			description: 'Un piano di crescita organica e paid pensato per il tuo settore. Senza impegno.',
			href: '/servizi/seo-social/on-page',
			cta: 'Voglio la strategia',
		},
	},
];

// ─── Mega Section ─────────────────────────────────────────────────────────────

function MegaSectionItem({ section }: { section: MegaSection }) {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger
				className={cn(
					'bg-transparent text-white/70 hover:text-white hover:bg-[#805CF6]/10',
					'data-[state=open]:bg-[#805CF6]/10 data-[state=open]:text-white',
					'data-[state=open]:shadow-[0_0_20px_-5px_rgba(128,92,246,0.5)]',
					'transition-all duration-200',
				)}
			>
				{section.label}
			</NavigationMenuTrigger>

			<NavigationMenuContent className="!bg-transparent !border-0 !shadow-none p-0">
				<div
					className={cn(
						'relative w-[640px] overflow-hidden rounded-2xl',
						'border border-[#805CF6]/25',
						'bg-[#0a0a0f]/80 backdrop-blur-2xl',
						'shadow-[0_0_60px_-15px_rgba(128,92,246,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]',
					)}
				>
					{/* Ambient glow */}
					<div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#805CF6]/25 blur-3xl" />
					<div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-fuchsia-500/15 blur-3xl" />

					<div className="relative grid grid-cols-[1fr_240px]">
						{/* Left — links grid */}
						<div className="p-3">
							<p className="px-3 pt-2 pb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#805CF6]">
								{section.sublabel}
							</p>

							<ul className="grid grid-cols-2 gap-1">
								{section.items.map((item) => (
									<li key={item.title}>
										<NavigationMenuLink asChild>
											<Link
												href={item.href}
												className={cn(
													'group flex items-start gap-3 rounded-lg p-3',
													'transition-colors duration-150',
													'hover:bg-white/[0.04]',
												)}
											>
												<div
													className={cn(
														'flex size-9 shrink-0 items-center justify-center rounded-lg',
														'border border-[#805CF6]/20 bg-[#805CF6]/10',
														'text-violet-300 transition-all duration-200',
														'group-hover:border-[#805CF6]/50 group-hover:bg-[#805CF6]/20',
														'group-hover:text-violet-200',
														'group-hover:shadow-[0_0_15px_-2px_rgba(128,92,246,0.6)]',
													)}
												>
													<item.icon className="size-4" />
												</div>
												<div className="min-w-0">
													<p className="text-sm font-medium text-white truncate">{item.title}</p>
													<p className="mt-0.5 text-xs leading-snug text-white/45">
														{item.description}
													</p>
												</div>
											</Link>
										</NavigationMenuLink>
									</li>
								))}
							</ul>
						</div>

						{/* Right — featured CTA */}
						<div
							className={cn(
								'relative flex flex-col p-5',
								'border-l border-[#805CF6]/15',
								'bg-gradient-to-br from-[#805CF6]/12 via-transparent to-transparent',
							)}
						>
							<p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#805CF6]">
								In evidenza
							</p>
							<p className="mb-2 text-sm font-medium text-white">{section.featured.title}</p>
							<p className="mb-5 flex-1 text-xs leading-relaxed text-white/50">
								{section.featured.description}
							</p>
							<Link
								href={section.featured.href}
								className={cn(
									'inline-flex items-center justify-between gap-1.5 rounded-lg',
									'border border-[#805CF6]/30 bg-[#805CF6]/10 px-3 py-2',
									'text-xs font-medium text-violet-200',
									'transition-all duration-200',
									'hover:border-[#805CF6]/60 hover:bg-[#805CF6]/20',
									'hover:shadow-[0_0_20px_-2px_rgba(128,92,246,0.5)]',
								)}
							>
								{section.featured.cta}
								<ArrowRight className="size-3" />
							</Link>
						</div>
					</div>
				</div>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	React.useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full transition-all duration-300',
				scrolled
					? 'border-b border-[#805CF6]/15 bg-black/70 backdrop-blur-xl'
					: 'border-b border-transparent bg-black/30 backdrop-blur-md',
			)}
		>
			<nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
				<div className="flex items-center gap-6">
					<Link
						href="/"
						className={cn(
							'flex items-center gap-2 rounded-md p-2 text-white',
							'transition-colors hover:bg-white/5',
						)}
					>
						<WordmarkIcon className="h-4" />
					</Link>

					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							{megaSections.map((section) => (
								<MegaSectionItem key={section.label} section={section} />
							))}
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/prezzi"
										className={cn(
											'inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium',
											'text-white/70 transition-colors hover:bg-[#805CF6]/10 hover:text-white',
										)}
									>
										Prezzi
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className="hidden items-center gap-2 md:flex">
					<Button
						variant="ghost"
						className="text-white/80 hover:bg-white/5 hover:text-white"
					>
						Accedi
					</Button>
					<Button
						asChild
						className={cn(
							'border border-[#805CF6]/40 bg-[#805CF6] text-white',
							'shadow-[0_0_20px_-2px_rgba(128,92,246,0.6)]',
							'hover:bg-[#9277F8] hover:shadow-[0_0_28px_-2px_rgba(128,92,246,0.8)]',
							'transition-all duration-200',
						)}
					>
						<Link href="/contatti">Inizia ora</Link>
					</Button>
				</div>

				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className={cn(
						'md:hidden border-[#805CF6]/30 bg-transparent text-white',
						'hover:bg-[#805CF6]/10 hover:text-white',
					)}
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Apri menu"
				>
					{/* <MenuToggleIcon open={open} className="size-5" duration={300} /> */}
				</Button>
			</nav>

			<MobileMenu open={open}>
				<NavigationMenu className="max-w-full">
					<div className="flex w-full flex-col gap-y-6">
						{megaSections.map((section) => (
							<div key={section.label} className="flex flex-col gap-2">
								<span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#805CF6]">
									{section.sublabel}
								</span>
								<span className="text-base font-medium text-white">{section.label}</span>
								{section.items.map((link) => (
									<MobileListItem key={link.title} {...link} />
								))}
							</div>
						))}
					</div>
				</NavigationMenu>

				<div className="mt-8 flex flex-col gap-2">
					<Button
						variant="outline"
						className={cn(
							'w-full border-[#805CF6]/30 bg-transparent text-white',
							'hover:bg-[#805CF6]/10',
						)}
					>
						Accedi
					</Button>
					<Button
						asChild
						className={cn(
							'w-full bg-[#805CF6] text-white',
							'shadow-[0_0_20px_-2px_rgba(128,92,246,0.6)]',
							'hover:bg-[#9277F8]',
						)}
					>
						<Link href="/contatti">Inizia ora</Link>
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

// ─── Mobile menu (portal) ─────────────────────────────────────────────────────

type MobileMenuProps = {
	open: boolean;
	children: React.ReactNode;
};

function MobileMenu({ open, children }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'fixed inset-x-0 top-16 bottom-0 z-40 md:hidden',
				'bg-black/85 backdrop-blur-2xl',
				'border-t border-[#805CF6]/15',
				'overflow-y-auto',
			)}
		>
			<div className="data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out flex min-h-full flex-col justify-between p-6">
				{children}
			</div>
		</div>,
		document.body,
	);
}

// ─── Mobile list item ─────────────────────────────────────────────────────────

function MobileListItem({ title, description, icon: Icon, href }: LinkItem) {
	return (
		<Link
			href={href}
			className={cn(
				'flex w-full flex-row items-start gap-3 rounded-lg p-3',
				'transition-colors hover:bg-white/[0.04]',
			)}
		>
			<div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[#805CF6]/25 bg-[#805CF6]/10 text-violet-300">
				<Icon className="size-4" />
			</div>
			<div className="flex flex-col">
				<span className="text-sm font-medium text-white">{title}</span>
				{description && (
					<span className="text-xs text-white/45 leading-snug">{description}</span>
				)}
			</div>
		</Link>
	);
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}

// ─── Wordmark ─────────────────────────────────────────────────────────────────

const WordmarkIcon = (props: React.ComponentProps<'svg'>) => (
	<svg viewBox="0 0 84 24" fill="currentColor" {...props}>
		<path d="M45.035 23.984c-1.34-.062-2.566-.441-3.777-1.16-1.938-1.152-3.465-3.187-4.02-5.36-.199-.784-.238-1.128-.234-2.058 0-.691.008-.87.062-1.207.23-1.5.852-2.883 1.852-4.144.297-.371 1.023-1.09 1.41-1.387 1.399-1.082 2.84-1.68 4.406-1.816.536-.047 1.528-.02 2.047.054 1.227.184 2.227.543 3.106 1.121 1.277.84 2.5 2.184 3.367 3.7.098.168.172.308.172.312-.004 0-1.047.723-2.32 1.598l-2.711 1.867c-.61.422-2.91 2.008-2.993 2.062l-.074.047-1-1.574c-.55-.867-1.008-1.594-1.012-1.61-.007-.019.922-.648 2.188-1.476 1.215-.793 2.2-1.453 2.191-1.46-.02-.032-.508-.27-.691-.34a5 5 0 0 0-.465-.13c-.371-.09-1.105-.125-1.426-.07-1.285.219-2.336 1.3-2.777 2.852-.215.761-.242 1.636-.074 2.355.129.527.383 1.102.691 1.543.234.332.727.82 1.047 1.031.664.434 1.195.586 1.969.555.613-.023 1.027-.129 1.64-.426 1.184-.574 2.16-1.554 2.828-2.843.122-.235.208-.372.227-.368.082.032 3.77 1.938 3.79 1.961.034.032-.407.93-.696 1.414a12 12 0 0 1-1.051 1.477c-.36.422-1.102 1.14-1.492 1.445a9.9 9.9 0 0 1-3.23 1.684 9.2 9.2 0 0 1-2.95.351M74.441 23.996c-1.488-.043-2.8-.363-4.066-.992-1.687-.848-2.992-2.14-3.793-3.774-.605-1.234-.863-2.402-.863-3.894.004-1.149.176-2.156.527-3.11.14-.378.531-1.171.75-1.515 1.078-1.703 2.758-2.934 4.805-3.524.847-.242 1.465-.332 2.433-.351 1.032-.024 1.743.055 2.48.277l.31.09.007 2.48c.004 1.364 0 2.481-.008 2.481a1 1 0 0 1-.12-.055c-.688-.347-2.09-.488-2.962-.296-.754.167-1.296.453-1.785.945a3.7 3.7 0 0 0-1.043 2.11c-.047.382-.02 1.109.055 1.437a3.4 3.4 0 0 0 .941 1.738c.75.75 1.715 1.102 2.875 1.05.645-.03 1.118-.14 1.563-.366q1.721-.864 2.02-3.145c.035-.293.042-1.266.042-7.957V0H84l-.012 8.434c-.008 7.851-.011 8.457-.054 8.757-.196 1.274-.586 2.25-1.301 3.243-1.293 1.808-3.555 3.07-6.145 3.437-.664.098-1.43.14-2.047.125M9.848 23.574a14 14 0 0 1-1.137-.152c-2.352-.426-4.555-1.781-6.117-3.774-.27-.335-.75-1.05-.95-1.406-1.156-2.047-1.695-4.27-1.64-6.77.047-1.995.43-3.66 1.23-5.316.524-1.086 1.04-1.87 1.793-2.715C4.567 1.72 6.652.535 8.793.171 9.68.02 10.093 0 12.297 0h1.789v5.441l-.961.016c-2.36.04-3.441.215-4.441.719-.836.414-1.278.879-1.895 1.976-.219.399-.535 1.02-.535 1.063 0 .02 1.285.027 3.918.027h3.914v5.113h-3.914c-2.54 0-3.918.008-3.918.028 0 .05.254.597.441.953.344.656.649 1.086 1.051 1.48.668.657 1.356.985 2.445 1.16.645.106 1.274.145 2.61.16l1.285.016v5.442l-2.055-.004a120 120 0 0 1-2.183-.016M16.469 14.715c0-5.504.011-9.04.031-9.29a5.54 5.54 0 0 1 1.527-3.48c.778-.82 1.922-1.457 3.118-1.734C21.915.035 22.422 0 24.39 0h1.789v4.914h-1.426c-1.324 0-1.445.004-1.644.055-.739.191-1.059.699-1.106 1.754l-.015.355h4.191v4.914h-4.184v11.602h-5.39ZM27.023 14.727c0-5.223.012-9.04.028-9.278.129-1.98 1.234-3.68 3.012-4.62.87-.462 1.777-.716 2.851-.802A61 61 0 0 1 34.945 0h1.649v4.914h-1.426c-1.32 0-1.441.004-1.64.055-.739.191-1.063.699-1.106 1.754l-.02.355h4.192v4.914H32.41v11.602h-5.387ZM55.48 15.406V7.22h4.66v1.363c0 1.3.005 1.363.051 1.363.04 0 .075-.054.133-.203.38-.98.969-1.68 1.711-2.031.563-.266 1.422-.43 2.492-.48l.414-.02v4.914l-.414.035c-.738.063-1.597.195-2.058.313-.297.082-.688.28-.875.449-.324.289-.532.703-.625 1.254-.094.547-.098.879-.098 5.144v4.274h-5.39Zm0 0" />
	</svg>
);

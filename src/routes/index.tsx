import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Sparkles, Instagram, Facebook, Target, BarChart3, Globe, MessageSquare,
  MapPin, Star, ChevronDown, Phone, Mail, Download, CheckCircle2, Loader2,
  Store, Briefcase, Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton, WhatsAppFloat, WHATSAPP_URL } from "@/components/WhatsAppButton";
import { Diagnostic } from "@/components/Diagnostic";
import { Carousel } from "@/components/Carousel";
import { submitToFormspree } from "@/lib/formspree";
import cathHero from "@/assets/cath-hero.jpeg";
import cathGarden from "@/assets/cath-garden.jpeg";
import cathBureau from "@/assets/cath-bureau.jpeg";
import visibilite from "@/assets/visibilite.png";
import dashboardKpi from "@/assets/dashboard-kpi.png";
import systemeLovable from "@/assets/systeme-lovable.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cath & You — Visibilité locale & digital dans le Var" },
      { name: "description", content: "Catherine accompagne les entreprises locales du Var pour développer leur visibilité : réseaux sociaux, Google Business, Meta Ads, sites internet et tunnels de vente." },
      { property: "og:title", content: "Cath & You — Visibilité locale dans le Var" },
      { property: "og:description", content: "Réseaux sociaux, Google Business, Meta Ads, sites internet. Accompagnement local, Roquebrune-sur-Argens & Var." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PourQui />
      <Services />
      <Resultats />
      <Performance />
      <CreationSite />
      <GoogleBusiness />
      <QuiSuisJe />
      <Temoignages />
      <Diagnostic />
      <LeadMagnet />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-70" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[color:var(--turquoise)] opacity-30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[color:var(--lavender)] opacity-40 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--turquoise)]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.5),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 shadow-sm backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-[color:var(--turquoise)]" />
            <span className="text-xs font-medium text-foreground">Roquebrune-sur-Argens · Var</span>
          </div>
          <h1 className="mt-6 text-[2.6rem] leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Votre entreprise mérite <span className="italic text-[color:var(--primary)]">d'être vue.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/80 sm:text-lg">
            J'accompagne les entreprises locales du Var à développer leur visibilité grâce aux réseaux sociaux, Google Business Profile, la publicité digitale et la création de sites internet.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-foreground/90">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[color:var(--turquoise)]" /> Plus de visibilité</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[color:var(--turquoise)]" /> Plus de crédibilité</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[color:var(--turquoise)]" /> Plus d'opportunités</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 font-medium text-white shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5">
              Découvrir mes services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3.5 font-medium text-foreground backdrop-blur transition-colors hover:bg-background">
              Discutons de votre projet
            </a>
            <WhatsAppButton />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[color:var(--turquoise)]/40 to-[color:var(--rose)]/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-[var(--shadow-glow)] ring-1 ring-white/40">
            <img src={cathHero} alt="Catherine, fondatrice de Cath & You" className="aspect-[4/5] w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] sm:block">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-[color:var(--turquoise)]" />
                <div className="h-8 w-8 rounded-full bg-[color:var(--lavender)]" />
                <div className="h-8 w-8 rounded-full bg-[color:var(--rose)]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">+138% Instagram</div>
                <div className="text-[11px] text-muted-foreground">Cas client · 3 mois</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const audienceGroups = [
  {
    icon: Store,
    title: "Commerce & Restauration",
    items: ["Artisans", "Commerçants", "Restaurants", "Food trucks", "Snacks", "Producteurs locaux"],
    gradient: "from-[color:var(--rose)]/40 to-[color:var(--lavender)]/40",
  },
  {
    icon: Briefcase,
    title: "Services & Bien-être",
    items: ["Esthéticiennes", "Thérapeutes", "Coachs sportifs", "Professions libérales", "Garagistes", "Stations de lavage"],
    gradient: "from-[color:var(--turquoise)]/40 to-[color:var(--lavender)]/40",
  },
  {
    icon: Users,
    title: "Loisirs & Entrepreneuriat",
    items: ["Activités nautiques", "Activités sportives", "Associations", "Entrepreneurs locaux", "Entreprises de services", "Indépendants"],
    gradient: "from-[color:var(--lavender)]/40 to-[color:var(--rose)]/40",
  },
];

function PourQui() {
  return (
    <section id="pour-qui" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Pour qui ?</span>
          <h2 className="mt-2 text-balance text-3xl text-foreground sm:text-4xl md:text-5xl">
            Un accompagnement pensé pour les acteurs locaux
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Commerçant, artisan, thérapeute, restaurateur ou indépendant : votre visibilité est un levier essentiel de développement.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--turquoise)]/40 bg-[color:var(--cream)] px-4 py-2 text-sm font-medium text-foreground shadow-sm">
            <MapPin className="h-4 w-4 text-[color:var(--turquoise)]" />
            Roquebrune-sur-Argens & alentours · Var
          </div>
        </div>
        <div className="mt-12">
          <Carousel>
            {audienceGroups.map((g) => (
              <article
                key={g.title}
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${g.gradient} blur-2xl opacity-60`} />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-soft)] text-[color:var(--primary)] ring-1 ring-border">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl text-foreground">{g.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--turquoise)]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Instagram,
    tag: "Service 01",
    title: "Community Management",
    desc: "Développez votre présence digitale grâce à des contenus réguliers et cohérents.",
    bullets: ["Instagram, Facebook, TikTok", "Google Business Profile", "Calendrier éditorial", "Création de contenus, posts & réels"],
    gradient: "from-[color:var(--rose)]/40 to-[color:var(--lavender)]/40",
  },
  {
    icon: Target,
    tag: "Service 02",
    title: "Traffic Manager IA & Media Buyer",
    desc: "Transformez votre visibilité en demandes de contact qualifiées.",
    bullets: ["Meta Ads & Google Ads", "Notoriété & génération de leads", "Retargeting", "Analyse KPI & optimisation"],
    gradient: "from-[color:var(--turquoise)]/40 to-[color:var(--lavender)]/40",
  },
  {
    icon: Globe,
    tag: "Service 03",
    title: "Sites internet & Tunnels de vente",
    desc: "Disposez d'un outil capable de présenter votre activité et générer des opportunités 24h/24.",
    bullets: ["Lovable & Systeme.io", "Landing pages & tunnels", "Automatisations & formulaires", "WhatsApp Business"],
    gradient: "from-[color:var(--lavender)]/40 to-[color:var(--rose)]/40",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[color:var(--cream)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Mes services</span>
          <h2 className="mt-2 text-balance text-3xl text-foreground sm:text-4xl md:text-5xl">
            Trois leviers pour faire grandir votre activité
          </h2>
        </div>
        <div className="mt-12">
          <Carousel>
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] md:p-7"
              >
                <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${s.gradient} blur-2xl opacity-60`} />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-soft)] text-[color:var(--primary)] ring-1 ring-border">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.tag}</div>
                  <h3 className="mt-1 text-balance text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--turquoise)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function Resultats() {
  return (
    <section id="resultats" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Visibilité & résultats</span>
          <h2 className="mt-2 text-4xl text-foreground sm:text-[2.75rem] md:text-5xl">La visibilité n'est pas une question de hasard.</h2>
          <p className="mt-5 text-muted-foreground">
            Chaque activité est différente. Les résultats dépendent de votre marché, de votre présence actuelle et des actions mises en place.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { label: "Instagram", val: "+138%" },
              { label: "TikTok", val: "+1000%" },
              { label: "Facebook", val: "+159%" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-[color:var(--primary)]">{s.val}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-hero)] blur-2xl opacity-60" />
          <img src={visibilite} alt="Comparaison visibilité avant / après" className="relative w-full rounded-[2rem] border border-border shadow-[var(--shadow-soft)]" />
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section className="bg-[image:var(--gradient-soft)] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Performance</span>
          <h2 className="mt-2 text-4xl text-foreground sm:text-[2.75rem] md:text-5xl">Piloter pour mieux progresser</h2>
          <p className="mt-4 text-muted-foreground">Un suivi clair, lisible, conçu même pour celles et ceux qui ne maîtrisent pas le marketing digital.</p>
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="grid grid-cols-2 gap-3">
            {[
              { k: "CPM", d: "Coût pour 1000 impressions" },
              { k: "CTR", d: "Taux de clics" },
              { k: "CPC", d: "Coût par clic" },
              { k: "Leads", d: "Prospects générés" },
              { k: "Conversions", d: "Visiteurs → clients" },
              { k: "Analyse", d: "Optimisation continue" },
            ].map((m) => (
              <div key={m.k} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="text-lg font-semibold text-foreground">{m.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.d}</div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-[color:var(--lavender)] opacity-40 blur-2xl" />
            <img src={dashboardKpi} alt="Tableau de bord Meta Ads" className="relative w-full rounded-3xl border border-border shadow-[var(--shadow-glow)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CreationSite() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-[color:var(--turquoise)] opacity-30 blur-2xl" />
          <img src={systemeLovable} alt="Création de sites internet & tunnels de vente" className="relative w-full rounded-3xl border border-border shadow-[var(--shadow-soft)]" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Sites & tunnels</span>
          <h2 className="mt-2 text-4xl text-foreground sm:text-[2.75rem] md:text-5xl">Transformez votre visibilité en opportunités.</h2>
          <div className="mt-6 grid grid-cols-2 gap-2">
            {["Sites internet", "Lovable", "Systeme.io", "Landing pages", "Tunnels de vente", "Automatisations", "Formulaires", "WhatsApp Business"].map((t) => (
              <div key={t} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--turquoise)]" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleBusiness() {
  const items = [
    { icon: MapPin, t: "Optimisation Google Business Profile" },
    { icon: Star, t: "Référencement local" },
    { icon: MessageSquare, t: "Publications régulières" },
    { icon: CheckCircle2, t: "Gestion des avis clients" },
    { icon: Globe, t: "Présence sur Google Maps" },
    { icon: Sparkles, t: "Visibilité locale renforcée" },
  ];
  return (
    <section className="bg-[color:var(--cream)] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Google Business Profile</span>
          <h2 className="mt-2 text-4xl text-foreground sm:text-[2.75rem] md:text-5xl">Développez votre visibilité locale sur Google.</h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[color:var(--turquoise)]/40 bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl text-foreground">Pourquoi Google Business est indispensable ?</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Parce que vos futurs clients recherchent déjà vos services sur Google. Une fiche optimisée augmente votre visibilité locale et facilite les prises de contact.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-soft)] text-[color:var(--primary)]">
                <i.icon className="h-5 w-5" />
              </div>
              <p className="pt-2 text-sm text-foreground">{i.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuiSuisJe() {
  return (
    <section id="qui-suis-je" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[color:var(--lavender)] to-[color:var(--turquoise)] opacity-30 blur-2xl" />
          <img src={cathGarden} alt="Catherine, Cath & You" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]" />
        </div>
        <div>
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Qui suis-je</span>
          <h2 className="mt-2 text-4xl text-foreground sm:text-[2.75rem] md:text-5xl">Bonjour, moi c'est Catherine.</h2>
          <div className="mt-6 space-y-4 text-foreground/80">
            <p>
              Habitante de Roquebrune-sur-Argens, maman entrepreneuse et passionnée par le digital, j'accompagne les entreprises locales qui souhaitent développer leur visibilité et leur présence en ligne.
            </p>
            <p>
              Issue du domaine du droit et du recouvrement judiciaire, j'ai choisi de mettre mon sens de l'organisation, de l'analyse et du contact humain au service des entrepreneurs locaux.
            </p>
            <p>
              Mon objectif est simple : <strong className="text-foreground">vous aider à être visible, crédible et trouvé par vos futurs clients.</strong>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#diagnostic" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">Mon diagnostic gratuit</a>
            <WhatsAppButton label="Échangeons" />
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Cas n°1",
    role: "Commerçant local",
    text: "Développement de la visibilité locale et amélioration de la présence digitale.",
  },
  {
    name: "Cas n°2",
    role: "Profession libérale",
    text: "Création d'un site internet professionnel et optimisation de la présence en ligne.",
  },
  {
    name: "Cas n°3",
    role: "Entreprise de services",
    text: "Structuration de la communication digitale et amélioration de la visibilité locale.",
  },
];

function Temoignages() {
  return (
    <section className="bg-[image:var(--gradient-soft)] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Cas d'usage</span>
          <h2 className="mt-2 text-4xl text-foreground sm:text-[2.75rem] md:text-5xl">Des accompagnements concrets, adaptés à chaque activité</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-soft)] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[color:var(--primary)]">
                <Sparkles className="h-3 w-3" /> {t.name}
              </div>
              <div className="mt-4 text-xl text-foreground">{t.role}</div>
              <p className="mt-3 text-sm text-foreground/80">{t.text}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadMagnet() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--lavender)] opacity-30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[color:var(--turquoise)] opacity-30 blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Guide offert</span>
              <h2 className="mt-2 text-3xl text-foreground md:text-4xl">Les 7 erreurs qui empêchent votre entreprise d'être visible localement</h2>
              <p className="mt-4 text-muted-foreground">Téléchargez gratuitement le guide pour identifier ce qui freine votre visibilité — et comment y remédier.</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-foreground/70">
                <Download className="h-4 w-4 text-[color:var(--primary)]" /> Guide gratuit à télécharger
              </div>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-3 rounded-2xl border border-border bg-background/70 p-5 backdrop-blur"
            >
              {sent ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-[color:var(--turquoise)]" />
                  <p className="mt-3 font-medium text-foreground">Merci ! Le guide arrive dans votre boîte mail.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <input required placeholder="Prénom" className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm" />
                    <input required placeholder="Nom" className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm" />
                  </div>
                  <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm" />
                  <input required type="tel" placeholder="Téléphone" className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm" />
                  <input required placeholder="Activité professionnelle" className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm" />
                  <button className="mt-1 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 font-medium text-white shadow-[var(--shadow-soft)]">
                    Recevoir le guide gratuit
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Combien coûte un accompagnement ?", a: "Chaque activité est différente. Un échange permet d'identifier les solutions les plus adaptées à vos besoins et à votre budget." },
  { q: "Combien de temps faut-il pour voir des résultats ?", a: "Certaines actions apportent des résultats rapidement, d'autres nécessitent un travail régulier." },
  { q: "Puis-je choisir un seul service ?", a: "Oui. Chaque prestation peut être mise en place individuellement ou dans le cadre d'une stratégie globale." },
  { q: "Pourquoi travailler avec une interlocutrice locale ?", a: "Être implantée localement me permet de mieux comprendre les réalités du terrain, les habitudes de consommation et les enjeux spécifiques des entreprises du Var." },
  { q: "Proposez-vous un diagnostic avant de démarrer ?", a: "Oui. Chaque projet débute par un échange afin d'analyser votre visibilité actuelle et d'identifier les actions prioritaires." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[color:var(--cream)] py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">FAQ</span>
          <h2 className="mt-2 text-4xl text-foreground sm:text-[2.75rem] md:text-5xl">Vos questions, mes réponses</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="font-medium text-foreground">{f.q}</span>
                <ChevronDown className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Contact</span>
            <h2 className="mt-2 text-4xl text-foreground sm:text-[2.75rem] md:text-5xl">Discutons de votre projet.</h2>
            <p className="mt-4 text-muted-foreground">Un échange simple pour comprendre votre activité, vos objectifs, et identifier ensemble les bonnes actions.</p>
            <div className="mt-8 space-y-4">
              <a href="tel:+33635264492" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-muted">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-soft)] text-[color:var(--primary)]"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Téléphone</div>
                  <div className="font-medium text-foreground">06 35 26 44 92</div>
                </div>
              </a>
              <a href="mailto:cathandyou.pro@gmail.com" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-muted">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-soft)] text-[color:var(--primary)]"><Mail className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground break-all">cathandyou.pro@gmail.com</div>
                </div>
              </a>
              <WhatsAppButton label="Écrire sur WhatsApp" className="w-full justify-center" />
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <img src={cathBureau} alt="Catherine au bureau" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="self-start rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8"
          >
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[color:var(--turquoise)]" />
                <h3 className="mt-4 text-2xl text-foreground">Message envoyé !</h3>
                <p className="mt-2 text-sm text-muted-foreground">Je reviens vers vous très vite.</p>
              </div>
            ) : (
              <div className="grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <input required placeholder="Prénom" className="rounded-xl border border-border bg-background px-3 py-3 text-sm" />
                  <input required placeholder="Nom" className="rounded-xl border border-border bg-background px-3 py-3 text-sm" />
                </div>
                <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-background px-3 py-3 text-sm" />
                <input required type="tel" placeholder="Téléphone" className="rounded-xl border border-border bg-background px-3 py-3 text-sm" />
                <input placeholder="Activité — Ville" className="rounded-xl border border-border bg-background px-3 py-3 text-sm" />
                <textarea required rows={5} placeholder="Parlez-moi de votre projet…" className="rounded-xl border border-border bg-background px-3 py-3 text-sm" />
                <button className="mt-1 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3.5 font-medium text-white shadow-[var(--shadow-soft)]">
                  Envoyer mon message
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl font-semibold">Cath</span>
            <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">& you</span>
          </div>
          <p className="mt-3 text-sm text-background/70">
            Visibilité locale · Google Business · Réseaux sociaux · Publicité digitale · Sites internet · Tunnels de vente.
          </p>
        </div>
        <div className="text-sm text-background/80">
          <div className="font-medium text-background">Zone d'intervention</div>
          <p className="mt-2">Roquebrune-sur-Argens & Var</p>
          <p className="mt-3">06 35 26 44 92<br /><a href="mailto:cathandyou.pro@gmail.com" className="hover:text-background break-all">cathandyou.pro@gmail.com</a></p>
        </div>
        <div className="flex md:justify-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-fit items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-medium text-white"
          >
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-background/60 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>© 2026 Cath & You — Tous droits réservés.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="https://app.notion.com/p/Mentions-L-gales-Cath-and-You-2fbe6c6bd165800e8325e416cbb7b5b3?source=copy_link" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-background">Mentions légales</a>
            <a href="https://app.notion.com/p/Politique-de-confidentialit-Cath-and-You-2ede6c6bd1658009b089e4898bf30503?source=copy_link" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-background">Politique de confidentialité</a>
            <button
              type="button"
              onClick={() => alert("Préférences cookies : aucun cookie tiers n'est utilisé sur ce site. Vous pouvez gérer le suivi via les paramètres de votre navigateur.")}
              className="transition-colors hover:text-background"
            >
              Gestion des cookies
            </button>
            <span className="flex items-center gap-2 text-background/50"><Facebook className="h-3.5 w-3.5" /><Instagram className="h-3.5 w-3.5" /></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Unused import safeguards for tree-shaking clarity
void BarChart3;

import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  CarFront,
  ChevronRight,
  CircleHelp,
  Gauge,
  Mail,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ct26LandcruiserCartridge from "@/assets/ct26-landcruiser-cartridge.png.asset.json";
import turbo1kdFront from "@/assets/1kd-complete-turbo-front.png.asset.json";
import turbo1kdSide from "@/assets/1kd-complete-turbo-side.png.asset.json";
import fordRanger22Cartridge from "@/assets/ford-ranger-22-cartridge.png.asset.json";
import turbo22Complete5Speed from "@/assets/turbo-22-complete-5-speed.png.asset.json";
import fordRanger22CompleteTurbo from "@/assets/ford-ranger-22-complete-turbo.png.asset.json";

const products = [
  {
    name: "CT26 Landcruiser Cartridge",
    fitment: "Toyota Landcruiser",
    image: ct26LandcruiserCartridge.url,
    alt: "CT26 Landcruiser turbo cartridge photographed upright in packaging",
    summary:
      "A replacement cartridge option for CT26 Landcruiser turbo setups, suitable when the center rotating assembly needs a fresh, dependable core.",
    badge: "Cartridge",
  },
  {
    name: "1KD Complete Turbo Charger",
    fitment: "Toyota 1KD engine",
    image: turbo1kdFront.url,
    alt: "Front view of a 1KD complete turbo charger with visible compressor wheel",
    summary:
      "A full 1KD turbo unit for customers looking for a more complete replacement instead of changing only the internal cartridge.",
    badge: "Complete unit",
  },
  {
    name: "1KD Complete Turbo Charger",
    fitment: "Toyota 1KD engine",
    image: turbo1kdSide.url,
    alt: "Side view of a 1KD complete turbo charger with actuator housing visible",
    summary:
      "A second product angle that helps buyers clearly inspect the build, housing, and actuator side before making an enquiry.",
    badge: "Alternate view",
  },
  {
    name: "2.2 Ford Ranger Turbo Charger Cartridge",
    fitment: "Ford Ranger 2.2",
    image: fordRanger22Cartridge.url,
    alt: "2.2 Ford Ranger turbo charger cartridge shown on white foam packaging",
    summary:
      "A cartridge-focused solution for Ford Ranger 2.2 applications when the main turbo housing can be reused and only the core needs replacement.",
    badge: "Cartridge",
  },
  {
    name: "2.2 Turbocharger Complete 5 Speed",
    fitment: "Ford Ranger 2.2 5-speed",
    image: turbo22Complete5Speed.url,
    alt: "2.2 turbocharger complete 5 speed unit photographed from the front",
    summary:
      "A full turbocharger setup intended for 2.2 5-speed applications, giving customers a more complete replacement option.",
    badge: "Complete unit",
  },
  {
    name: "2.2 Ford Ranger Complete Turbo Charger",
    fitment: "Ford Ranger 2.2",
    image: fordRanger22CompleteTurbo.url,
    alt: "2.2 Ford Ranger complete turbo charger photographed from the side",
    summary:
      "A complete Ford Ranger 2.2 turbocharger designed for customers who want a direct, ready-to-fit turbo assembly solution.",
    badge: "Ford Ranger",
  },
] as const;

const quickLinks = [
  "Landcruiser turbo cartridge",
  "1KD complete turbo",
  "Ford Ranger 2.2 cartridge",
  "Complete turbo units",
] as const;

const whyBuyHere = [
  {
    title: "Real product photos",
    description: "Customers can inspect the exact turbo items being advertised before contacting you.",
    icon: BadgeCheck,
  },
  {
    title: "Fitment-focused help",
    description: "You can guide buyers on the right turbo choice for their vehicle or engine application.",
    icon: ShieldCheck,
  },
  {
    title: "Fast direct enquiries",
    description: "Shoppers can request price, stock, and compatibility details by email or phone.",
    icon: Phone,
  },
] as const;

const turboInfo = [
  {
    title: "What a turbo does",
    text: "A turbocharger pushes more air into the engine so the vehicle can produce better power and pull efficiently under load.",
  },
  {
    title: "Cartridge vs complete turbo",
    text: "A cartridge replaces the main internal rotating core, while a complete turbo includes the assembled housing and related components.",
  },
  {
    title: "Why fitment matters",
    text: "Turbo parts must match the engine and vehicle setup correctly, so customers should always confirm details before buying.",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BoostFlow Turbos | Turbocharger Parts & Units" },
      {
        name: "description",
        content:
          "Shop turbocharger cartridges and complete turbo units for Landcruiser, 1KD and Ford Ranger 2.2 applications with direct enquiry options.",
      },
      { property: "og:title", content: "BoostFlow Turbos | Turbocharger Parts & Units" },
      {
        property: "og:description",
        content:
          "Customer-friendly turbo website with real product photos, simple explanations, and direct contact for pricing and fitment.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://boost-barn-market.lovable.app/" },
      { property: "og:image", content: turbo1kdFront.url },
      { name: "twitter:title", content: "BoostFlow Turbos | Turbocharger Parts & Units" },
      {
        name: "twitter:description",
        content:
          "Browse turbocharger cartridges and complete turbo units with real product images and contact-first buying flow.",
      },
      { name: "twitter:image", content: turbo1kdFront.url },
    ],
    links: [{ rel: "canonical", href: "https://boost-barn-market.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "BoostFlow Turbos",
          url: "https://boost-barn-market.lovable.app/",
          description:
            "Turbocharger parts and complete turbo units for Landcruiser, 1KD and Ford Ranger applications.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1220px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>

          <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-6">
            <div className="min-w-[180px]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                BoostFlow Turbos
              </p>
              <p className="text-sm text-muted-foreground">Turbocharger marketplace</p>
            </div>

            <div className="mt-3 hidden flex-1 lg:mt-0 lg:block">
              <div className="flex h-12 items-center gap-3 rounded-md border border-border bg-background px-4 shadow-[var(--shadow-soft)]">
                <Search className="size-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Search turbo parts, cartridges and complete units
                </span>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary">
              Products
            </a>
            <a href="#learn" className="text-sm font-medium text-foreground hover:text-primary">
              Turbo info
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </header>

      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-[1220px] px-4 py-4 sm:px-6 lg:px-8">
          <div className="rounded-md border-t-4 border-primary bg-accent px-5 py-6 sm:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-background text-foreground shadow-[var(--shadow-soft)]">
                  <CarFront className="size-7" />
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
                    Find the right turbo for your vehicle
                  </p>
                  <p className="mt-2 max-w-2xl text-base text-foreground/80">
                    Browse cartridges and complete turbochargers, then contact us for fitment, pricing and stock confirmation.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="surface">
                  <a href="#products">View products</a>
                </Button>
                <Button asChild size="lg" variant="hero">
                  <a href="mailto:sales@boostflowturbos.com?subject=Turbo%20Enquiry">Ask for details</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Turbocharger parts & complete units
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold uppercase leading-none text-foreground sm:text-5xl lg:text-[4.25rem]">
              Reliable turbo products made easy for customers to understand.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              This website is built like a realistic turbo parts storefront: simple browsing, real product photos, clear explanations, and direct contact for customers who need the correct turbocharger for their engine or vehicle.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {quickLinks.map((item) => (
                <a
                  key={item}
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  {item}
                  <ChevronRight className="size-4 text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-soft)] sm:col-span-2">
              <div className="aspect-[16/9] overflow-hidden bg-secondary">
                <img
                  src={turbo1kdFront.url}
                  alt="Featured 1KD complete turbo charger"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="border-t border-border p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Featured product
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">1KD Complete Turbo Charger</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  One of the most visually complete units on the page, shown clearly so customers can inspect the compressor side before they enquire.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-soft)]">
              <div className="aspect-[4/4.3] overflow-hidden bg-secondary">
                <img
                  src={ct26LandcruiserCartridge.url}
                  alt="CT26 Landcruiser cartridge close view"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground">CT26 Cartridge</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Landcruiser cartridge option.</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-soft)]">
              <div className="aspect-[4/4.3] overflow-hidden bg-secondary">
                <img
                  src={fordRanger22CompleteTurbo.url}
                  alt="Ford Ranger 2.2 complete turbo charger side view"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground">Ford Ranger 2.2</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Complete turbo charger unit.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto w-full max-w-[1220px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="section-heading-accent" />
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Most popular turbo products
            </p>
            <h2 className="mt-2 text-4xl font-extrabold uppercase text-foreground sm:text-5xl">
              Shop by product view
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-right">
            Customers can browse the photos first, understand whether each listing is a cartridge or a complete turbo, and then contact you for the next step.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={`${product.name}-${product.image}`}
              className="overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="aspect-[4/3.25] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {product.badge}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {product.fitment}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.summary}</p>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-md border border-border bg-background px-4 py-3">
                  <span className="text-sm font-medium text-foreground">Enquire for price & fitment</span>
                  <a href="#contact" className="text-sm font-semibold text-primary">
                    Contact now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/70">
        <div className="mx-auto w-full max-w-[1220px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {whyBuyHere.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-md border border-border bg-background p-5 shadow-[var(--shadow-soft)]">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent text-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="learn" className="mx-auto w-full max-w-[1220px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">About turbochargers</p>
            <h2 className="mt-3 text-4xl font-extrabold uppercase text-foreground sm:text-5xl">
              Simple turbo information for everyday buyers.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Many customers know they need a turbo part, but they may not know whether they need a cartridge or a complete turbocharger. This section helps make the website feel realistic, useful and trustworthy.
            </p>
          </div>

          <div className="grid gap-4">
            {turboInfo.map((item) => (
              <article key={item.title} className="rounded-md border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent">
                    <CircleHelp className="size-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/70">
        <div className="mx-auto w-full max-w-[1220px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Turbo gallery</p>
              <h2 className="text-4xl font-extrabold uppercase text-foreground sm:text-5xl">
                Multiple angles make the site easier for customers to trust.
              </h2>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                Showing different product angles helps buyers understand the housing, actuator, wheel side and overall build quality before they send an enquiry.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                  <Gauge className="size-4 text-primary" />
                  Better visual confidence
                </div>
                <div className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                  <Wrench className="size-4 text-primary" />
                  Easier fitment conversation
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <figure className="overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-soft)]">
                <img
                  src={turbo1kdSide.url}
                  alt="Side angle of 1KD complete turbo charger"
                  className="aspect-[4/5] h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <figure className="overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-soft)]">
                <img
                  src={turbo22Complete5Speed.url}
                  alt="2.2 turbocharger complete 5 speed front angle"
                  className="aspect-[4/5] h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-[1220px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact for ordering</p>
              <h2 className="mt-3 text-4xl font-extrabold uppercase text-foreground sm:text-5xl">
                Need price, stock or fitment help?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Because this is a contact-first turbo website, customers can simply choose the product they want and then reach out for the final details before buying.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="hero">
                  <a href="mailto:sales@boostflowturbos.com?subject=Turbo%20Price%20Request">
                    Email for pricing
                  </a>
                </Button>
                <Button asChild size="lg" variant="surface">
                  <a href="tel:+000123456789">Call now</a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:sales@boostflowturbos.com" className="rounded-md border border-border bg-background p-5 transition-colors hover:bg-accent">
                <Mail className="size-5 text-primary" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Email</p>
                <p className="mt-2 text-base font-semibold text-foreground">sales@boostflowturbos.com</p>
              </a>
              <a href="tel:+000123456789" className="rounded-md border border-border bg-background p-5 transition-colors hover:bg-accent">
                <Phone className="size-5 text-primary" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Phone</p>
                <p className="mt-2 text-base font-semibold text-foreground">+000 123 456 789</p>
              </a>
              <a href="https://instagram.com/boostflowturbos" className="rounded-md border border-border bg-background p-5 transition-colors hover:bg-accent">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Instagram</p>
                <p className="mt-2 text-base font-semibold text-foreground">@boostflowturbos</p>
              </a>
              <a href="https://facebook.com/boostflowturbos" className="rounded-md border border-border bg-background p-5 transition-colors hover:bg-accent">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Facebook</p>
                <p className="mt-2 text-base font-semibold text-foreground">BoostFlow Turbos</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

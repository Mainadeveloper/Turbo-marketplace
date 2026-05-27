import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Gauge, Mail, Phone, ShieldCheck, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import navaraTurbo from "@/assets/turbo-navara.jpg";
import jcbTurboFront from "@/assets/turbo-jcb-front.jpg";
import jcbTurboSide from "@/assets/turbo-jcb-side.jpg";
import dmaxTurbo from "@/assets/turbo-dmax.jpg";
import tractorTurbo from "@/assets/turbo-tractor.jpg";

const products = [
  {
    name: "NV-350 Navara Turbo",
    vehicle: "Nissan pickup fitment",
    image: navaraTurbo,
    alt: "NV-350 Navara turbo photographed from the compressor side",
    summary:
      "A practical turbo option for Navara owners who need strong pull, clean acceleration, and reliable daily-use performance.",
    highlight: "Balanced for work pickups and general road use.",
  },
  {
    name: "JCB Tractor Turbo",
    vehicle: "JCB machine fitment",
    image: jcbTurboFront,
    alt: "JCB tractor turbo shown from the turbine housing opening",
    summary:
      "Built for machines that need dependable boost under load, helping support productivity on farm and site work.",
    highlight: "Designed for heavy-duty torque delivery.",
  },
  {
    name: "DMAX Turbo",
    vehicle: "Isuzu DMAX fitment",
    image: dmaxTurbo,
    alt: "DMAX turbo with polished compressor housing and actuator visible",
    summary:
      "A sharp-looking DMAX turbo setup for drivers who want responsive performance and a clean engine-bay presentation.",
    highlight: "Great for pickups that need fast response and steady airflow.",
  },
  {
    name: "Tractor Turbo",
    vehicle: "General tractor fitment",
    image: tractorTurbo,
    alt: "Heavy tractor turbo housing shown from the side with red protective cover",
    summary:
      "A larger tractor-focused turbo option suited for demanding agricultural use and long working hours.",
    highlight: "Made for hardworking engines in tough environments.",
  },
] as const;

const sellingPoints = [
  {
    title: "Simple fitment guidance",
    description: "Customers can message for compatibility help before ordering.",
    icon: ShieldCheck,
  },
  {
    title: "Strong visual product display",
    description: "Real product photos keep the store trustworthy and easy to browse.",
    icon: BadgeCheck,
  },
  {
    title: "Ready for customer enquiries",
    description: "Email and social contacts make it easy to request pricing and details.",
    icon: Truck,
  },
] as const;

const contactLinks = [
  { label: "Email", value: "sales@boostflowturbos.com", href: "mailto:sales@boostflowturbos.com" },
  { label: "Instagram", value: "@boostflowturbos", href: "https://instagram.com/boostflowturbos" },
  { label: "Facebook", value: "BoostFlow Turbos", href: "https://facebook.com/boostflowturbos" },
  { label: "TikTok", value: "@boostflowturbos", href: "https://tiktok.com/@boostflowturbos" },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BoostFlow Turbos | Turbo Marketplace" },
      {
        name: "description",
        content:
          "Browse turbo products for Navara, JCB, DMAX and tractor applications with direct contact options for fitment and pricing.",
      },
      { property: "og:title", content: "BoostFlow Turbos | Turbo Marketplace" },
      {
        property: "og:description",
        content:
          "Simple turbo marketplace homepage with featured turbo products, strong visuals and direct contact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "BoostFlow Turbos | Turbo Marketplace" },
      {
        name: "twitter:description",
        content:
          "Turbo products for Navara, JCB, DMAX and tractors, displayed in a clean and customer-friendly storefront.",
      },
    ],
    links: [{ rel: "canonical", href: "https://id-preview--438cb5af-0696-400f-a816-b9f53aa8c2c6.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4 rounded-lg border border-border/70 bg-card/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                BoostFlow Turbos
              </p>
              <h1 className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Turbo power for pickups, tractors and hard-working machines.
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <a href="mailto:sales@boostflowturbos.com">
                  Ask for pricing
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="surface">
                <a href="#products">View turbos</a>
              </Button>
            </div>
          </header>

          <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="overflow-hidden rounded-lg border border-border/70 bg-card shadow-[var(--shadow-soft)]">
              <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
                <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      <Gauge className="size-4" />
                      Simple turbo marketplace starter
                    </div>
                    <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                      You are selling turbo products for different vehicles and machines, so this first version keeps things simple: clear product photos, short explanations, and direct contact links for customers who need more details.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {sellingPoints.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-lg border border-border/70 bg-background p-4"
                        >
                          <Icon className="size-5 text-primary" />
                          <h2 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h2>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative min-h-[320px] overflow-hidden border-t border-border/70 bg-secondary/60 md:min-h-full md:border-t-0 md:border-l">
                  <img
                    src={dmaxTurbo}
                    alt="DMAX turbo hero image"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/65 to-transparent p-5">
                    <p className="text-sm font-medium text-foreground">Catchy theme:</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      Built to boost. Ready to move.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <aside className="rounded-lg border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Contact anytime
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Need fitment, price or stock details?
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Customers can reach out for application checks, ordering details and availability.
              </p>

              <div className="mt-6 space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between rounded-lg border border-border/70 bg-background px-4 py-3 transition-colors hover:bg-accent"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-foreground">{link.value}</span>
                    </span>
                    <ArrowRight className="size-4 text-primary" />
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-dashed border-border/80 bg-secondary/50 p-4">
                <div className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <Mail className="size-4 text-primary" />
                  sales@boostflowturbos.com
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm text-secondary-foreground">
                  <Phone className="size-4 text-primary" />
                  +000 123 456 789
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Featured turbos
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The different turbo products you are currently showing.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-right">
            Each product is explained simply so a customer quickly understands what it is for before contacting you.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-lg border border-border/70 bg-card shadow-[var(--shadow-soft)]"
            >
              <div className="aspect-[4/4.6] overflow-hidden bg-secondary/70">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {product.vehicle}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{product.name}</h3>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{product.summary}</p>
                <div className="rounded-md border border-border/70 bg-background px-3 py-2 text-sm font-medium text-foreground">
                  {product.highlight}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/60">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              JCB close look
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Two views of the JCB tractor turbo help customers see the build quality.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              The front angle shows the inner housing and wheel area, while the second angle helps show the external form and hardware. This makes the image set feel more website-friendly and more trustworthy than a single product shot.
            </p>
            <Button asChild variant="hero" size="lg">
              <a href="mailto:sales@boostflowturbos.com?subject=Turbo%20Enquiry">Request more details</a>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border/70 bg-background shadow-[var(--shadow-soft)]">
              <img
                src={jcbTurboFront}
                alt="Front view of a JCB tractor turbo"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border/70 bg-background shadow-[var(--shadow-soft)]">
              <img
                src={jcbTurboSide}
                alt="Side view of a JCB tractor turbo"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Good starting website
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A clean first version you can grow into a full turbo store.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                This starter homepage already gives you a strong base: a catchy theme, your real products, simple explanations, and quick customer contact options. You can later expand it with prices, categories, stock, a cart, checkout and more pages.
              </p>
            </div>

            <div className="rounded-lg border border-border/70 bg-background p-5">
              <p className="text-sm font-semibold text-foreground">What this version includes</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                <li>• Attractive homepage with your uploaded turbo photos</li>
                <li>• Simple product explanations for each turbo type</li>
                <li>• Dummy social links and email call-to-action</li>
                <li>• Clean codebase you can keep building on</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

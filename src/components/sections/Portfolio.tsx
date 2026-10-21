import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site, experienceWhatsappUrl } from "@/data/manari";
import { Section, Kicker } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Portfólio — as 7 experiências oficiais.
 * Seis em grade editorial equilibrada (2 colunas) + a "Experiência Manari
 * Floating" em destaque, como experiência-assinatura (evita card órfão).
 * Cada CTA abre o WhatsApp com o nome exato da experiência.
 */
export function Portfolio() {
  const { experiences } = site;
  const featured = experiences.items.find((e) => e.slug === "manari-floating");
  const grid = experiences.items.filter((e) => e.slug !== "manari-floating");

  return (
    <Section id="experiencias" width="wide" className="bg-ivory text-charcoal">
      <div className="max-w-2xl">
        <Reveal>
          <Kicker className="text-terracotta">{experiences.kicker}</Kicker>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {experiences.title}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/75">{experiences.intro}</p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {grid.map((exp, i) => (
          <Reveal key={exp.slug} delay={(i % 2) * 90}>
            <article className="group flex h-full flex-col">
              <a
                href={experienceWhatsappUrl(exp.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl"
                aria-label={`${experiences.ctaLabel}: ${exp.title}`}
              >
                <Image
                  src={exp.image.src}
                  alt={exp.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-forest-deep/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </a>

              <h3 className="mt-6 font-display text-3xl font-medium text-forest">{exp.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal/75">{exp.text}</p>

              <a
                href={experienceWhatsappUrl(exp.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 self-start border-b border-terracotta/40 pb-0.5 text-sm font-medium text-terracotta transition-colors hover:border-terracotta"
              >
                {experiences.ctaLabel}
                <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Experiência-assinatura em destaque */}
      {featured ? (
        <Reveal delay={120}>
          <article className="mt-16 grid overflow-hidden rounded-2xl bg-forest text-ivory md:grid-cols-2">
            <div className="relative min-h-[320px] md:min-h-full">
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <span className="kicker text-sand">Experiência-assinatura</span>
              <h3 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl">
                {featured.title}
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-ivory/85">{featured.text}</p>
              <a
                href={experienceWhatsappUrl(featured.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-sand px-7 py-3.5 text-base font-medium text-forest transition-colors duration-300 hover:bg-ivory"
              >
                <MessageCircle size={18} strokeWidth={1.75} aria-hidden />
                {experiences.ctaLabel}
              </a>
            </div>
          </article>
        </Reveal>
      ) : null}
    </Section>
  );
}

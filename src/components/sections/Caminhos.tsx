import { ArrowRight } from "lucide-react";
import { site } from "@/data/manari";
import { Section, Kicker } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Dois caminhos com igual destaque: quem visita Manaus e quem vive Manaus.
 * Mesmo peso visual; ambos levam a todas as experiências.
 */
export function Caminhos() {
  const { caminhos } = site;

  return (
    <Section id="caminhos" className="bg-ivory text-charcoal">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Kicker className="justify-center text-terracotta">{caminhos.kicker}</Kicker>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 font-display text-2xl font-light leading-snug text-forest sm:text-3xl">
            {caminhos.intro}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {caminhos.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 120}>
            <article className="flex h-full flex-col rounded-xl border border-forest/15 bg-sand/25 p-8 transition-colors duration-300 hover:border-forest/30 sm:p-10">
              <h3 className="font-display text-3xl font-medium text-forest sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-charcoal/80">{item.text}</p>
              <a
                href={item.href}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-terracotta"
              >
                {item.cta}
                <ArrowRight
                  size={17}
                  strokeWidth={1.75}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

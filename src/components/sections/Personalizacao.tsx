import { site, whatsappUrl } from "@/data/manari";
import { Section, Kicker } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Sob medida — processo de personalização em três passos.
 * Sem prometer orçamento instantâneo ou disponibilidade garantida.
 */
export function Personalizacao() {
  const { personalizacao } = site;

  return (
    <Section id="personalizacao" className="bg-sand/40 text-charcoal">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          <Reveal>
            <Kicker className="text-terracotta">{personalizacao.kicker}</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 whitespace-pre-line font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {personalizacao.title}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-charcoal/75">
              {personalizacao.intro}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-forest px-7 py-3.5 text-base font-medium text-ivory transition-colors duration-300 hover:bg-forest-deep"
            >
              {personalizacao.ctaLabel}
            </a>
          </Reveal>
        </div>

        <ol className="md:col-span-6 md:col-start-7">
          {personalizacao.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} as="li">
              <div className="flex gap-6 border-t border-charcoal/15 py-8">
                <span className="font-display text-3xl font-light text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-forest">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal/75">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

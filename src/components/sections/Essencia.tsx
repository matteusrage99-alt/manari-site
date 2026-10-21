import { site } from "@/data/manari";
import { Section, Kicker } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Essência MANARI — manifesto e os quatro compromissos do propósito oficial.
 */
export function Essencia() {
  const { essencia } = site;

  return (
    <Section id="essencia" className="bg-forest text-ivory">
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <Kicker className="text-sand">{essencia.kicker}</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 whitespace-pre-line font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {essencia.title}
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="space-y-6">
            {essencia.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={150 + i * 100}>
                <p className="text-lg leading-relaxed text-ivory/80">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <dl className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {essencia.compromissos.map((item, i) => (
              <Reveal key={item.title} delay={300 + i * 90} as="div">
                <dt className="font-display text-2xl font-medium text-sand">{item.title}</dt>
                <dd className="mt-2 text-base leading-relaxed text-ivory/75">{item.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

import Image from "next/image";
import { site } from "@/data/manari";
import { Section, Kicker } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Idealizadores — apresentação humana e elegante de Amanda Fadul e Raphael
 * Galvão. Cada pessoa tem uma moldura de retrato: mostra a foto oficial se
 * `photo` estiver preenchido em manari.ts; caso contrário, exibe um monograma
 * refinado, com o espaço pronto para inserir o retrato depois.
 */
export function Idealizadores() {
  const { idealizadores } = site;

  return (
    <Section id="sobre" className="bg-ivory text-charcoal">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Kicker className="justify-center text-terracotta">{idealizadores.kicker}</Kicker>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {idealizadores.title}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/75">{idealizadores.intro}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
        {idealizadores.people.map((person, i) => {
          const initials = person.name
            .split(" ")
            .map((n) => n[0])
            .join("");
          return (
            <Reveal key={person.name} delay={i * 120}>
              <figure className="flex h-full flex-col items-center text-center">
                <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-forest/15 bg-sand/35">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={`Retrato de ${person.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-forest/70">
                      <span aria-hidden className="font-display text-6xl font-light">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>
                <figcaption className="mt-6">
                  <p className="font-display text-3xl font-medium text-forest">{person.name}</p>
                  <p className="mx-auto mt-2 max-w-xs text-base leading-relaxed text-charcoal/70">
                    {person.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

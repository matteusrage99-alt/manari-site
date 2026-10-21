import Image from "next/image";
import { site } from "@/data/manari";
import { Section, Kicker } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Cultura e sensorialidade — galeria editorial em grade uniforme e intencional.
 * Todas as fotos usam a mesma proporção (4:3) com recorte adequado (object-cover),
 * eliminando desequilíbrios e áreas vazias do mosaico anterior.
 */
export function Galeria() {
  const { galeria } = site;

  return (
    <Section id="cultura" width="wide" className="bg-forest-deep text-ivory">
      <div className="max-w-2xl">
        <Reveal>
          <Kicker className="text-sand">{galeria.kicker}</Kicker>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {galeria.title}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-lg leading-relaxed text-ivory/75">{galeria.intro}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {galeria.images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 3) * 80}>
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

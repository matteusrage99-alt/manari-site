import { Reveal } from "@/components/ui/Reveal";

/**
 * Banda editorial tipográfica — pausa sensorial entre a Essência e o Portfólio.
 * Sem fotografia (as fotos oficiais ficam reservadas ao Portfólio e à Galeria,
 * evitando repetir a mesma imagem em seções próximas). Atmosfera criada com a
 * cor verde profundo, textura de grão e um fino traço decorativo da marca.
 */
export function FaixaAmazonia() {
  return (
    <section
      aria-label="Atmosfera MANARI"
      className="relative overflow-hidden bg-forest-deep px-6 py-24 text-center text-ivory sm:px-8 md:py-32"
    >
      <div aria-hidden className="grain absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(166,106,80,0.16),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <span aria-hidden className="mx-auto block h-px w-14 bg-sand/60" />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 font-display text-3xl font-light leading-[1.18] tracking-tight sm:text-4xl md:text-5xl">
            Onde o rio encontra a floresta,
            <br className="hidden sm:block" /> cada sentido desperta.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
            Manari significa acolhimento, riacho, corredeiras — o movimento das águas que
            conduz cada experiência.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

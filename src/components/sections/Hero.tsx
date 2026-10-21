import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/data/manari";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Hero com fotografia amazônica de grande impacto como fundo. O logotipo fica
 * separado, no cabeçalho. Aqui: slogan oficial (eyebrow), chamada principal,
 * uma linha de apoio e dois botões. Camadas de escurecimento garantem contraste
 * e leitura excelente sobre a foto.
 */
export function Hero() {
  const { hero, brand } = site;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-forest-deep text-ivory"
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Escurecimento para contraste: vinheta vertical + reforço inferior */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/75 via-forest-deep/55 to-forest-deep/85"
      />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-24 pb-20 text-center sm:px-8">
        <Reveal>
          <p className="kicker text-sand">{brand.signature}</p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-7 max-w-3xl whitespace-pre-line font-display text-4xl font-light leading-[1.05] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] md:text-xl">
            {hero.support}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
            <a
              href={hero.primaryCtaHref}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-sand px-8 py-4 text-base font-medium text-forest transition-colors duration-300 hover:bg-ivory sm:w-auto"
            >
              {hero.primaryCta}
              <ArrowDown size={18} strokeWidth={1.75} aria-hidden />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-ivory/50 px-8 py-4 text-base font-medium text-ivory backdrop-blur-sm transition-colors duration-300 hover:border-ivory hover:bg-ivory/10 sm:w-auto"
            >
              <MessageCircle size={18} strokeWidth={1.75} aria-hidden />
              {hero.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Indicador de rolagem discreto */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ivory/70" />
        </span>
      </div>
    </section>
  );
}

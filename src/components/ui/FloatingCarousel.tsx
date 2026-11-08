"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

type FloatingCarouselProps = {
  images: readonly Slide[];
  /** Intervalo do autoplay em ms (padrão: 5000). */
  interval?: number;
  /** Classe aplicada ao container (ex.: object-fit, alturas). */
  className?: string;
  sizes?: string;
};

/**
 * Carrossel da experiência-assinatura (MANARI Wellness Floating).
 *
 * Comportamento definido com o cliente:
 *  - autoplay a cada ~5s, pausando quando o mouse está sobre o carrossel;
 *  - navegação por bolinhas (dots) clicáveis;
 *  - swipe (arrastar) no celular;
 *  - sem setas laterais.
 *
 * Acessibilidade: respeita `prefers-reduced-motion` (desliga o autoplay) e
 * expõe rótulos nas bolinhas. Com uma única imagem, vira uma imagem estática.
 */
export function FloatingCarousel({
  images,
  interval = 5000,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: FloatingCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = images.length;
  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // Autoplay — pausa no hover e respeita prefers-reduced-motion.
  useEffect(() => {
    if (count <= 1 || paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(next, interval);
    return () => window.clearInterval(id);
  }, [count, paused, next, interval]);

  if (count === 0) return null;

  // Imagem única: sem controles.
  if (count === 1) {
    return (
      <div className={`relative ${className}`}>
        <Image src={images[0].src} alt={images[0].alt} fill sizes={sizes} className="object-cover" priority={false} />
      </div>
    );
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) goTo(index + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="group"
      aria-roledescription="carrossel"
      aria-label="Galeria de fotos do MANARI Wellness Floating"
    >
      {images.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes={sizes}
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Bolinhas (dots) */}
      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2.5">
        {images.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ver foto ${i + 1} de ${count}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-ivory" : "w-2 bg-ivory/55 hover:bg-ivory/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

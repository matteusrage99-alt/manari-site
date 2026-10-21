"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site, whatsappUrl } from "@/data/manari";
import { Logo } from "@/components/ui/Logo";

/**
 * Cabeçalho fixo. Rolagem elegante: transparente sobre o hero (com um leve
 * degradê para legibilidade), ganhando fundo sólido, sombra e altura compacta
 * ao rolar. Navegação funcional no desktop e no celular.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors duration-500 ${
        solid
          ? "bg-forest/95 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Degradê de topo para garantir contraste da logo e dos links sobre a foto */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/25 to-transparent transition-opacity duration-500 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />

      <nav
        aria-label="Navegação principal"
        className={`relative mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 sm:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#top" aria-label={`${site.brand.name} — início`} className="flex items-center">
          {/* Logotipo oficial, sempre visível e com destaque. */}
          <Logo
            className={`w-auto text-ivory drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] transition-all duration-500 ${
              scrolled ? "h-7" : "h-9 sm:h-10"
            }`}
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium tracking-wide text-ivory/90 transition-colors duration-200 hover:bg-ivory/10 hover:text-ivory"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-full border border-ivory/50 px-5 py-2.5 text-sm font-medium text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-forest"
          >
            {site.headerCta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="relative border-t border-ivory/10 bg-forest text-ivory md:hidden"
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-2xl tracking-wide text-ivory/90 transition-colors hover:text-sand"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-full bg-sand px-6 py-3 text-sm font-medium text-forest"
            >
              {site.headerCta}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

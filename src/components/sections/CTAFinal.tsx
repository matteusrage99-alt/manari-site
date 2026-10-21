import { MessageCircle, Mail } from "lucide-react";
import { site, whatsappUrl } from "@/data/manari";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Chamada final para atendimento via WhatsApp (e e-mail). Âncora "Contato".
 */
export function CTAFinal() {
  const { ctaFinal, contact } = site;

  return (
    <Section id="contato" width="narrow" className="bg-terracotta text-ivory">
      <div className="text-center">
        <Reveal>
          <p className="kicker text-ivory/80">{ctaFinal.kicker}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-6 max-w-2xl whitespace-pre-line font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {ctaFinal.title}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ivory/85">
            {ctaFinal.text}
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-forest transition-colors duration-300 hover:bg-sand"
            >
              <MessageCircle size={18} strokeWidth={1.75} aria-hidden />
              {ctaFinal.whatsappLabel}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ivory/50 px-7 py-3.5 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-ivory/10"
            >
              <Mail size={18} strokeWidth={1.75} aria-hidden />
              {ctaFinal.emailLabel}
            </a>
          </div>
          <p className="mt-6 text-sm text-ivory/70">{contact.whatsapp.display}</p>
        </Reveal>
      </div>
    </Section>
  );
}

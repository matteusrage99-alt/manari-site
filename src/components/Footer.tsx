import { Mail, Phone, AtSign, Handshake } from "lucide-react";
import { site, whatsappUrl } from "@/data/manari";
import { Logo } from "@/components/ui/Logo";

/**
 * Rodapé: logo, assinatura oficial, contatos reais, Instagram e o link
 * "Seja nosso parceiro". Sem endereço, CNPJ, horários ou selos inventados.
 */
export function Footer() {
  const { brand, nav, contact, footer } = site;
  const year = 2026; // Ano fixo — ajuste conforme necessário.

  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-9 w-auto text-ivory" />
            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-sand">
              {brand.signature}
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-ivory/60">{footer.note}</p>
          </div>

          <nav aria-label="Navegação do rodapé" className="md:col-span-3">
            <p className="kicker text-ivory/45">Navegação</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="kicker text-ivory/45">Contato</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ivory/75 transition-colors hover:text-ivory"
                >
                  <Phone size={16} strokeWidth={1.75} aria-hidden />
                  {contact.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 text-ivory/75 transition-colors hover:text-ivory"
                >
                  <Mail size={16} strokeWidth={1.75} aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ivory/75 transition-colors hover:text-ivory"
                >
                  <AtSign size={16} strokeWidth={1.75} aria-hidden />
                  {contact.instagram.handle}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={whatsappUrl(footer.partnerMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-medium text-sand transition-colors hover:text-ivory"
                >
                  <Handshake size={16} strokeWidth={1.75} aria-hidden />
                  {footer.partnerLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/10 pt-8 text-xs text-ivory/45">
          <p>
            © {year} {brand.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

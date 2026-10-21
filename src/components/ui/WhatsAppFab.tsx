import { MessageCircle } from "lucide-react";
import { whatsappUrl, site } from "@/data/manari";

/**
 * Botão flutuante e discreto de WhatsApp, visível no celular (oculto no
 * desktop, onde o botão "Fale com a MANARI" já está no cabeçalho).
 */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com a ${site.brand.shortName} no WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-ivory shadow-lg shadow-forest-deep/30 transition-transform duration-300 hover:scale-105 active:scale-95 md:hidden"
    >
      <MessageCircle size={26} strokeWidth={1.75} aria-hidden />
    </a>
  );
}

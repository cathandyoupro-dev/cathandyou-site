import { MessageCircle } from "lucide-react";

const MSG = encodeURIComponent(
  "Bonjour Catherine,\n\nJe souhaiterais échanger avec vous concernant la visibilité de mon activité.\n\nNom :\nActivité :\nVille :\n\nMerci.",
);

export const WHATSAPP_URL = `https://wa.me/33635264492?text=${MSG}`;

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Catherine"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden font-medium sm:inline">WhatsApp</span>
    </a>
  );
}

export function WhatsAppButton({ label = "Discutons sur WhatsApp", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-medium text-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </a>
  );
}

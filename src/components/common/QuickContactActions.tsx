import { Mail, MessageCircle, Phone } from "lucide-react";

import { site } from "@/data/site";

export function QuickContactActions() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed bottom-5 right-4 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7 sm:gap-4"
    >
      <a
        href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:size-14"
      >
        <MessageCircle className="size-6 sm:size-7" aria-hidden="true" />
      </a>
      <a
        href={`tel:${site.phone.replace(/\s/g, "")}`}
        aria-label={`Call ${site.phone}`}
        title="Call"
        className="flex size-12 items-center justify-center rounded-full border border-border bg-white text-[#f06423] shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f06423] sm:size-14"
      >
        <Phone className="size-5 sm:size-6" aria-hidden="true" />
      </a>
      <a
        href={`mailto:${site.email}`}
        aria-label={`Email ${site.email}`}
        title="Email"
        className="flex size-12 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:size-14"
      >
        <Mail className="size-5 sm:size-6" aria-hidden="true" />
      </a>
    </nav>
  );
}

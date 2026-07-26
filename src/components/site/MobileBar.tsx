import { Phone, MessageCircle, Navigation } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function MobileBar() {
  const items = [
    { label: "Call", href: `tel:${SITE.phone}`, Icon: Phone, external: false },
    { label: "WhatsApp", href: waLink(), Icon: MessageCircle, external: true },
    { label: "Directions", href: SITE.mapLink, Icon: Navigation, external: true },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-gold/30 bg-burgundy-deep lg:hidden">
      {items.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="flex min-h-[60px] flex-col items-center justify-center gap-1 border-r border-ivory/10 text-ivory last:border-r-0 active:bg-burgundy"
        >
          <Icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.4} />
          <span className="label-xs !tracking-[0.16em]">{label}</span>
        </a>
      ))}
    </div>
  );
}

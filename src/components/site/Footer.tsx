import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { LOGO } from "@/lib/images";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Collections", to: "/collections" },
  { label: "Gallery", to: "/gallery" },
  { label: "Customer Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
];

const collectionLinks = [
  { label: "Wedding Collection", to: "/wedding" },
  { label: "Women's Collection", to: "/women" },
  { label: "Men's Collection", to: "/men" },
  { label: "Kids Collection", to: "/kids" },
  { label: "Festival Collection", to: "/festival" },
];

export function Footer() {
  return (
    <footer className="bg-burgundy-deep text-ivory">
      <div className="shell grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4 lg:py-24">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO}
              alt="Sri Ganesh Silks logo"
              width={52}
              height={52}
              loading="lazy"
              className="h-12 w-12 rounded-full object-cover bg-white"
            />
            <span className="font-display text-2xl leading-tight">
              Sri Ganesh
              <br />
              Silks
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
            A family house of textiles serving coastal Karnataka since 1956 — silks, cottons and
            celebration wear for every generation.
          </p>
          <div className="mt-7 flex gap-3">
            {[
              { href: SITE.instagram, Icon: Instagram, label: "Instagram" },
              { href: SITE.facebook, Icon: Facebook, label: "Facebook" },
              { href: waLink(), Icon: MessageCircle, label: "WhatsApp" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center border border-ivory/20 text-ivory/80 transition-all duration-500 hover:border-gold hover:text-gold"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="label-xs text-gold">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm text-ivory/70">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-xs text-gold">Collections</h3>
          <ul className="mt-6 space-y-3 text-sm text-ivory/70">
            {collectionLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-xs text-gold">Visit Us</h3>
          <ul className="mt-6 space-y-5 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
              <span>
                {SITE.addressLine}
                <br />
                {SITE.region}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
              <span>{SITE.hours}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
              <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-gold">
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
          <a
            href={SITE.mapLink}
            target="_blank"
            rel="noreferrer"
            className="label-xs mt-6 inline-block border-b border-gold/50 pb-1 text-gold"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-7 text-xs text-ivory/45 md:flex-row">
          <p>© {new Date().getFullYear()} Sri Ganesh Silks, Thekkatte. All rights reserved.</p>
          <p>Serving families of coastal Karnataka since 1956.</p>
        </div>
      </div>
    </footer>
  );
}

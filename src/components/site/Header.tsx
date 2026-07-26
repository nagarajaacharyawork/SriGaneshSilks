import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, Search, X, MessageCircle } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";
import { MEGA_MENU } from "@/lib/catalog";
import { LOGO } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setMega(false);
    setSearch(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        overHero
          ? "bg-transparent"
          : "bg-ivory/95 shadow-[0_1px_0_0_color-mix(in_oklab,var(--gold)_35%,transparent)] backdrop-blur-md",
      )}
      onMouseLeave={() => setMega(false)}
    >
      <div className="shell flex h-20 items-center justify-between gap-6 md:h-24">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="Sri Ganesh Silks logo"
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 rounded-full object-cover md:h-11 md:w-11"
          />
          <span className="hidden shrink-0 leading-tight sm:block">
            <span
              className={cn(
                "block whitespace-nowrap font-display text-lg tracking-tight transition-colors duration-700 md:text-xl",
                overHero ? "text-ivory" : "text-burgundy",
              )}
            >
              Sri Ganesh Silks
            </span>
            <span
              className={cn(
                "label-xs hidden whitespace-nowrap !text-[0.58rem] transition-colors duration-700 2xl:block",
                overHero ? "text-gold-soft" : "text-gold",
              )}
            >
              Thekkatte · Since 1956
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7">

          {NAV.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => setMega("mega" in item && item.mega ? true : false)}
            >
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "link-underline label-xs transition-colors duration-500",
                  overHero ? "text-ivory/85 hover:text-ivory" : "text-charcoal hover:text-burgundy",
                )}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <button
            aria-label="Search collections"
            onClick={() => setSearch((v) => !v)}
            className={cn(
              "grid h-10 w-10 place-items-center transition-colors duration-500",
              overHero ? "text-ivory/85 hover:text-gold" : "text-charcoal hover:text-burgundy",
            )}
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </button>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp us"
            className={cn(
              "hidden h-10 w-10 place-items-center transition-colors duration-500 sm:grid",
              overHero ? "text-ivory/85 hover:text-gold" : "text-charcoal hover:text-burgundy",
            )}
          >
            <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </a>
          <a
            href={`tel:${SITE.phone}`}
            aria-label="Call the showroom"
            className={cn(
              "hidden h-10 w-10 place-items-center transition-colors duration-500 sm:grid",
              overHero ? "text-ivory/85 hover:text-gold" : "text-charcoal hover:text-burgundy",
            )}
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </a>
          <a
            href={SITE.mapLink}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "btn-base ml-2 hidden !px-5 !py-3 !text-[0.62rem] !tracking-[0.14em] lg:inline-flex xl:hidden 2xl:inline-flex",
              overHero ? "btn-outline-ivory" : "btn-gold",
            )}
          >
            Visit Showroom
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setMobile(true)}
            className={cn(
              "grid h-10 w-10 place-items-center xl:hidden",
              overHero ? "text-ivory" : "text-burgundy",
            )}
          >
            <Menu className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      {/* Search drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-ivory transition-[max-height] duration-500",
          search ? "max-h-32" : "max-h-0",
        )}
      >
        <div className="shell flex items-center gap-4 py-6">
          <Search className="h-4 w-4 text-gold" strokeWidth={1.5} />
          <input
            placeholder="Search silk sarees, bridal, dress materials…"
            className="w-full bg-transparent font-display text-2xl text-burgundy outline-none placeholder:text-muted-foreground/60"
          />
        </div>
      </div>

      {/* Mega menu */}
      <div
        onMouseEnter={() => setMega(true)}
        className={cn(
          "pointer-events-none absolute inset-x-0 top-full hidden origin-top border-t border-gold/30 bg-ivory opacity-0 transition-all duration-500 xl:block",
          mega && "pointer-events-auto opacity-100",
        )}
      >
        <div className="shell grid grid-cols-12 gap-10 py-12">
          <div className="col-span-3">
            <span className="label-xs text-gold">The House Collections</span>
            <h3 className="mt-4 text-4xl text-burgundy">
              Woven for
              <br />
              every occasion
            </h3>
            <span className="rule-gold mt-5" />
            <p className="mt-5 text-sm text-muted-foreground">
              Four floors of textiles, curated across seven decades of family trade.
            </p>
            <Link
              to="/collections"
              className="label-xs mt-6 inline-block text-burgundy link-underline"
            >
              View all collections
            </Link>
          </div>
          {MEGA_MENU.map((group) => (
            <div key={group.heading} className="col-span-3">
              <span className="label-xs text-muted-foreground">{group.heading}</span>
              <ul className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link to={item.to} className="group flex items-center gap-4">
                      <span className="zoom-media h-14 w-14 shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          width={112}
                          height={112}
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span>
                        <span className="block font-display text-lg leading-tight text-charcoal transition-colors group-hover:text-burgundy">
                          {item.title}
                        </span>
                        <span className="block text-xs text-muted-foreground">{item.blurb}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-burgundy-deep transition-all duration-500 xl:hidden",
          mobile ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="shell flex h-20 items-center justify-between">
          <span className="font-display text-2xl text-ivory">Sri Ganesh Silks</span>
          <button aria-label="Close menu" onClick={() => setMobile(false)} className="text-ivory">
            <X className="h-6 w-6" strokeWidth={1.4} />
          </button>
        </div>
        <nav className="shell mt-6 flex flex-col gap-1 overflow-y-auto pb-24">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="border-b border-ivory/10 py-4 font-display text-3xl text-ivory"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/festival" className="border-b border-ivory/10 py-4 font-display text-3xl text-ivory">
            Festival
          </Link>
          <a href={SITE.mapLink} target="_blank" rel="noreferrer" className="btn-base btn-gold mt-8">
            Visit Showroom
          </a>
        </nav>
      </div>
    </header>
  );
}

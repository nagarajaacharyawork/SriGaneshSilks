import { Link } from "@tanstack/react-router";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";
import { SHOP_BY_COLLECTION, OCCASIONS, FEATURED, WHY_US } from "@/lib/catalog";

export function TrustStrip() {
  const items = [
    "Established Since 1956",
    "405+ Google Reviews",
    "Thousands of Happy Families",
    "Premium Family Showroom",
    "Trusted Across Coastal Karnataka",
  ];
  return (
    <section className="border-y border-gold/25 bg-beige">
      <div className="shell grid grid-cols-2 divide-x divide-y divide-gold/15 md:grid-cols-5 md:divide-y-0">
        {items.map((item, i) => (
          <Reveal
            key={item}
            delay={i * 80}
            className="flex min-h-[104px] items-center justify-center px-4 py-6 text-center first:border-l-0"
          >
            <span className="label-xs text-burgundy">{item}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ShopByCollection() {
  return (
    <section className="section-y bg-background">
      <div className="shell">
        <SectionHeading
          kicker="Shop by Collection"
          title="A house of many weaves"
          intro="From heirloom bridal Kanjivarams to soft coastal cottons — every collection is chosen by hand, one weaver at a time."
        />
        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4 md:gap-6">
          {SHOP_BY_COLLECTION.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 4) * 90}>
              <Link to={cat.to} className="group zoom-media relative block aspect-square">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/85 via-burgundy-deep/15 to-transparent transition-opacity duration-700 group-hover:from-burgundy-deep/90" />
                <span className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <span className="block font-display text-xl text-ivory md:text-2xl">
                    {cat.title}
                  </span>
                  <span className="mt-1 block max-h-0 overflow-hidden text-xs text-ivory/70 opacity-0 transition-all duration-700 group-hover:max-h-10 group-hover:opacity-100">
                    {cat.blurb}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCollections() {
  return (
    <section className="section-y bg-beige">
      <div className="shell">
        <SectionHeading
          kicker="Featured Collections"
          title="Stories told in silk"
          align="left"
        />
        <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
          {FEATURED.map((item, i) => (
            <div
              key={item.title}
              className="grid items-center gap-10 md:grid-cols-12 md:gap-16"
            >
              <Reveal
                variant="mask"
                className={
                  i % 2 === 0
                    ? "zoom-media md:col-span-7"
                    : "zoom-media md:col-span-7 md:order-2"
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover"
                />
              </Reveal>
              <Reveal
                delay={120}
                className={i % 2 === 0 ? "md:col-span-5" : "md:col-span-5 md:order-1"}
              >
                <span className="label-xs text-gold">{item.kicker}</span>
                <h3 className="mt-4 text-4xl text-burgundy md:text-5xl">{item.title}</h3>
                <span className="rule-gold mt-6" />
                <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <Link to={item.to} className="btn-base btn-outline-burgundy mt-8">
                  Explore
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShopByOccasion() {
  return (
    <section className="section-y bg-background">
      <div className="shell">
        <SectionHeading
          kicker="Shop by Occasion"
          title="Dressed for the moment"
          intro="Tell our team the occasion and they will bring the right weave to your counter."
        />
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 md:mt-20 lg:grid-cols-8">
          {OCCASIONS.map((occ, i) => (
            <Reveal key={occ.title} delay={i * 70} className="group text-center">
              <span className="zoom-media mx-auto block aspect-square w-full max-w-[9rem] rounded-full ring-1 ring-gold/30 ring-offset-4 ring-offset-background transition-all duration-700 group-hover:ring-gold">
                <img
                  src={occ.image}
                  alt={occ.title}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
              <span className="label-xs mt-5 block text-charcoal transition-colors group-hover:text-burgundy">
                {occ.title}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section-y bg-beige">
      <div className="shell">
        <SectionHeading kicker="Why Customers Love Us" title="Reasons families return" />
        <div className="mt-16 grid gap-px overflow-hidden border border-gold/20 bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 80} className="bg-beige p-8 lg:p-10">
              <span className="font-display text-3xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl text-burgundy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FaqSection, FinalCta } from "@/components/home/Features";
import { REVIEWS } from "@/lib/catalog";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Sri Ganesh Silks, Kundapura" },
      {
        name: "description",
        content:
          "Rated 4.7 across 405+ Google reviews. Read what families from Kundapura, Udupi, Byndoor and Bhatkal say about Sri Ganesh Silks.",
      },
      { property: "og:title", content: "Customer Reviews | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "4.7 stars across 405+ Google reviews from families across coastal Karnataka.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero
        kicker="Customer Reviews"
        title="Seventy years of word of mouth"
        intro={`Rated ${SITE.rating} out of 5 across ${SITE.reviewCount}+ Google reviews from families across coastal Karnataka.`}
        image={IMG.hero3}
      />

      <section className="section-y bg-background">
        <div className="shell">
          <SectionHeading
            kicker="Verified Google Reviews"
            title="In their own words"
            intro="A selection of reviews from customers who shop with us for weddings, festivals and everyday wear."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal
                key={r.name}
                delay={(i % 3) * 90}
                className="flex flex-col border border-gold/25 bg-card p-8"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-[14px] w-[14px] fill-gold text-gold" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-6 flex-1 font-display text-xl leading-snug text-charcoal">
                  “{r.text}”
                </p>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="label-xs text-burgundy">{r.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {r.place} · Verified Google review
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-burgundy-deep py-20">
        <div className="shell grid gap-10 text-center md:grid-cols-3">
          {[
            { value: SITE.rating, label: "Average Google Rating" },
            { value: `${SITE.reviewCount}+`, label: "Google Reviews" },
            { value: "1956", label: "Serving Families Since" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <span className="block font-display text-6xl text-gold">{s.value}</span>
              <span className="label-xs mt-3 block text-ivory/60">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <FaqSection />
      <FinalCta />
    </>
  );
}

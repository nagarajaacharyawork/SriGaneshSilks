import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ShopByOccasion } from "@/components/home/Sections";
import { FinalCta } from "@/components/home/Features";
import { MEGA_MENU, SHOP_BY_COLLECTION } from "@/lib/catalog";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections | Silk, Bridal, Cotton & Designer Sarees" },
      {
        name: "description",
        content:
          "Explore every collection at Sri Ganesh Silks — silk sarees, bridal and wedding sarees, cottons, designer drapes, dress materials, menswear and kids wear.",
      },
      { property: "og:title", content: "Collections | Sri Ganesh Silks" },
      {
        property: "og:description",
        content:
          "Silk, bridal, cotton, designer, festival, menswear and kids wear — four floors of textiles in Thekkatte, Kundapura.",
      },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <>
      <PageHero
        kicker="The House Collections"
        title="Every weave, under one roof"
        intro="Twelve collections curated across seven decades — from heirloom bridal silks to everyday coastal cottons."
        image={IMG.catSilk}
      />

      <section className="section-y bg-background">
        <div className="shell">
          <SectionHeading
            kicker="Shop by Collection"
            title="Choose where to begin"
            intro="Each collection has its own counter, its own specialists and its own seasonal arrivals."
          />
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {SHOP_BY_COLLECTION.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 4) * 80}>
                <Link to={cat.to} className="group zoom-media relative block aspect-square">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/85 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                    <span className="block font-display text-xl text-ivory md:text-2xl">
                      {cat.title}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-beige">
        <div className="shell space-y-20">
          {MEGA_MENU.map((group) => (
            <div key={group.heading}>
              <Reveal className="flex items-end justify-between gap-6 border-b border-gold/25 pb-6">
                <h2 className="text-3xl text-burgundy md:text-4xl">{group.heading}</h2>
                <span className="label-xs text-gold">{group.items.length} categories</span>
              </Reveal>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((item, i) => (
                  <Reveal key={item.title + i} delay={(i % 4) * 80}>
                    <Link to={item.to} className="group block">
                      <span className="zoom-media block">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          width={1024}
                          height={1024}
                          className="aspect-[4/5] w-full object-cover"
                        />
                      </span>
                      <span className="mt-5 block font-display text-2xl text-burgundy">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">{item.blurb}</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ShopByOccasion />
      <FinalCta />
    </>
  );
}

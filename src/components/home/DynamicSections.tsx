import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeaturedCollections } from "@/components/collections/DynamicCollections";
import { SHOP_BY_COLLECTION } from "@/lib/catalog";
import { Link } from "@tanstack/react-router";

export function DynamicFeaturedCollections() {
  return (
    <section className="section-y bg-beige">
      <div className="shell">
        <SectionHeading
          kicker="Featured Collections"
          title="Latest from our showroom"
          intro="Hand-picked collections updated by our team — showcasing the finest new arrivals and seasonal favorites."
        />
        <div className="mt-16 md:mt-20">
          <FeaturedCollections 
            limit={8} 
            className="grid-cols-2 gap-4 md:grid-cols-4 md:gap-6" 
          />
        </div>
        
        {/* Fallback to static if no dynamic collections */}
        <div className="mt-8 text-center">
          <Reveal>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-sm font-medium text-burgundy hover:text-burgundy-deep transition-colors"
            >
              View All Collections
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HybridShopByCollection() {
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

        {/* Add dynamic collections section */}
        <div className="mt-20 md:mt-24">
          <SectionHeading
            kicker="New Arrivals"
            title="Recently added to our collection"
            intro="The latest additions to our showroom — uploaded by our team as new stock arrives."
          />
          <div className="mt-12">
            <FeaturedCollections 
              limit={4} 
              className="grid-cols-2 gap-4 md:grid-cols-4 md:gap-6" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
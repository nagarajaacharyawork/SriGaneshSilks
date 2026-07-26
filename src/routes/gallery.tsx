import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCta, VideoExperience } from "@/components/home/Features";
import { GALLERY } from "@/lib/catalog";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Showroom Gallery | Sri Ganesh Silks, Thekkatte" },
      {
        name: "description",
        content:
          "Step inside Sri Ganesh Silks — the entrance, silk section, bridal room, men's floor and kids section of our Thekkatte, Kundapura showroom.",
      },
      { property: "og:title", content: "Showroom Gallery | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "A visual walk through four floors of textiles in Thekkatte, Kundapura.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const extra = [IMG.hero1, IMG.catBridal, IMG.signature, IMG.catFestival];
  return (
    <>
      <PageHero
        kicker="Showroom Gallery"
        title="A walk through the house"
        intro="Marble floors, teak counters, four floors of textiles and a family that has kept the lights on since 1956."
        image={IMG.showEntrance}
      />

      <section className="section-y bg-background">
        <div className="shell">
          <SectionHeading kicker="Inside the showroom" title="Every corner of Thekkatte" />
          <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
            {GALLERY.map((g, i) => (
              <Reveal
                key={g.title}
                variant="mask"
                delay={(i % 3) * 90}
                className="zoom-media group relative block break-inside-avoid"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full object-cover"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-burgundy-deep/80 to-transparent p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <span className="label-xs text-ivory">{g.title}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-beige">
        <div className="shell">
          <SectionHeading kicker="The Collections" title="Pieces from our counters" />
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {extra.map((src, i) => (
              <Reveal key={i} variant="mask" delay={(i % 4) * 80} className="zoom-media">
                <img
                  src={src}
                  alt="Textiles at Sri Ganesh Silks"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[3/4] w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoExperience />
      <FinalCta />
    </>
  );
}

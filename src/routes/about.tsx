import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhyUs } from "@/components/home/Sections";
import { FinalCta, ShowroomGallery } from "@/components/home/Features";
import { TIMELINE } from "@/lib/catalog";
import { IMG } from "@/lib/images";
import ownerImg from "@/assets/OwnerImg.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story Since 1956 | Sri Ganesh Silks, Thekkatte" },
      {
        name: "description",
        content:
          "Three generations of textile trade in coastal Karnataka. The story of Sri Ganesh Silks, from a single counter in 1956 to Kundapura's trusted showroom.",
      },
      { property: "og:title", content: "Our Story Since 1956 | Sri Ganesh Silks" },
      {
        property: "og:description",
        content:
          "From a single wooden counter in 1956 to a four-floor family textile house in Thekkatte, Kundapura.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        kicker="About Sri Ganesh Silks"
        title="Seven decades on the same road"
        intro="A family textile house in Thekkatte, Kundapura — founded in 1956 and still run by the same family."
        image={IMG.heritage}
      />

      <section className="section-y bg-background">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <span className="label-xs text-gold">The House</span>
            <h2 className="mt-4 text-4xl text-burgundy md:text-5xl">
              Built on a promise, not a plan
            </h2>
            <span className="rule-gold mt-6" />
            <Reveal className="mt-8 zoom-media">
              <img
                src={ownerImg}
                alt="Founder, Sri Ganesh Silks"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full object-cover"
              />
            </Reveal>
          </Reveal>
          <div className="flex flex-col justify-center space-y-6 lg:col-span-7">
            {[
              "In 1956, when Thekkatte was little more than a bend on the coastal road, our founder opened a fabric counter with a modest stock of cotton and one instruction to his sons: never sell a family something you would not give your own.",
              "That instruction outlasted him. Through the seventies, the shop learned silk — first from Mysore, then directly from weaving families in Kanchipuram, Dharmavaram and Ilkal, relationships we still maintain by hand and by phone.",
              "Today the showroom spans four floors of textiles: a silk wall, a bridal room, a full men's floor and a children's section. What has not changed is the counter culture — chairs for the whole family, unhurried service, and honest answers about what is pure, what is blended, and what is worth your money.",
              "Families from Udupi, Byndoor, Bhatkal and Kollur still make the drive. Many of them are the grandchildren of our first customers.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-[0.98rem] leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-beige">
        <div className="shell">
          <SectionHeading kicker="Our Timeline" title="Milestones of the house" />
          <div className="mt-16 grid gap-px overflow-hidden border border-gold/20 bg-gold/20 md:grid-cols-5">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 80} className="bg-beige p-8">
                <span className="font-display text-4xl text-gold">{t.year}</span>
                <h3 className="mt-4 font-display text-2xl leading-tight text-burgundy">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <ShowroomGallery />
      <FinalCta />
    </>
  );
}

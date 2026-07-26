import { Link } from "@tanstack/react-router";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { FinalCta } from "../home/Features";
import { waLink } from "@/lib/site";

export type Piece = { title: string; blurb: string; image: string };

type Props = {
  kicker: string;
  title: string;
  intro: string;
  heroImage: string;
  storyTitle: string;
  story: string[];
  pieces: Piece[];
  notes?: { title: string; body: string }[];
};

export function CollectionPage({
  kicker,
  title,
  intro,
  heroImage,
  storyTitle,
  story,
  pieces,
  notes,
}: Props) {
  return (
    <>
      <PageHero kicker={kicker} title={title} intro={intro} image={heroImage} />

      <section className="section-y bg-background">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <span className="label-xs text-gold">The Edit</span>
            <h2 className="mt-4 text-4xl text-burgundy md:text-5xl">{storyTitle}</h2>
            <span className="rule-gold mt-6" />
          </Reveal>
          <div className="space-y-6 lg:col-span-7">
            {story.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-[0.98rem] leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={200} className="flex flex-wrap gap-3 pt-2">
              <a
                href={waLink(`Hello Sri Ganesh Silks, I'd like to know more about the ${title}.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-gold"
              >
                Enquire on WhatsApp
              </a>
              <Link to="/contact" className="btn-base btn-outline-burgundy">
                Plan a visit
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-beige">
        <div className="shell">
          <SectionHeading kicker="In this collection" title="What you will find" />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {pieces.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className="group">
                <span className="zoom-media block">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </span>
                <h3 className="mt-5 font-display text-2xl text-burgundy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {notes?.length ? (
        <section className="section-y bg-background">
          <div className="shell grid gap-px overflow-hidden border border-gold/20 bg-gold/20 md:grid-cols-3">
            {notes.map((n, i) => (
              <Reveal key={n.title} delay={i * 80} className="bg-background p-8 lg:p-10">
                <h3 className="font-display text-2xl text-burgundy">{n.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.body}</p>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <FinalCta />
    </>
  );
}

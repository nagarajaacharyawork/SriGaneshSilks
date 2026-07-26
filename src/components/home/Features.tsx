import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Play, Star, Instagram, MapPin, Clock, Phone, MessageCircle, Car, X } from "lucide-react";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";
import { GALLERY, REVIEWS, FAQS, TIMELINE, SHOP_BY_COLLECTION } from "@/lib/catalog";
import { IMG } from "@/lib/images";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AboutTeaser() {
  return (
    <section className="section-y bg-background">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="mask" className="zoom-media">
          <img
            src={IMG.heritage}
            alt="The original Sri Ganesh Silks counter, Thekkatte"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <span className="label-xs text-gold">About Sri Ganesh Silks</span>
            <h2 className="mt-4 text-4xl text-burgundy md:text-6xl">
              A family counter that became a landmark
            </h2>
            <span className="rule-gold mt-6" />
            <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
              In 1956, a single wooden counter opened on the Thekkatte main road with a few bolts of
              cotton and one promise: never sell a family something you would not give your own.
              Three generations later, that promise still runs the shop.
            </p>
          </Reveal>
          <ol className="mt-12 border-l border-gold/30">
            {TIMELINE.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 90} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-gold" />
                <span className="label-xs text-gold">{t.year}</span>
                <h3 className="mt-1 font-display text-2xl text-burgundy">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Link to="/about" className="btn-base btn-outline-burgundy mt-4">
              Read our story
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ShowroomGallery() {
  return (
    <section className="section-y bg-burgundy-deep">
      <div className="shell">
        <SectionHeading
          tone="light"
          kicker="Showroom Experience"
          title="Step inside the house"
          intro="Marble floors, teak counters and four floors of textiles — designed so a family can spend an entire afternoon and never feel rushed."
        />
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
          {GALLERY.map((g, i) => (
            <Reveal key={g.title} variant="mask" delay={(i % 3) * 100} className="zoom-media group relative block break-inside-avoid">
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
  );
}

export function SignatureFeature() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={IMG.signature}
        alt="Hand weaving gold zari on a traditional loom"
        loading="lazy"
        width={1920}
        height={1088}
        className="h-[70vh] min-h-[520px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/92 via-burgundy-deep/70 to-transparent" />
      <div className="shell absolute inset-0 flex items-center">
        <Reveal className="max-w-xl">
          <span className="label-xs text-gold-soft">The Signature Collection</span>
          <h2 className="mt-5 text-4xl leading-tight text-ivory md:text-6xl">
            Real zari. Real weavers. Real time.
          </h2>
          <span className="rule-gold mt-6" />
          <p className="mt-6 text-[0.98rem] leading-relaxed text-ivory/75">
            Our signature silk wall holds pieces that take a weaver anywhere from twelve days to
            three months. We buy them directly, we know the families who make them, and we can tell
            you the story of every border you choose.
          </p>
          <Link to="/collections" className="btn-base btn-gold mt-9">
            Discover the Signature Silks
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function VideoExperience() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-y bg-background">
      <div className="shell">
        <SectionHeading
          kicker="Video Experience"
          title="A walk through the showroom"
          intro="Showroom walk-through, festival shopping and the latest arrivals — filmed inside Sri Ganesh Silks."
        />
        <Reveal variant="mask" className="relative mt-14 md:mt-20">
          <button
            onClick={() => setOpen(true)}
            className="group relative block w-full overflow-hidden"
            aria-label="Play showroom film"
          >
            <img
              src={IMG.showEntrance}
              alt="Sri Ganesh Silks showroom entrance"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[16/9] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-burgundy-deep/35 transition-colors duration-700 group-hover:bg-burgundy-deep/45" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-20 w-20 place-items-center rounded-full border border-ivory/60 text-ivory transition-all duration-700 group-hover:scale-110 group-hover:border-gold group-hover:text-gold md:h-28 md:w-28">
                <Play className="ml-1 h-7 w-7" strokeWidth={1} />
              </span>
            </span>
          </button>
        </Reveal>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-burgundy-deep/95 p-4">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-6 top-6 text-ivory hover:text-gold"
          >
            <X className="h-7 w-7" strokeWidth={1.3} />
          </button>
          <div className="aspect-video w-full max-w-5xl border border-gold/30 bg-black">
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <span className="label-xs text-gold">Showroom Film</span>
              <p className="max-w-md px-6 text-sm text-ivory/70">
                Our showroom film is being finished. Meanwhile, visit us at Thekkatte or message us
                on WhatsApp for a live video walk-through of the latest arrivals.
              </p>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-base btn-gold mt-2">
                Request a video walk-through
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function LatestArrivals() {
  const items = SHOP_BY_COLLECTION.slice(0, 6);
  return (
    <section className="section-y bg-beige">
      <div className="shell">
        <SectionHeading
          kicker="Latest Arrivals"
          title="Just off the loom"
          align="left"
          intro="New pieces reach our counters every week. Message us for availability and pricing before you visit."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title + i} delay={(i % 3) * 90} className="group relative">
              <span className="zoom-media block">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className={cn("w-full object-cover", i === 0 ? "aspect-[3/4]" : "aspect-[3/4]")}
                />
              </span>
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-burgundy-deep/70 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <span className="font-display text-3xl text-ivory">{item.title}</span>
                <a
                  href={waLink(`Hello Sri Ganesh Silks, I'd like to enquire about your ${item.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-gold !py-3"
                >
                  Quick Enquiry
                </a>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InstagramGallery() {
  const shots = [
    IMG.catBridal,
    IMG.catSilk,
    IMG.showSilk,
    IMG.catFestival,
    IMG.catDesigner,
    IMG.showWedding,
    IMG.catKids,
    IMG.catMen,
  ];
  return (
    <section className="section-y bg-background">
      <div className="shell">
        <SectionHeading
          kicker="@sriganeshsilks"
          title="From our Instagram"
          intro="New arrivals, bridal moments and festival colours — shared as they land in store."
        />
        <div className="mt-14 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {shots.map((src, i) => (
            <Reveal key={i} delay={(i % 4) * 70}>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="zoom-media group relative block aspect-square"
              >
                <img
                  src={src}
                  alt="Sri Ganesh Silks on Instagram"
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 grid place-items-center bg-burgundy-deep/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-gold" strokeWidth={1.3} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsCarousel() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];
  return (
    <section className="section-y bg-burgundy-deep">
      <div className="shell">
        <SectionHeading
          tone="light"
          kicker="Customer Reviews"
          title={`${SITE.rating} out of 5 across ${SITE.reviewCount}+ Google reviews`}
        />
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div key={i} className="animate-rise">
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-8 font-display text-2xl leading-snug text-ivory md:text-[2rem]">
              “{r.text}”
            </p>
            <p className="label-xs mt-8 text-gold">
              {r.name} · {r.place}
            </p>
            <p className="mt-2 text-xs text-ivory/45">Verified Google review</p>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {REVIEWS.map((rev, idx) => (
              <button
                key={rev.name}
                aria-label={`Show review by ${rev.name}`}
                onClick={() => setI(idx)}
                className={cn(
                  "h-[2px] w-8 transition-all duration-500",
                  idx === i ? "bg-gold" : "bg-ivory/25 hover:bg-ivory/50",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y bg-background">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <SectionHeading align="left" kicker="Questions" title="Good to know before you visit" />
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display text-xl text-burgundy md:text-2xl">{f.q}</span>
                <span
                  className={cn(
                    "text-gold transition-transform duration-500",
                    open === i && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open === i ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <p className="overflow-hidden pr-10 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisitSection() {
  const rows = [
    { Icon: MapPin, label: "Address", value: `${SITE.addressLine}, ${SITE.region}` },
    { Icon: Clock, label: "Opening Hours", value: SITE.hours },
    { Icon: Phone, label: "Phone", value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
    { Icon: MessageCircle, label: "WhatsApp", value: SITE.phoneDisplay, href: waLink() },
    { Icon: Star, label: "Google Rating", value: `${SITE.rating} ★ · ${SITE.reviewCount}+ reviews` },
    { Icon: Car, label: "Parking", value: "Free customer parking in front of the showroom" },
  ];
  return (
    <section className="section-y bg-beige">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            kicker="Visit the Showroom"
            title="Thekkatte, Kundapura"
            intro="Ten minutes from Kundapura town on NH-66. Come in, take a seat, and let our team bring the weaves to you."
          />
          <dl className="mt-12 space-y-7">
            {rows.map(({ Icon, label, value, href }, i) => (
              <Reveal key={label} delay={i * 70} className="flex gap-5">
                <Icon className="mt-1 h-[18px] w-[18px] shrink-0 text-gold" strokeWidth={1.4} />
                <div>
                  <dt className="label-xs text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-[0.98rem] text-charcoal">
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="hover:text-burgundy">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
        <Reveal variant="mask" className="min-h-[420px] border border-gold/25">
          <iframe
            title="Sri Ganesh Silks location map"
            src={SITE.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[420px] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={IMG.hero2}
        alt="Folded silk sarees at Sri Ganesh Silks"
        loading="lazy"
        width={1920}
        height={1088}
        className="h-[62vh] min-h-[440px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-burgundy-deep/85" />
      <div className="shell absolute inset-0 flex flex-col items-center justify-center text-center">
        <Reveal className="max-w-3xl">
          <span className="label-xs text-gold-soft">Since 1956</span>
          <h2 className="mt-5 text-4xl leading-tight text-ivory md:text-6xl">
            Experience the Legacy of Sri Ganesh Silks
          </h2>
          <span className="rule-gold mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-[0.98rem] text-ivory/70">
            Serving families with premium textiles and timeless traditions since 1956.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={SITE.mapLink} target="_blank" rel="noreferrer" className="btn-base btn-gold">
              Visit Showroom
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-base btn-outline-ivory">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

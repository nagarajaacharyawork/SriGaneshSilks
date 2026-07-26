import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    image: IMG.hero1,
    kicker: "Est. 1956 · Thekkatte, Kundapura",
    title: "Celebrating Traditions Since 1956",
    body: "Seven decades of handwoven silk, coastal craft and families who keep coming back.",
  },
  {
    image: IMG.hero2,
    kicker: "The Bridal Rooms",
    title: "Premium Wedding Collection",
    body: "Kanjivaram, Banarasi and Mysore silks curated weave by weave for the day of days.",
  },
  {
    image: IMG.catFestival,
    kicker: "Season of Light",
    title: "Festival Elegance",
    body: "New arrivals every festival, chosen for the colours of coastal Karnataka.",
  },
  {
    image: IMG.hero3,
    kicker: "Four Floors of Textiles",
    title: "A Luxury Family Shopping Experience",
    body: "Sarees, menswear, kids and dress materials — the whole family, under one roof.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700) * 0.28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-burgundy-deep">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1600ms] ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.title}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "h-full w-full object-cover",
              i === index && "animate-kenburns",
            )}
            style={{ transform: `translateY(${offset}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 via-burgundy-deep/45 to-burgundy-deep/55" />
        </div>
      ))}

      <div className="shell relative flex h-full flex-col justify-end pb-28 md:justify-center md:pb-0">
        <div key={index} className="max-w-3xl">
          <span className="label-xs animate-rise block text-gold-soft">
            {SLIDES[index].kicker}
          </span>
          <h1
            className="animate-rise mt-6 text-[2.9rem] leading-[1.02] text-ivory md:text-7xl lg:text-[5.5rem]"
            style={{ animationDelay: "120ms" }}
          >
            {SLIDES[index].title}
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-base text-ivory/75"
            style={{ animationDelay: "240ms" }}
          >
            {SLIDES[index].body}
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Link to="/collections" className="btn-base btn-gold">
              Explore Collections
            </Link>
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline-ivory"
            >
              Visit Showroom
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline-ivory"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="shell absolute inset-x-0 bottom-8 flex items-center gap-3">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            aria-label={`Show ${slide.title}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-[2px] w-12 transition-all duration-500",
              i === index ? "bg-gold" : "bg-ivory/30 hover:bg-ivory/60",
            )}
          />
        ))}
      </div>
    </section>
  );
}

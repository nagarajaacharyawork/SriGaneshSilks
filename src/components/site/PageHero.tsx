import { Reveal } from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  intro?: string;
  image: string;
};

export function PageHero({ kicker, title, intro, image }: Props) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        width={1920}
        height={1088}
        fetchPriority="high"
        className="h-[68vh] min-h-[440px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/92 via-burgundy-deep/55 to-burgundy-deep/60" />
      <div className="shell absolute inset-0 flex flex-col justify-end pb-16 md:justify-center md:pb-0">
        <Reveal className="max-w-2xl">
          <span className="label-xs text-gold-soft">{kicker}</span>
          <h1 className="mt-5 text-[2.6rem] leading-[1.04] text-ivory md:text-7xl">{title}</h1>
          {intro ? (
            <>
              <span className="rule-gold mt-6" />
              <p className="mt-6 max-w-xl text-[0.98rem] text-ivory/72">{intro}</p>
            </>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

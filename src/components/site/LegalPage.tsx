import { Reveal } from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

export function LegalPage({ kicker, title, updated, sections }: Props) {
  return (
    <>
      <section className="bg-burgundy-deep pb-20 pt-40 md:pb-28 md:pt-52">
        <div className="shell">
          <span className="label-xs text-gold-soft">{kicker}</span>
          <h1 className="mt-5 text-[2.6rem] leading-tight text-ivory md:text-6xl">{title}</h1>
          <span className="rule-gold mt-6" />
          <p className="mt-5 text-sm text-ivory/55">{updated}</p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="shell max-w-3xl space-y-14">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 60}>
              <h2 className="text-3xl text-burgundy">{s.heading}</h2>
              <span className="rule-gold mt-4" />
              <div className="mt-5 space-y-4">
                {s.body.map((p, j) => (
                  <p key={j} className="text-[0.98rem] leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

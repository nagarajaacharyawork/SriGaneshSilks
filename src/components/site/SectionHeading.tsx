import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "center",
  tone = "dark",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {kicker ? (
        <span className={cn("label-xs", tone === "dark" ? "text-gold" : "text-gold-soft")}>
          {kicker}
        </span>
      ) : null}
      <h2
        className={cn(
          "max-w-3xl text-[2.35rem] leading-[1.06] md:text-6xl",
          tone === "dark" ? "text-burgundy" : "text-ivory",
        )}
      >
        {title}
      </h2>
      <span className="rule-gold" />
      {intro ? (
        <p
          className={cn(
            "max-w-2xl text-[0.98rem] leading-relaxed",
            tone === "dark" ? "text-muted-foreground" : "text-ivory/70",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

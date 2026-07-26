import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FaqSection, FinalCta, VisitSection } from "@/components/home/Features";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions | Sri Ganesh Silks, Thekkatte" },
      {
        name: "description",
        content:
          "Visit Sri Ganesh Silks on the Main Road, Thekkatte, Kundapura. Open daily 9:30 AM – 9:00 PM. Call or WhatsApp us before you travel.",
      },
      { property: "og:title", content: "Contact & Directions | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "Main Road, Thekkatte, Kundapura — open daily, free parking, WhatsApp enquiries welcome.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        kicker="Visit Us"
        title="Come and see the weaves"
        intro="Main Road, Thekkatte, Kundapura — ten minutes from town on NH-66, with free parking in front."
        image={IMG.showExterior}
      />
      <VisitSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

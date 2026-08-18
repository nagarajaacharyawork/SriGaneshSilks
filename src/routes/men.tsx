import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/men")({
  head: () => ({
    meta: [
      { title: "Men's Collection | Kurtas, Dhotis & Shirtings" },
      {
        name: "description",
        content:
          "Silk kurtas, dhotis, shawls, shirtings and suitings for men at Sri Ganesh Silks, Thekkatte, Kundapura — a full menswear floor since 1956.",
      },
      { property: "og:title", content: "Men's Collection | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "A full menswear floor: silk kurtas, dhotis, shawls, shirtings and suitings.",
      },
    ],
  }),
  component: () => (
    <CollectionPage
      kicker="Men's Collection"
      title="Quiet refinement, coastal ease"
      intro="Silk kurtas, traditional dhotis, shawls, shirtings and suitings — an entire floor for the men of the family."
      heroImage={IMG.catMen}
      storyTitle="A menswear floor, not a corner"
      story={[
        "Most textile shops give menswear a shelf. We gave it a floor — because a wedding or a house function needs the men dressed as carefully as everyone else.",
        "Ready kurtas in silk, cotton and linen blends sit alongside traditional Kundapura dhotis and angavastras with real zari borders.",
        "For those who prefer tailoring, our shirting and suiting counter holds trusted mill fabrics, and we can recommend local tailors who work with our customers regularly.",
      ]}
      pieces={[
        { title: "Silk Kurtas", blurb: "Festive and wedding kurtas in classic tones.", image: IMG.catMen },
        { title: "Dhotis & Angavastras", blurb: "Traditional coastal styles with zari borders.", image: IMG.menDhotis },
        { title: "Shirtings", blurb: "Cotton, linen and blended mill fabrics.", image: IMG.menShirtings },
        { title: "Suitings", blurb: "Formal fabrics for functions and office wear.", image: IMG.menSuitings },
        { title: "Shawls & Stoles", blurb: "Silk and wool shawls for ceremonies.", image: IMG.menShawls },
        { title: "Groom's Wear", blurb: "Coordinated wedding sets for the groom's party.", image: IMG.menGroom },
      ]}
      notes={[
        { title: "Function Sets", body: "Match kurtas and dhotis across ten or fifty people in one visit." },
        { title: "Tailoring Guidance", body: "We connect you with tailors our customers already trust." },
        { title: "Everyday Value", body: "Premium fabric at family-shop pricing, not city mark-ups." },
      ]}
    />
  ),
});

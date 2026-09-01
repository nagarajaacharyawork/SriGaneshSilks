import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/kids")({
  head: () => ({
    meta: [
      { title: "Kids Collection | Festive & Traditional Wear for Children" },
      {
        name: "description",
        content:
          "Pattu pavadais, festive kurtas, frocks and traditional wear for children at Sri Ganesh Silks, Thekkatte, Kundapura.",
      },
      { property: "og:title", content: "Kids Collection | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "Little celebrations: pattu pavadais, festive kurtas and traditional kids wear.",
      },
    ],
  }),
  component: () => (
    <CollectionPage
      kicker="Kids Collection"
      title="Small people, full celebrations"
      intro="Pattu pavadais, festive kurtas, frocks and function wear — a dedicated section for the youngest in the family."
      heroImage={IMG.catKids}
      storyTitle="Because children are part of every function"
      story={[
        "Coastal families celebrate together, and children are never spectators. Our kids section carries the same weaves as the main floor, cut and finished for small frames.",
        "Pattu pavadais with soft linings, festive kurtas that survive a full day of running, and frocks in colours that photograph beautifully at a mandap.",
        "Sizes run from toddler to early teen, and our staff will happily hold pieces while you finish the rest of the family's shopping.",
      ]}
      pieces={[
        { title: "Pattu Pavadai", blurb: "Traditional silk skirt sets with soft linings.", image: IMG.kidsPattupavadai },
        { title: "Festive Kurtas", blurb: "Comfortable silk and cotton kurtas for boys.", image: IMG.kidsKurtas },
        { title: "Frocks & Gowns", blurb: "Function-ready frocks in festive fabrics.", image: IMG.kidsFrocks },
        { title: "Wedding Kids Wear", blurb: "Coordinated with the family's wedding palette.", image: IMG.kidsWedding },
        { title: "Everyday Cottons", blurb: "Breathable daily wear for coastal weather.", image: IMG.kidsCottons },
        { title: "Festival Sets", blurb: "Seasonal arrivals for Deepavali and Ugadi.", image: IMG.kidsFestival },
      ]}
      photos={[
        { src: IMG.kidsNew1, alt: "Kids dress collection" },
        { src: IMG.kidsNew2, alt: "Kids dress collection" },
        { src: IMG.kidsNew3, alt: "Kids dress collection" },
      ]}
      notes={[
        { title: "Toddler to Teen", body: "A full size range so siblings can be dressed together." },
        { title: "Comfort First", body: "Soft linings and finished seams on every traditional piece." },
        { title: "Family Matching", body: "We match children's colours to the adults' sarees and kurtas." },
      ]}
    />
  ),
});

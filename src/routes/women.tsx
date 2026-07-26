import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/women")({
  head: () => ({
    meta: [
      { title: "Women's Collection | Silk, Cotton & Designer Sarees" },
      {
        name: "description",
        content:
          "Silk sarees, coastal cottons, designer drapes, printed sarees and dress materials for women at Sri Ganesh Silks, Thekkatte, Kundapura.",
      },
      { property: "og:title", content: "Women's Collection | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "Pure silks, handloom cottons, designer drapes and dress materials since 1956.",
      },
    ],
  }),
  component: () => (
    <CollectionPage
      kicker="Women's Collection"
      title="Sarees for every season of life"
      intro="Pure silks, coastal handloom cottons, contemporary drapes and unstitched sets — the largest floor in the house."
      heroImage={IMG.catDesigner}
      storyTitle="The silk wall and everything around it"
      story={[
        "Our women's floor begins with the silk wall — pure mulberry, Kanjivaram, Dharmavaram and Ilkal, arranged by colour so a whole palette reads at a glance.",
        "Beside it sits the cotton counter: soft, breathable handlooms made for coastal afternoons, and the printed range for office and travel.",
        "At the far end, designer drapes and dress materials — organza, tissue, georgette and unstitched sets with matching dupattas, restocked every few weeks.",
      ]}
      pieces={[
        { title: "Pure Silk Sarees", blurb: "Kanjivaram, Mysore and Dharmavaram weaves.", image: IMG.catSilk },
        { title: "Cotton Sarees", blurb: "Ilkal, Mangalgiri and coastal handlooms.", image: IMG.catCotton },
        { title: "Designer Sarees", blurb: "Organza, tissue and embroidered contemporary drapes.", image: IMG.catDesigner },
        { title: "Printed Sarees", blurb: "Light, easy and perfect for daily wear.", image: IMG.catCotton },
        { title: "Dress Materials", blurb: "Unstitched premium sets with matching dupattas.", image: IMG.showSilk },
        { title: "Blouses & Accessories", blurb: "Blouse fabric, borders, falls and pico service.", image: IMG.catBridal },
      ]}
      notes={[
        { title: "Colour Matching", body: "Bring a blouse or a photograph — we will match the shade from the wall." },
        { title: "Seasonal Arrivals", body: "New silk and cotton stock lands every week through the festive season." },
        { title: "Honest Labelling", body: "Pure, blended and art silk are always clearly identified." },
      ]}
    />
  ),
});

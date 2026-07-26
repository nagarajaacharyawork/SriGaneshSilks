import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/festival")({
  head: () => ({
    meta: [
      { title: "Festival Collection | Deepavali, Ugadi & Seasonal Wear" },
      {
        name: "description",
        content:
          "Festival sarees and family ethnic wear for Deepavali, Ugadi, Navaratri and temple celebrations at Sri Ganesh Silks, Thekkatte, Kundapura.",
      },
      { property: "og:title", content: "Festival Collection | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "Seasonal arrivals chosen for the colours of coastal Karnataka's celebrations.",
      },
    ],
  }),
  component: () => (
    <CollectionPage
      kicker="Festival Collection"
      title="The season of light"
      intro="Fresh arrivals for Ugadi, Navaratri, Deepavali and temple festivals — colours chosen for coastal Karnataka."
      heroImage={IMG.catFestival}
      storyTitle="Restocked for every celebration"
      story={[
        "Our festival floor changes character several times a year. Ugadi brings soft yellows and greens; Navaratri brings the nine-colour run; Deepavali brings deep reds, golds and jewel tones.",
        "We plan these arrivals months ahead with our weavers so the right palettes reach Thekkatte before the rush, not after it.",
        "Come early in the season and the choice is widest — and our staff can dress an entire family in one visit.",
      ]}
      pieces={[
        { title: "Deepavali Silks", blurb: "Reds, golds and jewel tones for the festival of light.", image: IMG.catFestival },
        { title: "Ugadi Arrivals", blurb: "Fresh yellows, greens and soft pastels.", image: IMG.catCotton },
        { title: "Navaratri Nine", blurb: "The nine-colour run, ready every season.", image: IMG.catSilk },
        { title: "Temple Visit Sarees", blurb: "Traditional weaves with classic borders.", image: IMG.catBridal },
        { title: "Family Festival Sets", blurb: "Coordinated pieces for every member.", image: IMG.hero3 },
        { title: "Gifting Textiles", blurb: "Sarees, dhotis and shawls suited to gifting.", image: IMG.hero2 },
      ]}
      notes={[
        { title: "Shop Early", body: "Widest choice arrives four to six weeks before each festival." },
        { title: "Gift Selections", body: "Our team helps choose textiles appropriate for gifting occasions." },
        { title: "Whole-Family Visit", body: "Every floor stocked in matching seasonal palettes." },
      ]}
    />
  ),
});

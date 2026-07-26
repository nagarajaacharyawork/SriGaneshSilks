import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/wedding")({
  head: () => ({
    meta: [
      { title: "Wedding & Bridal Collection | Sri Ganesh Silks" },
      {
        name: "description",
        content:
          "Bridal Kanjivaram, Banarasi and Mysore silks with a dedicated bridal room and trousseau service at Sri Ganesh Silks, Thekkatte, Kundapura.",
      },
      { property: "og:title", content: "Wedding & Bridal Collection | Sri Ganesh Silks" },
      {
        property: "og:description",
        content:
          "A dedicated bridal room, genuine zari and unhurried attention for the day of days.",
      },
    ],
  }),
  component: () => (
    <CollectionPage
      kicker="Wedding Collection"
      title="For the day of days"
      intro="A dedicated bridal room, genuine zari and unhurried attention — for the bride, the family and the trousseau."
      heroImage={IMG.catWedding}
      storyTitle="Wedding shopping, the way it should feel"
      story={[
        "A wedding purchase is rarely one saree. It is the bride's, the mother's, the sisters', the aunts', the groom's family — often forty pieces chosen across a single afternoon. We built our bridal room for exactly that.",
        "You will be seated. Tea arrives. A consultant who has done this for two decades will bring out Kanjivaram, Banarasi, Paithani and Mysore silks by weave and by budget, and tell you honestly which zari is real and which is tested.",
        "Come as a family, take your time. Appointments are welcome but never required.",
      ]}
      pieces={[
        { title: "Bridal Kanjivaram", blurb: "Korvai borders, contrast pallus, genuine zari.", image: IMG.catBridal },
        { title: "Banarasi Silk", blurb: "Fine brocade work in classic and modern palettes.", image: IMG.catSilk },
        { title: "Reception Drapes", blurb: "Lighter designer silks for the evening function.", image: IMG.catDesigner },
        { title: "Family Trousseau", blurb: "Coordinated sets for mothers, sisters and aunts.", image: IMG.showWedding },
        { title: "Groom's Wear", blurb: "Silk kurtas, dhotis, shawls and shirtings.", image: IMG.catMen },
        { title: "Wedding Kids Wear", blurb: "Little pattu pavadais and festive kurtas.", image: IMG.catKids },
      ]}
      notes={[
        { title: "Bridal Room", body: "A private, seated space with mirrors and natural light, available all week." },
        { title: "Bulk Family Orders", body: "Coordinated colour and fabric matching for large wedding parties." },
        { title: "Silk Mark Assurance", body: "Our pure silk range carries silk mark and genuine zari verification." },
      ]}
    />
  ),
});

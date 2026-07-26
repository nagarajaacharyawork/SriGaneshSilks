import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sri Ganesh Silks" },
      {
        name: "description",
        content:
          "How Sri Ganesh Silks, Thekkatte, Kundapura collects, uses and protects the limited personal information shared by our customers.",
      },
      { property: "og:title", content: "Privacy Policy | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "How we handle the limited personal information our customers share with us.",
      },
    ],
  }),
  component: () => (
    <LegalPage
      kicker="Legal"
      title="Privacy Policy"
      updated="Last updated: 26 July 2026"
      sections={[
        {
          heading: "Information we collect",
          body: [
            "Sri Ganesh Silks is a physical showroom. We do not operate an online store and we do not collect payment information through this website.",
            "If you contact us by phone, WhatsApp or email, we retain only the details you choose to share — typically your name, contact number and the nature of your enquiry — so our team can respond to you.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use enquiry details solely to answer questions about our collections, share photographs of available stock, arrange bridal appointments and follow up on a purchase.",
            "We do not sell, rent or trade customer information with any third party.",
          ],
        },
        {
          heading: "Website analytics and embedded content",
          body: [
            "This website may use basic analytics to understand how visitors find and use our pages. This data is aggregated and does not identify individuals.",
            "Our contact page embeds a Google Map. Google may collect data according to its own privacy policy when that map loads.",
          ],
        },
        {
          heading: "Data retention and security",
          body: [
            "Enquiry records are kept only as long as they are useful for serving you, and are stored on devices used by our showroom staff.",
            "We take reasonable care to protect the information in our possession, but no method of transmission over the internet is entirely secure.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You may ask us to delete any contact details we hold for you at any time by calling or messaging the showroom.",
            "If you no longer wish to receive festival or new-arrival updates on WhatsApp, simply reply asking to be removed and we will do so immediately.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For any privacy question, reach us at the showroom on the Main Road, Thekkatte, Kundapura, Karnataka 576232, or call +91 98765 43210.",
          ],
        },
      ]}
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Sri Ganesh Silks" },
      {
        name: "description",
        content:
          "Terms of use for the Sri Ganesh Silks website, along with our showroom policies on pricing, exchanges and product descriptions.",
      },
      { property: "og:title", content: "Terms & Conditions | Sri Ganesh Silks" },
      {
        property: "og:description",
        content: "Website terms of use and showroom policies for Sri Ganesh Silks, Thekkatte.",
      },
    ],
  }),
  component: () => (
    <LegalPage
      kicker="Legal"
      title="Terms & Conditions"
      updated="Last updated: 26 July 2026"
      sections={[
        {
          heading: "About this website",
          body: [
            "This website is an informational showcase for Sri Ganesh Silks, a physical textile showroom at Thekkatte, Kundapura, Karnataka. No transactions are processed on this website.",
            "By browsing these pages you agree to the terms set out below.",
          ],
        },
        {
          heading: "Product images and descriptions",
          body: [
            "Photographs on this website are representative of the categories we stock. Weaves, colours and designs vary by season and by piece, and screen colours may differ from the fabric in person.",
            "Availability of any specific piece is never guaranteed by its appearance on this website. Please call or message us to confirm current stock before travelling.",
          ],
        },
        {
          heading: "Pricing",
          body: [
            "All pricing is quoted in the showroom at the time of purchase and is inclusive of applicable taxes as displayed on your bill.",
            "We do not publish prices on this website, and any price quoted over phone or WhatsApp is indicative until confirmed in store.",
          ],
        },
        {
          heading: "Exchanges",
          body: [
            "Unused merchandise in original condition, with tags intact and accompanied by the original bill, may be exchanged within seven days of purchase.",
            "Cut fabric, stitched items, blouse pieces, falls and discounted clearance merchandise are not eligible for exchange.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The name, logo, photography and written content of Sri Ganesh Silks on this website belong to us and may not be reproduced without written permission.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of India, and any dispute shall be subject to the jurisdiction of the courts at Udupi, Karnataka.",
          ],
        },
      ]}
    />
  ),
});

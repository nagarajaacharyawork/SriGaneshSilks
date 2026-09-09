import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import {
  TrustStrip,
  ShopByOccasion,
  WhyUs,
} from "@/components/home/Sections";
import { DynamicFeaturedCollections, HybridShopByCollection } from "@/components/home/DynamicSections";
import {
  AboutTeaser,
  ShowroomGallery,
  SignatureFeature,
  VideoExperience,
  LatestArrivals,
  InstagramGallery,
  ReviewsCarousel,
  FaqSection,
  VisitSection,
  FinalCta,
} from "@/components/home/Features";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Ganesh Silks Thekkatte | Silk Sarees, Bridal & Ethnic Wear – Kundapura Since 1956" },
      {
        name: "description",
        content:
          "Ganesh Silks Thekkatte – trusted family textile showroom in Kundapura since 1956. Pure silk sarees, Kanjivaram, bridal collections, cotton sarees, menswear and kids wear. Visit us on NH-66, Thekkatte.",
      },
      { name: "keywords", content: "Ganesh Silks Thekkatte, Ganesh Silks Kundapura, Sri Ganesh Silks, silk sarees Kundapura, bridal sarees Thekkatte, Kanjivaram sarees, cotton sarees, ethnic wear Kundapura" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Sri Ganesh Silks Thekkatte | Silk Sarees & Bridal Wear – Kundapura Since 1956" },
      {
        property: "og:description",
        content:
          "Seven decades of handwoven silk in coastal Karnataka. Pure silk sarees, bridal collections and ethnic wear. Visit our Thekkatte showroom.",
      },
      { property: "og:url", content: "https://www.sriganeshsilksthekkatte.com/" },
      { property: "og:image", content: "https://www.sriganeshsilksthekkatte.com/GaneshSilksLogo.jpg" },
      { property: "og:image:alt", content: "Sri Ganesh Silks Thekkatte – Silk Sarees since 1956" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sri Ganesh Silks Thekkatte | Silk Sarees & Bridal Wear" },
      { name: "twitter:image", content: "https://www.sriganeshsilksthekkatte.com/GaneshSilksLogo.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sriganeshsilksthekkatte.com/" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HybridShopByCollection />
      <DynamicFeaturedCollections />
      <ShopByOccasion />
      <AboutTeaser />
      <ShowroomGallery />
      <SignatureFeature />
      <WhyUs />
      <VideoExperience />
      <LatestArrivals />
      <InstagramGallery />
      <ReviewsCarousel />
      <FaqSection />
      <VisitSection />
      <FinalCta />
    </>
  );
}

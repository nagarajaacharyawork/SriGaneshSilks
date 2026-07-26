import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import {
  TrustStrip,
  ShopByCollection,
  FeaturedCollections,
  ShopByOccasion,
  WhyUs,
} from "@/components/home/Sections";
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
      { title: "Sri Ganesh Silks | Silk Sarees & Bridal Wear, Kundapura" },
      {
        name: "description",
        content:
          "A family textile house in Thekkatte, Kundapura since 1956. Pure silk sarees, bridal collections, cottons and ethnic wear for the whole family.",
      },
      { property: "og:title", content: "Sri Ganesh Silks | Silk Sarees & Bridal Wear, Kundapura" },
      {
        property: "og:description",
        content:
          "Seven decades of handwoven silk in coastal Karnataka. Visit our Thekkatte showroom for bridal, festival and everyday collections.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ShopByCollection />
      <FeaturedCollections />
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

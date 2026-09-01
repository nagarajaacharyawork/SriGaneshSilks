import { IMG } from "./images";

export type Category = {
  title: string;
  blurb: string;
  image: string;
  to: string;
};

export const MEGA_MENU: { heading: string; items: Category[] }[] = [
  {
    heading: "Sarees",
    items: [
      { title: "Silk Sarees", blurb: "Pure mulberry & Kanjivaram", image: IMG.catSilk, to: "/women" },
      { title: "Wedding Sarees", blurb: "For the day of days", image: IMG.catWedding, to: "/wedding" },
      { title: "Bridal Sarees", blurb: "Heirloom zari craft", image: IMG.catBridal, to: "/wedding" },
      { title: "Designer Sarees", blurb: "Contemporary drapes", image: IMG.catDesigner, to: "/women" },
    ],
  },
  {
    heading: "Everyday & Occasion",
    items: [
      { title: "Cotton Sarees", blurb: "Coastal handloom comfort", image: IMG.womenCottonSarees, to: "/women" },
      { title: "Printed Sarees", blurb: "Light, modern, easy", image: IMG.womenPrintedSarees, to: "/women" },
      { title: "Dress Materials", blurb: "Unstitched premium sets", image: IMG.womenDressMaterials, to: "/women" },
      { title: "Festival Collection", blurb: "Deepavali to Ugadi", image: IMG.catFestival, to: "/festival" },
    ],
  },
  {
    heading: "The Family",
    items: [
      { title: "Women's Collection", blurb: "Sarees, lehengas, kurtis", image: IMG.catDesigner, to: "/women" },
      { title: "Men's Collection", blurb: "Kurtas, dhotis, shirtings", image: IMG.catMen, to: "/men" },
      { title: "Kids Wear", blurb: "Little celebrations", image: IMG.catKids, to: "/kids" },
      { title: "Accessories", blurb: "Blouses, borders, falls", image: IMG.catSilk, to: "/collections" },
    ],
  },
];

export const SHOP_BY_COLLECTION: Category[] = [
  { title: "Bridal Sarees", blurb: "Handwoven heirlooms", image: IMG.catBridal, to: "/wedding" },
  { title: "Silk Sarees", blurb: "Pure zari lustre", image: IMG.catSilk, to: "/women" },
  { title: "Cotton Sarees", blurb: "Coastal handloom", image: IMG.catCotton, to: "/women" },
  { title: "Designer Sarees", blurb: "Modern drapes", image: IMG.catDesigner, to: "/women" },
  { title: "Wedding Collection", blurb: "For the whole family", image: IMG.catWedding, to: "/wedding" },
  { title: "Festival Collection", blurb: "Season of light", image: IMG.catFestival, to: "/festival" },
  { title: "Men's Wear", blurb: "Quiet refinement", image: IMG.catMen, to: "/men" },
  { title: "Kids Wear", blurb: "Small & splendid", image: IMG.catKids, to: "/kids" },
];

export const OCCASIONS = [
  { title: "Wedding", image: IMG.occWedding },
  { title: "Reception", image: IMG.occReception },
  { title: "Temple Visit", image: IMG.occTemple },
  { title: "Festival", image: IMG.occFestival },
  { title: "Office Wear", image: IMG.occOffice },
  { title: "Daily Wear", image: IMG.occDaily },
  { title: "Family Functions", image: IMG.occFamily },
  { title: "Traditional Events", image: IMG.occTraditional },
];

export const FEATURED = [
  {
    kicker: "Chapter One",
    title: "The Wedding Collection",
    body: "Seven decades of knowing what a family needs on the morning of a wedding. Kanjivaram, Banarasi and Mysore silks selected weave by weave, with a dedicated bridal room and unhurried attention from our third generation.",
    image: IMG.featuredWedding,
    to: "/wedding",
  },
  {
    kicker: "Chapter Two",
    title: "Traditional Elegance",
    body: "Temple borders, korvai joins, real zari that catches the lamplight. Our silk wall holds pieces sourced directly from weaving clusters in Kanchipuram, Dharmavaram and Ilkal.",
    image: IMG.featuredSilk,
    to: "/women",
  },
  {
    kicker: "Chapter Three",
    title: "Everyday Classics",
    body: "Soft coastal cottons and easy blends made for Kundapura afternoons — breathable, beautifully finished and priced the way a family shop should price them.",
    image: IMG.featuredCotton,
    to: "/women",
  },
  {
    kicker: "Chapter Four",
    title: "The Festive Rooms",
    body: "From Ugadi to Deepavali, our festival floor is restocked every season with colours chosen for coastal Karnataka's celebrations — and outfits for every member of the family.",
    image: IMG.featuredFestival,
    to: "/festival",
  },
];

export const GALLERY = [
  { title: "Store Exterior", image: IMG.showExterior },
  { title: "Grand Entrance", image: IMG.showEntrance },
  { title: "Silk Section", image: IMG.showSilk },
  { title: "Wedding Collection", image: IMG.showWedding },
  { title: "Men's Floor", image: IMG.showMen },
  { title: "Kids Section", image: IMG.showKids },
  { title: "Our Team", image: IMG.ps_completeStaffs },
  { title: "Staff at the Showroom", image: IMG.ps_staffs },
];

export const REVIEWS = [
  {
    name: "Shruthi Bhat",
    place: "Kundapura",
    text: "We bought my wedding saree here and the attention we received was unbelievable. They brought out piece after piece patiently for almost three hours. The zari work is genuine and the pricing was far better than city showrooms.",
  },
  {
    name: "Ramesh Shetty",
    place: "Udupi",
    text: "Three generations of my family have shopped at Sri Ganesh Silks. That says everything. Quality never dropped, and the staff still remember our names.",
  },
  {
    name: "Anitha Poojary",
    place: "Byndoor",
    text: "Excellent collection of cotton and silk sarees. Very neat showroom, easy parking and the kids section is lovely. Perfect for festival shopping for the whole family.",
  },
  {
    name: "Prakash Kamath",
    place: "Brahmavara",
    text: "Bought kurtas and dhotis for a house function. Fabric quality is premium and they helped match everything for eleven people without any fuss.",
  },
  {
    name: "Deepa Hegde",
    place: "Bhatkal",
    text: "Worth the drive. The bridal room feels like a boutique in Bangalore but with the warmth of a family shop. Highly recommended for wedding shopping.",
  },
  {
    name: "Sadananda Acharya",
    place: "Kollur",
    text: "A trusted name since my childhood. Honest dealing, wide variety and they never push you to buy. Ganesh Silks is an institution in this region.",
  },
];

export const FAQS = [
  {
    q: "Where exactly is the showroom located?",
    a: "We are on the Main Road at Thekkatte, Kundapura — about ten minutes from Kundapura town on NH-66, with free parking in front of the showroom.",
  },
  {
    q: "Do you offer bridal shopping assistance?",
    a: "Yes. Our bridal room is available by appointment or walk-in, with a dedicated consultant who will curate sarees for the bride, the family and the trousseau in one sitting.",
  },
  {
    q: "Can I enquire about a collection over WhatsApp?",
    a: "Absolutely. Send us a message and our team will share photographs, availability and pricing of current arrivals before you visit.",
  },
  {
    q: "Do you stock clothing for men and children?",
    a: "We do. A full men's floor with kurtas, dhotis, shirtings and suitings, plus a dedicated kids section for festival and function wear.",
  },
  {
    q: "Are the silk sarees pure silk with genuine zari?",
    a: "Our pure silk range carries silk mark assurance and genuine zari. We are always transparent about which pieces are pure, blended or art silk.",
  },
  {
    q: "Do you make alterations or stitch blouses?",
    a: "We assist with blouse fabric, falls, pico and can recommend trusted local tailors who work with our customers regularly.",
  },
];

export const WHY_US = [
  { title: "Established Since 1956", body: "Seven decades of unbroken trust in coastal Karnataka." },
  { title: "Premium Fabrics", body: "Sourced weave by weave from Indian handloom clusters." },
  { title: "Affordable Luxury", body: "Showroom quality without metropolitan pricing." },
  { title: "Latest Collections", body: "New arrivals every season and every festival." },
  { title: "Friendly Staff", body: "Unhurried, knowledgeable, never pushy." },
  { title: "Wedding Specialists", body: "A dedicated bridal room and trousseau service." },
  { title: "Large Variety", body: "Thousands of pieces across four floors of textiles." },
  { title: "Trusted Family Business", body: "Third generation, same family, same values." },
];

export const TIMELINE = [
  { year: "1956", title: "The First Counter", body: "Sri Ganesh Silks opens as a modest fabric counter on the Thekkatte main road, serving farming and fishing families of the coast." },
  { year: "1978", title: "The Second Generation", body: "The founder's sons take over, introducing pure silk sarees sourced directly from Kanchipuram weavers." },
  { year: "1994", title: "The Expanded Showroom", body: "The shop grows into a full showroom with dedicated saree, men's and children's sections." },
  { year: "2012", title: "A Modern Collection", body: "Designer drapes, dress materials and contemporary labels join the traditional silk wall." },
  { year: "Today", title: "A Trusted Destination", body: "Families travel from Udupi, Byndoor, Bhatkal and Kollur — over 405 reviews and thousands of celebrations later." },
];

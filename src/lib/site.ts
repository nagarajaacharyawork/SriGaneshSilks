export const SITE = {
  name: "Sri Ganesh Silks",
  since: 1956,
  tagline: "Celebrating Traditions Since 1956",
  addressLine: "Main Road, Thekkatte, Kundapura",
  region: "Udupi District, Karnataka 576232",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "care@sriganeshsilks.in",
  hours: "Monday – Sunday · 9:30 AM – 9:00 PM",
  rating: "4.7",
  reviewCount: 405,
  mapEmbed:
    "https://www.google.com/maps?q=Thekkatte,+Kundapura,+Karnataka&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Thekkatte+Kundapura+Karnataka",
  instagram: "https://www.instagram.com/ganeshsilks_?igsh=MW5tNmNwZGNqbHIxNQ==",
  facebook: "https://facebook.com",
};

export const waLink = (msg = "Hello Sri Ganesh Silks, I would like to know more about your collections.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Collections", to: "/collections", mega: true },
  { label: "Wedding", to: "/wedding" },
  { label: "Women", to: "/women" },
  { label: "Men", to: "/men" },
  { label: "Kids", to: "/kids" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

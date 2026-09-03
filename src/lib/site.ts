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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d74.6993685!3d13.5495835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc914251476b47%3A0x6dc7f54b7b84fa77!2sShri%20Ganesh%20silks!5e0!3m2!1sen!2sin!4v1",
  mapLink: "https://www.google.com/maps/place/Shri+Ganesh+silks/@13.5495835,74.6993685,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbc914251476b47:0x6dc7f54b7b84fa77!8m2!3d13.5495783!4d74.7019434!16s%2Fg%2F11cn5fjzmx",
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

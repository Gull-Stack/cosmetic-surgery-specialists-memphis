// ============================================
// COSMETIC SURGERY SPECIALISTS OF MEMPHIS
// ============================================

const SITE_CONFIG = {
  // ==========================================
  // PRACTICE INFORMATION
  // ==========================================
  practiceName: "Cosmetic Surgery Specialists of Memphis",
  practiceNameShort: "CSS Memphis",
  doctorName: "Peter A. Aldea, M.D. & Patricia L. Eby, M.D.",
  doctorCredentials: "Certified & Re-Certified by The American Board of Plastic Surgery",
  doctorTitle: "Members of the American Society of Plastic Surgeons",
  tagline: "Dedication • Experience • Excellence",
  heroHeadline: "Award-Winning Plastic Surgery",
  heroSubheadline: "Memphis TOP DOCTORS — 10 Consecutive Years",
  heroDescription: "Experience exceptional care from husband-wife board-certified plastic surgeons who treat every patient like family. Dr. Peter Aldea and Dr. Patricia Eby bring decades of combined expertise to your transformation.",
  yearEstablished: 1990,

  // ==========================================
  // SOCIAL PROOF / STATS
  // ==========================================
  stats: {
    proceduresPerformed: 10000,
    yearsExperience: 30,
    googleRating: 4.9,
    googleReviewCount: 250,
    photoGalleryCount: 3000,
    countriesServed: 15
  },

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  phone: "(901) 752-1412",
  phoneClean: "9017521412",
  fax: "(901) 752-1413",
  email: "info@cosmeticsurgeryspecialists.org",
  textNumber: "9017521412",

  // ==========================================
  // LOCATION
  // ==========================================
  address: {
    street: "6401 Poplar Avenue, Suite 360",
    city: "Memphis",
    state: "TN",
    zip: "38119",
    full: "6401 Poplar Avenue, Suite 360, Memphis, TN 38119"
  },
  geo: {
    lat: 35.1046,
    lng: -89.8903
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.5!2d-89.8903!3d35.1046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zCosmeticSurgerySpecialists!5e0!3m2!1sen!2sus",

  additionalLocations: [],

  // ==========================================
  // OFFICE HOURS
  // ==========================================
  hours: {
    display: [
      { days: "Monday – Thursday", time: "9:00 AM – 5:00 PM" },
      { days: "Friday", time: "9:00 AM – 3:00 PM" },
      { days: "Saturday – Sunday", time: "Closed" }
    ],
    schema: [
      { days: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "17:00" },
      { days: ["Friday"], opens: "09:00", closes: "15:00" }
    ]
  },

  // ==========================================
  // SOCIAL MEDIA
  // ==========================================
  social: {
    facebook: "https://www.facebook.com/pages/Cosmetic-Surgery-Specialists-of-Memphis-PLLC-Plastic-Surgery/150670157468",
    instagram: "",
    youtube: "",
    tiktok: "",
    twitter: "https://twitter.com/CosmSurgerySpec",
    realself: "",
    linkedin: ""
  },

  // ==========================================
  // SEO SETTINGS
  // ==========================================
  seo: {
    primaryCity: "Memphis",
    primaryState: "TN",
    stateFullName: "Tennessee",
    serviceArea: "Memphis and the Mid-South",
    homeMetaDescription: "Cosmetic Surgery Specialists of Memphis offers breast augmentation, facelifts, Brazilian butt lift, tummy tucks & mommy makeovers. Board-certified plastic surgeons Dr. Peter Aldea & Dr. Patricia Eby. Call (901) 752-1412.",
    siteName: "Cosmetic Surgery Specialists of Memphis",
    twitterHandle: "@CosmSurgerySpec"
  },

  // ==========================================
  // COLORS (Memphis practice - classic professional)
  // ==========================================
  colors: {
    primary: "#1e3a5f",        // Deep navy blue
    primaryLight: "#2c5282",
    secondary: "#b8860b",      // Dark goldenrod accent
    accent: "#c9a227",         // Gold
    dark: "#1a1f2e",
    light: "#faf8f5",
    textOnDark: "#ffffff",
    textOnLight: "#1a1f2e"
  },

  // ==========================================
  // TYPOGRAPHY
  // ==========================================
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif"
  },

  // ==========================================
  // FEATURE TOGGLES
  // ==========================================
  features: {
    showAnnouncementBar: true,
    announcementText: "Memphis TOP DOCTORS — 10 Consecutive Years",
    showFinancing: true,
    showVirtualConsult: true,
    showBeforeAfter: true,
    showTestimonials: true,
    showBlog: false,
    enableChat: false,
    showGoogleReviews: true
  },

  // ==========================================
  // SERVICES OFFERED
  // ==========================================
  services: {
    breast: [
      { name: "Breast Augmentation", slug: "breast-augmentation", enabled: true },
      { name: "Breast Lift", slug: "breast-lift", enabled: true },
      { name: "Breast Reduction", slug: "breast-reduction", enabled: true },
      { name: "Male Breast Reduction", slug: "male-breast-reduction", enabled: true }
    ],
    body: [
      { name: "Tummy Tuck", slug: "tummy-tuck", enabled: true },
      { name: "Mommy Makeover", slug: "mommy-makeover", enabled: true },
      { name: "Liposuction", slug: "liposuction", enabled: true },
      { name: "Brazilian Butt Lift", slug: "brazilian-butt-lift", enabled: true },
      { name: "Body Contouring After Weight Loss", slug: "body-contouring", enabled: true }
    ],
    face: [
      { name: "Facelift", slug: "facelift", enabled: true },
      { name: "Neck Lift", slug: "neck-lift", enabled: true },
      { name: "Eyelid Surgery", slug: "eyelid-surgery", enabled: true },
      { name: "Rhinoplasty", slug: "rhinoplasty", enabled: true },
      { name: "Forehead Lift", slug: "forehead-lift", enabled: true }
    ],
    nonSurgical: [
      { name: "Botox", slug: "botox", enabled: true },
      { name: "Juvederm", slug: "juvederm", enabled: true },
      { name: "Restylane", slug: "restylane", enabled: true },
      { name: "Lip Augmentation", slug: "lip-augmentation", enabled: true }
    ]
  },

  // ==========================================
  // ABOUT / BIO
  // ==========================================
  about: {
    shortBio: "Dr. Peter Aldea and Dr. Patricia Eby are dedicated surgical professionals certified and re-certified by the American Board of Plastic Surgery. As a husband-wife team, they bring a unique family-centered approach to patient care.",
    philosophy: "We believe that true transformation begins with understanding. Our practice has grown by remaining on the leading edge of advances in Plastic Surgery while fostering total dedication to and intimacy between our patients and surgeons.",
    credentials: [
      "Board Certified by the American Board of Plastic Surgery",
      "Members of the American Society of Plastic Surgeons (ASPS)",
      "Southeastern Society of Plastic and Reconstructive Surgeons",
      "Memphis Magazine TOP DOCTORS — 10 Consecutive Years",
      "Three Best Rated® Top Plastic Surgeons in Memphis"
    ],
    education: [
      "Columbia University",
      "Georgetown University",
      "Stanford University",
      "Duke University",
      "Harvard University"
    ]
  },

  // ==========================================
  // FINANCING
  // ==========================================
  financing: {
    providers: ["CareCredit", "PatientFi", "Alphaeon Credit"],
    showMonthlyPayments: true
  },

  // ==========================================
  // SCHEMA / STRUCTURED DATA
  // ==========================================
  schema: {
    type: "MedicalBusiness",
    medicalSpecialty: "PlasticSurgery",
    priceRange: "$$$"
  }
};

// Export for use in templates
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}

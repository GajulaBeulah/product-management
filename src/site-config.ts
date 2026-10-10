export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
    foundedYear: number;
    city: string;
    url: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    email: string;
    officeAddress: string;
    workingHours: string;
  };
  localities: string[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "TotalAsset Management",
    tagline: "Property Management Hyderabad",
    description: "TotalAsset provides professional property management, absolute transparency, strict tenant KYC, and photo-verified repair estimates for assets in Hyderabad.",
    foundedYear: 2026,
    city: "Hyderabad, Telangana",
    url: "https://product-management-gold-ten.vercel.app",
  },
  contact: {
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210",
    email: "contact@totalasset.com",
    officeAddress: "Hyderabad, Telangana",
    workingHours: "24/7",
  },
  localities: [
    "Gachibowli", "Kondapur", "Tellapur", "Shankarpally", "Kokapet", "Shamshabad",
    "Hitec City", "Madhapur", "Financial District", "Nanakramguda", "Narsingi",
    "Jubilee Hills", "Banjara Hills", "Moinabad", "Chevella", "Maheshwaram"
  ],
};

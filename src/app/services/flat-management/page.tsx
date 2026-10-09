import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Search, ShieldCheck, FileSignature, Wallet, Wrench, Camera } from "lucide-react";

export default function FlatManagementPage() {
  return (
    <ExpandedServicePage
      data={{
        id: "flat",
        title: "Flat Management",
        heroDescription: "Complete custody for individual rental units. We handle everything from tenant placement to ongoing maintenance.",
        heroImage: "/images/flat.jpg",
        overviewHeading: "Stress-Free Rental Flat Management",
        overviewDescription: [
          "Our flat management service helps property owners enjoy the benefits of rental income without the daily hassles of property management.",
          "Whether you are an NRI or a local investor, we handle tenant sourcing, KYC verification, and maintenance requests on your behalf. You receive rent directly into your account with complete transparency.",
          "TotalAsset helps protect your property's value through regular inspections, timely repairs, and photo-verified maintenance updates."
        ],
        overviewImage: "/images/flat.jpg",
        keyInclusions: [
          "Tenant search & marketing",
          "Rigorous background verification (KYC)",
          "11-month agreement execution",
          "Monthly rent collection & remittance",
          "Plumbing & electrical maintenance",
          "Photo proof of all repairs",
          "Move-in/Move-out condition reports",
          "Direct owner communication"
        ],
        whatWeHandle: [
          { title: "Tenant Sourcing", desc: "We market your property and find reliable, verified tenants.", icon: <Search /> },
          { title: "KYC & Verification", desc: "Strict police and employment verification for complete safety.", icon: <ShieldCheck /> },
          { title: "Agreement Execution", desc: "Drafting and executing legally binding 11-month rental agreements.", icon: <FileSignature /> },
          { title: "Rent Collection", desc: "Timely monthly rent collection transferred directly to your account.", icon: <Wallet /> },
          { title: "Maintenance", desc: "Plumbing, electrical, and general repairs handled by trusted vendors.", icon: <Wrench /> },
          { title: "Photo Proof", desc: "Before and after photos provided for all maintenance work.", icon: <Camera /> }
        ],
        howItWorks: [
          { step: 1, title: "Property Audit", desc: "Initial inspection and rental valuation." },
          { step: 2, title: "Marketing", desc: "Listing and showcasing your flat." },
          { step: 3, title: "Tenant KYC", desc: "Thorough background and police verification." },
          { step: 4, title: "Agreement", desc: "Signing the rental contract." },
          { step: 5, title: "Move-In", desc: "Handover with detailed condition report." },
          { step: 6, title: "Management", desc: "Ongoing rent collection and maintenance." }
        ],
        gallery: [
          "/images/flat.jpg",
          "/images/inspection.jpg",
          "/images/maintenance.jpg",
          "/images/agreement.jpg",
          "/images/handshake.jpg"
        ],
        reviews: [
          {
            quote: "TotalAsset made managing my Hyderabad rental property much easier while I was living away.",
            name: "Rahul Sharma",
            location: "Property Owner, Dubai"
          },
          {
            quote: "Their tenant verification process is incredible. I have peace of mind knowing my flat is in good hands.",
            name: "Sneha Reddy",
            location: "Property Owner, USA"
          },
          {
            quote: "Maintenance requests are handled swiftly and I always receive photo updates. Highly recommended.",
            name: "Vikram Kumar",
            location: "Local Investor, Hyderabad"
          }
        ],
        faq: [
          { question: "What does flat management include?", answer: "It includes everything from tenant sourcing, KYC, lease execution, rent collection, to ongoing maintenance and repair coordination." },
          { question: "How do you verify tenants?", answer: "We conduct strict police verifications, employment checks, and previous landlord references before approving any tenant." },
          { question: "How is rent collected?", answer: "Rent is collected digitally and transferred directly to your designated bank account without any escrow holding." },
          { question: "How are maintenance requests handled?", answer: "Tenants raise requests with us. We get a quote, seek your approval, complete the work, and provide photo proof along with the vendor invoice." },
          { question: "Will I receive repair photos?", answer: "Yes, we mandate before-and-after photo evidence for every single repair executed at your property." },
          { question: "How often will I receive property updates?", answer: "You will receive a monthly rent remittance report, plus immediate updates for any maintenance or tenant-related matters." }
        ],
        whatsappMessage: "Hi TotalAsset, I need rental & tenant management for my Flat in Hyderabad."
      }}
    />
  );
}

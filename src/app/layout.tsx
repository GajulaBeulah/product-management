import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site-config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: {
    default: `${siteConfig.brand.name} | Property Management Services in Hyderabad`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: "Hyderabad Properties Management provides professional property management in Hyderabad. End-to-end care for flats, apartments, villas, plots, and commercial properties with verified tenants, photo-verified repairs, and zero escrow delays.",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: `${siteConfig.brand.name} | Property Management in Hyderabad`,
    description: siteConfig.brand.description,
    url: siteConfig.brand.url,
    siteName: siteConfig.brand.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteConfig.brand.url}/images/villa.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand.name} - Professional Property Management Hyderabad`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.brand.name} | Property Management in Hyderabad`,
    description: siteConfig.brand.description,
    images: [`${siteConfig.brand.url}/images/villa.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.brand.name,
  "image": `${siteConfig.brand.url}/images/villa.jpg`,
  "url": siteConfig.brand.url,
  "telephone": siteConfig.contact.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.contact.officeAddress,
    "addressLocality": siteConfig.brand.city,
    "addressCountry": "IN"
  },
  "description": siteConfig.brand.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {/* SEO Analytics Tag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

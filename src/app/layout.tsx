import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://9teascafe.com"),
  title: {
    default: "9Teas Cafe — Back to the 90s | Artisanal Chai, Cafe Culture & Franchise",
    template: "%s | 9Teas Cafe",
  },
  description: "Experience the nostalgic magic of hand-brewed kulhad chai, artisanal pizzas, pastas, burgers, and vibrant 90s youth culture at 9Teas Cafe. Explore our multi-city outlets or start your profitable franchise journey today.",
  keywords: [
    "9Teas Cafe",
    "9 Teas Cafe",
    "Back to the 90s cafe",
    "Kulhad Chai Mumbai",
    "Best cafe Bhayander",
    "Tea cafe franchise India",
    "Indian cafe franchise",
    "F&B franchise opportunity",
    "Amit Yadav 9Teas",
    "Mira Bhayander cafe",
    "Prayagraj cafe"
  ],
  authors: [{ name: "9Teas Cafe" }],
  creator: "9Teas Cafe",
  publisher: "9Teas Cafe Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://9teascafe.com",
    siteName: "9Teas Cafe",
    title: "9Teas Cafe — Back to the 90s | Artisanal Chai, Cafe Culture & Franchise",
    description: "Hand-brewed chai, warm conversations, vibrant 90s vibes, and scalable franchise opportunities across India.",
    images: [
      {
        url: "/images/welcome.jpg",
        width: 1200,
        height: 630,
        alt: "9Teas Cafe — Back to the 90s",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "9Teas Cafe — Back to the 90s",
    description: "Hand-brewed chai, conversations, and scalable Indian cafe franchise.",
    images: ["/images/welcome.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/9teascafe-logo.jpg",
    apple: "/images/9teascafe-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "9Teas Cafe",
    "image": "https://9teascafe.com/images/welcome.jpg",
    "url": "https://9teascafe.com",
    "telephone": SITE_CONFIG.headOffice.phone,
    "email": SITE_CONFIG.headOffice.email,
    "priceRange": "₹₹",
    "servesCuisine": ["Tea", "Chai", "Fast Food", "Coffee", "Italian"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no. 1 & 2 Sundar Bhavan, Navghar Fatak Road, Opp. Navghar Police Station",
      "addressLocality": "Bhayander (East), Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "401105",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:30",
        "closes": "22:30"
      }
    ],
    "sameAs": [
      SITE_CONFIG.socialLinks.instagram,
      SITE_CONFIG.socialLinks.facebook
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream-100 text-espresso selection:bg-saffron selection:text-white antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

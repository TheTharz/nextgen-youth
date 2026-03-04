import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/getDictionary";

import { getImagePath } from "@/utils/imagePath";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "si" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "si");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thetharz.github.io";
  const logoUrl = getImagePath("/assets/logo/logo.jpg");

  return {
    metadataBase: new URL(siteUrl),
    title: `${dict.home.title_1} ${dict.home.title_2} | ${dict.home.tagline}`,
    description: dict.home.description,
    openGraph: {
      title: `${dict.home.title_1} ${dict.home.title_2}`,
      description: dict.home.description,
      url: `${siteUrl}${getImagePath(`/${lang}`)}`,
      siteName: "NextGen Youth",
      locale: lang === "si" ? "si_LK" : "en_US",
      type: "website",
      images: [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
          alt: "NextGen Youth Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.home.title_1} ${dict.home.title_2}`,
      description: dict.home.description,
      images: [logoUrl],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "si");

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar dict={dict} lang={lang} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Advertising Agency | TV Commercials & Digital Marketing",
  description:
    "Transform your brand with Dream Advertising. We specialize in TV commercials, digital marketing, and creative excellence. 10+ years of experience in delivering impactful advertising solutions.",
  openGraph: {
    title: "Dream Advertising | Professional Advertising Agency",
    description:
      "Transform your brand with creative excellence. Specializing in TV commercials, digital marketing, and brand strategy.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Dream Advertising Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Advertising | Professional Advertising Agency",
    description:
      "Transform your brand with creative excellence. Specializing in TV commercials, digital marketing, and brand strategy.",
    images: ["/images/og-home.jpg"],
  },
  alternates: {
    canonical: "https://dreamadvertising.com",
  },
};

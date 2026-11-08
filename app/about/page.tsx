import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutHero from "@/app/components/AboutHero";
import AboutBody from "@/app/components/AboutBody";

export const metadata: Metadata = {
  title: "About Us | Taxnet Business Consultants Melbourne",
  description:
    "Discover Taxnet Business Consultants—Melbourne's trusted CPA accounting and mortgage advisory practice led by Philip Youssef. Built on relationships, proactive thinking, and complete financial guidance.",
  keywords: [
    "about Taxnet",
    "Taxnet Business Consultants",
    "Philip Youssef CPA",
    "Angela Au Yeung",
    "Mirel Youssef",
    "Doncaster East accountant",
    "Melbourne CPA accounting practice",
    "mortgage broker accountant Melbourne",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#FBFBFA", color: "#1C2022" }}>
        {/* ─── CINEMATIC CENTER-LOGO HERO (Preserved Exactly) ─── */}
        <AboutHero />

        {/* ─── EDITORIAL ABOUT BODY (Sections 1 to 4) ─── */}
        <AboutBody />
      </main>

      <Footer />
    </>
  );
}

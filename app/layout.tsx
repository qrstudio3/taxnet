import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxNet | Taxation, Bookkeeping, Mortgage & Business Advisory | Melbourne",
  description:
    "TaxNet provides expert taxation, bookkeeping, mortgage broking, and business advisory services for Australian businesses, property investors, and individuals. Trusted by 500+ clients across Melbourne & Australia. Get your free consultation today.",
  keywords: [
    "taxation Melbourne",
    "business accountant Melbourne",
    "corporation tax Australia",
    "mortgage broker Melbourne",
    "bookkeeping Melbourne",
    "business advisory",
    "CPA Australia accountant",
    "BAS agent Melbourne",
    "GST lodgement",
    "SMSF tax returns",
  ],
};

import FloatingContact from "./components/FloatingContact";
import FloatingBorrowingPower from "./components/FloatingBorrowingPower";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingBorrowingPower />
        <FloatingContact />
      </body>
    </html>
  );
}

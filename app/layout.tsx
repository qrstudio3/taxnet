import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxNet | Taxation, Mortgage & Business Advisory Services",
  description:
    "TaxNet provides expert taxation, mortgage advisory, bookkeeping, and business advisory services. Trusted by 500+ clients across the UK. Get your free consultation today.",
  keywords: [
    "taxation",
    "self assessment",
    "corporation tax",
    "mortgage advice",
    "bookkeeping",
    "business advisory",
    "accountant UK",
    "VAT returns",
  ],
};

import FloatingContact from "./components/FloatingContact";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}

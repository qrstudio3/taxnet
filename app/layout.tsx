import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taxnet | Taxation, Bookkeeping, Mortgage & Business Advisory | Melbourne",
  description:
    "Taxnet provides expert taxation, bookkeeping, mortgage broking, and business advisory services for Australian businesses, property investors, and individuals. Trusted by 500+ clients across Melbourne & Australia. Get your free consultation today.",
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
  icons: {
    icon: [
      { url: "/logo/emblem.png?v=3" },
      { url: "/icon.png?v=3" },
      { url: "/favicon.ico?v=3" },
    ],
    shortcut: "/logo/emblem.png?v=3",
    apple: "/logo/emblem.png?v=3",
  },
};

import FloatingContact from "./components/FloatingContact";
import FloatingBorrowingPower from "./components/FloatingBorrowingPower";
import MaintenanceAdminBanner from "./components/MaintenanceAdminBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/png" href="/logo/emblem.png?v=3" />
        <link rel="apple-touch-icon" href="/logo/emblem.png?v=3" />
      </head>
      <body className="min-h-full flex flex-col">
        <MaintenanceAdminBanner />
        {children}
        <FloatingBorrowingPower />
        <FloatingContact />
      </body>
    </html>
  );
}

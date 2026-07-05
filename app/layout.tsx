import "./globals.css";
import { Vazirmatn, Figtree } from "next/font/google";

import TopNavigation from "./_components/top-navigation";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${figtree.variable}`}
    >
      <body className={`antialiased bg-secondary-900 text-sm`}>
        <TopNavigation />
        {children}
      </body>
    </html>
  );
}

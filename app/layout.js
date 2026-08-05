import "./globals.css";
import { Sora, Inter } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Vinay Keshari — Full Stack Developer",
  description:
    "Full Stack Developer (MERN & Next.js) with 10+ months of industry experience and 5+ months freelance, building scalable, production-grade web applications across fintech, e-commerce, and enterprise domains.",
  openGraph: {
    title: "Vinay Keshari — Full Stack Developer",
    description: "MERN & Next.js developer building production-grade web applications.",
    images: ["/vinay.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

// app/layout.js
import { Outfit, Ovo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = localFont({
  src: [
    {
      path: "../public/fonts/geist-mono/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono/GeistMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

// Open Graph / Twitter images are declared as site-relative paths on each
// project page, so Next needs an absolute base to resolve them against —
// without it, shared links would advertise images at localhost. Vercel exposes
// the deployment host as VERCEL_URL; NEXT_PUBLIC_SITE_URL overrides it with the
// custom domain once one is attached.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portfolio - Ronit Desai",
  description:
    "Full-stack developer. Five production-shaped case studies — HR operations, a SaaS starter, workflow automation, AI contract analysis, and product analytics — each with a live demo you can log into.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-dark-theme`}>
        {children}
      </body>
    </html>
  );
}

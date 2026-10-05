import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets:["latin"], variable:"--font-display", weight:["500","600","700"], display:"swap" });
const body = Inter({ subsets:["latin"], variable:"--font-body", weight:["400","500","600"], display:"swap" });
const mono = JetBrains_Mono({ subsets:["latin"], variable:"--font-mono", weight:["400","500"], display:"swap" });

export const metadata: Metadata = {
  title: "Hafeez Ullah — AI & Web Developer",
  description: "Portfolio of Hafeez Ullah, a Computer Science student and independent developer building modern websites and AI-powered products.",
  keywords: ["Hafeez Ullah","Hafeez Khan","AI developer","web developer","Next.js developer","Pakistan developer","Balochistan developer"],
  authors: [{ name:"Hafeez Ullah" }],
  icons: { icon:"/favicon.svg" },
  openGraph: {
    title:"Hafeez Ullah — AI & Web Developer",
    description:"Modern websites and AI-powered products built with purpose.",
    type:"website",
  },
};

export const viewport = { themeColor:"#07080b", width:"device-width", initialScale:1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
    <body>
      <a className="sr-only focus:not-sr-only" href="#main-content">Skip to content</a>
      {children}
    </body>
  </html>;
}

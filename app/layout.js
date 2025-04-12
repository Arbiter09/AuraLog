import { Fugaz_One, Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "context/AuthContext";
import Head from "./head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const opensans = Open_Sans({ subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "AuraLog",
  description: "Track your daily mood every day of the year",
};

const header = (
  <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
    <Link href={"/"}>
      <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
        AuraLog
      </h1>
    </Link>
    <div className="flex items-center justify-between">
      PLACEHOLDER CTA || STATS
    </div>
  </header>
);

const footer = (
  <footer className="p-4 sm:p-8 grid place-items-center">
    <p className={" text-indigo-500 " + fugaz.className}>Created by Jas</p>
    <p className={" text-indigo-500 " + fugaz.className}>
      <a
        href="https://www.linkedin.com/in/jas-shah-709854233/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-indigo-700 transition-colors duration-200"
      >
        LinkedIn
      </a>
    </p>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body
        className={`${opensans.className} w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800`}
      >
        <AuthProvider>
          {header}
          {children}
          {footer}
        </AuthProvider>
      </body>
    </html>
  );
}

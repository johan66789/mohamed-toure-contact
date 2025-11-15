import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOHAMED TOURE",
  icons: {
    icon: '/twentyfirst_consulting_logo.jpeg',  // Ton nouveau fichier dans /public (ajuste .png si c'est .ico ou autre)
    // Optionnel : pour multiples tailles/formats (ajoute les fichiers en /public si tu les as)
    // shortcut: '/twentyfirst_consulting_logo-16x16.png',
    // apple: '/twentyfirst_consulting_logo-apple-touch.png',  // Pour iOS (180x180)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
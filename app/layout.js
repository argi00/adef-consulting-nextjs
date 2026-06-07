import { Spectral, Archivo } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  title: "ADEF Consulting — Conseil, accompagnement & formation pour le développement",
  description:
    "ADEF, Consulting — Cabinet de consultance, d'appui-conseil, d'accompagnement et de formation basé à Dakar. Études-recherches, appui aux collectivités territoriales et formation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${spectral.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}

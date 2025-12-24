import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Inter-Variable.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Variable-Italic.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Ömer Şerif Yıldız",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={myFont.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
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

export const metadata = {
  title: "Craft Marshmallows",
  description: "Making custom marshmallow gifts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={"header"}>
          <div className={"container"}>
            <h1 className={"logo"}>Зефір на замовлення</h1>
            <nav className={"nav"}>
              <a href="#about">Про нас</a>
              <a href="#products">Продукція</a>
              <a href="#contact">Контакти</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

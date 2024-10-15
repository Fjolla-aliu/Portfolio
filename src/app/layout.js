import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fjolla Aliu - Portfolio",
  description:
    "Welcome to Fjolla Aliu's portfolio, where code meets creativity. Dive into my world of innovative software development, showcasing dynamic applications and intuitive web solutions that bring ideas to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

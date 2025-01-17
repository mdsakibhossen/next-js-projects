import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"],weight: ["400","500","700"] });

export const metadata = {
  title: "Next JS Projects | Home",
  description: "Next Js Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "all-in-one",
  description: "Revolutionizing Trading with AI Innovation and Rewards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

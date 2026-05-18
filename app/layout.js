import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "The Customer Continuum — Kevin Lau",
  description:
    "Customer-Led Growth playbooks for B2B teams. Practical frameworks on advocacy, lifecycle, and turning customers into your #1 growth engine.",
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

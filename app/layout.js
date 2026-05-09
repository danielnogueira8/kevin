import "./globals.css";

export const metadata = {
  title: "Newsletter Landing Page",
  description: "Join our Substack newsletter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

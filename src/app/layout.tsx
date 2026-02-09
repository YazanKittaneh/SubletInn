import type { Metadata } from "next";
import "./globals.css";
import SiteSelector from "@/components/SiteSelector";

export const metadata: Metadata = {
  title: "SubletInn | Coliving for Young Professionals",
  description:
    "SubletInn creates communities for young professionals through curated coliving houses in Chicago. Furnished rooms, utilities included, and a built-in community.",
  openGraph: {
    title: "SubletInn | Coliving for Young Professionals",
    description:
      "Furnished coliving houses with a built-in community of ambitious young professionals. All utilities included.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <SiteSelector />
      </body>
    </html>
  );
}

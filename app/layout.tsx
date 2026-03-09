import "./globals.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SEO } from "../seo/seo";

export const metadata = {
  title: SEO.global.title,
  description: SEO.global.description,
  keywords: SEO.global.keywords,

  openGraph: {
    title: SEO.global.title,
    description: SEO.global.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        <AppRouterCacheProvider>
          <Cursor />
          <Navbar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
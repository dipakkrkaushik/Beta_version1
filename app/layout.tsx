import "./globals.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export const metadata = {
  title: "Digital Marketing Agency in NCR | SEO, SMM, Web Development",
  description:
    "Leading digital marketing agency in NCR offering SEO services, social media marketing, website development, branding, and online business growth solutions.",
  keywords: [
    "Digital Marketing Agency NCR",
    "SEO Services NCR",
    "Best SEO Company NCR",
    "Social Media Marketing NCR",
    "Website Development Company NCR",
    "Online Marketing Services NCR",
    "Business Growth Marketing",
    "Google Ads Agency NCR",
    "Content Marketing NCR",
    "Digital Marketing Services India"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
import "./globals.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export const metadata = {
  title: "Digital Agency",
  description: "Digital agency provides web development and AI services.",
  icons: {
    icon: "/components/abc.png",
  },
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
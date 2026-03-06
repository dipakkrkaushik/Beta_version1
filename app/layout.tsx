import "./globals.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export const metadata = {
  title: "ProjectAgency1",
  description: "ProjectAgency1 provides web development and AI services.",
  icons: {
    icon: "/favicon.ico",
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
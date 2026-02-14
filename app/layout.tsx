import "./globals.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

export const metadata = {
  title: "Test",
  description: "Test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        <Cursor /> {/* Custom cursor */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}

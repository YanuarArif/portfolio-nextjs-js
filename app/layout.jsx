import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme provider dari shadcn-ui bisa untuk mengotrol dark/light theme
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Next.js",
  description:
    "Membuat Portfolio dengan Next.js. Nanti akan menjadi landing page panti asuhan.",
};

export default function RootLayout({ children }) {
  return (
    // or use suppressHydrationWarning
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="Light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

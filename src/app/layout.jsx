import { Lexend } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "RoastMe.AI 🔥 | The Gen-Z Roaster Bot",
  description: "Upload your selfie and get roasted by our AI. It's all in good fun!",
  keywords: "AI roast, funny roast, Gen-Z, roast generator, RoastMe.AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import LoadingPage from "@/components/Loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Navbar App",
  description: "Next.js + Tailwind CSS Navbar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        {/* Global HTML loader */}
        <div
          id="global-loader"
          style={{
            position: "fixed",
            inset: 0,
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <span>Loading...</span>
        </div>

        <Suspense fallback={<LoadingPage />}>
          <Navbar />
          <main className="px-3 sm:px-3 md:px-4 lg:px-6 xl:px-8">
            {children}
          </main>
          <Footer />
        </Suspense>

        {/* Script to hide loader after JS loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                var loader = document.getElementById('global-loader');
                if (loader) loader.style.display = 'none';
              });
            `,
          }}
        />
      </body>
    </html>
  );
}

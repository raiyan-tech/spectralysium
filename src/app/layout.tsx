import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spectralysium - Creative Tech Studio",
  description: "Indonesia's creative-tech engine for film, XR and IP. Build worlds. Train models. Ship stories.",
  keywords: ["VFX", "volumetric", "AI", "film", "XR", "AR", "VR", "Indonesia", "Jakarta", "creative technology"],
  authors: [{ name: "Spectralysium" }],
  openGraph: {
    title: "Spectralysium - Creative Tech Studio",
    description: "From Jakarta to the world — Indonesia's creative-tech engine for film, XR and IP.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

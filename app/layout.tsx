import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinod Mali | Profile",
  description: "Vinod Mali Software Engineer working at BBD software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-43RTSK8GHZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-43RTSK8GHZ');
            `,
          }}
        />

        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Vinod Mali's portfolio showcasing his projects, skills, and professional experience."
        />
        <meta
          property="og:title"
          content="Vinod Mali | Software Engineer Intern"
        />
        <meta
          property="og:description"
          content="Vinod Mali's portfolio showcasing his projects, skills, and professional experience."
        />
        <meta property="og:url" content="https://vm2124.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

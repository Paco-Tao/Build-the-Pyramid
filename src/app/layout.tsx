import { AdsterraPopunderGate, AdsterraSocialBarGate, AdsterraStickyRail, AdsterraGlobalFallback } from "@/components/ads";
import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { GoogleAnalyticsPageView } from "@/components/analytics/GoogleAnalyticsPageView";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { runtimeConfig } from "@/lib/runtime-config";
import { siteConfig } from "@/data/site";
import "./globals.css";
import "./production-experience-accessibility.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Build the Pyramid Wiki",
    template: `%s | ${siteConfig.gameName}`
  },
  description: "You are finished when only indexed page explaining the actual loop with the verified first-pyramid scale (171,700 blocks) plus the exact 2x-250x gym requirement ladder.",
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "Build the Pyramid Wiki",
    description: "You are finished when only indexed page explaining the actual loop with the verified first-pyramid scale (171,700 blocks) plus the exact 2x-250x gym requirement ladder."
  },
  twitter: {
    card: "summary_large_image",
    title: "Build the Pyramid Wiki",
    description: "You are finished when only indexed page explaining the actual loop with the verified first-pyramid scale (171,700 blocks) plus the exact 2x-250x gym requirement ladder."
  }
};

export const viewport: Viewport = {
  themeColor: "#101114"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsId = runtimeConfig.analyticsId;
  const analyticsIdJson = JSON.stringify(analyticsId);

  return (
    <html lang="en">
      <body className="font-sans">
        <AdsterraPopunderGate />
        <AdsterraSocialBarGate />
        {analyticsId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${analyticsIdJson}, { send_page_view: false });
              `}
            </Script>
            <Suspense fallback={null}>
              <GoogleAnalyticsPageView measurementId={analyticsId} />
            </Suspense>
          </>
        ) : null}
        <Navbar />
        <AdsterraGlobalFallback />
        {children}
        <AdsterraStickyRail />
        <Footer />
      </body>
    </html>
  );
}

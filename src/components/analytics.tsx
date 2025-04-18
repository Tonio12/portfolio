"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function Analytics() {
  const [consented, setConsented] = useState(false);
  
  useEffect(() => {
    // Check if user already consented
    const hasConsented = localStorage.getItem("analytics-consent") === "true";
    setConsented(hasConsented);
  }, []);
  
  // Load analytics only if user has consented
  if (!consented) {
    return null;
  }
  
  return (
    <>
      {/* Google Analytics Example - Replace with your preferred analytics solution */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with your GA ID
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { 
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Check if user already made a choice
    const hasConsented = localStorage.getItem("analytics-consent");
    if (hasConsented === null) {
      setShowBanner(true);
    }
  }, []);
  
  const handleConsent = (consent: boolean) => {
    localStorage.setItem("analytics-consent", String(consent));
    setShowBanner(false);
    
    // Reload to activate analytics if consented
    if (consent) {
      window.location.reload();
    }
  };
  
  if (!showBanner) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          This website uses cookies to enhance your browsing experience and analyze site traffic.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 text-sm rounded-md bg-muted hover:bg-muted/80 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="px-4 py-2 text-sm rounded-md bg-[#b69121] text-white hover:bg-[#b69121]/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 
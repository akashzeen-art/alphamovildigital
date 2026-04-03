import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Platform from "./pages/Platform";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/DigitalMarketing";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import Partners from "./pages/Partners";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <SiteLayout showFooter={false}>
                <Index />
              </SiteLayout>
            }
          />
          <Route
            path="/about"
            element={
              <SiteLayout>
                <About />
              </SiteLayout>
            }
          />
          <Route
            path="/digital-marketing"
            element={
              <SiteLayout>
                <DigitalMarketing />
              </SiteLayout>
            }
          />
          <Route
            path="/services"
            element={
              <SiteLayout>
                <Services />
              </SiteLayout>
            }
          />
          <Route
            path="/platform"
            element={
              <SiteLayout>
                <Platform />
              </SiteLayout>
            }
          />
          <Route
            path="/content"
            element={
              <SiteLayout>
                <Content />
              </SiteLayout>
            }
          />
          <Route
            path="/partners"
            element={
              <SiteLayout>
                <Partners />
              </SiteLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <SiteLayout>
                <Contact />
              </SiteLayout>
            }
          />
          <Route
            path="/social-media-marketing"
            element={
              <SiteLayout>
                <SocialMediaMarketing />
              </SiteLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <SiteLayout>
                <NotFound />
              </SiteLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { ReactNode } from "react";

export default function SiteLayout({
  children,
  showFooter = true,
  showLoader = true,
}: {
  children: ReactNode;
  showFooter?: boolean;
  showLoader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {showLoader ? <Loader /> : null}
      <Header />

      <div className="flex-1">{children}</div>

      {showFooter ? <Footer /> : null}
    </div>
  );
}


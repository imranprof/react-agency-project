import React from "react";
import BrandingHeader from "@/components/headers/BrandingHeader";
import Footer1 from "@/components/footer/Footer1";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ScrollSmootherComponent />

      <div className="relative leading-[1]">
        <BrandingHeader />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className=" ">{children}</div>
            <Footer1 footerNav={navigation.footer1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

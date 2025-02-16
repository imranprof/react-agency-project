import React from "react";
import SeoHeader from "@/components/headers/SeoHeader";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import Footer3 from "@/components/footer/Footer3";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ScrollSmootherComponent />

      <div className="">
        <SeoHeader />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className=" ">{children}</div>
            <Footer3 footerNav={navigation.footer3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

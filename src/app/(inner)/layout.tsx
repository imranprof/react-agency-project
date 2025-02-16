import Footer2 from "@/components/footer/Footer2";
import BrandingHeader from "@/components/headers/BrandingHeader";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="font-primary leading-none">
      <ScrollSmootherComponent />
      <BrandingHeader headerType="inner" />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div>{children}</div>
          <Footer2 data={navigation.footer2} />
        </div>
      </div>
    </div>
  );
};

export default Layout;

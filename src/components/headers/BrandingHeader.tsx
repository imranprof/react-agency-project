"use client";
import { useState, useEffect } from "react";
import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import SwapButtonGroup from "@/components/elements/button/SwapButtonGroup";
import { FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";
import CustomButton from "../elements/button/CustomButton";

type Props = {
  headerType?: string;
};

const BrandingHeader = ({ headerType }: Props) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "absolute top-0 inset-x-0 z-50",
          isSticky && "!fixed top-0 z-1000 transition-all bg-white h-[70px]"
        )}
      >
        <div className={clsx("container")}>
          <div
            className={clsx(
              "flex h-[80px] xxl:h-[100px] items-center gap-[20px] relative justify-between",
              isSticky && "!h-[70px]"
            )}
          >
            <Logo />
            <div className="pos-center hidden lg:block">
              <Menu />
            </div>
            {headerType === "inner" ? (
              <CustomButton
                btnText="Get Started"
                link="/contact"
                className="text-[14px] py-3 px-7 bg-black text-white [border-radius:0_20px_0_20px] font-medium"
              />
            ) : (
              <SwapButtonGroup
                button1Content={
                  <FaArrowRight className="transform rotate-[-45deg] text-[14px]" />
                }
                button2Content="Get Started"
                button1Class="text-white bg-black h-[40px] w-[40px]  text-[14px] rounded-full
                  last:ms-0 last:me-[-40px] group-hover:me-0 group-hover:first:ms-[-40px]"
                button2Class="text-[15px] text-white px-[22px]  text-white bg-black rounded-[40px] font-normal"
                textFirst={true}
                link="/contact"
              />
            )}
            <SideNavModal />
          </div>
        </div>
      </header>
    </>
  );
};

export default BrandingHeader;

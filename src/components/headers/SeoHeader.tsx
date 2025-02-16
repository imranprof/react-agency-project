"use client";
import { useState, useEffect } from "react";
import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import clsx from "clsx";
import CustomButton from "../elements/button/CustomButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  headerType?: string;
};

const SeoHeader = ({ headerType }: Props) => {
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
        <div className={clsx("inner-container large")}>
          <div
            className={clsx(
              "flex h-[80px] items-center gap-[20px] relative justify-between",
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
              <Link
                className={cn(
                  buttonVariants({ variant: "Seo" }),
                  "!py-[13px] !px-5 bg-yellow-2 text-black-primary"
                )}
                href={"/contact"}
              >
                <span data-text="Get Started">Get Started</span>
              </Link>
            )}
            <SideNavModal />
          </div>
        </div>
      </header>
    </>
  );
};

export default SeoHeader;

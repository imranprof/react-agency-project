"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "@/lib/plugins";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherComponent = () => {
  const pathname = usePathname();
  let history = "";

  useGSAP(() => {
    if (history !== pathname) {
      try {
        let device_width = window.innerWidth;
        ScrollSmoother.create({
          smooth: 1,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: true,
          ignoreMobileResize: true,
        });
      } catch (e) {
        console.log("scrollSmootherError", e);
      }
    }
  }, []);
  return <div></div>;
};

export default ScrollSmootherComponent;

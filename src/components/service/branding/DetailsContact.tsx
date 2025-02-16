"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
type Props = {
  contactTitle: string;
  btn_text: string;
};

const DetailsContact = ({ contactTitle, btn_text }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const textMovRef = useRef<HTMLHeadingElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim(textMovRef.current);
    },
    { scope: containerRef }
  );

  return (
    <div>
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className="main-section-spacing px-[30px] bg-black relative z-[1] overflow-hidden ">
          <div className="shape-1 absolute hidden -right-[6%] sm:block w-[270px] top-[-35%] md:w-[340px] md:top-[-45%] lg:w-[440px] xl:top-[-15%] z-[-1] ">
            <img src="/assets/imgs/shape/img-s-73.webp" alt="shape-1" />
          </div>
          <div className="text-center ">
            <div>
              <div>
                <h2
                  ref={textMovRef}
                  className=" font-normal leading-[1.08] font-beatricetrial text-white inner-section-title mx-auto max-w-[480px] md:max-w-[580px] lg:max-w-[730px] xxl:max-w-[830px]"
                >
                  {contactTitle}
                </h2>
              </div>
            </div>
            <div className="has_fade_anim text-center mt-[22px] md:mt-[42px] uppercase text-white">
              <a
                href="/contact"
                className="wc-btn-underline btn-text-flip text-white gap-[10px] pb-1 text-[14px] leading-none"
              >
                <span data-text="Let's get in touch">{btn_text}</span>
                <img
                  src="/assets/imgs/icon/arrow-right-half-light.webp"
                  alt="icon-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContact;

"use client";

import { useRef } from "react";
import PricingCard from "@/components/service/branding/PricingCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type pricingProps = {
  pricing: {
    title: string;
    cards: {
      tag: string;
      price: string;
      feature_list: {
        text: string;
      }[];
      btn_title: string;
    }[];
  };
};

const PricingArea = ({ pricing }: pricingProps) => {
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
    <div className="">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" main-section-spacing">
          <div className=" text-center">
            <div className="">
              <div className="">
                <h2
                  ref={textMovRef}
                  className=" font-normal inner-section-title max-w-[680px] mx-auto"
                >
                  {pricing.title}
                </h2>
              </div>
            </div>
          </div>
          <div className=" mt-[37px] lg:mt-[47px] xl:mt-[57px]">
            <div className=" grid gap-[30px] sm:grid-cols-2 md:grid-cols-3">
              {pricing.cards.map((card, index) => (
                <div
                  className="has_fade_anim"
                  key={index}
                  data-fade-from="left"
                  data-delay={(index + 1) * 0.15}
                >
                  <PricingCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;

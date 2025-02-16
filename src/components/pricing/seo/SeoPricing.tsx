"use client";
import PricingFaqs from "@/components/pricing/seo/PricingFaqs";
import PricingCard from "@/components/pricing/seo/PricingCard";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type TPricingProps = {
  pricingSection: {
    title: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
  pricing: {
    cards: {
      tag: string;
      price: string;
      feature_list: {
        text: string;
      }[];
      action_btn: {
        label: string;
        link: string;
      };
    }[];
  };
};

const SeoPricing = ({ pricingSection, pricing }: TPricingProps) => {
  const { title, faqs } = pricingSection;
  const containerRef = useRef<HTMLDivElement>(null!);
  const textMovRef = useRef<HTMLHeadingElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim(textMovRef?.current);
    },
    { scope: containerRef }
  );

  return (
    <section className="pricing_area">
      <div className="inner-container" ref={containerRef}>
        <div className=" main-section-spacing">
          <div className=" grid gap-y-[30px] gap-x-[60px] md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_480px]">
            <div className="">
              <div className="">
                <h2
                  ref={textMovRef}
                  className="seo-section-title max-w-[610px]"
                  dangerouslySetInnerHTML={convertWithBrSpan(title)}
                />
              </div>
            </div>
            <div
              className="accordion_wrapper has_fade_anim"
              data-fade-from="left"
            >
              <PricingFaqs faqs={faqs} />
            </div>
          </div>
          <div className=" mt-[60px] xl:mt-20 xxl:mt-[100px]">
            <div className=" grid gap-[30px] sm:grid-cols-2 md:grid-cols-3">
              {pricing.cards.map((item, index) => (
                <div
                  key={index}
                  className="has_fade_anim"
                  data-delay={(index + 1) * 0.15}
                >
                  <PricingCard pricing={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoPricing;

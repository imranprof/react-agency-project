"use client";

import { TSeoFeatureType } from "@/types";
import FeatureCard from "@/components/features/seo/FeatureCard";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  featuresData: TSeoFeatureType;
};

const SeoFeatures = ({ featuresData }: Props) => {
  const { title, description, features } = featuresData;
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
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" section-spacing-top">
          <div className=" grid items-center gap-y-5 gap-x-[60px] md:grid-cols-[1fr,330px] lg:grid-cols-[1fr,430px]">
            <div className="">
              <div className="">
                <h2
                  ref={textMovRef}
                  className="seo-section-title max-w-[670px]"
                  dangerouslySetInnerHTML={convertWithBrSpan(title)}
                />
              </div>
            </div>
            <div className="">
              <p className=" has_fade_anim">{description}</p>
            </div>
          </div>
          <div className=" mt-[52px] xl:mt-[72px] xxl:mt-[92px]">
            <div className=" grid gap-y-10 gap-x-[30px] xs:grid-cols-2 md:grid-cols-4">
              {features.map((feature, index) => (
                <FeatureCard feature={feature} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoFeatures;

"use client";

import { useRef } from "react";
import { TServiceInnerType } from "@/types";
import ServiceInnerCard from "@/components/service/branding/ServiceInnerCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { convertWithBr } from "@/lib/helper/converter";

const ServiceInnerArea = ({ data }: TServiceInnerType) => {
  const { title, description, services } = data;

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
    <div className=" main-section-spacing">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" pb-[57px] grid items-center md:grid-cols-[1fr_420px]">
          <div className="">
            <h2
              ref={textMovRef}
              className=" font-normal inner-section-title"
              dangerouslySetInnerHTML={convertWithBr(title)}
            />
          </div>
          <div className="content">
            <p className="text has_fade_anim">{description}</p>
          </div>
        </div>
        <div className=" overflow-hidden">
          <div className=" grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[50px] mx-[-30px] xl:mx-[-70px]">
            {services.map((item, index) => (
              <div
                key={item.id}
                className="has_fade_anim"
                data-delay={(index + 1) * 0.15}
              >
                <ServiceInnerCard service={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInnerArea;

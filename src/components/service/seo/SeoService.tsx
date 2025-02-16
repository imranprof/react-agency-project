"use client";

import Image from "next/image";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { TServiceType } from "@/types";
import ServiceCard from "@/components/service/seo/ServiceCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  service: {
    data: {
      title: string;
      bg_image: string;
    };
  };
  services: TServiceType[];
};

const SeoService = ({ service, services }: Props) => {
  const { title, bg_image } = service.data;
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
    <div className="inner-container large" ref={containerRef}>
      <section className=" bg-[#121212] relative z-[1] px-[15px] md:px-[45px]">
        <div className=" main-section-spacing">
          <div className="bg absolute w-full h-full top-0 start-0 z-[-1]">
            <Image
              src={bg_image}
              alt="bg img"
              width={1779}
              height={1122}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="inner-container">
            <div className="">
              <div className="">
                <div className="">
                  <h2
                    ref={textMovRef}
                    className="seo-section-title max-w-[700px] text-white"
                    dangerouslySetInnerHTML={convertWithBrSpan(title)}
                  />
                </div>
              </div>
            </div>
            <div className="services_wrapper_box mt-[50px] xl:mt-[70px] xxl:mt-[90px]">
              <div className="services_wrapper">
                {services.map((item, index) => (
                  <ServiceCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoService;

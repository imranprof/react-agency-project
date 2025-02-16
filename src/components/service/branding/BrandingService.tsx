"use client";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { TServiceType } from "@/types";
import ServiceCard from "@/components/service/branding/ServiceCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  service: {
    data: {
      title: string;
      info: string;
      btn_text: string;
    };
    content: any;
  };
  services: TServiceType[];
};

const BrandingService = ({ service, services }: Props) => {
  const pinContent = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinContent.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section
      ref={pinContent}
      className="main-section-style bg-black text-white"
    >
      <div ref={containerRef} className="container">
        <div className="service-area-inner main-section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="has_fade_anim main-section-title text-white max-w-[845px] font-semibold font-instrument">
                  {service.data.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="service-wrapper-box mt-[50px] lg:mt-[70px] xl:mt-[90px]">
            <div className="service-wrapper grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((item, index) => (
                <ServiceCard key={index} {...item} />
              ))}
            </div>
          </div>
          <div
            className="has_fade_anim info-text text-center mt-[50px] lg:mt-[60px] xl:mt-[70px] "
            data-fade-from="left"
          >
            <p className="text bg-black-3 max-w-[500px] leading-[1.41] text-[18px] inline-block text-center rounded-[100px] py-[19px] px-[41px] text-current">
              {service.data.info}
              <br />
              <a className="wc-btn-underline font-normal tracking-normal relative inline-flex items-center gap-[10px] whitespace-nowrap">
                {service.data.btn_text}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingService;

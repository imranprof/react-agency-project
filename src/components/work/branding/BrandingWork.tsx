"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import hasPinContent from "@/lib/animation/hasPinContent";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import WorkCard from "@/components/work/branding/WorkCard";
import WorkFooter from "@/components/work/branding/WorkFooter";
import { TWorkType } from "@/types";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type TBrandingWorks = {
  works: TWorkType[];
  work: {
    title: string;
    footer_description: string;
    footer_btn_text: string;
  };
};

const BrandingWork = ({ works, work }: TBrandingWorks) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="work-area section-item bg-white mb-[130px] mt-[-130px] rounded-[30px_30px_0_0] md:rounded-[50px_50px_0_0] lg:rounded-[80px_80px_0_0] relative z-10 overflow-hidden "
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing">
          <div className="flex flex-col sm:grid gap-y-[30px] gap-x-15 sm:grid-cols-[1fr_auto] items-center">
            <div>
              <div>
                <h2 className="has_fade_anim section-title max-w-[300px] text-[28px] mt-[-5px] xs:text-[30px] xs:-mt-2 sm:text-[36px] sm:mt-[-10px] md:text-[40px] md:-mt-3 lg:text-[50px] lg:-mt-4 xl:text-[60px] xl:-mt-5 xxl:text-[70px] xxl:-mt-6 font-instrument font-semibold leading-[1]">
                  {work.title}
                </h2>
              </div>
            </div>
            <div className="">
              <div
                className="has_fade_anim link-meta flex gap-y-[10px] gap-x-10"
                data-fade-from="left"
              >
                <div className="flex items-center gap-3">
                  <div className="icon border-[1px] border-solid w-10 h-10 rounded-[10px]  flex justify-center items-center text-[18px]">
                    <FaDribbble />
                  </div>
                  <div className="leading-[1]">
                    <span className="text-[10px] uppercase leading-[1] inline-block font-instrument font-medium text-[#999]">
                      Follow
                    </span>
                    <h2 className="name text-[18px] leading-[1] font-medium mt-[5px] font-instrument">
                      Dribbble
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon border-[1px] border-solid w-10 h-10 rounded-[10px]  flex justify-center items-center text-[18px]">
                    <FaBehance />
                  </div>
                  <div className="leading-[1]">
                    <span className="text-[10px] uppercase leading-[1] inline-block font-instrument font-medium text-[#999]">
                      Follow
                    </span>
                    <h2 className="name text-[18px] leading-[1] font-medium mt-[5px] font-instrument">
                      Behance
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="works-wrapper-box mt-10 lg:mt-[60px]">
            <div className="works-wrapper grid gap-y-10 gap-x-[30px] grid-cols-1 sm:grid-cols-2 lg:gap-y-[90px] lg:gap-x-[30px]">
              {works.map((work) => (
                <WorkCard key={work.data.id} {...work} />
              ))}
            </div>
          </div>
          <WorkFooter
            footer_btn_text={work.footer_btn_text}
            footer_description={work.footer_description}
          />
        </div>
      </div>
    </section>
  );
};

export default BrandingWork;

"use client";

import Image from "next/image";
import { useRef } from "react";
import { TWorkType } from "@/types";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const WorkDetails = ({ data, content }: TWorkType) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="work-details-area pt-[80px] xl:pt-[100px]">
      <div className="relative z-1">
        <div className="absolute w-full h-full top-0 left-0 -z-10">
          <Image
            src={data.image}
            alt={data.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-50"></div>
        </div>
        <div className="container xxl:max-w-[1320px]" ref={containerRef}>
          <div className=" pt-[180px] pb-[43px] lg:pt-[280px] lg:pb-[63px] xxl:pt-[480px] xxl:pb-[113px]">
            <div className="">
              <div className="">
                <div className="">
                  <h1 className=" has_fade_anim sm:w-1/2  font-beatricetrial uppercase leading-[1] text-white text-[35px] mt-0 sm:text-[40px] sm:mt-[-11px] md:text-[44px] md:mt-[-12px] lg:text-[55px] lg:mt-[-15px] xl:text-[60px] xl:mt-[-17px] xxl:text-[60px] xxl:mt-[-17px]">
                    {data.title}
                  </h1>
                </div>
              </div>
              <ul className="work-meta pl-0 pt-[27px] sm:pl-[80px] has_fade_anim">
                <li>
                  <span className=" text-[18px] font-medium text-white block leading-[24px]">
                    Date
                  </span>
                  <span className="text text-[14px] font-medium leading-[24px] text-white">
                    {data.date}
                  </span>
                </li>
                <li className="mt-[23px]">
                  <span className=" text-[18px] font-medium text-white block leading-[24px]">
                    Client
                  </span>
                  <span className="text text-[14px] font-medium leading-[24px] text-white">
                    Art Direction, Web Design, Production
                  </span>
                </li>
                <li className="mt-[23px]">
                  <a
                    href="#"
                    className="btn-normal text-[14px] leading-[24px] font-medium text-white btn-text-flip"
                  >
                    <span data-text="( View Website )">( View Website )</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;

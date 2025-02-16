"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";

type TStatsProp = {
  reportData: {
    title: string;
    stats_image: {
      dark: string;
      light: string;
    };
    satisfaction: {
      percentage: number;
      info: string;
    };
  };
};

const SeoReport = ({ reportData }: TStatsProp) => {
  const { title, stats_image, satisfaction } = reportData;
  const containerRef = useRef<HTMLDivElement>(null!);
  const countRef = useRef<HTMLSpanElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim(countRef?.current, satisfaction.percentage);
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" section-spacing-top ">
          <div className=" text-center">
            <div className="">
              <div className="">
                <h2
                  className="seo-section-title has_fade_anim max-w-[580px] mx-auto"
                  dangerouslySetInnerHTML={convertWithBrSpan(title)}
                />
              </div>
            </div>
          </div>
          <div className=" has_fade_anim mt-[52px] xl:mt-[72px] xxl:mt-[82px]">
            <div className=" grid gap-y-10 gap-x-[60px] md:grid-cols-[1fr_270px] lg:grid-cols-[1fr_290px] xl:grid-cols-[1fr_340px] justify-between">
              <div className="report_graph max-w-[860px]">
                <Image
                  src={stats_image.dark}
                  className=" max-w-full h-auto w-full object-cover"
                  alt="gallery dark"
                  width={850}
                  height={280}
                />
                <Image
                  src={stats_image.light}
                  className=" hidden max-w-full"
                  alt="gallery light"
                  width={850}
                  height={280}
                />
              </div>
              <div className="">
                <h3 className=" text-[100px] xs:text-[150px] sm:text-[180px] lg:text-[200px] xl:text-[250px] font-normal flex items-start leading-[.75] font-spacegrotesk">
                  <span ref={countRef}>{satisfaction.percentage}</span>{" "}
                  <span className=" text-[20px] xs:text-[30px] ms-[2px] font-medium ">
                    %
                  </span>
                </h3>
                <h3
                  className="seo-report-info text-lg lg:text-[22px] leading-[1.23] font-normal mt-[22px] lg:mt-[42px] text-black-2"
                  dangerouslySetInnerHTML={convertWithBrSpan(satisfaction.info)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoReport;

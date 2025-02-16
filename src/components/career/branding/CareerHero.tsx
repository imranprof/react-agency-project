"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBrSpanImg } from "@/lib/helper/converter";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
};

const CareerHero = ({ hero }: Props) => {
  const { title, subtitle, description, image } = hero;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className=" bg-[#121212]">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" pt-[128px] lg:pt-[158px] xl:pt-[178px] xxl:pt-[218px]">
          <div className="">
            <div className="">
              <div className="">
                <h1
                  className="has_fade_anim career-section-title max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] xxl:max-w-[1100px] text-white inner-section-title large"
                  dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
                />
              </div>
            </div>
            <div className=" grid gap-y-5 gap-x-[70px] grid-cols-[auto] md:grid-cols-[auto_1fr] sm:ms-[156px] mt-[24px] lg:mt-[34px] xl:mt-[44px]">
              <div className=" mt-1">
                <span
                  className="has_fade_anim pe-[100px] text-[16px] inline-block leading-none uppercase text-white relative"
                  data-fade-from="left"
                  data-delay=".30"
                >
                  {subtitle}
                  <span className="absolute w-20 h-[2px] bg-white-2 top-1/2 -translate-y-1/2 end-0" />
                </span>
              </div>
              <div className="">
                <p
                  className="has_fade_anim max-w-[350px] text-white-2"
                  data-fade-from="left"
                  data-delay=".45"
                >
                  {description}
                </p>
              </div>
            </div>
            <div className=" mt-[34px] lg:mt-[44px] xxl:mt-[64px]">
              <Image
                src={image}
                alt="thumb_image"
                width={1290}
                height={600}
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;

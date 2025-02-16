"use client";

import Image from "next/image";
import { useRef } from "react";
import { TAboutAward } from "@/types";
import AwardCard from "@/components/about/branding/AwardCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  data: TAboutAward;
};

const AboutAward = ({ data }: Props) => {
  const { title, sub_title, description, images, awards_list } = data;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" main-section-spacing relative z-10">
          <div className="">
            <div className=" grid md:items-end gap-5 md:gap-[50px] md:grid-cols-[330px_1fr] xxl:grid-cols-[390px_1fr]">
              <div className=" mb-[10px] md:-mb-10 lg:-mb-[70px] xl:-mb-[50px]">
                <span className="  text-[16px] inline-block uppercase ps-[140px] relative">
                  <span className="absolute w-20 h-[2px] bg-white-2 top-1/2 -translate-y-1/2 start-0"></span>
                  {sub_title}
                  <span className="absolute hidden md:inline-block w-[1px] h-[75px] bg-current start-[57px] bottom-[-15px]"></span>
                </span>
              </div>
              <div className="">
                <h2 className="has_fade_anim inner-section-title font-normal">
                  {title}
                </h2>
              </div>
            </div>
          </div>
          <div className=" md:ms-[378px] xxl:ms-[438px] mt-[22px] lg:mt-[52px] xl:mt-[27px]">
            <div className="">
              <p
                className="= has_fade_anim max-w-[630px]"
                data-fade-from="left"
              >
                {description}
              </p>
            </div>
            <div className=" mt-[33px] md:mt-[43px] has_fade_anim">
              <ul className="flex gap-y-5 gap-x-10 max-w-[460px] justify-between">
                {awards_list.map((item, index) => (
                  <AwardCard cardData={item} key={index} />
                ))}
              </ul>
            </div>
          </div>

          <div className=" flex gap-y-5 gap-x-5 sm:gap-x-[50px] justify-end mt-[43px] xl:mt-[63px]">
            <div className=" has_fade_anim" data-fade-from="right">
              <Image src={images[0]} alt="image_1" width={350} height={210} />
            </div>
            <div className=" max-w-[570px] xl:max-w-[670px] flex-1 basis-auto grow">
              <Image
                src={images[1]}
                alt="image_2"
                width={330}
                height={460}
                className="has_fade_anim"
                data-fade-from="left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAward;

"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  communityData: {
    title: string;
    description: string;
    gallery: string[];
  };
};

const TeamCommunity = ({ communityData }: Props) => {
  const { title, description, gallery } = communityData;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" main-section-spacing">
          <div className="">
            <div className="">
              <div className="">
                <h2 className="has_fade_anim inner-section-title font-normal font-beatricetrial max-w-[750px] mt-[-10px] mx-auto text-center md:!text-[36px]">
                  {title}
                </h2>
              </div>
            </div>
            <div className=" mt-[23px]">
              <p className="has_fade_anim lg:text-[24px] leading-[1.27] max-w-[850px] mx-auto text-center">
                {description}
              </p>
            </div>
            <div className=" mt-[43px] lg:mt-[53px] xl:mt-[63px]">
              <div className="has_fade_anim grid gap-[30px] grid-cols-[auto_auto_auto]">
                <div className="mt-[30px] lg:mt-[120px] xl:mt-[140px]">
                  <div className="thumb">
                    <Image
                      src={gallery[0]}
                      alt="thumb_1"
                      width={300}
                      height={450}
                    />
                  </div>
                </div>
                <div className="mt-[10px] sm:mt-[30px]">
                  <div className="thumb">
                    <Image
                      src={gallery[1] || gallery[0]}
                      alt="thumb_2"
                      width={520}
                      height={700}
                    />
                  </div>
                </div>
                <div className="mt-[70px]">
                  <div className="thumb">
                    <Image
                      src={gallery[2] || gallery[0]}
                      alt="thumb_3"
                      width={230}
                      height={140}
                    />
                  </div>
                  <div className="thumb mt-[10px] sm:mt-[30px]">
                    <Image
                      src={gallery[3] || gallery[0]}
                      alt="thum_4"
                      width={410}
                      height={330}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCommunity;

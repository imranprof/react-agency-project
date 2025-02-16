"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import AboutArea from "@/components/hero/branding/AboutArea";
import VideoModal from "@/components/tools/VideoModal";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import { HeroProps } from "@/types";
import hasCharAnim from "@/lib/animation/hasCharAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const BrandingHero = ({ hero }: HeroProps) => {
  const wordRef = useRef<HTMLHeadingElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);
  const { title, sub_title, description, image, video, action_btn1 } =
    hero.data;

  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };
  const pinElement = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasCharAnim(wordRef.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={pinElement} className="hero-area z-10 pb-[130px] relative">
      <div className="absolute w-full h-full -z-10 top-0 start-0">
        <Image
          src={image}
          alt="Hero image"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
          height={2110}
          width={1920}
        />
      </div>
      <div ref={containerRef} className="container">
        <div
          className="pt-[120px] pb-[50px] sm:pb-[80px]
                md:pb-[120px] xl:pb-[150px]
                xxl:pt-[200px] xxl:pb-[200px]"
        >
          <div
            className=" grid gap-y-[30px]  gap-x-[60px] grid-cols-auto items-end md:grid-cols-[auto,335px] 
                    xl:grid-cols-[auto,435px]"
          >
            <div className="">
              <div className="">
                <h1
                  ref={wordRef}
                  className="branding-hero-title font-getaway text-[54px] uppercase leading-[0.83] tracking-[0] font-normal mt-0 mb-0
                                xs:text-[80px] xs:mt-[-2px] xs:mb-[-14px]
                                sm:text-[130px] sm:mt-[-2px] sm:mb-[-10px] sm:tracking-[-0.04em]
                                lg:text-[170px] lg:mb-[-14px]
                                xxl:text-[300px] xxl:mt-[-3px] xxl:mb-[-25px]
                                "
                  dangerouslySetInnerHTML={convertWithBrSpan(
                    title,
                    "no-animate"
                  )}
                />
              </div>
            </div>
            <div>
              <div className="relative rounded-[30px] overflow-hidden inline-block">
                <Image
                  src="/assets/imgs/hero/branding/img-s-32.webp"
                  className="w-full h-full"
                  width={435}
                  height={260}
                  alt="image"
                />
                <span
                  onClick={() => setIsOpen(!isOpen)}
                  className="h-[80px] w-[80px] border-[2px] text-[18px] rounded-full flex items-center justify-center pos-center cursor-pointer"
                >
                  <FaPlay className="text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <AboutArea aboutData={{ sub_title, description }} />
      </div>
      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </section>
  );
};

export default BrandingHero;

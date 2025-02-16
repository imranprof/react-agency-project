"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SeoHeroProps } from "@/types";
import { convertWithBrSpanImg } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

const SeoHero = ({ data }: SeoHeroProps) => {
  const {
    title,
    sub_title,
    description,
    action_btn,
    rating,
    reviews,
    bg_image,
    image,
  } = data;

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
    <section className=" mt-[80px]">
      <div className="container large" ref={containerRef}>
        <div className=" grid lg:grid-cols-[55%_1fr] xxl:grid-cols-[51%_1fr]">
          <div className=" relative py-[50px] px-[30px] sm:py-20 sm:px-[60px] lg:py-[100px] xl:py-[120px] xxl:py-[170px] lg:!ps-[160px] xl:!ps-[180px] xxl:!ps-[200px] z-[1]">
            <div className="bg absolute w-full h-full top-0 start-0 z-[-1] ">
              <Image
                src={bg_image}
                alt="bg-image"
                height={925}
                width={925}
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" ">
              <div className=" static lg:absolute start-12 lg:transform lg:-translate-y-1/2 lg:top-1/2 mb-5 lg:mb-0">
                <span className="section_subtitle text-base text-black lg:rotate-180 lg:[writing-mode:vertical-lr] lg:pe-[110px] relative after:hidden lg:after:absolute lg:after:inline-block after:content-[''] after:w-[1px] after:h-[90px] after:bottom-0 after:-translate-x-1/2 after:left-1/2 after:top-auto after:bg-current">
                  {sub_title}
                </span>
              </div>
              <div className="">
                <h1
                  ref={textMovRef}
                  className="seo-hero-title text-[50px] xs:text-[70px] xl:text-[80px] xxl:text-[100px] text-black mt-[-6px] leading-[.85] font-spacegrotesk font-bold"
                  dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
                />
              </div>
            </div>
            <div className=" mt-[32px] md:mt-[42px]">
              <p
                className=" has_fade_anim text-xl lg:text-2xl leading-[1.33] max-w-[490px]"
                data-fade-from="left"
                data-delay="0.7"
              >
                {description}
              </p>
            </div>
            <div
              className=" has_fade_anim mt-[32px] md:mt-[42px]"
              data-fade-from="left"
              data-delay="1.2"
            >
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "Seo" }),
                  "hover:bg-black hover:text-white"
                )}
              >
                <span data-text={action_btn.label}>{action_btn.label}</span>
                <FaAngleRight className="!w-[10px] !h-[18px]" />
              </Link>
            </div>
            <div
              className=" has_fade_anim mt-10 border-t border-black inline-flex"
              data-delay="1.2"
              data-on-scroll="0"
            >
              <div className="">
                <h2 className=" text-[50px] leading-none mt-[13px] font-spacegrotesk">
                  {rating}
                </h2>
                <span className=" text-[14px] leading-none inline-block text-black-2">
                  {`(${reviews} reviews)`}
                </span>
              </div>
              <div className=" border-s border-black ps-5 ms-[15px]">
                <span className=" text-[18px] leading-none inline-block mt-[17px]">
                  Average Rating
                </span>
                <div className=" flex gap-1 mt-[15px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      key={index}
                      src="/assets/imgs/icon/star-2.webp"
                      alt="star"
                      width={25}
                      height={25}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="thumb">
            <Image
              src={image}
              alt="image"
              width={895}
              height={925}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoHero;

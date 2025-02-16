"use client";

import Image from "next/image";
import { useRef } from "react";
import CustomButton from "@/components/elements/button/CustomButton";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  data: {
    image: string;
    title: string;
    description: string;
    btn_text: string;
    bgImage: string;
  };
};

const ServiceAbout = ({ data }: Props) => {
  const { image, title, description, btn_text, bgImage } = data;
  const [start, highlight, end] = description.split(/(static elements)/);

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
    <section className=" max-w-[1920px]">
      <div
        ref={containerRef}
        className=" grid md:grid-cols-[1fr,47%] lg:grid-cols-[1fr,43%]"
      >
        <div className="thumb">
          <Image
            src={image}
            alt="gallery_image"
            width={1085}
            height={900}
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" relative py-[60px] px-[30px] xs:px-[50px] lg:py-[100px] lg:px-20 z-10">
          <div className="bg absolute h-full w-full top-0 start-0 -z-10">
            <Image
              src={bgImage}
              alt="bgImage"
              width={835}
              height={900}
              className="w-full h-full"
            />
            <div className="absolute w-full h-full bg-[#121212D8] top-0 start-0"></div>
          </div>
          <div className="">
            <div className="">
              <h2
                ref={textMovRef}
                className=" max-w-[440px] inner-section-title font-normal text-white"
              >
                {title}
              </h2>
            </div>
          </div>
          <div className=" mt-[33px] md:mt-[43px] lg:mt-[123px] xxl:mt-[323px]">
            <p
              className="text has_fade_anim leading-[1.35] text-[20px] lg:text-[24px] max-w-[440px] text-white-2"
              data-fade-from="left"
            >
              {start}
              <span className="text-white">{highlight}</span>
              {end}
            </p>
          </div>
          <div className=" mt-8 md:mt-[42px] has_fade_anim" data-ease="bounce">
            <CustomButton
              btnText={btn_text}
              link="/contact"
              className="bg-white hover:bg-white hover:text-current"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAbout;

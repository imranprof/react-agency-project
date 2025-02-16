"use client";

import Image from "next/image";
import { useRef } from "react";
import siteConfig from "@/config/siteConfig.json";
import EmailInput2 from "@/components/elements/input/EmailInput2";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBr } from "@/lib/helper/converter";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  data: {
    title: string;
    subtitle: string;
    locationData: {
      id: number;
      city: string;
      address: string;
    }[];

    navData: {
      id: number;
      name: string;
      path: string;
    }[];
  };
};

const Footer2 = ({ data }: Props) => {
  const { title, subtitle, locationData, navData } = data;
  const { copyright } = siteConfig.footer_info;

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
    <footer className=" bg-[#121212] overflow-hidden">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" relative z-10 section-spacing-top">
          <div className=" hidden sm:block absolute top-0 start-[calc(100%-235px)] -z-10 w-[350px] lg:w-[550px]">
            <Image
              src="/assets/imgs/shape/img-s-33.webp"
              width={550}
              height={508}
              alt="shape_1"
              className="h-auto max-w-full inline-block"
            />

            <Image
              src="/assets/imgs/shape/img-s-33-light.webp"
              width={550}
              height={508}
              alt="shape_2"
              className="hidden"
            />
          </div>

          <div>
            <div>
              <div>
                <h2
                  ref={textMovRef}
                  className=" leading-none text-white text-[35px] sm:text-[40px] md:text-[70px] lg:text-[100px] -mt-2 sm:-mt-[9px] md:-mt-[17px] lg:-mt-[25px font-beatricetrial font-normal"
                  dangerouslySetInnerHTML={convertWithBr(title)}
                />
              </div>
            </div>
            <div className=" mt-[18px]">
              <p className="has_fade_anim text-[18px] sm:text-[26px] lg:text-[32px] xxl:text-[30px] max-w-[850px] text-white-2 font-light has_fade_anim">
                {subtitle}
              </p>
            </div>
          </div>

          <div className=" border-t border-[#ffffff14] mt-10 sm:mt-[50px] xxl:mt-[60px] py-[39px] sm:py-[59px] xxl:pb-[79px] grid gap-y-[30px] gap-x-10 lg:gap-x-[120px] sm:grid-cols-[150px_150px_1fr] md:grid-cols-[190px_190px_1fr]">
            {locationData.map((item, i) => (
              <div key={item.id} className="">
                <h2 className=" text-[20px] text-white leading-[1.5]">
                  {item.city}
                </h2>
                <ul className=" mt-[11px]">
                  <li className="text-[16px] leading-[1.46] text-white-2">
                    {item.address}
                  </li>
                </ul>
              </div>
            ))}

            <EmailInput2 />
          </div>
        </div>
      </div>

      <div className=" bg-[#121212]">
        <div className="container xl:!max-w-[1320px]">
          <div className=" border-t border-[#ffffff14] flex flex-col lg:flex-row justify-between items-center py-[35px] gap-y-5 gap-x-[60px]">
            <div className="">
              <p className="text text-[16px] leading-[1.37] text-white-2">
                {copyright.label} | {copyright.label_2}{" "}
                <a
                  href={copyright.link}
                  target="_blank"
                  className="text-white hover:text-white-2 transition-all duration-300"
                >
                  {copyright.company}
                </a>
              </p>
            </div>
            <ul className=" flex flex-wrap gap-y-[10px] gap-x-[38px] sm:gap-x-[78px]">
              {navData.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="text-[16px] text-white hover:text-white-2 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

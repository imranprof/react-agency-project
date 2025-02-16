"use client";

import Image from "next/image";
import { useRef } from "react";
import { TServiceType } from "@/types";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const ServiceDetails = ({ data }: TServiceType) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="pt-[80px] xl:pt-[100px]">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className="thumb-main relative">
          <Image
            src={data.image}
            alt="service-details-img"
            width={1290}
            height={630}
            className="w-full"
          />
          <div className=" bg-white [writing-mode:initial] md:[writing-mode:vertical-lr] flex gap-[20px] items-center absolute left-[10px] bottom-[10px] px-5 py-2.5 md:px-2.5 md:py-5 sm:left-[30px] sm:bottom-[30px] xxl:left-[-210px] xxl:bottom-[-180px] ">
            <p className="service-social-title pe-[80px] relative inline-block text-[14px] uppercase">
              Follow
            </p>
            <div className="flex gap-[25px]">
              <a href="#" className="hover:text-black-2">
                <FaFacebookF className="text-[16px]" />
              </a>
              <a href="#" className="hover:text-black-2">
                <FaXTwitter className="text-[16px]" />
              </a>
              <a href="#" className="hover:text-black-2">
                <FaDribbble className="text-[16px]" />
              </a>
              <a href="#" className="hover:text-black-2">
                <FaInstagram className="text-[16px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid items-center mt-[46px] md:grid-cols-[1fr,460px] lg:grid-cols-[1fr,520px] gap-y-[20px] gap-x-[60px]">
          <div>
            <div>
              <h1 className=" has_fade_anim section-title text-[30px] xs:text-[35px] sm:mt-[-11px] sm:text-[40px] md:mt-[-12px] md:text-[44px] lg:mt-[-15px] lg:text-[55px] xl:mt-[-17px] xl:text-[60px]">
                {data.title}
              </h1>
            </div>
          </div>
          <div className=" p-0 mb-1 has_fade_anim">
            <ul className="grid leading-[1] xs:grid-cols-[auto_auto] xs:gap-x-[50px] gap-y-[10px] justify-start md:justify-between p-0 m-0">
              {data.tags.map((item, index) => (
                <li className="" key={index}>
                  <span className="mr-[13px]">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

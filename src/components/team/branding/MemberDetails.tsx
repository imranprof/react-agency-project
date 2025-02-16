"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBr } from "@/lib/helper/converter";
import { TTeamMemberType } from "@/types";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const MemberDetails = ({ data }: TTeamMemberType) => {
  const { name, post, image, description } = data;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section>
      <div className="container" ref={containerRef}>
        <div className="pt-[127px] lg:pt-[147px] xxl:pt-[217px] section-spacing-bottom">
          <div className=" grid gap-x-[60px] gap-y-10 md:grid-cols-[500px,1fr] lg:grid-cols-[auto_1fr]">
            <div
              className="has_fade_anim inline-block relative xs:pt-[60px] xs:ps-[130px] sm:ps-[150px] z-10 max-w-[605px]"
              data-fade-from="left"
            >
              <div className=" hidden start-0 xs:block absolute top-0 w-[62%] -z-[1]">
                <img
                  className="h-full w-full"
                  src="/assets/imgs/shape/img-s-86.webp"
                  alt="show-light"
                />
                <img
                  className="hidden"
                  src="/assets/imgs/shape/img-s-86-dark.webp"
                  alt="show-dark"
                />
              </div>
              <Image
                src={image}
                width={350}
                height={480}
                className="!w-full !h-full"
                alt="thumb-img"
              />
            </div>
            <div className=" md:pt-[60px]">
              <div className="">
                <div className="">
                  <div className="">
                    <h1 className="has_fade_anim name text-[36px] xs:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] xxl:text-[100px] leading-[1.08]">
                      {name.split(" ").map((word, index) => (
                        <span key={index}>
                          {word}
                          {index === 0 && <br />}
                        </span>
                      ))}
                    </h1>
                  </div>
                </div>
                <div className=" mt-[26px]">
                  <span className="has_fade_anim text-[24px] inline-block text-black-2">
                    {post}
                  </span>
                </div>
                <div className="has_fade_anim mt-[36px] mb-2 text-black-2">
                  <p dangerouslySetInnerHTML={convertWithBr(description)} />
                </div>
                <div className=" mt-10 has_fade_anim">
                  <span className=" text-[18px] mb-[22px] inline-block">
                    Portfolio :
                  </span>
                  <div>
                    <div className=" flex gap-[10px]">
                      <a
                        href="#"
                        className="text-[14px] py-[7px] px-[14px] border rounded-[30px] inline-block text-black-2 hover:text-inherit"
                      >
                        Behance
                      </a>
                      <a
                        href="#"
                        className="text-[14px] py-[7px] px-[14px] border rounded-[30px] inline-block text-black-2 hover:text-inherit"
                      >
                        Dribble
                      </a>
                      <a
                        href="#"
                        className="text-[14px] py-[7px] px-[14px] border rounded-[30px] inline-block text-black-2 hover:text-inherit"
                      >
                        Medium
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" mt-[40px] has_fade_anim">
                  <span className=" text-[18px] mb-[22px] inline-block">
                    Follow :
                  </span>
                  <div>
                    <ul className=" flex gap-5">
                      <li>
                        <a href="#" className="text-black-2 hover:text-inherit">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-black-2 hover:text-inherit">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-black-2 hover:text-inherit">
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-black-2 hover:text-inherit">
                          <FaLinkedin />
                        </a>
                      </li>
                    </ul>
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

export default MemberDetails;

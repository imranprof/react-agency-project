"use client";

import { convertWithBr } from "@/lib/helper/converter";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  direct_contact: string;
  images: string[];
};

const ContactHero = ({ title, direct_contact, images }: Props) => {
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
        <div className=" pt-[127px] lg:pt-[147px] xxl:pt-[217px] pb-[30px] sm:me-[calc((100vw-var(--container-max-widths))/-2-3px)]">
          <div className=" grid gap-y-10 gap-x-[60px] md:grid-cols-[1fr_580px] lg:grid-cols-[1fr_760px] xl:grid-cols-[1fr_840px] xxl:grid-cols-[1fr_960px] ">
            <div className="">
              <div className="">
                <h1
                  className="inner-section-title large has_fade_anim"
                  dangerouslySetInnerHTML={convertWithBr(title)}
                />
              </div>
            </div>
            <div className=" grid gap-[15px] sm:gap-[30px] items-end xs:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
              <div className=" grid gap-[15px] sm:gap-[30px]">
                <div className="image_box overflow_hidden !overflow-hidden">
                  {images?.[0] && (
                    <Image
                      src={images?.[0]}
                      alt="image-1"
                      width={300}
                      height={380}
                      className="max-w-full"
                      priority
                    />
                  )}
                </div>
                <div className=" z-10 relative bg-black px-[30px] pt-[85px] pb-[40px]">
                  <div className="shape-1 absolute -z-10 top-[10px] end-[10px]">
                    <img src="/assets/imgs/shape/img-s-89.webp" alt="shape" />
                  </div>
                  <span className=" text-white-2">Direct contact: </span>
                  <p className="link text-[24px] leading-none mt-3 text-white hover:text-white-2 transition-all duration-300">
                    <a href="#">{direct_contact}</a>
                  </p>
                </div>
              </div>
              <div className=" grid gap-[15px] sm:gap-[30px]">
                <div className="image_box">
                  {images?.[1] && (
                    <Image
                      src={images?.[1]}
                      alt="image-2"
                      width={630}
                      height={330}
                      className="max-w-full"
                    />
                  )}
                </div>
                <div className=" !overflow-hidden">
                  {images?.[2] && (
                    <Image
                      src={images?.[2]}
                      alt="image-3"
                      width={630}
                      height={400}
                      className="max-w-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

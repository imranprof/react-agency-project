"use client";

import { buttonVariants } from "@/components/ui/button";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";
import { TSeoAboutType } from "@/types";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";

type Props = {
  aboutData: TSeoAboutType;
};

const SeoAbout = ({ aboutData }: Props) => {
  const {
    title,
    description,
    action_btn1,
    action_btn2,
    experience,
    experience_title,
    gallery,
  } = aboutData;

  const containerRef = useRef<HTMLDivElement>(null!);
  const textMovRef = useRef<HTMLHeadingElement>(null!);
  const countRef = useRef<HTMLSpanElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim(textMovRef?.current);
      hasCountAnim(countRef.current, experience);
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" main-section-spacing grid gap-y-[50px] gap-x-[60px] md:grid-cols-[410px_400px] lg:grid-cols-[510px_444px] xl:grid-cols-[610px_444px] items-center justify-between">
          <div className=" w-full aspect-[100/118] relative max-w-[610px]">
            {gallery[0] && (
              <Image
                className="w-[49%] absolute top-[9%] start-0 rounded-[5px]"
                src={gallery[0]}
                alt="gallery image 1"
                width={300}
                height={360}
              />
            )}
            {gallery[1] && (
              <Image
                className="absolute end-0 top-0 w-[41%] rounded-[5px]"
                src={gallery[1]}
                alt="gallery image 2"
                width={250}
                height={320}
              />
            )}
            {gallery[2] && (
              <Image
                className="absolute bottom-0 start-[26%] w-[59%] rounded-[5px]"
                src={gallery[2]}
                alt="gallery image 3"
                width={250}
                height={320}
              />
            )}
          </div>

          <div className="">
            <div className="">
              <div className="">
                <h2
                  ref={textMovRef}
                  className="seo-section-title"
                  dangerouslySetInnerHTML={convertWithBrSpan(title)}
                />
              </div>
            </div>
            <div className=" mt-[23px] lg:mt-[33px]">
              <p className=" has_fade_anim">{description}</p>
            </div>
            <div className=" has_fade_anim mt-[33px] lg:mt-[43px] flex gap-[30px] items-center">
              <Link
                href={action_btn1.link}
                className={cn(buttonVariants({ variant: "Seo" }))}
              >
                <span data-text={action_btn1.label}>{action_btn1.label}</span>
              </Link>

              <Link
                href={action_btn2.link}
                className="btn-text-flip wc-btn-underline  text-sm"
              >
                <span data-text={action_btn2.label}>{action_btn2.label}</span>
              </Link>
            </div>
            <div className=" has_fade_anim mt-[35px] lg:mt-[55px]">
              <h3 className="text-[70px] lg:text-[100px] flex items-start font-spacegrotesk font-medium">
                <span ref={countRef}>{experience}</span>
                <FaPlus className="text-lg mt-[10px] lg:mt-[12px] ms-[9px]" />
              </h3>
              <h3 className=" text-lg leading-[1.2] max-w-[180px] font-semibold mt-[10px] font-spacegrotesk">
                {experience_title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoAbout;

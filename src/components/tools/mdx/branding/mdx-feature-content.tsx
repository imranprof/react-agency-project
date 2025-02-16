"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  img: string;
  description1: string;
  description2: string;
  className?: string;
};

const FeatureContent = ({
  img,
  description1,
  description2,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "section-content grid mt-[30px] lg:grid-cols-[auto,920px] lg:mt-[60px] xl:grid-cols-[auto,960px] gap-y-[20px] gap-x-[60px] justify-between",
        className
      )}
    >
      <div className="shape hidden lg:block has_fade_anim">
        <img src="/assets/imgs/shape/img-s-84.webp" alt="shape" />
      </div>
      <div className="Content-last">
        <div className="thumb relative has_fade_anim">
          <Image
            className="md:rounded-br-[300px] w-full"
            src={img}
            alt="content-img"
            width={960}
            height={500}
          />
          <div className="shape-1 absolute  bottom-[-17px] right-[17px]">
            <img
              className=""
              alt="shape-1"
              src="/assets/imgs/shape/img-s-85.webp"
            />
          </div>
        </div>
        <div className="has_fade_anim text-wrapper mt-10 grid md:grid-cols-2 gap-x-20 gap-y-[30px]">
          <p className="!m-0 !p-0">{description1}</p>
          <p className="!m-0 !p-0">{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureContent;

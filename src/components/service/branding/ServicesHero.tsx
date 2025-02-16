"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  data: {
    title: string;
    description: string;
    image: string;
  };
};

const ServicesHero = ({ data }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const charMovRef = useRef<HTMLHeadingElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim(charMovRef.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="hero_area">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" pt-[137px] xxl:pt-[187px] grid justify-between gap-y-10 gap-x-[60px] sm:grid-cols-[1fr_330px] md:grid-cols-[1fr_430px] lg:grid-cols-[1fr_530px] xl:grid-cols-[1fr_630px]">
          <div>
            <div>
              <div>
                <h1
                  ref={charMovRef}
                  className=" sm:mt-10 inner-section-title large "
                >
                  {data.title}
                </h1>
              </div>
            </div>
            <div className=" mt-6 md:mt-[14px] md:ms-[140px]">
              <p className="has_fade_anim max-w-full md:indent-[60px] md:max-w-[300px]">
                {data.description}
              </p>
            </div>
            <div className="has_fade_anim hidden md:block ms-[140px] mt-[54px]">
              <Image
                alt="icon"
                src="/assets/imgs/shape/img-s-82.webp"
                width={40}
                height={80}
              />
              <Image
                className="hidden"
                alt="icon"
                src="/assets/imgs/shape/img-s-82-light.webp"
                width={40}
                height={80}
              />
            </div>
          </div>
          <div>
            <Image
              alt="service_thumb"
              src={data.image}
              width={630}
              height={820}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

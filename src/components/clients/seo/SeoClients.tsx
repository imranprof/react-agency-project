"use client";
import ImageAutoSlider from "@/components/tools/ImageAutoSlider";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  brands: {
    image: {
      dark: string;
      light: string;
    };
  }[];
};

const SeoClients = ({ brands }: Props) => {
  const sliderImages = brands.map((client) => client.image.dark);
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" pt-[58px] xl:pt-[78px] xxl:pt-[98px] ">
          <div className=" mb-12">
            <div className="">
              <div className="  flex justify-center relative z-[1]">
                <div className="inline-block absolute w-full h-[1px] bg-border-2 top-1 -z-10"></div>
                <h2 className=" text-[14px] font-medium uppercase text-center inline-block px-[22px] mt-0 text-black-2 z-[10] bg-white font-spacegrotesk">
                  We worked with the world's best companies
                </h2>
                <div className="inline-block absolute w-full h-[1px] bg-border-2 top-2 -z-10"></div>
              </div>
            </div>
          </div>
          <div className=" has_fade_anim">
            <ImageAutoSlider slides={sliderImages} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoClients;

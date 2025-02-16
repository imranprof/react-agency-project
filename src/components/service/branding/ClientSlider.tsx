"use client";

import { useRef } from "react";
import ImageAutoSlider from "@/components/tools/ImageAutoSlider";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

type Props = {
  clients: {
    image: {
      dark: string;
      light: string;
    };
  }[];
};

const ClientSlider = ({ clients }: Props) => {
  const sliderImages = clients.map((client) => client.image.light);
  const containerRef = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div className="has_fade_anim" ref={containerRef}>
      <div className=" bg-black">
        <div className="container xl:!max-w-[1320px]">
          <div className=" relative py-[35px] md:ps-20 xl:py-[55px] xl:ps-[120px] md:me-[calc((100vw-1140px)/-2)] lg:me-[calc((100vw-1320px)/-2)]">
            <div className=" hidden md:block w-max h-full absolute top-0 end-[calc(100%)] overflow-hidden">
              <Image
                alt="shape_1"
                src="/assets/imgs/shape/img-s-83.webp"
                width={315}
                height={157}
                className="w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <ImageAutoSlider
              slides={sliderImages}
              imageClassName="opacity-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;

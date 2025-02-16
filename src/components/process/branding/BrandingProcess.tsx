"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import { TProcessType } from "@/types";
import ProcessCard from "@/components/process/branding/ProcessCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BrandingProcess = ({ data }: TProcessType) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={pinElement} className="bg-mint-green main-section-style">
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing relative">
          <div className=" hidden absolute start-[59%] md:block top-[4%] lg:top-[6%] xl:top-[10%]">
            <img className="hidden" src={data.shape.dark} alt="shape-1" />
            <img
              className="h-[169px] lg:h-[219px] xl:h-[269px] xxl:h-[319px]"
              src={data.shape.light}
              alt="shape-l"
            />
          </div>
          <div>
            <div>
              <div>
                <h2 className="max-w-[520px] main-section-title has_fade_anim">
                  {data.title}
                </h2>
              </div>
            </div>
          </div>
          <div className=" mt-[50px] lg:mt-[70px] xl:mt-[90px]">
            <div>
              <Carousel className="w-full" dir="ltr">
                <CarouselContent>
                  {data.process_list.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="has_fade_anim basis-[86%] sm:basis-[46%] md:basis-[40%] lg:basis-[35%] xl:basis-[33%] xxl:basis-[28%]"
                      data-delay={item.serial_no ? item.serial_no * 0.15 : 0}
                      data-ease="bounce"
                    >
                      <ProcessCard {...item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingProcess;

"use client";

import { useState, useEffect, useCallback } from "react";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { TWorkType } from "@/types";
import WorkCard from "@/components/work/seo/WorkCard";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type TSeoWorkType = {
  works: TWorkType[];
  work: {
    title: string;
    description: string;
  };
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

const SeoWork = ({ work, works }: TSeoWorkType) => {
  const { title, description } = work;
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);
  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const containerRef = useRef<HTMLDivElement>(null!);
  const textMovRef = useRef<HTMLHeadingElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim(textMovRef?.current);
    },
    { scope: containerRef }
  );

  return (
    <div className="inner-container large overflow-hidden" ref={containerRef}>
      <section className="">
        <div className="inner-container ">
          <div className=" section-spacing-top">
            <div className=" grid gap-y-5 gap-x-10 md:gap-x-[60px] items-center justify-between sm:grid-cols-2 md:grid-cols-[auto_auto_auto]">
              <div className="">
                <div className="">
                  <h2
                    ref={textMovRef}
                    className="seo-section-title max-w-[330px]"
                    dangerouslySetInnerHTML={convertWithBrSpan(title)}
                  />
                </div>
              </div>
              <div className="">
                <p
                  className="text has_fade_anim max-w-[450px]"
                  data-delay="0.30"
                >
                  {description}
                </p>
              </div>
              <div
                className=" hidden md:flex gap-5 has_fade_anim"
                data-delay="0.45"
              >
                <Button
                  onClick={handlePrevious}
                  variant="circle"
                  className="border-border-2 text-black !h-[60px] !w-[60px] xxl:!h-[70px] xxl:!w-[70px] hover:bg-yellow-2"
                >
                  <FaArrowLeft />
                </Button>
                <Button
                  onClick={handleNext}
                  variant="circle"
                  className="border-border-2 text-black !h-[60px] !w-[60px] xxl:!h-[70px] xxl:!w-[70px] hover:bg-yellow-2"
                >
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_wrapper_box has_fade_anim mt-[50px] xl:mt-[70px] xxl:mt-[90px]">
          <div className="projects_wrapper">
            <Carousel
              className="w-full md:m-[-30px] md:p-[30px] seo-work-carousel"
              dir="ltr"
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
            >
              <CarouselContent>
                {works.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 me-[40px]"
                  >
                    <WorkCard {...item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoWork;

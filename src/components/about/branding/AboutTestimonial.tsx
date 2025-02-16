"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import TestimonialCard from "@/components/about/branding/TestimonialCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  icons: {
    dark: string;
    light: string;
  };
  testimonials: {
    quote: string;
    author: string;
    designation: string;
  }[];
};

const AboutTestimonial = ({ testimonials, icons }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <div className="" ref={containerRef}>
      <div className="inner-container has_fade_anim">
        <div className=" main-section-spacing">
          <div className=" relative">
            <div className=" max-w-[1070px] mx-auto sm:px-20">
              <Carousel
                className="w-full"
                dir="ltr"
                opts={{
                  align: "start",
                  loop: true,
                }}
                setApi={setApi}
              >
                <CarouselContent>
                  {testimonials.map((item, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <TestimonialCard testimonial={item} icons={icons} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className=" hidden  sm:flex justify-between absolute top-1/2 tranform -translate-y-[50%] w-full ">
              <div onClick={handlePrevious} className="cursor-pointer">
                <Image
                  className="h-[43px] lg:h-[53px] xl:h-[63px] w-auto"
                  src="/assets/imgs/icon/angle-left.webp"
                  alt="icon"
                  width={32}
                  height={63}
                />
                <Image
                  className="hidden"
                  src="/assets/imgs/icon/angle-left-light.webp"
                  alt="icon"
                  width={32}
                  height={63}
                />
              </div>
              <div onClick={handleNext} className="cursor-pointer">
                <Image
                  className="h-[43px] lg:h-[53px] xl:h-[63px] w-auto"
                  src="/assets/imgs/icon/angle-right.webp"
                  alt="icon"
                  width={32}
                  height={63}
                />
                <Image
                  className="hidden"
                  src="/assets/imgs/icon/angle-right-light.webp"
                  alt="icon"
                  width={32}
                  height={63}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonial;

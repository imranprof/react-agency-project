"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TSeoClientsFeedback } from "@/types";
import ClientsFeedBack from "@/components/testimonial/seo/ClientsFeedBack";
import TestimonialCard from "@/components/testimonial/seo/TestimonialCard";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  clientFeedbackSection: TSeoClientsFeedback;
  testimonials: {
    icon: string;
    content: string;
    author: {
      name: string;
      position: string;
    };
  }[];
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const SeoTestimonial = ({ clientFeedbackSection, testimonials }: Props) => {
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
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" main-section-spacing grid gap-y-10 gap-x-[60px] md:grid-cols-[1fr_470px] lg:grid-cols-[1fr_640px] xl:grid-cols-[1fr_740px] ">
          <ClientsFeedBack clientsFeedback={clientFeedbackSection} />
          <div className=" has_fade_anim relative" data-fade-from="bottom">
            <div className=" py-[30px] px-5 sm:py-[50px] sm:px-[60px] lg:py-20 lg:px-[100px] bg-white shadow-[0px_30px_200px_#10193814] rounded-[5px]">
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
                      <TestimonialCard testimonial={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className=" hidden  md:flex justify-between absolute top-1/2 -translate-y-1/2 w-[calc(100%+60px)] ms-[-30px] lg:w-[calc(100%+70px)] lg:ms-[-35px]">
              <Button
                onClick={handlePrevious}
                variant="circle"
                className="border-border-2 text-black !h-[70px] !w-[70px] hover:bg-yellow-2"
              >
                <FaArrowLeft />
              </Button>
              <Button
                onClick={handleNext}
                variant="circle"
                className="border-border-2 text-black !h-[60px] !w-[60px] lg:!h-[70px] lg:!w-[70px] hover:bg-yellow-2"
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoTestimonial;

"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { TTestimonialType } from "@/types";
import TestimonialInfo from "@/components/testimonial/branding/TestimonialInfo";
import SliderNav from "@/components/testimonial/branding/SliderNav";
import TestimonialCard from "@/components/testimonial/branding/TestimonialCard";
import ImageAutoSlider from "@/components/tools/ImageAutoSlider";
import { useGSAP } from "@gsap/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const BrandingTestimonial = ({ data }: TTestimonialType) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
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
  const sliderImages = data.clients.map((client) => client.image.dark);

  return (
    <div ref={pinElement} className=" bg-off-white main-section-style">
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing">
          <div className="">
            <div className="">
              <div className="">
                <h2 className="has_fade_anim max-w-[480px] main-section-title">
                  {data.title}
                </h2>
              </div>
            </div>
          </div>

          <div className=" grid gap-5 relative mt-[50px] sm:grid-cols-[1fr,54%] md:grid-cols-[1fr,65%] lg:mt-[70px] lg:grid-cols-[1fr,71%] xl:mt-[90px]">
            <TestimonialInfo {...data.info} />
            <div className=" bg-white-4 overflow-hidden rounded-[20px] cursor-grab">
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
                  {data.testimonial_list.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full lg:basis-1/2 me-[50px]"
                    >
                      <TestimonialCard {...item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <SliderNav
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </div>
          <div className="clients_area_inner py-[29px] mt-[60px] lg:py-[49px] border-t-[1px] border-b-[1px] xl:mt-20 xxl:mt-[100px]">
            <ImageAutoSlider
              slides={sliderImages}
              imageClassName="opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingTestimonial;

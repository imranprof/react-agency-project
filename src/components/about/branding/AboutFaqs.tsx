"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { TAboutFaqs } from "@/types";
import { FaPlay } from "react-icons/fa6";
import VideoModal from "@/components/tools/VideoModal";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const AboutFaqs = ({ data }: TAboutFaqs) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  const { title, image, video, faqs } = data;
  const containerRef = useRef<HTMLDivElement>(null!);

  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" section-spacing-bottom">
          <div className=" bg-black grid gap-0 md:grid-cols-[auto_500px] lg:grid-cols-[auto_550px] xl:grid-cols-[auto_650px] justify-between">
            <div className="thumb relative">
              <Image
                src={image}
                alt="image"
                className="w-full h-full"
                style={{ objectFit: "cover" }}
                width={645}
                height={708}
              />
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[100px] h-[100px] bg-black pos-center"
              >
                <FaPlay className="text-white" />
              </Button>
            </div>
            <div className=" pt-[53px] px-10 pb-[60px] lg:pt-[73px] lg:px-[60px] lg:pb-20 ">
              <div className="">
                <div className="">
                  <h2 className="has_fade_anim inner-section-title text-white font-normal">
                    {title}
                  </h2>
                </div>
              </div>

              <div className="accordion-wrapper mt-[47px] has_fade_anim">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue={openItem}
                  onValueChange={(value) => setOpenItem(value || "")}
                >
                  {faqs?.map((item, index) => (
                    <AccordionItem
                      value={`item-${index}`}
                      key={index}
                      className="first:border-t border-black-2 border-opacity-30"
                    >
                      <AccordionTrigger
                        className="text-white  text-[18px] lg:text-[24px] l py-[18px] font-normal text-start font-beatricetrial"
                        customIcon={true}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[18px] leading-[1.44] px-0 pb-[23px] md:pb-[24px] text-white-2 ps-0 pe-0">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </section>
  );
};

export default AboutFaqs;

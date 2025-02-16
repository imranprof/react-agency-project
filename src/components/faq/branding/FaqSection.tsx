"use client";

import { useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

const FaqSection = ({ faqs }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <Accordion
        type="single"
        collapsible
        className="w-full has_fade_anim"
        defaultValue={openItem}
        onValueChange={(value) => setOpenItem(value || "")}
        data-delay=".45"
      >
        {faqs?.map((item, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="first:border-t"
          >
            <AccordionTrigger
              className=" leading-[1.08] text-[20px] lg:text-[22px] xl:text-[24px] pt-6 pb-[18px] px-0 font-beatricetrial text-start font-normal"
              customIcon={true}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[18px] leading-[1.44] px-0 pb-[23px] md:pb-[24px] text-black-2">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;

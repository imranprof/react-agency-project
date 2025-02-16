"use client";

import { useState } from "react";
type Props = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const PricingFaqs = ({ faqs }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  return (
    <div>
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
            className="first:border-t border-[#b8b8b8] "
          >
            <AccordionTrigger
              className=" leading-[1] text-[20px] py-[18px] px-0 font-spacegrotesk text-start font-medium"
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

export default PricingFaqs;

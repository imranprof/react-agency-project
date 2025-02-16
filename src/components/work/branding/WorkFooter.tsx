import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { FaArrowRight } from "react-icons/fa6";
import SwapButtonGroup from "@/components/elements/button/SwapButtonGroup";

type Props = {
  footer_description: string;
  footer_btn_text: string;
};

const WorkFooter = ({ footer_btn_text, footer_description }: Props) => {
  const moveTextRef = useRef<HTMLParagraphElement>(null!);

  useGSAP(() => {
    hasTextMovAnim(moveTextRef.current);
  });

  return (
    <div className="section-content grid md:grid-cols-2 gap-x-[30px] justify-end pt-[60px] lg:pt-[100px] xl:pt-[120px] xxl:pt-[150px]">
      <div className=""></div>
      <div className="content-last">
        <div className="text-wrapper">
          <p
            ref={moveTextRef}
            className="text text-[20px] text-black-2 font-instrument mt-[-9px] max-w-[520px] leading-[1.33] lg:text-[24px] lg:mt-[-11px]"
          >
            {footer_description}
          </p>
        </div>
        <div
          className="mt-[33px] lg:mt-[43px] has_fade_anim"
          data-fade-from="left"
        >
          <SwapButtonGroup
            button1Content={
              <FaArrowRight className="transform rotate-[-45deg] text-[18px]" />
            }
            button2Content={footer_btn_text}
            button1Class="text-white bg-black h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] text-[14px] rounded-full
                last:ms-0 last:me-[-50px] lg:last:me-[-70px] group-hover:me-0 group-hover:first:ms-[-50px]  lg:group-hover:first:ms-[-70px]"
            button2Class="text-[15px] text-white px-[32px] lg:px-[42px] text-white bg-black rounded-[40px]"
            textFirst={true}
            link="/work"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkFooter;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SwapButtonGroup from "@/components/elements/button/SwapButtonGroup";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  aboutData: {
    sub_title: string;
    description: string;
  };
};

const AboutArea = ({ aboutData }: Props) => {
  const { sub_title, description } = aboutData;
  const textRef = useRef<HTMLParagraphElement>(null!);

  useGSAP(() => {
    hasTextMovAnim(textRef.current);
  });

  return (
    <div className="">
      <div className="section-spacing-bottom">
        <div
          className=" grid gap-y-[30px] gap-x-[60px] 
        items-start md:grid-cols-[auto,730px]
        xxl:grid-cols-[auto,930px]"
        >
          <div className="">
            <div className="">
              <span className=" text-[18px] leading-none inline-block font-medium text-black uppercase">
                {sub_title}
              </span>
            </div>
          </div>
          <div className="">
            <div className="text-wrapper">
              <p
                ref={textRef}
                className="text leading-none text-[24px] mt-0 xs:text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] lg:mt-[-17px]
              xxl:text-[70px] xxl:-mt-6 text-black"
              >
                {description}
              </p>
            </div>
            <div
              className="btn-wrapper  mt-10 lg:mt-[50px] has_fade_anim"
              data-fade-from="left"
            >
              <SwapButtonGroup
                button1Content={
                  <FaArrowRight className="transform rotate-[-45deg] text-[18px]" />
                }
                button2Content="Get Started"
                button1Class="text-white bg-black h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] text-[14px] rounded-full
                last:ms-0 last:me-[-50px] lg:last:me-[-70px] group-hover:me-0 group-hover:first:ms-[-50px]  lg:group-hover:first:ms-[-70px]"
                button2Class="text-[15px] text-white px-[32px] lg:px-[42px] text-white bg-black rounded-[40px]"
                textFirst={true}
                link="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;

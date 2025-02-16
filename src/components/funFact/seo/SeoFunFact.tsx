"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  funFact: {
    title: string;
    experience: string;
    projects: string;
    team_member: string;
    awards: string;
  };
};

const SeoFunFact = ({ funFact }: Props) => {
  const { title, experience, projects, team_member, awards } = funFact;
  const containerRef = useRef<HTMLDivElement>(null!);
  const textMovRef = useRef<HTMLHeadingElement>(null!);
  const countRef1 = useRef<HTMLSpanElement>(null!);
  const countRef2 = useRef<HTMLSpanElement>(null!);
  const countRef3 = useRef<HTMLSpanElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim(textMovRef?.current);
      hasCountAnim(countRef1?.current, experience);
      hasCountAnim(countRef2?.current, team_member);
      hasCountAnim(countRef3?.current, awards);
    },
    { scope: containerRef }
  );
  return (
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" section-spacing-top">
          <div className=" text-center">
            <div className="">
              <div className="">
                <h2
                  ref={textMovRef}
                  className="seo-section-title max-w-[520px] mx-auto"
                  dangerouslySetInnerHTML={convertWithBrSpan(title)}
                />
              </div>
            </div>
          </div>
          <div className=" mt-[41px] xl:mt-[61px]">
            <div className=" grid gap-y-[50px] gap-x-[30px] xs:grid-cols-2 md:grid-cols-4 font-spacegrotesk">
              <div
                className="seo-funfact-card has_fade_anim text-center"
                data-delay="0.15"
              >
                <h3 className="number text-[50px] lg:text-[70px] xl:text-[100px] font-spacegrotesk font-semibold leading-[1.3] relative z-1 px-5 lg:px-[30px] inline-block">
                  <span ref={countRef1}>{experience}</span>
                </h3>
                <h3 className=" text-[18px] lg:text-[20px] xl:text-[24px] leading-none font-semibold mt-[10px] font-spacegrotesk">
                  Years <br className="hidden sm:block" />
                  experience
                </h3>
              </div>
              <div
                className="seo-funfact-card has_fade_anim text-center"
                data-delay="0.30"
              >
                <h3 className="number text-[50px] lg:text-[70px] xl:text-[100px] font-spacegrotesk font-semibold leading-[1.3] relative z-1 px-5 lg:px-[30px] inline-block">
                  {projects}
                </h3>
                <h3 className=" text-[18px] lg:text-[20px] xl:text-[24px] leading-none font-semibold mt-[10px]">
                  Projects done <br className="hidden sm:block" />
                  successfully
                </h3>
              </div>
              <div
                className="seo-funfact-card has_fade_anim text-center"
                data-delay="0.45"
              >
                <h3 className="number text-[50px] lg:text-[70px] xl:text-[100px] font-spacegrotesk font-semibold leading-[1.3] relative z-1 px-5 lg:px-[30px] inline-block">
                  <span ref={countRef2}>{team_member}</span>
                </h3>
                <h3 className=" text-[18px] lg:text-[20px] xl:text-[24px] leading-none font-semibold mt-[10px]">
                  Marketing <br className="hidden sm:block" />
                  team member
                </h3>
              </div>
              <div
                className="seo-funfact-card has_fade_anim text-center"
                data-delay="0.60"
              >
                <h3 className="number text-[50px] lg:text-[70px] xl:text-[100px] font-spacegrotesk font-semibold leading-[1.3] relative z-1 px-5 lg:px-[30px] inline-block">
                  <span ref={countRef3}>{awards}</span>
                </h3>
                <h3 className=" text-[18px] lg:text-[20px] xl:text-[24px] leading-none font-semibold mt-[10px]">
                  We achieved <br className="hidden sm:block" />
                  awards
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoFunFact;

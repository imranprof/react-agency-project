"use client";

import MemberCard from "@/components/team/seo/MemberCard";
import { convertWithBrSpan } from "@/lib/helper/converter";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  teamSection: {
    title: string;
    description: string;
    shape: string;
  };
  teamMember: {
    id: number;
    image: string;
    name: string;
    position: string;
    social: string;
    social_link: string;
  }[];
};

const SeoTeam = ({ teamSection, teamMember }: Props) => {
  const { title, description, shape } = teamSection;
  const firstFourMember = teamMember.slice(0, 4);

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
    <div className="inner-container large" ref={containerRef}>
      <section className="">
        <div className="inner-container">
          <div className=" section-spacing-top px-5 sm:px-10 pb-[235px] lg:pb-[285px] xxl:pb-[485px] bg-black-primary rounded-[5px] relative z-[1]">
            <div className=" absolute w-[230px] top-[84px] end-[65px] z-[-1]">
              <Image
                src="/assets/imgs/shape/img-s-56.webp"
                alt="image"
                width={231}
                height={202}
                className=""
              />
            </div>
            <div className=" text-center ">
              <div className="">
                <div className="">
                  <h2
                    ref={textMovRef}
                    className="seo-section-title max-w-[635px] mx-auto text-white"
                    dangerouslySetInnerHTML={convertWithBrSpan(title)}
                  />
                </div>
              </div>
              <div className=" mt-[21px] sm:mt-[31px]">
                <p
                  className=" has_fade_anim max-w-[600px] mx-auto text-white-2"
                  data-fade-from="left"
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[-182px] lg:mt-[-232px] xl:mt-[-212px] xxl:mt-[-392px] relative z-[1]">
          <div
            className=" has_fade_anim hidden md:inline-block absolute w-[130px] xxl:w-[200px] right-[-1%] xxl:right-[9%] top-[-90px] xxl:top-[-130px] z-[1]"
            data-fade-offset="0"
          >
            <Link href={"/career"}>
              <Image
                src={shape}
                alt="image shape"
                width={200}
                height={200}
                className="max-w-full h-auto"
              />
            </Link>
          </div>

          <div className=" grid gap-y-10 gap-x-5 lg:gap-x-10 xs:grid-cols-2 md:grid-cols-4">
            {firstFourMember.map((member, index) => (
              <div
                className="has_fade_anim"
                data-delay={(index + 1) * 0.15}
                key={member.id}
              >
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoTeam;

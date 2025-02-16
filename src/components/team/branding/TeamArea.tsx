"use client";

import ProfileInnerCard from "@/components/team/branding/ProfileInnerCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  TeamAreaData: {
    title: string;
    description: string;
  };
  team_member: {
    id: number;
    image: string;
    name: string;
    position: string;
  }[];
};

const TeamArea = ({ TeamAreaData, team_member }: Props) => {
  const { title, description } = TeamAreaData;
  const containerRef = useRef<HTMLDivElement>(null!);
  const textMovRef = useRef<HTMLHeadingElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim(textMovRef.current);
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" main-section-spacing">
          <div className=" grid gap-y-5 gap-x-[60px] md:grid-cols-[1fr_auto] items-center">
            <div className="">
              <div className="">
                <h2
                  ref={textMovRef}
                  className=" inner-section-title max-w-[630px] font-normal"
                >
                  {title}
                </h2>
              </div>
            </div>
            <div className="">
              <p className="has_fade_anim max-w-[420px]">{description}</p>
            </div>
          </div>
          <div className=" mt-[43px] lg:mt-[53px] xl:mt-[63px]">
            <div className=" grid gap-y-10 gap-x-[30px] xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {team_member.map((profile, index) => {
                const adjustedIndex = index % 4;
                return (
                  <div
                    key={profile.id}
                    className="has_fade_anim"
                    data-delay={(adjustedIndex + 1) * 0.15}
                  >
                    <ProfileInnerCard profileData={profile} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;

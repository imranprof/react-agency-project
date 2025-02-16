"use client";

import { useRef } from "react";
import ProfileInnerCard from "@/components/team/branding/ProfileInnerCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  team_area: {
    title: string;
    description: string;
  };
  member: {
    id: number;
    image: string;
    name: string;
    position: string;
  }[];
};

const AboutTeam = ({ team_area, member }: Props) => {
  const firstFourMember = member.slice(0, 4);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className=" bg-black">
      <div className="inner-container" ref={containerRef}>
        <div className=" main-section-spacing">
          <div className=" text-center">
            <div className="">
              <div className="">
                <h2 className="has_fade_anim inner-section-title font-normal max-w-[540px] mx-auto text-white">
                  {team_area.title}
                </h2>
              </div>
            </div>
            <div className=" mt-[12px] lg:mt-[22px]">
              <p className="has_fade_anim text-white-2 mx-auto max-w-[630px]">
                {team_area.description}
              </p>
            </div>
          </div>
          <div className=" mt-[43px] lg:mt-[53px] xl:mt-[63px]">
            <div className=" grid gap-y-10 gap-x-[30px] xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {firstFourMember.map((profile, index) => (
                <div
                  key={profile.id}
                  className="odd:md:mt-[70px] member-inner-card has_fade_anim"
                  data-fade-from="left"
                  data-delay={(index + 1) * 0.15}
                >
                  <ProfileInnerCard
                    profileData={profile}
                    className="text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

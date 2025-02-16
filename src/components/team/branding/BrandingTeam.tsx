"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ProfileCard from "@/components/team/branding/ProfileCard";
import { TTeamMemberType } from "@/types";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type teamProps = {
  team: {
    title: string;
    text: string;
  };
  teamMembers: TTeamMemberType[];
};

const BrandingTeam = ({ team, teamMembers }: teamProps) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="team_area main-section-style bg-soft-pink"
    >
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing ">
          <div className=" grid gap-x-10 gap-y-[30px] sm:grid-cols-2 items-center">
            <div>
              <div>
                <h2 className="has_fade_anim main-section-title">
                  {team.title}
                </h2>
              </div>
            </div>
            <div>
              <p className="has_fade_anim max-w-[380px] leading-[1.41] text-[18px] text-black-2">
                {team.text}
              </p>
            </div>
          </div>
          <div className=" mt-[50px] lg:mt-[70px] xl:mt-[90px] border border-t-black sm:border-0">
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-[60px] xl:gap-x-20">
              {teamMembers.map((profile) => (
                <ProfileCard {...profile} key={profile.data.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingTeam;

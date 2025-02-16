"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { TjobDataType } from "@/types";

type Props = {
  data: TjobDataType;
};

const JobInfoCard = ({ data }: Props) => {
  const { title, location, post_date, job_type } = data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="inner-container" ref={containerRef}>
      <div className=" pt-8 max-w-[850px]">
        <div className="has_fade_anim">
          <h1 className="inner-section-title font-normal">{title}</h1>
        </div>
        <ul className="has_fade_anim job_meta flex gap-y-[30xp] gap-x-[70px] mt-[31px] border-b pb-7">
          <li>
            <span className="text-[14px] text-[#8E8E8E] inline-block">
              Location
            </span>
            <span className="text-[16px] font-medium block mt-[9px]">
              {location}
            </span>
          </li>
          <li>
            <span className="text-[14px] text-[#8E8E8E] inline-block">
              Date
            </span>
            <span className="text-[16px] font-medium block mt-[9px]">
              {post_date}
            </span>
          </li>
          <li>
            <span className="text-[14px] text-[#8E8E8E] inline-block">
              Job Type
            </span>
            <span className="text-[16px] font-medium block mt-[9px]">
              {job_type}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobInfoCard;

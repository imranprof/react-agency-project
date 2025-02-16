"use client";

import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  data: {
    title: string;
    count: number;
    bg_image: string;
    suffix?: string;
  };
  className?: string;
};

const TeamStatCard = ({ data, className }: Props) => {
  const { title, count, suffix, bg_image } = data;
  const countRef = useRef<HTMLSpanElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim(countRef.current, count);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "counter_box pt-9 px-10 pb-[22px] xxl:pt-[46px] xxl:px-[50px] xxl:pb-[32px] flex gap-[10px] flex-col justify-between bg-[#FBF9F9] relative z-10",
        className
      )}
    >
      <Image
        src={bg_image}
        alt="bg_image"
        width={190}
        height={260}
        className="absolute top-0 start-0 -z-10"
      />
      <h2 className="has_fade_anim text text-[20px] xxl:text-[24px] leading-[1.26] font-beatricetrial font-normal">
        {title}
      </h2>
      <h2 className="has_fade_anim number text-[70px] xxl:text-[100px] leading-none mt-[60px] font-beatricetrial font-normal">
        <span ref={countRef}>{count}</span>
        {suffix || ""}+
      </h2>
    </div>
  );
};

export default TeamStatCard;

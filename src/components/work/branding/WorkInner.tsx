"use client";

import { useRef } from "react";
import { TWorkInnerType } from "@/types";
import Image from "next/image";
import ProjectCard from "@/components/work/branding/ProjectCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

const WorkInner = ({ data }: TWorkInnerType) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const textMovRef = useRef<HTMLHeadingElement>(null!);

  const { title, description, icon, projects } = data;

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim(textMovRef.current);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className=" section-spacing-bottom  grid md:grid-cols-[1fr_570px] lg:grid-cols-[1fr_740px] xl:grid-cols-[1fr_880px] gap-y-[30px] gap-x-[60px] pt-[127px] lg:pt-[147px] xxl:pt-[217px]"
    >
      <div>
        <div>
          <div>
            <h1 ref={textMovRef} className=" inner-section-title large">
              {title}
            </h1>
          </div>
        </div>
        <div className=" mt-[10px]">
          <p className="has_fade_anim max-w-full md:max-w-[330px] md:indent-[60px]">
            {description}
          </p>
        </div>
        <div className="has_fade_anim mt-[54px] hidden md:block">
          <Image
            className="max-w-full"
            src={icon.dark}
            alt="dark_icon"
            width={40}
            height={80}
          />
          <Image
            className="hidden"
            src={icon.light}
            alt="light_icon"
            width={40}
            height={80}
          />
        </div>
      </div>
      <div className="">
        <div className=" grid gap-12 lg:gap-[68px] ">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkInner;

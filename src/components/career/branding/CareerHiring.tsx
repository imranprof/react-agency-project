"use client";

import HiringRoleCard from "@/components/career/branding/HiringRoleCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { TJobType } from "@/types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  title: string;
  jobs: TJobType[];
};

const CareerHiring = ({ title, jobs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className=" bg-[#121212]">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" main-section-spacing">
          <div className="">
            <div className="">
              <div className="">
                <h2 className="has_fade_anim text-white inner-section-title font-normal">
                  {title}
                </h2>
              </div>
            </div>
          </div>
          <div className=" mt-[37px] lg:mt-[47px] xl:mt-[57px]">
            <div className="">
              {jobs.map((item, index) => (
                <HiringRoleCard
                  key={index}
                  serialNo={index + 1}
                  job={item.data}
                  path={item.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHiring;

"use client";

import CustomButton from "@/components/elements/button/CustomButton";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { TjobDataType } from "@/types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  data: TjobDataType;
};

const JobDetailsCard = ({ data }: Props) => {
  const { experience, working_hours, working_days, salary, vacancy, deadline } =
    data;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className=" w-full xs:w-[410px] bg-white ms-auto has_fade_anim">
        <div className=" px-[25px] py-[34px] lg:px-[45px] lg:py-[54px]">
          <ul className="job-meta">
            <li>
              <span className="title">Experience</span>
              <span className="text">{experience}</span>
            </li>
            <li>
              <span className="title">Working Hours</span>
              <span className="text">{working_hours}</span>
            </li>
            <li>
              <span className="title">Working Days</span>
              <span className="text">{working_days}</span>
            </li>
            <li>
              <span className="title">Salary</span>
              <span className="text">{salary}</span>
            </li>
            <li>
              <span className="title">Vacancy</span>
              <span className="text">No of Vacancies: {vacancy}</span>
            </li>
            <li>
              <span className="title">Deadline</span>
              <span className="text">{deadline}</span>
            </li>
          </ul>
        </div>
        <CustomButton
          btnText="Apply For the Job"
          className="bg-black text-white text-[18px] !rounded-none w-full  h-[60px] lg:h-[100px] px-[35px] lg:px-[45px] flex justify-center items-center"
        />
      </div>
    </div>
  );
};

export default JobDetailsCard;

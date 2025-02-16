"use client";

import Image from "next/image";
import { TBlogType } from "@/types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const BlogDetailsTop = ({ data }: TBlogType) => {
  const { title, image, published_date, likes, comments } = data;
  const formattedNumber = (number: number) => {
    return number.toLocaleString("en-US");
  };
  const monthMap: { [key: string]: string } = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
  const month = published_date?.split(" ")[1];
  const date = published_date?.split(" ")[0];

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div>
        <div>
          <h1 className="has_fade_anim !font-normal main-section-title text-[36px] xs:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] xxl:text-[100px]">
            {title}
          </h1>
        </div>
      </div>
      <div className="has_fade_anim mt-[31px] mb-[57px] lg:mb-[77px] xxl:mb-[97px]">
        <ul className="grid grid-cols-[auto,auto] xs:flex gap-y-[30px] ">
          <li>
            <span className=" text-[20px] sm:text-[26px] lg:text-[30px] inline-block font-beatricetrial">{`${formattedNumber(
              comments
            )} +`}</span>
            <p className=" mt-[9px]">Comments</p>
          </li>
          <li className="xs:border-s xs:ms-[30px] xs:ps-[30px]">
            <span className=" text-[20px] sm:text-[26px] lg:text-[30px] inline-block font-beatricetrial">{`${formattedNumber(
              likes
            )} +`}</span>
            <p className=" mt-[9px]">Likes</p>
          </li>
          <li className="xs:border-s xs:ms-[30px] xs:ps-[30px]">
            <span className=" text-[20px] sm:text-[26px] lg:text-[30px] inline-block font-beatricetrial">
              {date}
            </span>
            <p className=" mt-[9px]">{monthMap[month]}</p>
          </li>
        </ul>
      </div>
      <div className=" overflow-hidden">
        <Image
          src="/assets/imgs/blog/img-s-26.webp"
          alt="blog_thumb"
          width={1290}
          height={550}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BlogDetailsTop;

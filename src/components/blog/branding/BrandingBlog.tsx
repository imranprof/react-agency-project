"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SwapButtonGroup from "@/components/elements/button/SwapButtonGroup";
import { FaArrowRight } from "react-icons/fa";
import { TBlogType } from "@/types";
import BlogCard from "@/components/blog/branding/BlogCard";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type BlogProps = {
  sectionData: {
    title: string;
    btn_tile: string;
  };
  blogs: TBlogType[];
};

const BrandingBlog = ({ sectionData, blogs }: BlogProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  const firstThreeBlogs = blogs.slice(0, 3);

  return (
    <section ref={pinElement} className=" main-section-style bg-white">
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing">
          <div className=" grid gap-y-[30px] gap-x-[60px] items-center justify-between sm:grid-cols-[auto_auto]">
            <div className="">
              <div className="">
                <h2 className="has_fade_anim max-w-[420px] main-section-title">
                  {sectionData.title}
                </h2>
              </div>
            </div>
            <div className="inline-block has_fade_anim" data-fade-from="right">
              <SwapButtonGroup
                button1Content={
                  <FaArrowRight className="transform rotate-[-45deg] text-[18px]" />
                }
                button2Content={sectionData.btn_tile}
                button1Class="text-white bg-black h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] text-[14px] rounded-full
                last:ms-0 last:me-[-50px] lg:last:me-[-70px] group-hover:me-0 group-hover:first:ms-[-50px]  lg:group-hover:first:ms-[-70px]"
                button2Class="text-[15px] text-white px-[32px] lg:px-[42px] text-white bg-black rounded-[40px]"
                textFirst={true}
                link="/blog"
              />
            </div>
          </div>
          <div className=" mt-[50px] lg:mt-[70px] xl:mt-[90px]">
            <div className=" grid gap-x-[30px] gap-y-[45px] sm:gap-y-[55px] md:gap-x-[35px] md:gap-y-[55px] sm:grid-cols-2 md:grid-cols-3">
              {firstThreeBlogs.map((blog) => (
                <BlogCard key={blog.data.id} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingBlog;

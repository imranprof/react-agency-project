"use client";

import { useState, useRef } from "react";
import { TBlogType } from "@/types";
import BlogInnerCard from "@/components/blog/branding/BlogInnerCard";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  blogs: TBlogType[];
  blog_area: {
    title: string;
    description: string;
  };
};

const BlogArea = ({ blogs, blog_area }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const formattedNumber = (number: number) =>
    number < 10 ? `0${number}` : `${number}`;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginatedBlogs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="blog_area">
      <div className="inner-container" ref={containerRef}>
        <div className=" main-section-spacing grid  gap-y-[30px] gap-x-[60px] md:grid-cols-[1fr_620px] lg:grid-cols-[1fr_750px] xl:grid-cols-[1fr_850px]">
          <div className="">
            <div className="">
              <div className="">
                <h2 className="section_title has_fade_anim inner-section-title font-normal max-w-[340px]">
                  {blog_area.title}
                </h2>
              </div>
            </div>
            <div className=" mt-[22px]">
              <p className=" has_fade_anim max-w-[300px]">
                {blog_area.description}
              </p>
            </div>
          </div>
          <div className="">
            <div className="has_fade_anim grid gap-y-[40px] gap-x-[30px] lg:gap-y-[45px] lg:gap-x-[50px] xs:grid-cols-2">
              {getPaginatedBlogs().map((blog, i) => (
                <BlogInnerCard key={blog.data.id} {...blog} serialNo={i + 1} />
              ))}
            </div>
            <div className="has_fade_anim mt-[50px]">
              <ul className="blog-pagination flex gap-[10px]">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={cn(
                      "",
                      currentPage === index + 1 && "text-orange-400"
                    )}
                  >
                    <a onClick={() => handleClick(index + 1)}>
                      {formattedNumber(index + 1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;

"use client";

import { TBlogType } from "@/types";
import FeaturedBlogCard from "@/components/blog/branding/FeaturedBlogCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  blogs: TBlogType[];
};

const FeaturedPost = ({ blogs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="">
      <div className="inner-container" ref={containerRef}>
        <div className="">
          <div className=" grid gap-[30px] sm:grid-cols-2 md:grid-cols-3 ">
            {blogs.map((blog, index) => (
              <div
                key={blog.data.id}
                className="has_fade_anim first:lg:col-span-2 first:lg:row-span-2 relative overflow-hidden group"
                data-delay={(index + 1) * 0.15}
              >
                <FeaturedBlogCard {...blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;

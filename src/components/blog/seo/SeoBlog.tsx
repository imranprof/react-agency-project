"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import { TBlogType } from "@/types";
import BlogCard from "@/components/blog/seo/BlogCard";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  sectionData: {
    title: string;
    action_btn: {
      label: string;
      link: string;
    };
  };
  blogs: TBlogType[];
};

const SeoBlog = ({ sectionData, blogs }: Props) => {
  const { title, action_btn } = sectionData;
  const containerRef = useRef<HTMLDivElement>(null!);
  const textMovRef = useRef<HTMLHeadingElement>(null!);
  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim(textMovRef?.current);
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" section-spacing-top">
          <div className=" grid gap-y-[30px] gap-x-[60px] md:grid-cols-[1fr_auto] justify-between items-center">
            <div className="">
              <div className="">
                <h2
                  ref={textMovRef}
                  className="seo-section-title max-w-[620px]"
                  dangerouslySetInnerHTML={convertWithBrSpan(title)}
                />
              </div>
            </div>
            <div className=" has_fade_anim" data-fade-from="bottom">
              <Link
                href={"/blog"}
                className={cn(buttonVariants({ variant: "Seo" }))}
              >
                <span data-text={action_btn.label}>{action_btn.label}</span>
              </Link>
            </div>
          </div>
          <div className=" mt-[47px] xl:mt-[67px] xxl:mt-[87px]">
            <div className=" grid gap-[30px] xs:grid-cols-2">
              {blogs.map((blog, index) => (
                <div
                  key={blog.data.id}
                  className="has_fade_anim"
                  data-delay={(index + 1) * 0.2}
                >
                  <BlogCard {...blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoBlog;

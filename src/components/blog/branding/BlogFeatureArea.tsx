"use client";

import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  data: {
    feature: {
      title: string;
      description: string;
      total_post: number;
      writer_count: number;
    };
  };
};

const BlogFeatureArea = ({ data }: Props) => {
  const { title, description, total_post, writer_count } = data.feature;
  const postElemetnt = useRef<HTMLSpanElement>(null!);
  const writerElemetnt = useRef<HTMLSpanElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasCountAnim(postElemetnt.current, total_post);
      hasCountAnim(writerElemetnt.current, writer_count);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className=" pt-[127px] lg:pt-[147px] xxl:pt-[217px] pb-[53px] lg:pb-[73px] xxl:pb-[93px]">
          <div className=" grid gap-y-5 gap-x-[60px] xs:grid-cols-[1fr_auto]">
            <div className="">
              <div className="">
                <h1 className="has_fade_anim large max-w-[450px] xl:max-w-[550px] inner-section-title large ">
                  {title}
                </h1>
              </div>
            </div>
            <div className="">
              <div className="">
                <p className="has_fade_anim max-w-[300px]">{description}</p>
              </div>
              <div className="has_fade_anim mt-10  flex gap-y-5 gap-x-[30px]">
                <div className="">
                  <span className=" text-[30px] leading-none font-beatricetrial text-primary">
                    <span ref={postElemetnt}>{total_post}</span>+
                  </span>
                  <p className=" text-[18px] leading-none mt-[9px]">
                    Total post
                  </p>
                </div>
                <div className=" ps-[30px] border-s">
                  <span className=" text-[30px] leading-none font-beatricetrial text-primary">
                    <span ref={writerElemetnt}>{writer_count}</span> +
                  </span>
                  <p className=" text-[18px] leading-none mt-[9px]">
                    Blog writer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatureArea;

"use client";

import TopLineButton from "@/components/elements/button/TopLineButton";
import IntroSection from "@/components/elements/introSection/IntroSection";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  hero: {
    btn_text: string;
    title: string;
    description: string;
    total_client: number;
  };
};

const TeamHero = ({ hero }: Props) => {
  const { btn_text, title, description, total_client } = hero;

  const containerRef = useRef<HTMLDivElement>(null!);
  const countRef = useRef<HTMLSpanElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim(countRef.current, total_client);
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="container" ref={containerRef}>
        <div className=" pt-[127px] lg:pt-[147px] xxl:pt-[217px] pb-[60px] lg:pb-[100px]">
          <div className=" grid gap-y-[30px] gap-x-[60px] md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] xxl:grid-cols-[485px_960px]">
            <div className="has_fade_anim" data-fade-from="left">
              <TopLineButton link="/contact" btn_text={btn_text} />
            </div>
            <div className="">
              <IntroSection title={title} description={description} />
              <div className="has_fade_anim inline-block py-[27px] px-[50px] border rounded-[100px] min-w-[260px] mt-[33px] lg:mt-[43px] lg:ms-[220px]">
                <span className=" text-[30px] font-normal font-beatricetrial leading-none inline-block text-black-2">
                  <span ref={countRef}>{total_client.toLocaleString()}</span> +
                </span>
                <p className=" max-w-[410px] mt-[9px] leading-none">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;

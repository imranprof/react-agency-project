"use client";

import { convertWithBrSpan } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  ctaContent: {
    title: string;
    action_btn: {
      label: string;
      link: string;
    };
  };
};

const Cta2 = ({ ctaContent }: Props) => {
  const { title, action_btn } = ctaContent;

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
        <div className=" main-section-spacing">
          <div className=" text-center">
            <div className="">
              <div className="">
                <h2
                  ref={textMovRef}
                  className="seo-section-title max-w-[680px] mx-auto"
                  dangerouslySetInnerHTML={convertWithBrSpan(title)}
                />
              </div>
            </div>
            <div className=" has_fade_anim mt-[42px]">
              <Link
                href={action_btn.link}
                className={cn(buttonVariants({ variant: "Seo" }))}
              >
                <span data-text={action_btn.label}>{action_btn.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;

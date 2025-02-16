"use client";

import CustomButton from "@/components/elements/button/CustomButton";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  data: {
    image: {
      dark: string;
      light: string;
    };
    title: string;
    description: string;
    btn_text: string;
    shape: {
      dark: string;
      light: string;
    };
  };
};

const ErrorPage = ({ data }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const { image, title, description, btn_text, shape } = data;
  return (
    <section className=" h-[100vh] pt-[70px] flex items-center justify-center">
      <div className="container xl:!max-w-[1320px]" ref={containerRef}>
        <div className=" main-section-spacing">
          <div className=" relative text-center">
            <div className=" hidden sm:block absolute top-[calc(100%+13px)] start-[110px] ">
              <Image
                alt="shape_dark"
                src={shape.dark}
                width={38}
                height={38}
                className="inline-block max-w-full"
              />
              <Image
                alt="shape_light"
                src={shape.light}
                width={38}
                height={38}
                className="hidden max-w-full"
              />
            </div>
            <div className="has_fade_anim flex justify-center" data-delay=".15">
              <Image
                alt="error_img_dark"
                src={image.dark}
                priority
                width={464}
                height={154}
                className="max-w-[200px] sm:max-w-[264px] lg:max-w-[364px] xl:max-w-[464px] h-auto"
              />
              <Image
                alt="error_img_dark"
                src={image.light}
                priority
                width={464}
                height={154}
                className=" hidden max-w-[200px] sm:max-w-[264px] lg:max-w-[364px] xl:max-w-[464px] h-auto"
              />
            </div>
            <div className=" mt-8 xl:mt-[42px]">
              <div className="">
                <h1
                  className="has_fade_anim  inner-section-title font-normal"
                  data-delay=".30"
                >
                  {title}
                </h1>
              </div>
            </div>
            <div className=" mt-4">
              <p
                className="has_fade_anim mx-auto max-w-[340px]"
                data-delay=".45"
              >
                {description}
              </p>
            </div>
            <div
              className="has_fade_anim mt-[33px] xl:mt-[43px]"
              data-delay=".60"
            >
              <CustomButton
                btnText={btn_text}
                className="bg-black text-white"
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

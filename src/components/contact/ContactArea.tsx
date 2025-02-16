"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ContactInfo from "@/components/contact/ContactInfo";
import FlexibleForm from "@/components/form/branding/FlexibleForm";

type ContactInfo = {
  header: {
    title: string;
    description: string;
  };
  info: {
    title: string;
    contact_list: {
      phone: string;
      email: string;
      address: string;
    };
  };
};

const ContactArea = ({ header, info }: ContactInfo) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="">
      <div className="inner-container" ref={containerRef}>
        <div className="main-section-spacing ">
          <div className=" grid gap-y-5 gap-x-[60px] md:grid-cols-[1fr_auto]">
            <div className="">
              <div className="">
                <h2 className="has_fade_anim inner-section-title large max-w-[850px] font-normal">
                  {header.title}
                </h2>
              </div>
            </div>
            <div className="">
              <p className=" has_fade_anim max-w-[300px]">
                {header.description}
              </p>
            </div>
          </div>
          <div className=" grid gap-y-10 gap-x-[60px] mt-[42px] lg:mt-[72px] xxl:mt-[112px] md:grid-cols-[1fr_600px] lg:grid-cols-[1fr_640px] xl:grid-cols-[1fr_740px]">
            <ContactInfo {...info} />
            <div className=" has_fade_anim" data-delay="0.30">
              <FlexibleForm btnText="Send Message" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;

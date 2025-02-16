import StarRatingG from "@/components/tools/StarRatingG";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { TSeoClientsFeedback } from "@/types";
import Image from "next/image";

type Props = {
  clientsFeedback: TSeoClientsFeedback;
};

const ClientsFeedBack = ({ clientsFeedback }: Props) => {
  const {
    title,
    subtitle,
    clients_avatar,
    review_title,
    rating,
    description,
    clients,
  } = clientsFeedback;
  return (
    <div className="section-content">
      <div className="section-title-wrapper">
        <div
          className="subtitle-wrapper has_fade_anim flex gap-[15px] items-center"
          data-fade-from="left"
        >
          <Image
            src={clients_avatar}
            alt="clients avatar"
            width={81}
            height={36}
            className="show-light inline-block"
          />

          <span className="section_subtitle text-[18px] font-medium text-black-primary font-spacegrotesk">
            {subtitle}
          </span>
        </div>
        <div className="title_wrapper mt-[15px] sm:mt-[30px]">
          <h2
            className="seo-section-title has_fade_anim max-w-[390px]"
            data-fade-from="left"
            dangerouslySetInnerHTML={convertWithBrSpan(title)}
          />
        </div>
      </div>
      <div className="text-wrapper mt-[22px] lg:mt-[32px]">
        <p className="text has_fade_anim max-w-[357px]" data-fade-from="left">
          {description}
        </p>
      </div>
      <div className="review_wrapper_box mt-[43px] lg:mt-[63px]">
        <div
          className="review_wrapper has_fade_anim bg-[#E7F5EB] rounded-[5px] py-[15px] px-5 inline-flex items-center"
          data-fade-from="left"
        >
          <div className="review_author flex gap-[10px] items-center">
            <Image
              src={"/assets/imgs/icon/star-3.webp"}
              alt="icon"
              width={34}
              height={33}
              className=""
            />

            <h3
              className="text text-[16px] font-semibold font-spacegrotesk"
              dangerouslySetInnerHTML={convertWithBrSpan(review_title)}
            />
          </div>
          <div className="review_rating ps-5 border-[#CDDBD9] border-s ms-5">
            <div className="ratings flex items-center">
              <h3 className="number text-[22px] inline-block font-spacegrotesk font-bold">
                {rating}
              </h3>
              <StarRatingG
                value={4.9}
                count={5}
                size={30}
                className="gap-[2px] ms-2 text-[14px]"
              />
            </div>
            <h3 className="text text-[14px] mt-1 font-bold text-black-primary font-spacegrotesk">
              {clients}+ client reviews
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedBack;

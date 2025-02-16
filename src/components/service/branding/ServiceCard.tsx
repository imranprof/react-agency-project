import { TServiceType } from "@/types";
import Image from "next/image";

const ServiceCard = ({ data, slug }: TServiceType) => {
  function formatSerialNumber(number: number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <div className="has_fade_anim" data-delay={data.id ? data.id * 0.15 : 0}>
      <a href={`/service/${slug}`}>
        <div className="service-box hover:scale-[1.03] bg-black-3 pt-[37px] pb-[36px] px-[30px] xxl:pt-[47px] xxl:pb-[46px] xxl:px-[50px] rounded-[20px] transition-all duration-500">
          <span className="number text-[18px]">
            {formatSerialNumber(data.id)}
          </span>
          <div className="icon mt-9 lg:mt-[86px] xxl:mt-[136px]">
            <Image src={data.icon} alt="icon" height={50} width={50} />
          </div>
          <div className="content">
            <h3 className="title leading-[1.2] mt-[26px] text-[24px] lg:mt-[46px] xl:text-[26px] xxl:mt-14 xxl:text-[30px]">
              {data.title}
            </h3>
            <p className="text text-white-2 mt-[18px] lg:mt-[23px]">
              {data.description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;

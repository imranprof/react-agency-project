import Link from "next/link";
import { TServiceType } from "@/types";
import Image from "next/image";
import { convertWithBr } from "@/lib/helper/converter";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ data, slug }: TServiceType) => {
  function formatSerialNumber(number: number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <div className="has_fade_anim">
      <Link href={`/service/seo/${slug}`}>
        <div className="service_box first:border-t border-[#3D3D3D] border-b grid py-9 gap-[30px] grid-cols-[auto_1fr] lg:grid-cols-[50px_200px_1fr] xl:grid-cols-[80px_220px_1fr] items-center transition-all duration-500 group hover:bg-[#242424]">
          <h3 className="number text-lg font-semibold transition-all duration-500 text-white font-spacegrotesk lg:group-hover:translate-x-[30px]">
            {formatSerialNumber(data.id)}
          </h3>
          <div className="thumb">
            <Image
              src={data.icon}
              alt="thumb img"
              width={220}
              height={65}
              className="rounded-[60px]"
            />
          </div>
          <div className="content grid gap-5 sm:grid-cols-[31%_1fr_auto] items-center col-span-2 lg:col-span-1">
            <h3
              className="title text-2xl md:text-[28px] leading-[1.07] text-white font-spacegrotesk font-bold"
              dangerouslySetInnerHTML={convertWithBr(data.title)}
            />
            <p className="text max-w-[330px] xl:max-w-[360px] text-white-2">
              {data.description}
            </p>
            <Button
              variant="circle"
              className="group-hover:bg-yellow-2 group-hover:text-black lg:group-hover:translate-x-[-30px]"
            >
              <FaArrowRight className="-rotate-45" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;

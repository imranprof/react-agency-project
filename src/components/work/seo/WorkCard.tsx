import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TWorkType } from "@/types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const WorkCard = ({ data, slug }: TWorkType) => {
  const { image, tags, title } = data;
  return (
    <div className="project_box inline-block relative group ">
      <div className="seo-project-thumb md:group-hover:scale-[1.09] relative rounded-[5px] overflow-hidden transition-all duration-500">
        <Image
          src={image}
          alt="thumb image"
          width={425}
          height={520}
          className="w-full h-full object-cover rounded-[5px]"
          priority
        />
      </div>
      <div className="meta absolute top-0 start-0 m-[30px] xxl:m-10">
        <span className="tag text-[14px] uppercase leading-none inline-block py-[10px] px-[15px] rounded-[5px] bg-[#FFFFFF59] text-black">
          {tags?.[0]}
        </span>
      </div>
      <div className="content absolute bottom-0 start-0 m-[30px] xxl:m-10 overflow-hidden">
        <h3 className="title text-[22px] xxl:text-[24px] text-white font-spacegrotesk font-semibold leading-[1.25] transition-all duration-500">
          <Link href={`/work/seo/${slug}`}>{title}</Link>
        </h3>
        <Link
          href={`/work/seo/${slug}`}
          className={cn(
            buttonVariants({ variant: "circle" }),
            "border-border-2 text-black !h-[60px] !w-[60px] xxl:!h-[70px] xxl:!w-[70px] bg-yellow-2 md:opacity-0 md:mb-[-88px] mt-7 md:group-hover:mb-0 md:group-hover:opacity-100"
          )}
        >
          <FaArrowRight className="-rotate-45" />
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;

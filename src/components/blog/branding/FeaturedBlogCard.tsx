import Image from "next/image";
import { TBlogType } from "@/types";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedBlogCard = ({ data, slug }: TBlogType) => {
  const { image, title, published_date } = data;

  return (
    <article className="">
      <a href={`/blog/${slug}`} className="block">
        <div className=" w-full h-full !overflow-hidden">
          <Image
            alt="blog_image"
            src={image}
            width={410}
            height={260}
            style={{ objectFit: "cover" }}
            className="w-full h-full transition-all transform group-hover:scale-[1.03] duration-500"
          />
        </div>
        <div className=" static lg:absolute w-full lg:px-[30px] lg:pt-[30px] xl:pt-[30px] xl:px-[60px] start-0 bottom-0 lg:opacity-0 lg:invisible transition-all duration-500 grid gap-y-[20px] gap-x-[50px] lg:grid-cols-[1fr_30px] justify-between mt-[22px] md:mt-[28px] group-hover:opacity-100 group-hover:visible group-hover:bottom-[54px]">
          <div className="">
            <h2 className=" text-[20px] lg:text-[24px] xl:text-[30px] font-normal font-beatricetrial lg:text-white">
              {title}
            </h2>
            <span className=" text-[14px] leading-[1.53] mt-[13px] inline-block text-black-2 lg:text-white ">
              Features Post <br className="hidden sm:block" />
              {published_date}
            </span>
          </div>
          <div className="icon">
            <FaArrowRight className="text-white transform -rotate-45 text-[20px] hidden lg:inline-block" />
          </div>
        </div>
      </a>
    </article>
  );
};

export default FeaturedBlogCard;

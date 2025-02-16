import Image from "next/image";
import { TBlogType } from "@/types";

const BlogCard = ({ data, slug }: TBlogType) => {
  const { title, image, tags, published_date, id } = data;

  return (
    <article
      className="blog group has_fade_anim"
      data-fade-from="right"
      data-delay={id ? id * 0.15 : 0}
    >
      <div className=" rounded-[10px] lg:rounded-[20px] overflow-hidden relative">
        <Image
          src="/assets/imgs/shape/img-s-95.webp"
          width={98}
          height={50}
          alt="top-shape"
          className="opacity-0 absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-500 group-hover:opacity-100 ease-in-out z-10"
        />
        <a href={`/blog/${slug}`}>
          <Image
            height={400}
            width={550}
            src={image}
            alt="blog-img"
            className="group-hover:scale-105 transition-all duration-500"
          />
        </a>
        <Image
          src="/assets/imgs/shape/img-s-94.webp"
          alt="bottom-shape"
          width={98}
          height={50}
          className="opacity-0 absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 group-hover:opacity-100 ease-in-out"
        />
      </div>
      <div className=" max-w-full sm:max-w-[460px] mt-[23px] lg:border-s lg:ps-[29px] lg:mt-[33px] xl:ps-[49px] xl:mt-[43px]">
        <h2 className=" text-[20px] lg:text-[23px] xl:text-[26px] xxl:text-[30px] leading-[1.2]">
          <a href={`/blog/${slug}`}>{title}</a>
        </h2>
        <div className=" flex gap-[5px] mt-[17px] text-black-2">
          <a href="#">
            <span className=" text-[12px] px-[14px] py-2 lg:text-[14px] lg:px-4 lg:py-3 uppercase border inline-block rounded-[40px] hover:text-black">
              {tags?.[0]}
            </span>
          </a>
          <span className=" text-[12px] px-[14px] py-2 lg:text-[14px] lg:px-4 lg:py-3 uppercase border inline-block rounded-[40px]">
            {published_date}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  text: string;
  author: string;
  className?: string;
};

const Quote = ({ text, author, className }: Props) => {
  return (
    <div className={cn("blog_details_quote bg-primary px-[25px] py-[25px] md:py-[35px] md:px-[45px] mb-10 xl:mb-[60px] grid gap-y-5 gap-x-[45px] md:grid-cols-[60px,1fr] relative z-10", className)}>
      <div className="shape_1 absolute end-[45px] bottom-[35px] -z-10">
        <Image src="/assets/imgs/icon/quote-11.webp" alt="shape_1"
          width={70}
          height={53}
        />
      </div>
      <div className="icon hidden md:block">
        <Image src="/assets/imgs/icon/quote-10.webp" alt="icon"
          width={70}
          height={53}
        />
      </div>
      <div className="blog_details_quote_info ">
        <div className="blog_details_quote_text ">
          <p className="text text-white text-[23px] md:text-[27px] leading-[1.11] font-beatricetrial">{text}</p>
        </div>
        <div className="blog_details_author">
          <span className="name text-[14px] leading-none mt-[30px] text-white inline-block relative ps-[35px]">
            <div className="absolute w-[30px] h-[1px] bg-current top-1/2 transform -translate-y-1/2 start-0"></div>
            {author}</span>
        </div>
      </div>
    </div>
  )
}

export default Quote
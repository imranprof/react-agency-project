
import Image from "next/image"
import { TBlogType } from "@/types"
import { FaArrowRight } from "react-icons/fa";

type Props = TBlogType & {
  serialNo: number;
}
const BlogInnerCard = ({ data, slug, serialNo }: Props) => {

  const formatSerial = (number: number) => {
    return number < 10 ? `0${number}` : number;
  }

  const { title, id, thumb_img } = data
  return (
    <a href={`/blog/${slug}`}>
      <div className=" group">
        <div>
          <Image src={thumb_img} alt="blog_thumb"
            height={400}
            width={514}
            className="w-full h-auto"
          />
        </div>
        <div className=" pb-[13px] lg:pb-[23px] pt-5 lg:pt-[25px] grid grid-cols-[38px_1fr_auto] lg:grid-cols-[68px_1fr_auto] border-b gap-[10px]  group-hover:border-black transition-all duration-500">
          <span className=" text-[18px] text-black-2 group-hover:text-black">{formatSerial(serialNo)}</span>
          <h3 className=" text-[20px] lg:text-[24px] leading-[1.25] font-beatricetrial font-normal">{title}</h3>
          <span className=" transition-all duration-500 transform group-hover:translate-x-[10px] group-hover:translate-y-[-10px] hidden sm:inline-block opacity-0 sm:group-hover:opacity-100 "><FaArrowRight className="transform rotate-[-45deg] text-[20px]" /></span>
        </div>
      </div>
    </a>
  )
}

export default BlogInnerCard
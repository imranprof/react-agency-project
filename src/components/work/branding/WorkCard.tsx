import Link from "next/link"
import Image from "next/image"
import { TWorkType } from "@/types"

const WorkCard = ({ data, slug }: TWorkType) => {
  return (
    <div>
      <div className="group rounded-[20px] overflow-hidden relative">
        <Image src="/assets/imgs/works/img-s-95.webp"
          width={98}
          height={50}
          alt="top-shape"
          className="opacity-0 absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-500 group-hover:opacity-100 ease-in-out z-10" />
        <Link href={`/work/${slug}`}>
          <img src={data.image}
            alt="WorkImage"
            className="w-full transition-transform  duration-500 group-hover:scale-105"
          />
        </Link>
        <Image src="/assets/imgs/works/img-s-94.webp"
          alt="bottom-shape"
          width={98}
          height={50}
          className="opacity-0 absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 group-hover:opacity-100 ease-in-out" />
      </div>
      <div className="mt-[18px] lg:mt-7">
        <h3 className=" text-[20px] sm:text-[22px] lg:text-[30px] leading-[1.2] font-instrument font-semibold w-full sm:w-1/2">{data.title}</h3>
        <div className="tags flex gap-[5px] mt-[17px]">
          {data.tags.map((item, index) => (
            <div key={index} className="tag text-[14px] uppercase inline-block py-3 px-4 border-[1px] rounded-[40px] text-black-2">{item}</div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default WorkCard
import Image from "next/image"

type Props = {
  image: string;
  title: string;
  tag: string;
}

const MaterialCard = ({ image, title, tag }: Props) => {
  return (
    <>
      <Image src={image} alt="image" 
      data-swiper-material-scale="1.25"
      width={800}
      height={550}
      className=" absolute left-[0%] top-0 w-full h-full block rounded-none"
      style={{objectFit: "cover"}}
      priority
      />

      <div className=" swiper-material-animate-opacity absolute left-0 bottom-0 w-full h-1/2 box-border py-7 px-[30px] lg:py-12 lg:px-[50px] flex flex-col font-medium justify-end items-start whitespace-nowrap">
        <h2 className=" text-[22px] xs:text-[26px] lg:text-[30px] xl:text-[36px] leading-none text-white
         uppercase">{title}</h2>
        <span className=" text-[14px] mt-3 lg:mt-[17px] font-normal uppercase text-white inline-block">{tag}</span>
      </div>
    </>
  )
}

export default MaterialCard
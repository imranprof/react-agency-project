import Image from "next/image"

type Props = {
  image: string;
  title: string;
  tag: string;
}

const CarouselCard = ({ image, title, tag }: Props) => {
  return (
    <div className=" h-full">
      <Image src={image} alt="image"
        width={800}
        height={550}
        className="w-full h-full block rounded-none"
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="slide-content absolute left-0 w-full bottom-0 py-7 px-[30px] lg:py-[38px] lg:px-10 invisible opacity-0 transition-all duration-500">
        <h2 className="title text-xl xs:text-2xl font-medium text-white uppercase leading-none">{title}</h2>
        <span className="tag text-xs font-normal uppercase text-white inline-block leading-none mt-[10px]">{tag}</span>
      </div>
    </div>
  )
}

export default CarouselCard
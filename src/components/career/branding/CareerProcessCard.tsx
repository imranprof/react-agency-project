import Image from "next/image"

type Props = {
  process: {
    id: number;
    title: string;
    description: string;
    icon: {
      dark: string;
      light: string;
    }
  }
}

const CareerProcessCard = ({ process }: Props) => {
  const { title, description, icon } = process

  return (
    <div className="">
      <div className="">
        <Image src={icon.dark} alt="icon_dark"
          width={57}
          height={60}
          className="h-[60px]"
        />
        <Image src={icon.light} alt="icon_light"
          width={57}
          height={60}
          className="h-[60px] hidden" />
      </div>
      <div className=" mt-[33px] lg:mt-[43px]">
        <h3 className=" text-[24px] lg:text-[30px] font-beatricetrial">{title}</h3>
        <p className=" mt-[25px]">{description}</p>
      </div>
    </div>
  )
}

export default CareerProcessCard
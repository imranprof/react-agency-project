import Image from "next/image"

type Props = {
  service: {
    id: number;
    title: string;
    icon: {
      dark: string;
      light: string;
    }
    features: string[]
  }
}

const ServiceInnerCard = ({ service }: Props) => {
  const { id, icon, title, features } = service;

  return (
    <div className=" px-[30px] xl:px-[70px] border-s border-[#ECE7E4]">
      <div className=" pb-[25px] lg:pb-12">
        <Image src={icon.dark} alt="icon_dark" width={60} height={60} />
        <Image className="hidden" src={icon.light} alt="icon_light" width={60} height={60} />
      </div>
      <h2 className=" text-[24px] xl:text-[30px] pb-[25px] font-beatricetrial leading-[1.08] font-normal">{title}</h2>
      <ul className=" list-disc list-inside">
        {features.map((item, index) => (
          <li className="text-[18px] text-black-2 font-light pb-[15px] " key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceInnerCard
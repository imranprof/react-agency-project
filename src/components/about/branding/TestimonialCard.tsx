import { icons } from "lucide-react";
import Image from "next/image"

type Props = {
  testimonial: {
    quote: string;
    author: string;
    designation: string;
  }
  icons: {
    dark: string;
    light: string;
  }
}

const TestimonialCard = ({ testimonial, icons }: Props) => {
  const { quote, author, designation } = testimonial

  return (
    <div className="">
      <div className=" text-center">
        <div className="content">
          <div className=" flex justify-center">
            <Image src={icons.dark} alt="icon"
              width={65}
              height={47}
              className="h-[37px] lg:h-[47px] w-auto"
            />
            <Image src={icons.light} alt="icon"
              width={65}
              height={47}
              className="hidden"
            />
          </div>
          <div className=" mt-[33px] lg:mt-[53px]">
            <p className=" text-[20px] xs:text-[22px] md:text-[26px] lg:text-[30px] text-black font-light">{quote}</p>
          </div>
          <div className=" mt-[34px] lg:mt-11">
            <div className="">
              <span className=" text-[18px] inline-block">{`${author},`}&nbsp;</span>
              <span className=" text-[18px] inline-block text-black-2"> {designation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
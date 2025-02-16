import { FaChartSimple } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type Props = {
  views: string;
  shares: string;
}


const BlogDetailsLeft = ({ views, shares }: Props) => {
  return (
    <div className="">
      <ul className=" border-b md:border-b-0 inline-flex flex-row max-w-full gap-5 md:flex md:flex-col md:max-w-20 md:border-e">
        <li className="flex flex-col text-center items-center justify-center leading-[1.1] relative mb-[10px] border-e md:border-0 pe-5 md:pe-0 md:mb-[30px]">
          <div className="hidden md:block absolute bottom-[-25px] w-20 h-[1px] bg-border"></div>
          <FaChartSimple className="mb-[3px]" />
          <span className="font-normal text-[12px] leading-[1.5]">{views}<br className="hidden md:block" /> Views</span>
        </li>
        <li className="flex flex-col items-center leading-[1.1] relative">
          <FaShareNodes className="mb-[3px]" />
          <span className="text-center font-normal text-[12px] leading-[1.5]">{shares}<br className="hidden md:inline-block" /> Shares</span>
        </li>

        <li className="flex flex-col items-center leading-[1.1] relative">
          <a href="#"><FaFacebookF /></a>
        </li>
        <li className="flex flex-col items-center leading-[1.1] relative">
          <a href="#"><FaTwitter /></a>
        </li>
        <li className="flex flex-col items-center leading-[1.1] relative">
          <a href="#"><FaInstagram /></a>
        </li>
        <li className="flex flex-col items-center leading-[1.1] relative">
          <a href="#"><FaLinkedin /></a>
        </li>
      </ul>
    </div>
  )
}

export default BlogDetailsLeft
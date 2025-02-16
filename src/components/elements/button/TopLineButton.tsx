import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  btn_text: string;
  link?: string;
}

const TopLineButton = ({ btn_text, link, className }: Props) => {
  return (
    <a href={link || "/contact"} className={cn(" wc-btn-underline line-top max-w-[270px] lg:max-w-[300px] text-[16px] lg:text-[18px] pt-[15px] lg:pt-[20px] !whitespace-normal leading-[26px] font-beatricetrial normal-case font-normal gap-10 pb-0 block", className)}>
      {btn_text}
      <FaArrowRight className="-rotate-45 text-[40px]" />
    </a>
  )
}

export default TopLineButton
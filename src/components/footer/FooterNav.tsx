import { cn } from "@/lib/utils";


type Props = {
  title: string;
  children?: {
    name: string;
    path: string;
    isLocation?: boolean;
  }[];
}

const FooterNav = ({ title, children }: Props) => {
  return (
    <div className="">
      <h2 className=" text-white text-[22px] lg:text-[24px] xl:text-[30px] leading-[.73]">{title}</h2>
      <ul className=" mt-[27px]">
        {children?.map((item, index) => (
          <li key={index} className={cn("text-white-2 hover:text-white !leading-[30px] text-[18px] transition-all duration-300", item.isLocation && "underline inline-block mb-[22px]")}><a href={item.path}>{item.name}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default FooterNav
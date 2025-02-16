import { cn } from "@/lib/utils";


type Props = {
  value: string;
  title: string;
  className?: string;
};

const ResultBox = ({ value, title, className }: Props) => {

  return (
    <div className={cn("leading-[1] pt-[26px] px-0 pb-[23px] border-t  sm:px-[25px] sm:pb-[13px] xl:pt-[46px] xl:px-[45px] sm:border-s first:border-s-0 sm:border-solid", className)}>
      <span className="text-[32px] xl:text-[42px] font-semibold ">
        {value}
      </span>
      <p className="text-[16px] !leading-[24px] !mt-[14px] md:!mt-[29px] !pt-0">
        {title}
      </p>
    </div>

  );
};

export default ResultBox;

import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  className?: string;
};

const Statement = ({ title, description, className }: Props) => {
  return (
    <div className={cn(
      " py-[60px] lg:py-[100px] xl:py-[120px] xxl:py-[150px]",
      className
    )}>
      <div className="">
        <div className=" grid gap-[30px_60px] grid-cols-1 md:grid-cols-[1fr,600px] lg:grid-cols-[1fr,740px] xl:grid-cols-[1fr,840px]">
          <div className="">
            <span className="text-[16px] uppercase">{title}</span>
          </div>
          <div className="">
            <h2 className="font-normal font-beatricetrial mt-0 text-[30px] xs:text-[35px] sm:mt-[-11px] sm:text-[40px] md:mt-[-12px] md:text-[44px] lg:mt-[-15px] lg:text-[55px] xl:mt-[-17px] xl:text-[60px] leading-[1.08]">
              {description}
            </h2>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Statement;

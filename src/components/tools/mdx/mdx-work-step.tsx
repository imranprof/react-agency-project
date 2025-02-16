import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  className?: string;
};

const WorkStep = ({ title, description, className }: Props) => {
  return (
    <div
      className={cn(
        "pt-5 border-t-[1px] md:pt-[50px] md:border-0 relative working-step",
        className
      )}
    >
      <h2 className="font-normal text-[22px] leading-[1.29] font-beatricetrial">
        {title}
      </h2>
      <p className="!mt-[15px]">{description}</p>
    </div>
  );
};

export default WorkStep;

import { cn } from "@/lib/utils"

type Props = {
  title: string,
  className?: string
}

const ContentTitle = ({ title, className }: Props) => {
  return (
    <div className={cn("mt-[30px] md:mt-[50px] font-beatricetrial", className)}>
      <h2 className="mb-3 md:mb-[22px] text-[30px] leading-[1.2] font-normal">{title}</h2>
    </div>
  )
}

export default ContentTitle
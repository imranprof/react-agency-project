import { cn } from "@/lib/utils"

type Props = {
  btnText: string,
  className?: string;
  link?: string;
  type?: "submit" | "button";
}
const CustomButton = ({ btnText, className, link, type }: Props) => {
  if (type === "submit" || type === "button") {
    return (
      <button
        type={type}
        className={cn(
          "btn-text-flip inline-block uppercase py-[22px] px-[38px] bg-transparent hover:text-white hover:bg-black border [border-radius:0_30px_0_30px] border-black font-semibold text-[14px] leading-[1]",
          className
        )}
      >
        <span data-text={btnText}>{btnText}</span>
      </button>
    );
  }

  return (
    <a
      href={link ? link : "#"}
      className={cn(
        "btn-text-flip inline-block uppercase py-[22px] px-[38px] bg-transparent hover:text-white hover:bg-black border [border-radius:0_30px_0_30px] border-black font-semibold text-[14px] leading-[1]",
        className
      )}
    >
      <span data-text={btnText}>{btnText}</span>
    </a>
  );
}

export default CustomButton
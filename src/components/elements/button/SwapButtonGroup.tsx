"use client";

import { cn } from "@/lib/utils";

type SwapButtonGroupProps = {
  button1Class?: string;
  button2Class?: string;
  textFirst?: boolean;
  button1Content: React.ReactNode;
  button2Content: React.ReactNode;
  className?: string;
  link?: string;
};

const SwapButtonGroup = ({
  button1Class,
  button2Class,
  button1Content,
  button2Content,
  textFirst = false,
  className,
  link,
}: SwapButtonGroupProps) => {
  return (
    <a href={link || "#"}>
      <div
        className={cn(
          "wc-btn-group inline-flex w-fit relative group",
          textFirst && "flex-row-reverse",
          className
        )}
      >
        <button
          className={cn(
            "transition-all duration-300 ease-in-out transform -z-10 flex justify-center items-center",
            button1Class
          )}
        >
          {button1Content}
        </button>

        <button
          className={cn(
            "uppercase font-medium transition-all duration-500 ease-in-out z-10",
            button2Class
          )}
        >
          {button2Content}
        </button>

        <button
          className={cn(
            "transition-all duration-300 ease-in-out  -z-10 text-center flex justify-center items-center",
            button1Class
          )}
        >
          {button1Content}
        </button>
      </div>
    </a>
  );
};

export default SwapButtonGroup;

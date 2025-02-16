'use client'
import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type ButtonStyleProps = {
    text?: string;
    link?: string;
    buttonStyle: {
        mainButton: string;
        subButton?: string;
    };
    className?: string;
};

const HeaderButton = ({ buttonStyle, text, link, className }: ButtonStyleProps) => {
    return (
        <div className={cn("", className)}>
            <a href={link ? `${link}` : "#"}>
                <div className="flex hover:flex-row-reverse w-fit">
                    <Button className={cn("font-normal  bg-black text-white uppercase", buttonStyle.mainButton)}>{text ? `${text}` : "Get Started"}</Button>
                    <Button className={cn(buttonStyle?.subButton)}>
                        <FaArrowRight className="origin-center -rotate-45" />
                    </Button>
                </div>
            </a>
        </div>
    )
}

export default HeaderButton
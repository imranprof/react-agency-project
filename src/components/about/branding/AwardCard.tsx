import hasCountAnim from "@/lib/animation/hasCountAnim";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  cardData: {
    icon: {
      dark: string;
      light: string;
    };
    count: number;
    description: string;
  };
};

const AwardCard = ({ cardData }: Props) => {
  const { icon, count, description } = cardData;
  const countRef = useRef<HTMLSpanElement>(null!);

  useGSAP(() => {
    hasCountAnim(countRef.current, count);
  });

  return (
    <li className="ps-10 border-s first:ps-0 first:border-0">
      <div className="meta grid gap-[18px] grid-cols-[30px_auto]">
        <div className="icon">
          <Image
            src={icon.dark}
            alt="icon_1"
            width={32}
            height={28}
            className="inline-block h-auto w-auto"
          />
          <Image
            className="hidden"
            src={icon.light}
            alt="icon_1"
            width={30}
            height={30}
          />
        </div>
        <div className="content">
          <h3 className="number text-[36px] leading-[.85] font-beatricetrial">
            <span ref={countRef}>{count}</span>+
          </h3>
          <p className="text mt-[11px] max-w-[630px] font-normal">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default AwardCard;

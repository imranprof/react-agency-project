import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import SwapButtonGroup from "@/components/elements/button/SwapButtonGroup";

type Props = {
  id: number;
  image: string;
  name: string;
  position: string;
  social: string;
  social_link: string;
};

const MemberCard = ({ image, name, position, social, social_link }: Props) => {
  const slug = name.toLowerCase().trim().replace(/\s+/g, "-");
  return (
    <>
      <div className=" rounded-[5px] overflow-hidden ">
        <Link href={`/team/${slug}`}>
          <Image
            src={image}
            alt="team image"
            width={425}
            height={520}
            className="transition-all w-full "
          />
        </Link>
      </div>
      <div className=" mt-[22px]">
        <div className="">
          <h3 className=" text-[22px] xl:text-2xl font-semibold font-spacegrotesk">
            <Link href={`/team/${slug}`}>{name}</Link>
          </h3>
          <p className=" mb-[23px] lg:mb-7 text-base leading-none mt-[10px]">
            {position}
          </p>
        </div>
        <SwapButtonGroup
          button1Content={
            social === "twitter" ? <FaTwitter /> : <FaLinkedinIn />
          }
          button2Content={social === "twitter" ? "twitter" : "linkedin"}
          button1Class="h-[30px] w-[30px] bg-white text-[14px] border border-border-2 rounded-full"
          button2Class="text-[12px] px-[11px] bg-white border border-border-2 rounded-[40px] capitalize"
          link={social_link}
        />
      </div>
    </>
  );
};

export default MemberCard;

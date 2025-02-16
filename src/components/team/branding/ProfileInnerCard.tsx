import { cn } from "@/lib/utils";
import Image from "next/image"

type Props = {
  profileData: {
    id: number;
    image: string;
    name: string;
    position: string;
  },
  className?: string;
}

const ProfileInnerCard = ({ profileData, className }: Props) => {
  const { name, image, position } = profileData
  const slug = name.toLowerCase().trim().replace(/\s+/g, '-')
  return (
    <div className="">
      <a href={`/team/${slug}`}>
        <div className="">
          <Image src={image} alt="profile_thumb"
            width={299}
            height={410}
            className="w-full max-w-full"
          />
        </div>
        <div className=" mt-[27px] xl:mt-[37px]">
          <h3 className={cn("text-[20px] leading-none lg:text-[24px] font-beatricetrial font-normal", className)}>{name}</h3>
          <p className=" text-[16px] mt-[3px] lg:mt-[7px] font-medium">{position}</p>
        </div>
      </a>
    </div>
  )
}

export default ProfileInnerCard
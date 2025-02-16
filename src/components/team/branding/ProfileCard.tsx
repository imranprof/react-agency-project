import Image from "next/image"
import SwapButtonGroup from "@/components/elements/button/SwapButtonGroup"
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TTeamMemberType } from "@/types";


const ProfileCard = ({ data, slug }: TTeamMemberType) => {
  const { id, name, post, avatar, social } = data
  return (
    <div className="team_box grid gap-x-[25px] gap-y-5 xl:gap-x-[35px] grid-cols-[40%,1fr] xl:grid-cols-[36%,1fr] py-[35px] border border-b-black">
      <div className="thumb  overflow-hidden">
        <a href={`/team/${slug}`}>
          <Image src={avatar}
            width={190}
            height={230}
            alt={`${name}-id`}
            className="hover:transform hover:scale-[1.1] transition-all duration-300"
          />
        </a>
      </div>
      <div className="content flex gap-[30px] flex-col justify-between">
        <div className="top">
          <h3 className="name text-[22px] xl:text-[24px]">
            <a href={`/team/${slug}`}>{name}</a>
          </h3>
          <p className="post text-[16px] mt-3 text-black-2">{post}</p>
        </div>
        <div className="wc_btn_group">
          <SwapButtonGroup
            button1Content={social === "twitter" ? <FaTwitter /> : <FaLinkedinIn />}
            button2Content={social === "twitter" ? "twitter" : "linkedin"}
            button1Class="h-[30px] w-[30px] bg-soft-pink text-[14px] border border-pink-border rounded-full"
            button2Class="text-[12px] px-[11px] bg-soft-pink border border-pink-border rounded-[40px]"
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
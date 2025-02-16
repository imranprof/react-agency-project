import Image from "next/image";
type Props = {
  job: {
    title: string;
    vacancy: number;
  };
  serialNo: number;
  path: string;
};

const HiringRoleCard = ({ job, serialNo, path }: Props) => {
  const { title, vacancy } = job;
  const formattedNumber = (number: number) =>
    number < 10 ? `0${number}` : `${number}`;
  return (
    <div className="has_fade_anim">
      <a href={`/career/${path}`}>
        <div className=" grid gap-y-5 gap-x-10 border-b border-[#2C2C2C] items-center py-[25px] lg:py-[35px] grid-cols-[30px_1fr] xs:grid-cols-[30px_1fr_1fr] sm:grid-cols-[30px_1fr_1fr_auto] lg:grid-cols-[60px_1fr_1fr_auto] group first:border-t">
          <span className=" text-[18px] lg:text-[24px] text-white-2">
            {formattedNumber(serialNo)}
          </span>
          <h3 className=" text-[24px] lg:text-[30px] xxl:text-[36px] text-white">
            {title}
          </h3>
          <p className=" text-[18px] lg:text-[24px] text-white-2 col-start-2 xs:col-start-3">
            ({formattedNumber(vacancy)} Open Roles)
          </p>
          <span className=" opacity-40 transition-all duration-500 group-hover:opacity-100 hidden sm:block">
            <Image
              src="/assets/imgs/icon/plus-2-light.webp"
              alt="icon"
              width={25}
              height={25}
            />
          </span>
        </div>
      </a>
    </div>
  );
};

export default HiringRoleCard;

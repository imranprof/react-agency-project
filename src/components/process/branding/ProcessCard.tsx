type ProcessProps = {
  serial_no: number;
  icon: {
    light: string;
    dark: string;
  };
  title: string;
};

const formatSerialNo = (serial: number) =>
  serial < 10 ? `0${serial}` : serial;

const ProcessCard = ({ serial_no, icon, title }: ProcessProps) => {
  return (
    <div className="border-l border-l-[#B7C5C1]">
      <span className=" text-[16px] text-[#7D8683] inline-block ml-[30px]">{`Step - ${formatSerialNo(
        serial_no
      )}`}</span>
      <div className=" h-[90px] w-[90px] rounded-full bg-black flex justify-center items-center mx-auto transform translate-y-1/2 outline outline-[15px] outline-[#D8E9E4] mt-[44px] lg:mt-[144px] xxl:mt-[244px]">
        <img src={icon.light} alt="icon" />
        <img
          className="hidden"
          src="/assets/imgs/icon/icon-s-16.webp"
          alt="icon-l"
        />
      </div>
      <div>
        <h3 className="title text-[20px] lg:text-[24px] leading-[1.33] pt-[75px] px-[30px] pb-[61px] border border-[#B7C5C1] rounded-[200px] text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProcessCard;


type testimonialProps = {
  icon: string;
  text: string;
  author: {
    name: string;
    post: string;
    publisher: {
      logo: {
        light: string;
        dark: string;
      };
    };
  };
}

const TestimonialCard = ({ icon, text, author }: testimonialProps) => {
  const { logo } = author.publisher
  return (
    <div className=" pt-10 pb-[37px] px-[30px] md:pt-[60px] md:pb-[57px] md:px-[50px] h-full xxl:px-[70px] relative testimonial-slide">
      <div className=" flex flex-col justify-between h-full">
        <div className=" leading-none text-black-2">
          <div className="">
            <img src={icon} alt="icon" />
          </div>
          <div className=" mt-10 sm:mt-[92px]">
            <p className=" leading-[1.25] text-[20px] md:text-[24px] xxl:text-[30px] font-instrument font-semibold text-[#888888]">{text}</p>
          </div>
        </div>
        <div className=" flex gap-x-10 gap-y-[20px] items-center justify-between mt-[46px]">
          <div className=" leading-none text-[18px]">
            <h3 className=" font-plusjakartasans font-bold">{author.name}</h3>
            <span className="  inline-block mt-[7px] text-black-2">{author.post}</span>
          </div>
          <div className="">
            <img src={logo.light} alt="logo-light" />
            <img className="hidden" src={logo.dark} alt="logo-dark" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
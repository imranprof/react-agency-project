import Image from "next/image";

type Props = {
  testimonial: {
    icon: string;
    content: string;
    author: {
      name: string;
      position: string;
    };
  };
};

const TestimonialCard = ({ testimonial }: Props) => {
  const { icon, content, author } = testimonial;
  return (
    <div className="testimonial_item text-center ">
      <div className="content">
        <div className="icon flex justify-center items-center">
          <img
            className="quote-icon show-light h-[37px] lg:h-[47px] w-auto"
            src={icon}
            alt="Quote Icon"
          />
        </div>
        <div className="text_wrapper mt-7 sm:mt-[38px]">
          <p className="text text-[20px] xl:text-[24px] leading-[1.33] font-medium font-spacegrotesk text-black-primary">
            {content}
          </p>
        </div>
        <div className="author mt-[35px] sm:mt-[45px] lg:mt-[55px]">
          <div className="meta">
            <span className="name text-[24px] leading-none block text-black-primary">
              {author.name}
            </span>
            <span className="post text-base block mt-2 leading-none text-black-2">
              {author.position}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

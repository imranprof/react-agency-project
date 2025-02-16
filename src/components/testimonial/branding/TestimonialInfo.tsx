
import StarRating from "@/components/elements/startRating/StarRating"

type Info = {
  rating: number;
  reviews: number;
  text: string;
};

const TestimonialInfo = ({ rating, reviews, text }: Info) => {
  return (
    <div className="info_box bg-white-4 rounded-[20px] py-10 px-[30px] text-center ">
      <h3 className="font-instrument rating mt-[-7px] text-[60px] md:text-[100px] md:mt-[-15px] font-medium xxl:text-[120px]">{rating}</h3>

      <div className="flex justify-center mt-1">
        <StarRating number={rating} className="gap-[6px]" />
      </div>
      <p className="reviews leading-none text-[18px] mt-2 text-black-2">{`(${reviews}+ reviews)`}</p>
      <p className="text font-instrument text-[20px] md:text-[24px] xxl:text-[30px] leading-[1.18] font-medium max-w-[300px] mx-auto mt-[26px]">{text}</p>
    </div>
  )
}

export default TestimonialInfo
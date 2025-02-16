
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

type NavigationProps = {
  handlePrevious: () => void;
  handleNext: () => void;
};

const SliderNav = ({ handlePrevious, handleNext }: NavigationProps) => {
  return (
    <div className="slider_nav flex gap-[10px] static sm:absolute bottom-10 md:bottom-[60px] left-[86px] xl:left-[106px] xxl:left-[170px] ">
      <div onClick={handlePrevious} className="testimonial_button_prev nav-icon" >
        <FaArrowLeft />
      </div>
      <div onClick={handleNext} className="testimonial_button_next nav-icon" >
        <FaArrowRight />
      </div>
    </div>
  )
}

export default SliderNav
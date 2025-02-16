import CustomButton from "@/components/elements/button/CustomButton";
import { Button } from "@/components/ui/button";

type cardProps = {
  card: {
    tag: string;
    price: string;
    feature_list: {
      text: string;
    }[]
    btn_title: string;
  }
}

const PricingCard = ({ card }: cardProps) => {

  return (
    <div className="pricing_box bg-white-3 pt-[27px] px-[30px] pb-[30px]  lg:pt-[47px] lg:px-[50px] lg:pb-[50px] ">
      <span className="tag text-[18px] inline-block leading-none">{card.tag}</span>
      <h3 className="price font-beatricetrial mt-[17px] leading-none text-[40px] md:text-[50px] xl:text-[60px]">{card.price}</h3>
      <div className="feature_list mt-[39px]">
        <ul>
          {card.feature_list.map((item, index) => (
            <li className="flex items-center mt-[15px] first:mt-0 text-black-2" key={index}>
              <img className="me-[10px]" src="/assets/imgs/icon/check-2.webp" alt="check-2" />
              <img className="hidden" src="/assets/imgs/icon/check-2-light.webp" alt="check-2-light" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <CustomButton btnText={card.btn_title} className="mt-10 lg:mt-[50px]" link="/contact" />
    </div>
  )
}

export default PricingCard
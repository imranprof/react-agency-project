import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  pricing: {
    tag: string;
    price: string;
    feature_list: {
      text: string;
    }[];
    action_btn: {
      label: string;
      link: string;
    };
  };
};

const PricingCard = ({ pricing }: Props) => {
  const { tag, price, feature_list, action_btn } = pricing;
  return (
    <div className="pricing-box  pt-[27px] pb-[30px] px-[30px] lg:pt-[47px] lg:pb-[50px] lg:px-[50px] bg-white shadow-[0px_30px_200px_#10193814]">
      <span className="tag text-[18px] text-black-primary inline-block leading-none">
        {tag}
      </span>
      <h3 className="price text-[40px] md:text-[50px] xl:text-[60px] mt-[17px] leading-none font-spacegrotesk font-bold">
        {price}
      </h3>
      <div className="feature-list mt-[39px] sm:min-h-[171px] ">
        <ul>
          {feature_list.map((item, index) => (
            <li key={index} className="flex items-center mt-[15px] first:mt-0">
              <img
                className="show-light me-[10px]"
                src="/assets/imgs/icon/check-2.webp"
                alt="icon image"
              />
              <img
                className="show-dark hidden"
                src="/assets/imgs/icon/check-2-light.webp"
                alt="icon image"
              />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={action_btn.link}
        className={cn(buttonVariants({ variant: "Seo" }), "mt-10 lg:mt-[50px]")}
      >
        <span data-text="Choose plan">Choose plan</span>
      </Link>
    </div>
  );
};

export default PricingCard;

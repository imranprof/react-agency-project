import Image from "next/image";

type Props = {
  feature: {
    title: string;
    description: string;
    icon: {
      light: string;
      dark: string;
    };
  };
};

const FeatureCard = ({ feature }: Props) => {
  const { title, description, icon } = feature;
  return (
    <div className=" has_fade_anim" data-fade-from="bottom">
      <div className="thumb">
        <Image
          src={icon.dark}
          alt="feature_icon-l"
          width={80}
          height={63}
          className=""
        />
        <Image
          src={icon.dark}
          alt="feature_icon-d"
          width={80}
          height={63}
          className="hidden"
        />
      </div>
      <div className=" mt-[21px] lg:mt-[41px]">
        <h3 className=" text-2xl font-semibold font-spacegrotesk">{title}</h3>
        <p className=" mt-4 xs:max-w-[250px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

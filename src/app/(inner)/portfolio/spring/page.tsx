import PorfolioSpring from "@/components/portfolio/spring/PorfolioSpring";
import { getMainPage } from "@/lib/helper/contentConverter";

const SpringPage = () => {
  const spring = getMainPage("/portfolio/spring.mdx");

  return <PorfolioSpring data={spring.data} />;
};

export default SpringPage;

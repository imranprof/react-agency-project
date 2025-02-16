import { getMainPage } from "@/lib/helper/contentConverter";
import PorfolioSlicer from "@/components/portfolio/slicer/PorfolioSlicer";

const SlicerPage = () => {
  const slicer = getMainPage("/portfolio/slicer.mdx");

  return (
    <>
      <PorfolioSlicer data={slicer.data} />
    </>
  );
};

export default SlicerPage;

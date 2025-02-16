import PortfolioCarousel from "@/components/portfolio/carousel/PortfolioCarousel"
import { getMainPage } from "@/lib/helper/contentConverter"

const Page = () => {
  const carousel = getMainPage("/portfolio/carousel.mdx")

  return (
    <PortfolioCarousel data={carousel.data} />
  )
}

export default Page
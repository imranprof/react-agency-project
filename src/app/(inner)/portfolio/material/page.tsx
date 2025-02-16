import PortfolioMaterial from "@/components/portfolio/material/PortfolioMaterial"
import { getMainPage } from "@/lib/helper/contentConverter"

const Page = () => {
  const material = getMainPage("/portfolio/material.mdx")

  return (
    <PortfolioMaterial data={material.data} />
  )
}

export default Page
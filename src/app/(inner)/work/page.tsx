

import WorkInner from "@/components/work/branding/WorkInner"
import { getMainPage } from "@/lib/helper/contentConverter"


const Works = () => {
  const workInnerData = getMainPage("/works/branding/_index.mdx")

  return (
    <section className="work_area">
      <div className="container xl:!max-w-[1320px]">
        <WorkInner data={workInnerData.data} />
      </div>
    </section>
  )
}

export default Works
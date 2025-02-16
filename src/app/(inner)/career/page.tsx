import { getMainPage } from "@/lib/helper/contentConverter"
import { getAllPages } from "@/lib/helper/contentConverter";
import CareerHero from "@/components/career/branding/CareerHero"
import TeamCommunity from "@/components/team/branding/TeamCommunity"
import CareerHiring from "@/components/career/branding/CareerHiring"
import CareerProcess from "@/components/career/branding/CareerProcess"
import { TJobType } from "@/types";

const Career = () => {
  const career = getMainPage("/career/branding/_index.mdx")
  const jobs: TJobType[] = getAllPages("/career/branding/positions");

  return (
    <main>
      <CareerHero hero={career.data.hero} />
      <TeamCommunity communityData={career.data.community_area} />
      <CareerHiring title={career.data.hiring_title} jobs={jobs} />
      <CareerProcess {...career.data.process_area} />
    </main>
  )
}

export default Career
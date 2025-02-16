import TeamHero from "@/components/team/branding/TeamHero";
import TeamImageArea from "@/components/team/branding/TeamImageArea";
import TeamArea from "@/components/team/branding/TeamArea";
import TeamCounterArea from "@/components/team/branding/TeamCounterArea";
import TeamCommunity from "@/components/team/branding/TeamCommunity";
import { getMainPage } from "@/lib/helper/contentConverter";

const TeamPage = () => {
  const teamInnerData = getMainPage("/team/branding/_index.mdx");
  const team = getMainPage("/team/_team.mdx");

  return (
    <main>
      <TeamHero hero={teamInnerData.data.hero} />
      <TeamImageArea
        totalEmployee={teamInnerData.data.total_employee}
        image={teamInnerData.data.image}
      />
      <TeamArea
        TeamAreaData={teamInnerData.data.team_area}
        team_member={team.data.member}
      />
      <TeamCounterArea counterData={teamInnerData.data.counter_area} />
      <TeamCommunity communityData={teamInnerData.data.community_area} />
    </main>
  );
};

export default TeamPage;

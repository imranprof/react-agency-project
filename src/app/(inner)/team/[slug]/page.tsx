import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/mdx-content";
import MemberDetails from "@/components/team/branding/MemberDetails"


type Props = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () => {
  const teams = getAllPages("/team/branding");
  const paths = teams.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const team = ({ params }: Props) => {

  const teamMembers = getAllPages("/team/branding");
  const slugs = teamMembers.map(item => item.slug)

  if (!(teamMembers && teamMembers.length)) {
    notFound();
  }
  const member = teamMembers.find((item) => item.slug === params.slug);

  if (!(member && member.data)) {
    notFound();
  }

  return (
    <main>
      <MemberDetails data={member.data} slug={member.slug} />
      <div className="">
        <MDXContent content={member.content} />
      </div>
    </main>
  )
}

export default team
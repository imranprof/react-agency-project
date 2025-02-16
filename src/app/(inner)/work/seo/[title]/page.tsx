import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/mdx-content";
import WorkDetails from "@/components/work/branding/WorkDetails";
import WorkDetailNav from "@/components/elements/workDetails/WorkDetailNav";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const blogs = getAllPages("/works/seo");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const work = ({ params }: Props) => {
  const works = getAllPages("/works/seo");
  const slugs = works.map((item) => item.slug);

  if (!(works && works.length)) {
    notFound();
  }
  const work = works.find((item) => item.slug === params.title);

  if (!(work && work.data)) {
    notFound();
  }
  return (
    <main>
      <WorkDetails {...work} />
      <div className="container result-area xxl:max-w-[1320px]">
        <MDXContent content={work.content} />
      </div>
      <WorkDetailNav slugs={slugs} params={params} />
    </main>
  );
};

export default work;

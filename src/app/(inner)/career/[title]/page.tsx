import { getAllPages } from "@/lib/helper/contentConverter";
import { notFound } from "next/navigation";
import MDXContent from "@/components/tools/mdx-content";
import Image from "next/image";
import JobDetailsCard from "@/components/career/branding/JobDetailsCard";
import JobInfoCard from "@/components/career/branding/JobInfoCard";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const jobs = getAllPages("/career/branding/positions");
  const paths = jobs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};


const job = ({ params }: Props) => {

  const jobs = getAllPages("/career/branding/positions");
  const slugs = jobs.map(item => item.slug)

  if (!(jobs && jobs.length)) {
    notFound();
  }
  const job = jobs.find((item) => item.slug === params.title);

  if (!(job && job.data)) {
    notFound();
  }

  return (
    <main>
      <section className="pt-[80px] xl:pt-[100px]">
        <div className=" relative z-10">
          <div className=" absolute w-full h-[calc(100%-60px)] lg:h-[calc(100%-100px)] top-0 start-0 -z-10">
            <Image alt="bg_image" src={job.data.bg_image}
              width={900}
              height={384}
              className="w-full h-full"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="inner-container">
            <div className=" pt-[120px] lg:pt-[170px] xl:pt-[270px]">
              <JobDetailsCard data={job.data} />
            </div>
          </div>
        </div>
        <JobInfoCard data={job.data} />
        <div className="inner-container section-spacing-bottom branding-job-details">
          <div className="mt-[20px] max-w-[850px]">
            <MDXContent content={job.content} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default job
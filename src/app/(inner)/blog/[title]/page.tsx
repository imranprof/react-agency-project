import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/mdx-content";
import BlogDetailsTop from "@/components/blog/branding/BlogDetailsTop";
import BlogDetailsLeft from "@/components/blog/branding/BlogDetailsLeft";
import BlogTags from "@/components/blog/branding/BlogTags";
import CommentForm from "@/components/blog/branding/CommentForm";
import BlogInnerArea from "@/components/blog/branding/BlogInnerArea";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const blogs = getAllPages("/blogs/branding");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const blog = ({ params }: Props) => {

  const blogs = getAllPages("/blogs/branding");
  const slugs = blogs.map(item => item.slug)

  if (!(blogs && blogs.length)) {
    notFound();
  }
  const blog = blogs.find((item) => item.slug === params.title);

  if (!(blog && blog.data)) {
    notFound();
  }

  return (
    <main>
      <section >
        <div className="container xl:!max-w-[1320px]">
          <div className=" pt-[127px] lg:pt-[147px] xxl:pt-[217px]">
            <BlogDetailsTop {...blog} />
            <div className=" mt-[60px] md:mt-20 lg:mt-[100px] grid md:grid-cols-[80px,1fr] lg:grid-cols-[80px,850px] gap-y-[30px] gap-x-[60px] lg:gap-x-[140px]">
              <BlogDetailsLeft views={blog.data.views} shares={blog.data.shares} />
              <div>
                <MDXContent content={blog.content} />
                <BlogTags tags={blog.data.tags} />
                <CommentForm />
              </div>
            </div>
            <BlogInnerArea blogs={blogs} />
          </div>
        </div>
      </section>

    </main>
  )
}

export default blog
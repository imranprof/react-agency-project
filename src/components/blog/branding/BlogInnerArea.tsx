
import { TBlogType } from "@/types"
import BlogInnerCard from "@/components/blog/branding/BlogInnerCard"

type Props = {
  blogs: TBlogType[];
}

const BlogInnerArea = ({ blogs }: Props) => {
  return (
    <div >
      <div className="container xl:!max-w-[1320px]">
        <div className=" main-section-spacing">
          <div className="">
            <div className="">
              <div className="">
                <h2 className=" inner-section-title font-normal">Related articles</h2>
              </div>
            </div>
          </div>
          <div className=" mt-[27px] xl:mt-[47px]">
            <div className=" grid xs:grid-cols-2 md:grid-cols-3  gap-y-10 gap-x-[35px] lg:gap-[45px]">
              {blogs.map((blog, i) => (
                <BlogInnerCard key={blog.data.id} {...blog} serialNo={i + 1} />
              ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlogInnerArea
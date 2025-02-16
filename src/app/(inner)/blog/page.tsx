import BlogArea from "@/components/blog/branding/BlogArea"
import BlogFeatureArea from "@/components/blog/branding/BlogFeatureArea"
import FeaturedPost from "@/components/blog/branding/FeaturedPost"
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter"
import { TBlogType } from "@/types"


const BlogPage = () => {
  const blogs: TBlogType[] = getAllPages("/blogs/branding")
  const blogPage = getMainPage("/blogs/branding/_index.mdx")
  const lastThreeBlogs = blogs.slice(-3);

  return (
    <main>
      <BlogFeatureArea data={blogPage.data} />
      <FeaturedPost blogs={lastThreeBlogs} />
      <BlogArea blogs={blogs} blog_area={blogPage.data.blog_area} />
    </main>
  )
}

export default BlogPage
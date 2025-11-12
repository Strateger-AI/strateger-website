import { BlogPage } from "@/components/app/blog/BlogPage";
import { unslugify } from "@/lib/utils";
import { BLOG_SECTION_DATA } from "@/data/blog/blog.data";

interface BlogNameProps {
  params: Promise<{ blogName: string }>;
}

export default async function BlogName({ params }: BlogNameProps) {
  const { blogName } = await params;
  const title = unslugify(blogName);
  const blog = BLOG_SECTION_DATA.filter(
    (eachBlog) =>
      eachBlog.title.trim().toLowerCase() === title.trim().toLowerCase(),
  );

  if (!blog) {
    // handle not found
    return <p>Blog not found</p>;
  }

  return <BlogPage blog={blog} />;
}

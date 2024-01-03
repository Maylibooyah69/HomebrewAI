import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import { getPostData } from "../post-utils";

export default async function PostContent({ slug }: { slug: string }) {
  const postData = await getPostData(slug);
  const imagePath = `/images/blog-posts/${postData.postSlug}/preview.png`;
  return (
    <article className="w-11/12 max-w-4xl mx-auto  leading-relaxed bg-gray-100 rounded-md p-4 ">
      <PostHeader image={imagePath} />
      <div className="blog-content">
        <ReactMarkdown children={postData.content} />
      </div>
    </article>
  );
}

export const metadata = {
  title: "Read our blog posts",
  description: "Read our blog posts",
};

import FeaturedPosts from "./FeaturedPosts";
import { getFeaturedPosts } from "./post-utils";
//Featured Posts

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();
  return (
    <>
      <FeaturedPosts
        posts={featuredPosts.map((post) => ({ ...post, slug: post.postSlug }))}
      />
    </>
  );
}

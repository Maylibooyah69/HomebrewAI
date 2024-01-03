export const revalidate = 3600;

export const metadata = {
  title: "Read our blog posts",
  description: "Read our blog posts",
};

import FeaturedPosts from "./FeaturedPosts";
import { getFeaturedPosts } from "./post-utils";
//Featured Posts

export default async function Home() {
  const props = await getPostData();
  return (
    <>
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export async function getPostData() {
  const featuredPosts = await getFeaturedPosts();
  return {
    posts: featuredPosts,
  };
}

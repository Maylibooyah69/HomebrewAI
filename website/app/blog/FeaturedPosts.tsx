import React from "react";
import Link from "next/link";
import PostCard from "./PostCard";
type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
  summary: string;
  slug: string;
};
const posts: Post[] = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the first post.",
    image: "preview.png",
    summary: "This is some summary",
    slug: "prompt-engineering-101",
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the second post.",
    image: "preview.png",
    summary: "This is some summary",
    slug: "prompt-engineering-101",
  },
  {
    id: 3,
    title: "Post 3",
    content: "This is the third post.",
    image: "preview.png",
    summary: "This is some summary",
    slug: "prompt-engineering-101",
  },
];

const FeaturedPosts: React.FC = () => {
  return (
    // Feature posts
    <div className="flex flex-col items-center space-y-4 text-lg  text-white">
      <h1 className="text-2xl mb-4 pt-40">Featured Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          summary={post.summary}
          image={post.image}
          slug={post.slug}
        />
      ))}
    </div>
  );
};

export default FeaturedPosts;

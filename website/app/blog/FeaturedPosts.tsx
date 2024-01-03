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
  date: string;
};
// const posts: Post[] = [
//   {
//     id: 1,
//     title: "Post 1",
//     content: "This is the first post.",
//     image: "preview.png",
//     summary: "This is some summary",
//     slug: "prompt-engineering-101",
//   },
//   {
//     id: 2,
//     title: "Post 2",
//     content: "This is the second post.",
//     image: "preview.png",
//     summary: "This is some summary",
//     slug: "prompt-engineering-101",
//   },
//   {
//     id: 3,
//     title: "Post 3",
//     content: "This is the third post.",
//     image: "preview.png",
//     summary: "This is some summary",
//     slug: "prompt-engineering-101",
//   },
// ];

const FeaturedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    // Feature posts
    <div className="flex flex-col items-center space-y-4 text-lg  text-white pt-20">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          summary={post.summary}
          image={`/images/blog-posts/${post.slug}/preview.png`}
          slug={post.slug}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default FeaturedPosts;

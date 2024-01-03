import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "content", "posts");

export function getPostData(post: string) {
  const postPath = path.join(postDir, post, "post.md");
  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContents);
  const postSlug = post.replace(/\.md$/, "");
  const postData = {
    postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const posts = fs.readdirSync(postDir);
  const allPosts = posts.map((post) => {
    return getPostData(post);
  });
  allPosts.sort((post1, post2) => {
    if (post1.date < post2.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}

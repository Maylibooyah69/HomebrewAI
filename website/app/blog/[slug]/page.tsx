export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import PostContent from "./PostContent";

export default function PostDetail({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="flex justify-center pt-20">
        <PostContent slug={params.slug} />
      </div>
    </>
  );
}

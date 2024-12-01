import type { PostPageParams } from "@/app/post/[title]/page";
import Markdown from "@/components/Markdown";
import Spacer from "@/components/Spacer";
import Layout from "@/components/layouts/Layout";
import { getPosts } from "@/utils/getPosts";
import { notFound } from "next/navigation";
import PostHeader from "./components/PostHeader";
import PostUtterances from "./components/PostUtterances";

interface PostViewProps {
  params: PostPageParams;
}

const PostView = async ({ params }: PostViewProps) => {
  const posts = getPosts();
  const post = posts.find(async (post) => post.title === params.title);

  if (!post) notFound();

  return (
    <Layout>
      <PostHeader title={post.title} date={post.date} />
      <Spacer height={64} />
      <Markdown html={post.content} />
      <Spacer height={64} />
      <PostUtterances />
    </Layout>
  );
};

export default PostView;

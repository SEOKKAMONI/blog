import { getPosts } from "@/utils/getPosts";
import PostView from "@/views/PostView";
import type { Metadata } from "next";

export type PostPageParams = { title: string };

interface PostPageProps {
  params: PostPageParams;
}

export const generateMetadata = ({ params }: PostPageProps): Metadata => {
  const posts = getPosts();
  const post = posts.find(async (post) => post.title === params.title);
  const ogImage = post?.thumbnail || "/opengraph-image.png";

  return {
    title: post?.title,
    openGraph: {
      publishedTime: post?.date,
      images: [ogImage],
    },
  };
};

const PostPage = async ({ params }: PostPageProps) => (
  <PostView params={params} />
);

export default PostPage;

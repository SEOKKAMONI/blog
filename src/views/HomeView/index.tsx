import Layout from "@/components/layouts/Layout";
import { getPosts } from "@/utils/getPosts";
import Bio from "./components/Bio";
import PostCard from "./components/PostCard";
import PostList from "./components/PostList";

const HomeView = () => {
  const posts = getPosts();

  return (
    <Layout>
      <Bio />
      <PostList>
        {posts.map((post) => (
          <PostCard
            key={post.title}
            title={post.title}
            date={post.date}
            thumbnail={post.thumbnail}
          />
        ))}
      </PostList>
    </Layout>
  );
};

export default HomeView;

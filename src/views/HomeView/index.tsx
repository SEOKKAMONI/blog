import Layout from "@/components/layouts/Layout";
import Bio from "./components/Bio";
import PostCard from "./components/PostCard";
import PostList from "./components/PostList";

const HomeView = () => {
  return (
    <Layout>
      <PostList>
        <Bio />
        <PostCard title="자취 생활을 시작하면서" date="2024-12-01" />
      </PostList>
    </Layout>
  );
};

export default HomeView;

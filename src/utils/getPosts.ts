import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export interface Post {
  title: string;
  date: string;
  content: string;
  thumbnail?: string;
}

const postRoot = join(process.cwd(), "posts");

const parseDate = (date: string) => {
  return new Date(date)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll(" ", "");
};

const getPostTitles = () => {
  const dirs = readdirSync(postRoot, { recursive: true });
  const titles = dirs.map((path) => (path as string).replace(".mdx", ""));

  return titles;
};

const getPostByTitle = (title: string): Post => {
  const fullPath = join(postRoot, `${title}.mdx`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: parseDate(data.date),
    thumbnail: data.thumbnail,
    content,
  };
};

export const getPosts = (): Post[] => {
  const titles = getPostTitles();
  const posts = titles
    .map(getPostByTitle)
    .sort(
      (post1, post2) =>
        new Date(post2.date).getTime() - new Date(post1.date).getTime(),
    );

  return posts;
};

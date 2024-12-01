import { marked } from "marked";

import "@/styles/markdown.css";

interface MarkdownProps {
  html: string;
}

const Markdown = ({ html }: MarkdownProps) => {
  const __html = marked(html, { async: false });

  return (
    <div
      className="markdown-body w-full h-full"
      dangerouslySetInnerHTML={{ __html }}
    />
  );
};

export default Markdown;

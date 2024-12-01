"use client";

import { useEffect, useRef } from "react";

const PostUtterances = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = document.createElement("script");

    element.setAttribute("src", "https://utteranc.es/client.js");
    element.setAttribute("repo", "SEOKKAMONI/blog");
    element.setAttribute("issue-term", "pathname");
    element.setAttribute("label", "comment");
    element.setAttribute("theme", "github-light");
    element.setAttribute("crossorigin", "anonymous");
    element.async = true;

    ref.current?.appendChild(element);
  }, []);

  return <div ref={ref} className="absolute bottom-0 w-full" />;
};

export default PostUtterances;

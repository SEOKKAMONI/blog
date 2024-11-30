import type { PropsWithChildren } from "react";

const PostList = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-start gap-[24px] w-full py-[40px]">
      {children}
    </div>
  );
};

export default PostList;

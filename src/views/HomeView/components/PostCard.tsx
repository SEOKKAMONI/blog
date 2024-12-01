import { cn } from "@/utils/cn";
import Link from "next/link";

interface PostCardProps {
  title: string;
  date: string;
  thumbnail?: string;
}

const PostCard = ({ title, date, thumbnail }: PostCardProps) => {
  return (
    <Link
      href={`/post/${title}`}
      className="flex items-center justify-between w-full h-[140px] transition-[all_0.3s_ease-in-out_0s] hover:transform hover:translate-y-[-8px] max-650:flex-col-reverse max-650:gap-[12px] max-650:h-full"
    >
      <div className="flex flex-col gap-[16px] w-full">
        <p className="overflow-hidden text-ellipsis line-clamp-2 text-[24px] font-medium text-black max-650:line-clamp-1">
          {title}
        </p>
        <span className="text-gray text-[16px]">{date}</span>
      </div>
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-[300px] h-full rounded-[36px_36px_36px_0] object-cover max-1100:w-[240px] max-650:w-full max-650:h-[200px]"
        />
      ) : null}
    </Link>
  );
};

export default PostCard;

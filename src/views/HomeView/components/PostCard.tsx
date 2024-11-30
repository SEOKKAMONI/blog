import Link from "next/link";

interface PostCardProps {
  title: string;
  date: string;
  thumbnail?: string;
}

const PostCard = ({ title, date, thumbnail }: PostCardProps) => {
  return (
    <Link href="/">
      <div className="flex items-center justify-between w-full h-[160px] transition-[all_0.3s_ease-in-out_0s] hover:transform hover:translate-y-[-8px]">
        <div className="flex flex-col gap-[16px] w-full">
          <p className="overflow-hidden text-ellipsis line-clamp-2 text-[24px] font-medium text-black max-650:line-clamp-1">
            {title}
          </p>
          <span className="text-gray text-[16px]">{date}</span>
        </div>
        {thumbnail && (
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="w-[300px] h-full rounded-[36px_36px_36px_0] max-1100:w-[240px] max-650:w-[180px]"
          />
        )}
      </div>
    </Link>
  );
};

export default PostCard;

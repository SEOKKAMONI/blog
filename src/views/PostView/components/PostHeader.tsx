interface PostHeaderProps {
  title: string;
  date: string;
}

const PostHeader = ({ title, date }: PostHeaderProps) => {
  return (
    <div className="flex flex-col w-full gap-[12px]">
      <span className="text-[36px] font-bold text-black">{title}</span>
      <span className="text-[18px] font-medium text-gray">{date}</span>
    </div>
  );
};

export default PostHeader;

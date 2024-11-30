import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="cursor-pointer text-[18px] font-bold text-black">
        SEOKKAMONI.blog
      </span>
    </Link>
  );
};

export default Logo;

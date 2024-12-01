import Image from "next/image";

const Bio = () => {
  return (
    <div className="flex items-center gap-[30px] w-full h-[190px] pb-[40px] border-b-[1px] border-[#E9E9E9] max-650:flex-col max-650:gap-[24px] max-650:h-full">
      <Image
        src="https://github.com/SEOKKAMONI.png"
        className="rounded-[36px_36px_36px_0]"
        width={150}
        height={150}
        alt="Profile"
      />
      <div className="flex flex-col gap-[14px]">
        <div className="flex items-center gap-[8px] max-650:flex-col max-650:gap-[16px]">
          <span className="text-[40px] font-bold text-black max-650:text-[32px]">
            김석진
          </span>
          <span className="text-[20px] text-black max-650:text-[16px]">
            Frontend Developer
          </span>
        </div>
        <p className="text-gray text-[16px] max-650:text-[12px] max-650:text-center">
          김석진의 (기술 블로그 ❌, 주접 블로그 ✅)
        </p>
      </div>
    </div>
  );
};

export default Bio;

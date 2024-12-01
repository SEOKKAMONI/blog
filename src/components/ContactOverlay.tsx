import { cn } from "@/utils/cn";
import IconClose from "./icons/IconClose";

const SOCAILS = [
  "010-4826-0279",
  "sj01048260279@gmail.com",
  "github.com/SEOKKAMONI",
  "instagram.com/sj20060706",
] as const;

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactOverlay = ({ isOpen, onClose }: ContactOverlayProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 justify-center w-full h-full overflow-auto z-10 backdrop-blur-[3px] bg-[rgba(0,0,0,0.8)] max-1100:w-full max-1100:px-[32px] max-650:px-[20px]",
        isOpen ? "flex" : "hidden",
      )}
    >
      <IconClose
        onClick={onClose}
        className="absolute top-[20px] right-[70px] w-[72px] h-[72px] cursor-pointer text-mediumGray max-1100:right-[32px] max-1100:w-[48px] max-1100:h-[48px] max-650:right-[20px]"
      />
      <div className="flex flex-col gap-[36px] w-[700px] max-h-[780px] pt-[120px] max-1100:gap-[24px] max-1100:w-full max-650:gap-[16px]">
        {SOCAILS.map((social) => (
          <div
            key={social}
            className="flex items-center flex-shrink-0 w-full h-[100px] py-[22px] px-[36px] border-[2px] rounded-[36px_36px_36px_0] border-[rgba(255,255,255,0.25)] text-white text-[32px] font-[600] bg-[rgba(255,255,255,0.2)] max-1100:h-[80px] max-1100:text-[28px] max-650:h-[56px] max-650:text-[16px] max-650:py-[16px] max-650:px-[24px]"
          >
            {social}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactOverlay;

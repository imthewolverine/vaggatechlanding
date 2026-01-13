import Link from "next/link";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type GreenButtonProps = {
  href: string;
  label?: string;
  customClass?: string;
};

export default function GreenButton({ href, customClass = "text-[1px]", label = "BEGIN TODAY WITH US"}: GreenButtonProps) {
  return (
    <Link
      href={href}
      className={"group relative inline-flex items-center gap-0  text-base font-bold text-black transition-all duration-300"}
    >
      {/* Text */}
      <span className={"bg-emerald-400 px-6 py-4 rounded-l-full group-hover:rounded-full transition-all duration-300 text-xl"+{customClass}}>
        {label}
      </span>
    
      {/* Arrow container */}
      <div className="
        bg-emerald-400
        rounded-r-full
        group-hover:rounded-full
        transition-all duration-300
      ">
        <span className="
          inline-flex h-12 w-12 shrink-0 items-center justify-center
          rounded-full bg-black text-white m-1
        ">
          <ArrowIcon />
        </span>
      </div>
    </Link>

  );
}

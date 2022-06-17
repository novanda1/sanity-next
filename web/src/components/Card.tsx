import Link from "next/link";
import { useMemo } from "react";
import { formatDate } from "../utils/date";

const Card: React.FC<{ post: any }> = ({ post }) => {
  const date = useMemo(() => formatDate(post?._createdAt), [post._createdAt]);

  return (
    <div className="flex flex-col justify-between bg-zinc-800 p-[40px] shadow-sm cursor-pointer md:min-h-240 lg:min-h-320">
      <div>
        <span className="text-[10px] font-bold tracking-[3px] uppercase text-slate-200">
          {post.category.title}
        </span>
        <time className="block mt-[3px] text-[14px] font-light text-zinc-400">
          {date}
        </time>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-xl">{post.title}</h3>
        <Link href={"/"}>
          <a className="mt-4 relative block text-sm font-light leading-[3px] after:content-[''] after:absolute after:transform after:translate-x-2 after:translate-y-[2px] after:h-[1px] after:w-10 after:bg-white">
            Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;

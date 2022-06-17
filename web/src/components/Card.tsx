import Link from "next/link";
import { useMemo } from "react";
import { formatDate } from "../utils/date";

const Card: React.FC<{ post: any }> = ({ post }) => {
  const date = useMemo(() => formatDate(post?._createdAt), [post._createdAt]);

  return (
    <div className="bg-zinc-800 p-[40px] shadow-sm cursor-pointer md:min-h-240 lg:min-h-320">
      <div>
        <span className="text-[10px] font-bold tracking-[3px] uppercase text-slate-200">
          Blog
        </span>
        <time className="block mt-[8px">{date}</time>
      </div>
      <div className="mt-auto">
        <h3 className="font-bold text-xl mt-auto pt-3">{post.title}</h3>
        <Link href={'/'}>
            <a className="mt-1">Details</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;

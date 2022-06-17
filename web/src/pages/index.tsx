import Header from "../components/Header";
import PostItem from "../components/PostItem";
import sanityClient from "../lib/sanityClient";

export default function IndexPage({ posts }: { posts: any[] }) {
  return (
    <div className="bg-zinc-900 text-white">
      <div className="relative flex flex-col w-screen mx-auto font-sans text-base max-w-1440 text-dawn md:flex-row  h-full min-h-screen">
        <div className="static flex flex-col justify-between w-full p-24 sm:p-32 md:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-72 lg:pr-0">
          <div>
            <h1 className="text-2xl font-bold leading-tight lg:text-4xl lg:leading-none text-zenith">
              Sanity Nextjs
            </h1>
            <div className="mt-[16px] sm:text-lg text-[20px] font-semibold leading-tight text-sunrise">
              With Sanity you can structure your content, so it can be
              transformed and distributed any way you like.
            </div>
          </div>
        </div>
        <div className="static p-24 sm:p-32 w-full md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-88 lg:pr-88 md:pl-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
            <div className="bg-zinc-800 px-4 py-3 shadow-sm cursor-pointer">
              <span className="tracking-widest uppercase text-xs">Blog</span>
              <h3 className="font-bold text-xl">Some Title</h3>
            </div>
            <div className="bg-zinc-800 px-4 py-3 shadow-sm cursor-pointer">
              <span className="tracking-widest uppercase text-xs">Blog</span>
              <h3 className="font-bold text-xl">Some Title</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "article"]`);

  return {
    props: {
      posts,
    },
  };
}

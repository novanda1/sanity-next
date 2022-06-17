import Card from "../components/Card";
import Header from "../components/Header";
import PostItem from "../components/PostItem";
import sanityClient from "../lib/sanityClient";

export default function IndexPage({ posts }: { posts: any[] }) {
  return (
    <div className="bg-zinc-900 text-white">
      <div className="relative flex flex-col w-screen mx-auto text-base max-w-1440 text-dawn md:flex-row  h-full min-h-screen">
        <div className="static flex flex-col justify-between w-full p-24 sm:p-32 md:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-72 lg:pr-0">
          <div>
            <h1 className="text-5xl font-bold leading-tight lg:leading-none">
              Sanity Nextjs
            </h1>
            <h2 className="mt-[16px] text-xl">Sanity for Content Provider</h2>

            <p className="mt-[28px] font-light leading-e text-zinc-400 text-[14px]">
              Sanity.io is the unified content platform that powers better
              digital experiences. With Sanity you can structure your content,
              so it can be transformed and distributed any way you like.
            </p>
          </div>
        </div>
        <div className="static p-24 sm:p-32 w-full md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-88 lg:pr-88 md:pl-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
            {posts?.map((post) => (
              <Card key={post._createdAt} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(
    `*[_type == "article"]{title,body,_createdAt,category->}`
  );

  return {
    props: {
      posts,
    },
  };
}

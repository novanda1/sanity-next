import Header from "../components/Header";
import PostItem from "../components/PostItem";
import sanityClient from "../lib/sanityClient";

export default function IndexPage({ posts }: { posts: any[] }) {
  return (
    <>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-2xl mx-auto">
          <Header />

          <div className="mt-7">
            <div className="mt-6 grid gap-12 border-t-2 border-gray-100 py-8">
              {posts.length > 0 && (
                <div>
                  {posts.map((post) => (
                    <PostItem key={post.title} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
          {!posts.length && (
            <div>
              <div>¯\_(ツ)_/¯</div>
              <p>
                Your data will show up here when youve configured everything
                correctly
              </p>
            </div>
          )}
        </div>
      </div>
    </>
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

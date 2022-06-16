import { createClient } from "next-sanity";
import sanityClient from "../lib/sanityClient";

export default function IndexPage({ posts }: { posts: any[] }) {
  return (
    <>
      <main>
        {posts.length > 0 && (
          <div>
            {posts.map((post) => (
              <>
                <h3>{post.title}</h3>
              </>
            ))}
          </div>
        )}
        {!posts.length && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when youve configured everything
              correctly
            </p>
          </div>
        )}
      </main>
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

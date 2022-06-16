import { createClient } from "next-sanity";
import sanityClient from "../lib/sanityClient";

export default function IndexPage({ posts }: { posts: any[] }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>posts</h2>
        {posts.length > 0 && (
          <ul>
            {posts.map((pet) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
        {!posts.length && <p>No posts to show</p>}
        {posts.length > 0 && (
          <div>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
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

import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useArticleQuery } from "../../generated/graphql";

const SinglePost: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, loading, error } = useArticleQuery({
    variables: { id: id as string },
  });

  return (
    <Layout>
      <div className="relative flex flex-col w-screen mx-auto text-base max-w-1440 text-dawn md:flex-row h-full min-h-screen">
        <div className="static flex flex-col justify-between w-full p-[24px] lg:p-[32px] md:max-w-496 md:fixed md:h-screen lg:py-[88px] lg:pl-[88px] md:pr-[72px] lg:pr-0">
          <div>
            <h1 className="text-[64px] font-bold leading-tight lg:leading-none">
              Sanity Next
            </h1>
            <h2 className="mt-[16px] lg:text-[24px] font-bold text-xl">
              Sanity for Content Provider
            </h2>

            <p className="mt-[28px] font-light leading-e text-zinc-200 text-[14px]">
              Sanity.io is the unified content platform that powers better
              digital experiences. With Sanity you can structure your content,
              so it can be transformed and distributed any way you like.
            </p>
          </div>
        </div>
        <div className="static p-[24px] lg:p-[32px] w-full md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-[88px] lg:pr-[88px] md:pl-0">
          <div className="prose lg:prose-xl">
            <PortableText value={data?.Article?.bodyRaw} />
          </div>
        </div>

        <div className="fixed top-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-night-transparent"></div>
        <div className="fixed bottom-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-transparent-night"></div>
      </div>
    </Layout>
  );
};

export default SinglePost;
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useArticleQuery } from "../../generated/graphql";

const SinglePost: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, loading, error } =
    useArticleQuery({
      variables: { id: id as string },
    });

  return (
    <Layout>
      <div className="relative flex flex-col w-screen mx-auto text-base max-w-1440 text-dawn md:flex-row h-full min-h-screen">
        <div
          className="relative my-20 mx-auto
        ">
          <div className="prose lg:prose-lg prose-invert mx-auto">
            <div className="not-prose">
              <h1 className="text-2xl lg:text-[64px] font-bold leading-tight not-prose mb-10">
                {data?.Article?.title}
              </h1>
            </div>
            <PortableText
              value={data?.Article?.bodyRaw}
            />
          </div>
        </div>

        <div className="fixed top-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-night-transparent"></div>
        <div className="fixed bottom-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-transparent-night"></div>
      </div>
    </Layout>
  );
};

export default SinglePost;

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {
  ArticleBySlugQuery,
  useArticleBySlugQuery
} from "../../generated/graphql";

const Content: React.FC<{ data: ArticleBySlugQuery | undefined }> = ({
  data,
}) => {
  return (
    <div className="relative my-20 mx-auto">
      <div className="prose lg:prose-lg prose-invert mx-auto">
        <div className="not-prose">
          <div className="text-sm font-bold">
            <Link href="/">
              <a>Home</a>
            </Link>
            <span> {"|"} </span>
            <span>
              {data?.allArticle[0] && data?.allArticle[0].category?.title}{" "}
            </span>
          </div>
          <h1 className="text-2xl lg:text-[64px] font-bold leading-tight not-prose mb-10">
            {data?.allArticle[0] && data?.allArticle[0]?.title}
          </h1>
        </div>
        <PortableText
          value={data?.allArticle[0] && data?.allArticle[0]?.bodyRaw}
        />
      </div>
    </div>
  );
};

const SinglePost: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, loading, error } = useArticleBySlugQuery({
    variables: { slug: id as string },
  });

  return (
    <Layout>
      <div className="relative flex flex-col w-screen mx-auto text-base max-w-1440 text-dawn md:flex-row h-full min-h-screen">
        {loading && ""}
        {data && !error && <Content data={data} />}
        <div className="fixed top-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-night-transparent"></div>
        <div className="fixed bottom-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-transparent-night"></div>
      </div>
    </Layout>
  );
};

export default SinglePost;

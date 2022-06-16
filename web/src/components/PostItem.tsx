import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const PostItem: React.FC<{ post: any }> = ({ post }) => {
  return (
    <div className="relative">
      <p className="text-sm leading-5 text-gray-500">
        <time>Jan 28, 2021</time>
      </p>
      <div>
        <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
          {post.title}
        </h2>
        <p className="mt-3 text-base leading-6 text-gray-500">
          <PortableText
            value={post.body}
            components={myPortableTextComponents}
          />
        </p>
      </div>
      <div className="mt-3">
        <a
          className="text-base leading-6 font-semibold text-lime-600 hover:text-lime-700 focus:outline-none focus:underline"
          href="/152"
        >
          <span className="sr-only">{post.title}</span>
          Show notes<span className="absolute inset-0"></span>
        </a>
      </div>
    </div>
  );
};

export default PostItem;

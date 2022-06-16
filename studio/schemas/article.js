export default {
  name: "article",
  type: "document",
  title: "Article",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "body",
      type: "array",
      title: "body",
      of: [{ type: "block" }],
    },
  ],
};

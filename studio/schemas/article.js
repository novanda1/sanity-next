import { isUniqueAcrossAllDocuments } from "../lib/lib";

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
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        auto: true,
        isUnique: isUniqueAcrossAllDocuments,
      },
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      // Learn more at https://youtu.be/AaKfuhndEf8
    },
    {
      name: "body",
      type: "array",
      title: "body",
      of: [{ type: "block" }],
    },
  ],
};

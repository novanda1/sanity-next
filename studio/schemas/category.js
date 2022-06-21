import { isUniqueAcrossAllDocuments } from "../lib/lib";

export default {
  name: "category",
  type: "document",
  title: "Category",
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
  ],
};

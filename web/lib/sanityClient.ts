import { createClient } from "next-sanity";

export default createClient({
  projectId: "dfl5mg39",
  dataset: "production",
  apiVersion: "2022-06-15",
  useCdn: false,
});

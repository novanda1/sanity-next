import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import article from "./article";
import category from "./category";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([article, category]),
});

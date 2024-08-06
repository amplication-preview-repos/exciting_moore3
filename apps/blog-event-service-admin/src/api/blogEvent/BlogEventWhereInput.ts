import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BlogEventWhereInput = {
  eventType?: StringNullableFilter;
  id?: StringFilter;
  payload?: JsonFilter;
};

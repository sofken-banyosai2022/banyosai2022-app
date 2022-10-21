import { getQuery } from "h3";
import { get } from "../lib/firestore";

export default defineEventHandler(async (event) => {

  try {
    const query = getQuery(event.req);
    const docs = await get(query.col as string);
    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  }

});

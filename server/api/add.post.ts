import { getQuery, readBody } from "h3";
import { add } from "../lib/firestore";

export default defineEventHandler(async (event) => {

  try {
    const query = getQuery(event.req);
    const body = await readBody(event.req);
    const docRef = await add(query.col as string, body);

    console.log(query, body); // ログ出力

    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  }

});

import { getQuery } from "h3";
import { get, getName } from "../lib/firestore";

export default defineEventHandler(async (event) => {

  try {
    const query = getQuery(event.req);
    let docs: { id: string; }[];

    if (query.id) { // 登録済みか判定
      docs = await get(query.col as string, query.id as string);
    } else { // 名前を取得
      docs = await getName(query.col as string);
    }

    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  }

});

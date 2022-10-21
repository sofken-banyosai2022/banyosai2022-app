import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

/* データの取得 */
export const get = async (col: string) => {

  // @ts-ignore
  const colRef = collection(db, col);
  const snapshot = await getDocs(colRef);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return docs;
};

/* ドキュメントの設定 */
export const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(db, col)), document, { merge: true });
};

/* データの追加 */
export const add = async (col: string, document: Object) => {

  // @ts-ignore
  const colRef = collection(db, col);
  const docRef = await addDoc(colRef, document);

  return docRef;
};

/* ドキュメントの削除 */
export const del = async (col, id) => {
  const docRef = doc(db, col, id);

  return await deleteDoc(docRef);
};

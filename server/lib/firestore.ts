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
  orderBy,
  limitToLast,
  updateDoc
} from "firebase/firestore";
import { db } from "./firebase";

/* Firebaseの型 */
type documentData = {
  createdAt: Timestamp,
  lastSignedIn: Timestamp
};

/* データの取得 */
export const get = async (col: string, id: string) => {

  // @ts-ignore
  const colRef = collection(db, col);
  const snapshot = await getDocs(query(colRef, where('visitorId', '==', id)));

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return docs;
};

/* 名前の取得 */
export const getName = async (col: string) => {

  // @ts-ignore
  const colRef = collection(db, col);
  const snapshot = await getDocs(query(colRef, orderBy('name'), limitToLast(1)));

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
export const add = async (col: string, document: documentData) => {

  document.createdAt = Timestamp.fromDate(new Date()); // 現在時刻を追加
  document.lastSignedIn = Timestamp.fromDate(new Date()); // 現在時刻を追加

  // @ts-ignore
  const colRef = collection(db, col);
  const docRef = await addDoc(colRef, document);

  return docRef;
};

/* ドキュメントの削除 */
export const del = async (col: string, id: string) => {
  const docRef = doc(db, col, id);

  return await deleteDoc(docRef);
};

/* ドキュメントの更新 */
export const update = async (col: string, id: string, document: documentData) => {

  document.lastSignedIn = Timestamp.fromDate(new Date()); // 現在時刻を追加

  // @ts-ignore
  const colRef = doc(db, col, id);
  const docRef = await updateDoc(colRef, document);

  return docRef;
};

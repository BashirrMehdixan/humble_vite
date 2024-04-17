import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090/");
export const users = await pb.collection("users").getFullList();
export const currentUser = pb.authStore.model;
export default pb;
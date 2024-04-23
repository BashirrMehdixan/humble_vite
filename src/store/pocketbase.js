import PocketBase from "pocketbase";

const pb = new PocketBase('https://bashirr.pockethost.io');
export const users = await pb.collection("users").getFullList();
export default pb;
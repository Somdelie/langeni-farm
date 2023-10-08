import { Account, Client } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
  .setProject(import.meta.env.VITE_PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);

export default client;

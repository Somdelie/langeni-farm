import { Account, Client } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_PUBLIC_APPWRITE_URL)
  .setProject("6523220178358b98db04");

export const account = new Account(client);

export default client;

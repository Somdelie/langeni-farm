import { Account, Client, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6523d995c07308487746');

export const account = new Account(client);
export const databasses = new Databases(client);

export default client;

import { Account, Client } from "appwrite";

const client = new Client();

client
    .setEndpoint('http://24.199.118.182/v1')
    .setProject('65232faeba7d1b1c508c');

export const account = new Account(client);

export default client;

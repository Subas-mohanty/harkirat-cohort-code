import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://subas:123456@localhost:5432/todo-assignment");
    await client.connect();
    return client;
}
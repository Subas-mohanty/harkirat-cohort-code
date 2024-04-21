import { Client } from "pg";


export default async function getClient(){ 

  // database url
  const client = new Client("postgresql://subas:123456@localhost:5433/postgres"); 
  await client.connect();
  
  return client;
}

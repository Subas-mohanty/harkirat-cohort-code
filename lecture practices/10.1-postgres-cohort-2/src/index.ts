import getClient from "./utils";

async function createTable(){

  const client = await getClient();
  const queryTxt = `
    CREATE TABLE users(
      id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(33) NOT NULL
    );
  `;
  
  try {
    const response = await client.query(queryTxt); 
    console.log(response);
  } catch (error) {
    console.log("error");
  }
}

createTable();
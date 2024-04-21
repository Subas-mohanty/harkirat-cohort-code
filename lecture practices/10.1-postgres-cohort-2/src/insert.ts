import getClient from "./utils";

async function insertData(){
  const client = await getClient();

  // the $1, $2 are used to avoid sql injection, if we use direct sql in the values there may be a chance that the end user can give row sql like this DROP TABLE users, and it will make a huge disaster, so we avoid sql injection, and when we pass the value in another array then it treat it like a normal value
  const insertQuery = `
    INSERT INTO users(name)
    VALUES($1)
  `;
  await client.query(insertQuery, ["subu"]);
  console.log("data added successfully");
  
}

insertData();
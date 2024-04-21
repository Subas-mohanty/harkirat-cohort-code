import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();

    // the $1, $2 are used to avoid sql injection, if we use direct sql in the values there may be a chance that the end user can give row sql like this DROP TABLE users, and it will make a huge disaster, so we avoid sql injection, and when we pass the value in another array then it treat it like a normal value
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const userValues = ['john.do11e@gmail2.com', 'hashed_password_here'];

    let response = await client.query(insertUserText, userValues);
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id, false];
    let res = await client.query(insertTodoText, todoValues);

    // console.log("Entries created!");
    console.log(response);
    console.log(res);
    
    
}



createEntries();
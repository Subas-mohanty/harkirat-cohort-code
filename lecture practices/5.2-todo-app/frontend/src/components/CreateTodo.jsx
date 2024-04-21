import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input type="text" placeholder="enter title" onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
          // console.log(value);
        }}
      />
      <br />
      <input type="text" placeholder="enter description" onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
          //   console.log(value);
        }}
      />
      <br/>
      <button onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",

            body: JSON.stringify({
              title: title,
              description: description,
            }),
            
            headers:{
                "content-type" : "application/json"
            }
          }).then(async function (res) {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >Add todo</button>
    </div>
  );
}

// module.exports = CreateTodo //we can do like this but in the modern syntax we do like the above one

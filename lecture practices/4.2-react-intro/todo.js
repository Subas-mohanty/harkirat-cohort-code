
let id = 1;
function markasdone(id) {
  const element = document.getElementById(id);
  element.children[2].innerHTML = "Done!";
}
function createTodo(title, desc, id) {
  const parent = document.createElement("div");
  const child = document.createElement("div");
  const sonChild = document.createElement("div");
  const grandSonChild = document.createElement("button");

  child.innerHTML = title;
  sonChild.innerHTML = desc;
  grandSonChild.innerHTML = "mark as done";
  grandSonChild.setAttribute("onclick", `markasdone(${id})`);

  parent.appendChild(child);
  parent.appendChild(sonChild);
  parent.appendChild(grandSonChild);
  parent.setAttribute("id", id);

  return parent;
}

// state will always be an array
// Every element of state would have title, description and id
//

function addTodo(state) {
  const parent = document.getElementById("container");
  parent.innerHTML = "";

  for (let i = 0; i < state.length; i++) {
    const title = state[i].title;
    const description = state[i].description;
    const id = state[i].id;

    const toBeAdded = createTodo(title, description, id);
    parent.appendChild(toBeAdded);
  }
}


// addTodo([
//     {
//         "id": 1,
//         "title": "go to gym",
//         "description": "gym in the evening"
//     },
//     {
//         "id": 2,
//         "title": "go to school",
//         "description": "read mindfully"
//     }
// ])

// fetching the todos data from server 
// window.setInterval(async ()=>{
//     const response = await fetch("https://sum-server.100xdevs.com/todos");
//     const data = await response.json();
//     console.log(data);
//     addTodo(data.todos); // because inside the json there is todos object and rest of them are inside the todos so 
// }, 5000)

// fetching the todos data from server created by me
async function btnClick() {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    console.log(data);
    addTodo(data.todos); // because inside the json there is todos object and rest of them are inside the todos so 
}

// type keyType = "up" | "down" | "left" | "right"; // this will work as well 

enum direction{
  up, down, left, right
}
function doSomething(keyPressed : direction){
  if(keyPressed == direction.up){

  }
  if(keyPressed == direction.down){
    
  }

}
doSomething(direction.up)
doSomething(direction.down)
// doSomething("kucch bhi") // this will throw an error


// change values in the enums
enum Direction {
  Up1 = 1,
  Down1, // becomes 2 by default
  Left1, // becomes 3
  Right1 // becomes 4
}

function doSomething2(keyPressed: Direction) {
// do something.
}

doSomething2(Direction.Down1)


// can store strings as well
enum Direction2 {
  Up2 = "UP",
  Down2 = "Down",
  Left2 = "Left",
  Right2 = 'Right'
}

function doSomething3(keyPressed: Direction2) {
// do something.
}

doSomething3(Direction2.Down2)

// enum ResponseStatus {
//   Success = 200,
//   NotFound = 404,
//   Error = 500
// }

// app.get("/', (req, res) => {
//   if (!req.query.userId) {
//     res.status(ResponseStatus.Error).json({})
//   }
//   // and so on...
//   res.status(ResponseStatus.Success).json({});
// })

function identify<T> (arg:T) : T{
  return arg;
}
let output1 = identify<number>(10)
let output2 = identify<string>("subas")

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())
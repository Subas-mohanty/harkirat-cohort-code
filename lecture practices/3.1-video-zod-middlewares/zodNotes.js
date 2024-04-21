const zod = require("zod");
// if this is an array (parameter) arr: any 1 input, return true, else return false

// when the function itself returns a function we have to call it with parenthesis otherwise we can call it with only its name
// when we use parenthesis with a function that means we are executing the function right there
// that's why we use parenthesis with express.json() because it might be returning a function like this middleware() function is doing here

function middleware() {
  return function (req, res, next) {};
}
app.use(middleware());
app.use(express.json());



function validateInput(arr) {
  const schema = zod.array(zod.number());
  const response = schema.safeParse(arr);
  console.log(response);
}
validateInput([1, 2, 3]);

const schema = zod.object({
  email: zod.string().email(),
  padssword: zod.string().min(8),
});
//
// {
// email => string => should look like email
// password=> shoul;d have 8 letters.
// }

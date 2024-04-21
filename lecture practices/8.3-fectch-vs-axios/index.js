const axios = require("axios");

function main() {
  fetch("https://api.github.com/users/subas-mohanty").then(async (res) => {
    const data = await res.json();
    console.log(data.followers);
  });
}

async function main2() {
  const response = await fetch("https://api.github.com/users/subas-mohanty");
  const data = await response.json();
  console.log(data.followers);
}

// using axios
async function main3() {
  const response = await axios.get(
    "https://api.github.com/users/subas-mohanty"
  );
  console.log(response.data.followers);
}

// post request using axios
async function main4() {
  // first argument is the url , second argument is the body and the third argument is headers for post request, but for get method first argument will be the url and the second argument will be headers not body as get request doesn't content body
  
  // https://httpdump.app/inspect/c05f2211-aeed-4a1c-8574-999736e9d067 , website to verify the http method 
  const response = await axios.post(
    " https://httpdump.app/dumps/c05f2211-aeed-4a1c-8574-999736e9d067",
    {
      name: "subas",
      password: 1234,
    },
    {
      headers: {
        authorization: "bearer skdflf",
      },
    }
  );
  console.log(response);
}
main();
main2();
main3();
main4();

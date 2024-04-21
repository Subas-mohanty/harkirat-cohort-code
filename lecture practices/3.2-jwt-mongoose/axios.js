const axios = require("axios")
async function getData(){
    const data = await axios.get("https://fakerapi.it/api/v1/persons")
    console.log(data)
}
getData()

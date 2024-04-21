// const items = document.getElementById("item1")
// console.log(items.innerText);

// const elements = document.getElementsByClassName("item")
// console.log(elements[0].innerHTML = "lasdlsf")
// console.log(elements[1])
// console.log(elements[2])

const names = document.getElementsByTagName("p")
const names2 = document.getElementsByName("h1")
// console.log(names[0].innerText)
names2.forEach((val)=>{
    console.log(val)
})
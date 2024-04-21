/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map = new Map();
  for(let i =0 ; i<transactions.length; i++){
    let key = transactions[i].category
    if(map.has(key)){
      let value = map.get(key);
      value+= transactions[i].price;
      map.set(key, value);
    }else{
      map.set(key, transactions[i].price)
    }
  }
  console.log(map);
  let arr = [];
  map.forEach((element, x) => {
    console.log(element, x)
    arr.push({"category" : x, "totalSpent" : element});
  });
  return arr;
}
module.exports = calculateTotalSpentByCategory;

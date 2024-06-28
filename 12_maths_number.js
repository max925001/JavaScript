//const score = 400
//console.log(score)
//const balance = new Number(100)
//console.log(balance) // ye particularly bta rha hai ki number hai
//learn number type use inspect to see type 
//example of number type

//console.log(balance.toString().length)
//console.log(balance.toFixed(2)) // ye point ki value de rha hai



//const othernumber = 23.3737
//const othernumber = 123.3737 // ye 123 print karega last ko round off nhi karega kyu ki 3 hai 
//const othernumber = 123.8737 // ye round off hoga kyu ki 8 hai ishme
//const othernumber = 1123.8737 // ye exponetional print karega
//console.log(othernumber.toPrecision(3)) // ye three value lega last ko round off karega






// const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // ye couma ko print kar rha hota hai number ke bich me
// console.log(hundreds.toLocaleString('en-IN'))




//+++++++++++++++++++++++++++++====MATHS+++++++++++++++++++++++++++++++


console.log(Math)  // also see in inspect

console.log(Math.abs(-4)) // ye negative ko positive me convert karta hai

console.log(Math.round(4.6)) // for round off
console.log(Math.sqrt(4))
console.log(Math.min(3,5,7,6,1,8))
console.log(Math.max(4,6,7,4,10,7,8))


// VERY IMPORTANT
console.log( "Random",Math.random()) // isk ki value hardam 0aur 1 ke bich me aayega
console.log("Random",Math.random()*10)
console.log("Random",Math.random()*10)
console.log("Random",Math.round((Math.random()*10)+1)) // for avoiding this type of value 0133


const min = 10
const max = 20
// learn very important
console.log(Math.floor(Math.random()* (max-min+1 )) +min)
let num = 234

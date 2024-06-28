const marvel_heros =["thos","ironman","spiderman"]
const dc =["superman", "flash","batman"]


// marvel_heros.push(dc)
// console.log(marvel_heros) // array ke andar array aa gya
// console.log(marvel_heros[3][1])


//use concat

// console.log(marvel_heros.concat(dc))  //not more use




//spride 



const all_heros =[...marvel_heros,...dc]
console.log(all_heros)



console.log(Array.isArray('shivam')) //asking shivam name ka kuch hai use in data fetch
console.log(Array.from('shivam')) // convert into array
console.log(Array.from({name:"shivam"})) // impotant for interview



const score1 =100
const score2 =200
const score3 =300
console.log(Array.of(score1,score2,score3)) //ye array me ho jayega
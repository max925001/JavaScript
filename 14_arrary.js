// const myArr =[0,1,2,3,4,5,true,"hitesh"]
 const myArr =[0,1,2,3,4,5]
//  const myHeroes =new Array(1,2,3,4,56,6)

//  console.log(myArr['one']) not use


//array method

// console.log(myArr.includes(19)) // use for asking question here im asking 19 is present or not
// console.log(myArr.indexOf(19)) // printing -1 because it dont know value

// join convert any array into string
// const myNewArray = myArr.join()
// console.log(myNewArray)
// console.log(typeof myNewArray) // array convert into string




//slice splice

console.log("A",myArr)
 const myArr1=myArr.slice(1,3)

console.log(myArr1)
console.log("B",myArr)



 const myArr2=myArr.splice(1,3)
 console.log("c",myArr) // very important original array also change remove portion 1to 3
console.log("d",myArr2)

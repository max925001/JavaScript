//const userEmail ="h@gmail.com" 
const userEmail =[] 
if(userEmail) // ye true wali man lega apne app par agar useremail me koi empty string hai hoti to vo false man leta // agar array empty hota to true man leta
{

    console.log("got user email")

}
else{

    console.log("don't have user email")
}


//falsy value
//false,0,-0,BigInt 0n,"",null,undefined,nan

//remaining value is truthy value

//"0",'false', agar string ke andar koi bhi value add ho gyi to vo truty value hogi
//{},[],function()



if(userEmail.length===0){
    console.log("array is empty")
}

//object check
const emptyobject ={}
if(Object.keys(emptyobject).length==0){
console.log("object is empty")
}



//false==0 ye true hai
//false==0" ye bhi true hai
//0=='' ye bhi true hai




//Nullish coalescing Operator(??) only use for null aur undefined



let val1 
val1 =5??10

console.log(val1)
//print 5
val1 = null??10
console.log(val1)
//print 10
//null tab print hoga jab koi value nhi hogi 
let var1
var1 = undefined??15
console.log(var1)
var1 = null??10??20
console.log(var1) // first value assign



//+++++++++++++++TERNARY OPERATOR+++++++++++++++++++++


//condition ? true :false
const icecream =100
icecream==100? console.log(icecream):console.log("not")










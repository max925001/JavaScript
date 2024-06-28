


// function sayMyName(){

//     console.log("h")
//     console.log("i")
//     console.log("t")
//     console.log("e")
//     console.log("s")
//     console.log("h")
// }
// //sayMyName // nothingh print because only refrence pass
// sayMyName() //saymyname hai refrence hai ()bracket for execute

// // function addTwoNumbers(number1,number2){ //parameter hai number1 and number2

// // console.log(number1+number2)
// // }
// // addTwoNumbers(2,3) //yha argument dete hai
// // addTwoNumbers(2,"3") //print 23 because of string pass
// // addTwoNumbers(2,"a") // ye jada problem nhi karega but agar hum null dede tab problem hoga












// function addTwoNumbers(number1,number2){ 

//   //let result = number1+number2
// //    return result
// //    console.log("hitesh") // never print because after return nothing print in function


// //second way for printing store value

// return number1+number2


//     }






// const result = addTwoNumbers(3,5)
// console.log("result",result) // ye undefined print karega kyu ki ye result ke value ko store nhi kar rha iske liye hum dusri tarah se function ko declare karte hai
// //see line number 35 





// // ====================================



// //learning about passing value


// function loginUserMessage(username ="sam") //sam tab print hoga jab hum koi value nhi denge
// {
// if( username===undefined){
//    console.log("please enter a username")
//    return // ye ish liye kiya gya agar username me koi value na ho tab just logged in ko nhi print karana ho
// }
// return `${username} just logged in`



// }


//console.log(loginUserMessage("hitesh"))

//onsole.log(loginUserMessage(""))
//console.log(loginUserMessage()) //if no value is pass 
// printing undefined when no value is pass

// ye hum log tab use karenge jab cart me bahut sare price lete hai


//function calculatecartprice(...num1)// ... rest ya separate operator hai iska use bahut sari value ko lene ke liye ho rha hai
function calculatecartprice(val1,val2,...num1){ //isme kya value print hogi ye dekhna hai+++++++++++++  isme ho rha hai val1 ko 200 val2 ko 499 aur remening value rest operator me chali gye aur yhi print hogi
  return num1
//abhi ye rest ko print karega aur array print hoga


}

console.log(calculatecartprice(200,400,500,600))




// object ko kaise pass kare function me

const user ={

username:"hitesh",
price:190,
prices:190 //ye undefined aayega
}

function handleobject(anyobject)
{

console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}


// handleobject(user)
handleobject({ // direct object pass 
  username:"same",
  price:399

})



// array passing



const myArray =[200,400,500,56]
function returnsecondvalue(getArray)
{

return getArray[1]


}
//console.log(returnsecondvalue(myArray))
console.log(returnsecondvalue([300.500,600]))// direct aaray pass







//singleton
//object.create     //++++ another way to declare object



//object literals

//object me keys defined hoti hai lekin array me keys defined nhi hoti
// keys hai jaise name , age etc
//jo name lekha ko system ek string ki tarah leta hai

const mySym = Symbol("key1")




const JsUser = {

name:"hitesh",
age:18,
//mySym:"mykey1",
[mySym]:"mykey1",
location:"kanpur",
"full name":"shivam pandey",
Email:"shivam@gmail.com",
isLoggedinDays:false,
lastLogininDays:["monday","saturday"]





}
//way of access of object

console.log(JsUser.Email)
console.log(JsUser["Email"]) // why it is ki important to declare like this because of string see line 16
console.log(JsUser["full name"])
console.log( JsUser.mySym)// but key1 symbol datatype nhi hai ye string data type hai par humko to symbol data type chahiye
console.log( JsUser[mySym])
//console.log(typeof JsUser[mySym])

//agar humko symbol datatype chahiye to humko key1 ko square brackets me lekhna hoga

//++++++++==========for changing an object+++++++++++++++



 JsUser.Email = "pandey@gmail.com"
//Object.freeze(JsUser) // ye karne se object change nhi hoga
JsUser.Email = "pandeyshivam@gmail.com" // ye wali value nhi hogi kyu ki humne upar freeze kar diya hai
console.log(JsUser)


// adding function in object


JsUser.greeting =function(){
console.log("hello js user");

}
//console.log(JsUser.greeting) // isse undefined print ho rh ahai
//console.log(JsUser.greeting())// ye error dega khega ki ye function nhi hai to isse phle function bnana hoga ye error ish liye dekhayega kyu ki humne upar object ko freeze kar diya hai

JsUser.greetingtwo =function(){
    console.log(`hello js user,${this.name}`); // this ka use hum log ish liye kar kare hai taki jsUser ke andar ki value ko access kar sake
    
    }

    console.log(JsUser.greeting())
    console.log(JsUser.greetingtwo()) // isme name bhi likh ke aagya


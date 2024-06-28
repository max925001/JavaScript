// JAVASCRIPT ME SAHI ME CLASSES NHI HOTI HAI YE ES6 KE SATH AAYA HAI YE BAS EK PROTOTYPE HAI 
//javascript is prototype based language


// what is object
//-collection of properties and methods

// why we use oops
//-use for reuse

//constructor 
//prototype
//classes
//instance(this,new)


//four pillar of oop
//abstraction
//encapsulation
//inheritance
//polymorphism

const user = {
username: 'shivam',
loginCount: 8,
signedIn: true,

getUserDetail: function(){
// console.log("got user details from database")
  //console.log(`username ${this.username}`)
  console.log(this)// isme sari value print hogi sara object ke undar hai

}



}
// console.log(user.getUserDetail())
// console.log(this) // ye empty object dega


function User(username,loginCount, isLoggedIn){
this.username = username //this.username ye bas ek variable ko decleared karne ke liya hai jab same name use karte hai tab use karte hai

this.loginCount= loginCount
this.isLoggedIn = isLoggedIn
return this



}

const userOne =  new User("shivam" ,12 ,true)
// new key word
const userTwo = new User('pandey' ,33,true) // agar yha hum new key word ka use nhi karte to ye overwrite kardega aur userTwo ki value print kara dega userOne me aur ishi liye hum constructor ka use karte hai jo sara properties ko phir de de deta hai
console.log(userOne)

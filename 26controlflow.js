// control flow ka mtlb hai ki pura code kabhi bhi run nhi hona chahiye condition ke according run hona chahiye


//if


if(2=="2"){

console.log("executed")

}
if(2==="2"){

    console.log("executed") // not run because number is not equal to string
    
    }
    else{
        console.log("not executed")
    }
    
//comparison operator

//<,>,<=,>=,==,!=,===  ,=== ye type bhi check karta hai mtlb kis data type ka hai 


// const temperator = 60
// if(temperator<=50){
// console.log("temperator is less than 50")
// }
// else{
//     console.log("temperator is greater than 50")
// }





//==========================IMPORTANT==================


// const score =200
// if(score>100){
// const power = "fly"
// console.log(`user power :${power}`)

// }
//console.log(`user power :${power}`) // not run because power scope me defined hai










const balance = 1000

//if(balance>500)console.log("test")



//+++++++++++++++++++NESTING+++++++++++++++++++


if(balance<500){
console.log("less than 500")


}
else if(balance<750){

    console.log("less than 750")
}

else if(balance<900){

    console.log("less than 900")

}

else{
    console.log("less than 1200")

}













const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn&&debitCard &&2==2){ // && both condition is true
console.log("allow to buy course")



}

if( loggedInFromEmail||loggedInFromGoogle)
{
   console.log("you can logged")
}
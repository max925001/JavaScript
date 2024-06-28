//const tinderUser = new Object() // singelton object
const tinderUser ={} // non singelton object


tinderUser.id = "12edv"
tinderUser.name = "mariya"
tinderUser.isLogged = false


//console.log(tinderUser)
const regularUser ={

   email:"sime@gmail.com",
    fullname:{
        userfullname:{
firstname:"shivam",
lastname:"pandey"
        }

    }

}

//console.log(regularUser.fullname.userfullname.firstname)


// combine two object

const obj1 ={
    1:"a",2:"b"
}
const obj2 ={3:"a",4:"b"}

//const obj3 = {}

 //const obj3=Object.assign(obj1,obj2)
 //const obj3=Object.assign({},obj1,obj2) // right way to combine two object
 const obj3 ={...obj1,...obj2} // most use



 console.log(obj3)



// database se data kaise hai aata hai

const users =[
{


    id:1,
    email:"shivam@gmail.com"
}
,{



}

]


console.log(tinderUser)

console.log(Object.keys(tinderUser)) //keys ek array hai
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // ek array ek format me bna diya jata hai
console.log(tinderUser.hasOwnProperty('islogged')) // ye wali value nhi hI tabhi false aaya hai




//aur object dekhna hai to console.log me ja kar dekho 






//lecture 18

// Destucturing


const course = {

    coursename:"js in hindi",
    price:"1000",
    courseInstructor:"hitesh"



    


}

// ye hum log ish liye use kar rhe hai taki object ki value le saki another method for printing object
const{courseInstructor:instructor} =course
console.log(instructor)

//courseInstructor:instructor ye hum log destructure kiya hai destructure ka mtlb hai koi aur naam dena




// json

// {

//     "name":"hitesh"
//     "coursename":"js in hindi"
//     "price":"free"

// }

//===============IMPORTANTWEBSITE----------------



//randomuser.me
//json formatter












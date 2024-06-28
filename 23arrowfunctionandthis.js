

// const user = {








//     username:"hitesh",
//     price:300,


//     welcomemessage: function(){
//console.log(`${this.username},welcome to website`)
//console.log(this)

        
//     }

// }
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

//console.log(this) // current content empty 
//lekin agar hum this ko inspect me jake print karege to vha par bahut sari cheeze dekhai padegi
// window is global object





// function chai()
// {let username ="shivam"
//    // console.log(this) // isme bahut sari value aa rhi hai
//    // ye tab hota hai jab this ko function me lete hai
//    console.log(this.username) // print undefined because this not work in function
// }
//chai()















//+++++++++++++++++++++++======ARROW FUNCTION++++++++++++++++++++++++++++=






// const chai = ()=> {
// let username = "shivam"
// console.log(this) // ye empty print karega jab ki normal function console.log(this )me bahut sari value print karta hai
// console.log(this.username)

// }
// chai()



// const addtwo = (num1,num2)=> {
// return num1+num2

// }

// for one line of code
//const addtwo = (num1,num2)=> (num1+num2)     // use in react isme return nhi likhna hoga  // iska use hum log object ko declare karne me use kar sakte hai
const addtwo = (num1,num2)=> ({username:"hitesh"}) 
console.log(addtwo(3,4))





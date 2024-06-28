// how to create promise
// promise is object
//creation of promise
const promiseone = new Promise(function(resolve,reject){

//do an async task
//DB calls , cryptography ,network
setTimeout(function(){


    console.log('async task is complete')
    resolve() // for connecting .then
},1000)


})
// consume promise
promiseone.then(function(){

console.log("promise consume")

})



//second way

new Promise(function(resolve,reject){
setTimeout(function() {
    console.log("asyn task 2")
    resolve()
}, 1000);

}).then(function(){

    console.log("asyn 2 resolved")
})

//third promise


const promiseThree =new Promise(function(resolve,reject){

    setTimeout(function(){

resolve({username:"chai" ,email:"shivam969684@gmail.com"}) //resolve ka use kar rhe hai .then ke sath connection bnane ke liyes
    },5000)
})

promiseThree.then(function(user){
console.log(user) // ye upar wale code ko 5sec ke bad layega

})

//fourh promise


const promiseFour = new Promise(function(resolved,reject){
setTimeout(function(){

    let error = true
    if(!error){
        resolved({username:"shivam" , password :"123"})
    }
    else{
        reject('ERROR: Something went Wrong')
    }
},1000)
})
//promiseFour.then().catch() catch use when promise is reject
promiseFour.then((user)=>{


})




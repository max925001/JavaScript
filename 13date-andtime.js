let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())
console.log(typeof myDate)



//let myCreatedDate = new Date(2023,0,23) // months start with 0
let myCreatedDate = new Date("01-14-2023") // months start with 0
console.log(myCreatedDate.toDateString())


//Important


let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))





let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())





newDate.toLocalString('default',{
    weekday
})








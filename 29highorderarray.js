// for of loop


const arr =[1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}


const greetings = "hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


//maps //object


const map = new Map()
map.set('state',"up")
map.set('country',"india")
map.set('code',+91)
map.set('state',"up") // not include because map use only for unique value

//console.log(map.get('state'))
console.log(map)


for (const key of map) {
 console.log(key)   
}



for (const [key,value] of map) {
    console.log(key,":-",value)   
   }



   const myObject = {


    'game1':'NFS',
    'game2':'PBUG'
   }
//    for (const [key1,value1] of myObject) {
//     console.log(key,':-',value1)
//    } // not work in object working in map
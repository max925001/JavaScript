const name = "shivam"
const repoCount = 50
//console.log(name + repoCount + "pandey") //not use for concatinate
console.log(`hello my name is ${name} and and my repo is ${repoCount}`)
//````````````````` backtick



const gameName = new String('hitesh-hc')
console.log(gameName[0])
console.log(gameName._proto_)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))
const newString = gameName.substring(0,4) // ye slice ke liye use ho rha hai aur isme last value nhi aayega
console.log(newString)

const anothername =gameName.slice(-8 ,4)
console.log(anothername)


const anotherstring ="    shivam    "
console.log(anotherstring)
console.log(anotherstring.trim())  //removing extrea space




const url = "https://shivam.com/%20shivampandey"
console.log(url.replace('%20' ,'-')) //ye %20 ki jagah - ko kar dega
console.log(url.includes('sundar')) // isse puch rhe hai ki sundar word hai kya


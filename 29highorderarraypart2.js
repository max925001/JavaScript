const myObject={

    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift object'


}
//for in loop use for object

for (const key1 in myObject) {

    //console.log(key1) // print key
    //console.log(myObject[key1]) // object print
    console.log(`${key1} shortcut is for ${myObject[key1]}`)

}


//for in loop working in array

const programming =["js","rb","py","java"]



for (const key2 in programming) {
    console.log(key2) // array me bhi keys hoti hai aur vo index hoti hai
    console.log(programming[key2])
}
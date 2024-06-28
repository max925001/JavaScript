
let a= 30


if(true){ //{} iske andar jo bhi lekhenge ko block scope hai aur jo bahar likhenge {} block ke vo global scope hai


    let a =10
    const b =20
    var c = 30
    console.log("inner",a) // ye block ke andar hai to a= 10 print karega


}
 console.log(a) // ye a=30 print karega kyu ki ye block me hai
// console.log(b)
console.log(c)











function one(){


    const username ="hitesh"

    function two()
    
    {const website = "youtube"

console.log(username) // ye run hoga kyu ki ye bahr ki value ko le rha hai


///++++++++++++++++++++++++++++++//+++++++++++++++++++++++++

// bas ek bat yaad rakhna hai ki function ke andar se bahar ki value le sakte hai lekin function ke bahar se andar ki value nhi le sakte 

    }
//console.log(website) // ye run nhi hoga kyu ki ye function ke andar ke value ko call kar rha hai
two()
}
one()




//====================================//====================



//same in if else condition
if(true)
{
    const username ="hitesh"
   if(username==="hitesh"){
    const website ="youtube"
    console.log(username+website)



   }

//console.log(website) ye run nhi hoga kyu ki block ke bahar call ho rha hai
}
//console.log(username)





//+++++++++++++++++++++++++++++++INTRESTING+++++++++++++++++++++++++


console.log(addone(5)) // ye run ho jayega jabki ye function ke upar hai
function addone(num)
{

    return num+1




}


addTwo(5) // ye run nhi hoga kyu ki ye function variable me declare ho rh hai

const addTwo = function(num){

return num+2


}























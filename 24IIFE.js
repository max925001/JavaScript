// Immediately invoked function expression(iife)
//why we use iife because kabhi kabhi global variable se problem hoti hai ushi se bachne ke liye use karta hai

(function chai(){
    //name iife

console.log(`DB CONNECTED`)



})(); // ye ; end karne ke liye hai iife ko tabhi dusra iife run hoga

(function aurcode(){
    console.log(`DB CONNECTED`)
})();
((name)=>{
    //unnamed iife
    console.log(`DB CONNECTED ${name}`)
})("hitesh");
// var a=2;
var b=5;
var c="Hello";

// console.log(a+b);
// console.log(typeof a ,typeof b,typeof c);

const i=1;
// constant

// var global scope
// let local scope

let a=9;
{
    let a=10;
    console.log(a)
    // 10
}
console.log(a)
// 11


var b=9;
{
    var b=10;
    // console.log(b) 10
    // updates globally the value of b 
}
console.log(b)
// 10
 
let y = undefined ;
let x= null ;
let z= Number ;


let agee =3;
let grace = 2;

agee += grace
console.log(agee) //5
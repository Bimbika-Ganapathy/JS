// Fauly cancelIdleCallback
// takes 2 no as inpt
// performs wrong operation as follows

// + --> -
// - --> +
// - --> /
// / --> *



let random=Math.random()

let a = prompt("Enter first no")
let b = prompt("Enter sec no")
let c = prompt("enter the operation")

let obj={
    "+":"-",
    "*":"/" ,
    "/":"*",
    "+":"-"


}
console.log(random)
if(random > 0.1){
//performs the crt calculation      

    console.log(`he result is ${eval(`{a} ${c} ${b} `)}`)
    alert(`he result is ${eval(`{a} ${c} ${b} `)}`)
}
else {
    c=obj[c]
    alert(`he result is ${eval(`{a} ${c} ${b} `)}`)
}
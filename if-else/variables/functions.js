function nice(name) {
    console.log("Hey" + name +"you are intelligent")
    console.log("Hey" + name +"you are pretty")
    console.log("Hey" + name +"you are good")

}

nice("Rohan")

nice("Shivam")


function sum(a, b){
   console.log( a+b);
}

sum(100,80)

result=sum(90,9)
console.log("the sum is :", result)// //wont come into res comes as nan; as doesnt know wat value to add in


function sum(a, b, c=3){
    console.log( a+b+c);
 }
//defaut value of c given
 result=sum(90,9)
console.log("the sum is :", result) // now comes into res as we used the return stmt

reslt = sum(99,10,1) // passed the value for c here

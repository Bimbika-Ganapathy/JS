// 1)for loop


let a=1;
for (let i = 0; i < 100; i++) {
   console.log(a+i)
    
}

// 2)
// for in loop --> for obj , accessing keys n values

let obj={
    name: "Harry",
    role: "Engineer",
    company: "code with Harry"}

    for (const key in obj) {
       {
            const element = obj[key];
            console.log(element)
            
        }
    }//prints all the elements


    // also prints the key
    for (const key in obj) {
        {
             const element = obj[key];
             console.log(key,element)
             
         }}

         // prints the key
    for (const key in obj) {
        {
             const element = obj[key];
             console.log(key)
             
         }}


// 3) for of loop --> for array tranverse
for (const  c  of "Harry"){
    console.log(c)
}

// while loop


let j=0;
while(j<6){
    console.log(j)
    j++;
}


// do while --> need to run once even if the consition is false
let i=0;
do {
    console.log(i)
    i++
} while (i<5);


let k=10;
do {
    console.log(k)
    k++
} while (k<6);
//prints only 10
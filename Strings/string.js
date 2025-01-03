let name="Bimbika";
console.log(name[0]);
console.log(name.length)


//concatenation

let a ="bibi"
let b="ganapathy"
console.log("my name is"+ a + b)

// template literals
console.log(`my name is ${a} ${b}`)

//escape chars
//uppercase

let c= "Shishvam"
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c.length)// not func a prop so no 2 brackets 
console.log(c.slice(1,4))
console.log(c.slice(1))
console.log(c.replace("Sh","oo"))// only replaces the first occurance

console.log(c.concat(b))
console.log(c.concat(b,"aishwarya","ppp"))

console.log(c.charAt(0))

console.log(c.indexOf("b"))// if not there then -1
console.log(c.indexOf("h"))

console.log(c.startsWith("b"))
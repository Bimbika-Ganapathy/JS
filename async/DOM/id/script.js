console.log('Harry')
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="red"
document.getElementById("redbox").style.backgroundColor="red"

document.querySelector(".box").style.backgroundColor = "green";//only works for the 1st encountered element

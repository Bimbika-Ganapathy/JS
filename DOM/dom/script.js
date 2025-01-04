console.log("Hello world")
//in inspeact

document.body
document.body.childNodes
// ) [text, div.container, text, comment, text, script, text]
document.body.childNodes[0]
// #text
document.body.childNodes[1]
// containers
document.body.chldNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

//text node means space

let cont= document.body.childNodes[1]
undefined
cont
//<div class='container" >
cont.firstchild
//#text
cont.lastCChild
//#text
cont.firstElement.Child// to access the box n not the text node /space or gap
// <box> 
cont.LastElementChild
//undefined
cnt.LastElementChild.style.color="red";
//the box text of last box becomes red
cnt.lastElementChild.style.backgroundColor="green";
//makes the box green
cnt.lastElementChild.parent
cnt.lastElementChild.parentElement
//<box>


document.body.firstElementChild
<div class=​"container">​…​</div>​
document.body.firstElementChild.childNodes //all 
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.firstElementChild.children //only the elements-->children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]


document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[3].parentElement
<div class=​"container">​…​</div>​
document.body.firstElementChild.children[3].parent
undefined
document.body.firstElementChild.children[3].previousSibling
#text
document.body.firstElementChild.children[3].previousElementSibling
<div class=​"box">​Box3​</div>​
document.body.firstElementChild.children[3].nextElementSibling
<div class=​"box">​Box5​</div>​

document.body.children[0]
<div class=​"container">​…​</div>​
document.body.children[1]

document.body.children[1].rows
HTMLCollection(2) [tr, tr]
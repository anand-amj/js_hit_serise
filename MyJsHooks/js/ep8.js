// ep 31 --ep 32-- DOM
const head = document.getElementById('ContainerBg')
head.style.backgroundColor = 'green';

// ep 33 how to create new element in DOM
// select node list create new elemnt

const mainDiv = document.createElement('div')

mainDiv.className = "main-parent"
mainDiv.id = Math.round(Math.random() * 10 + 2);
mainDiv.setAttribute('title', 'parent title');
mainDiv.style.backgroundColor = "green";
//mainDiv.innerText = "inner text created";
const MyTextNode = document.createTextNode("text node created");
mainDiv.appendChild(MyTextNode);
//console.log(mainDiv.appendChild(MyTextNode))
const parentDiv = document.body.appendChild(mainDiv)


//
const weekDays = document.querySelector('.weekdays');
const weekChild = weekDays.children;

for(let i = 0; i < weekDays.children.length; i++){
    const out = weekDays.children[i].innerHTML 
    weekDays.children[i].innerHTML  = out + " hhhhh"
    
    //console.log(out + "AAAA")
}
// EP 34 

  

function langList(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.langlist').appendChild(li)
}   
 
//function ChnageFun(){
// var inputtextValue = document.getElementById('inputText').value; 
 let inputtextKeyDown = document.getElementById('inputText'); 
// console.log(inputtextValue)
// alert(inputtextValue)
// langList(inputtextValue); 
// document.getElementById('inputText').value = "";

 inputtextKeyDown.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed!');
      let inputtextValue = document.getElementById('inputText').value; 
      //var inputtextKeyDown = document.getElementById('inputText'); 
      console.log(inputtextValue)
      //alert(inputtextValue)
      langList(inputtextValue); 
      document.getElementById('inputText').value = "";
    }
  });
//}


// select box

function SelectList(SelectName){
    const option = document.createElement('option');
    option.appendChild(document.createTextNode(SelectName));
    document.querySelector('.select-box').appendChild(option)
}  
//SelectList('Anand')
let selectValue = document.getElementById('inputTextNew');
selectValue.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      //console.log('Enter key pressed!');
      let inputtextValueNew = document.getElementById('inputTextNew').value; 
      //var inputtextKeyDown = document.getElementById('inputText'); 
      console.log(inputtextValueNew)
      //alert(inputtextValue)
      SelectList(inputtextValueNew); 
      document.getElementById('inputTextNew').value = "";
    }
  });

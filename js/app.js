'use strict';
let input=document.getElementsByTagName('input');
console.log(input);
let label=document.getElementsByTagName('label');
console.log(label);

function check () {
  for(let i=0;i<input.length;i++){
    if(input[i].type==='checkbox'){
      input[i].addEventListener('change',checkbox);
    }
  }
}

function checkbox(event){
  if(event.target.checked===true){
    for (let j=0;j<label.length;j++){
      if(event.target.id===label[j].id){
        label[j].style.textDecoration='line-through' ;
      }
    }
  }else{
    for (let j=0;j<label.length;j++){
      if(event.target.id===label[j].id){
        label[j].style.textDecoration='none';
      }
    }
  }
}

check();

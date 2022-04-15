/* TODO: inserite il codice JavaScript necessario a completare il MHW! */





function selectAnswer(event){
 // console.log("click");  
  const risposta= event.currentTarget;
  risposta.style.opacity='1';  
  risposta.classList.remove('not_selected_answer');   
  const new_img = risposta.querySelectorAll('img');
  
  
   for(let element of risposte){

    if (risposta !== element && risposta.dataset.questionId === element.dataset.questionId){
        element.classList.remove('selected_answer');
        element.classList.add('not_selected_answer');  
        const new_img = element.querySelectorAll('img');
        new_img[1].src = 'images/unchecked.png';        
        element.style.opacity='0.6';
        
        
    }

   

  }
  new_img[1].src = 'images/checked.png';
  new_img[1].classList.add('checkbox');
  risposta.append(new_img[1]);
  risposta.classList.add('selected_answer');
  let tipo_risposta=risposta.dataset.questionId;
  let carattere=risposta.dataset.choiceId;
  risposteCounter(tipo_risposta,carattere);
  risposteCarattereCounter(risposta);
  checkScelte(listatipi);
}


function notSelectedAnswer(risposta){

for (let element in risposte){

    if (risposta !== element){
        
    element.classList.add('not_selected_answer');
    }
}
}

function risposteCounter(tipo_risposta){
  if (listatipi.length<1){
    listatipi.push(tipo_risposta);
  }
  for(let i=0; i<listatipi.length; i++){

   if(listatipi[i] === tipo_risposta || listatipi[i+1]=== tipo_risposta){
     break
    
  }
  else 
  listatipi.push(tipo_risposta); ;
}
scelte=listatipi.length;  
//console.log(listatipi);

}


function risposteCarattereCounter(risposta){

risp=risposta.dataset;
if(risp.questionId==='one'){

  listacarattere[0]=risp.choiceId;

}

if(risp.questionId==='two'){

  listacarattere[1]=risp.choiceId;

}

if(risp.questionId==='three'){

  listacarattere[2]=risp.choiceId;

}

//console.log(listacarattere);




}

// function risposteCarattereCounter(something){
//   risp=something.dataset;
// if(listacarattere.length<1){
//   listacarattere.push(risp);  
// console.log(listacarattere);
// }else { 
//   for(let i=0;i<listacarattere.length;i++){ 
  
//   if(listacarattere[i].questionId === risp.questionId && listacarattere[i].choiceId !== risp.choiceId ){
//     listacarattere.splice(i,1,risp);
//     console.log('primo if');    
//     console.log(listacarattere);

//      }
//   if(listacarattere[i].questionId !== risp.questionId && listacarattere[i].choiceId !== risp.choiceId){
//         listacarattere.push(risp);
//         console.log('secondo if');        
//         console.log(listacarattere);

//       }

// }
// }
// }






function playAgain(){
scelte=0;
listatipi=[];
listacarattere=[];

for(let element of risposte){    
      
      element.removeEventListener("click",selectAnswer);
      element.classList.remove('selected_answer');
      element.classList.remove('not_selected_answer');
      const new_img = element.querySelectorAll('img');
      new_img[1].src = 'images/unchecked.png';    
      element.addEventListener("click",selectAnswer);
      element.classList.add('not_selected_answer');
      element.style.opacity='1';
      //console.log('ciao');

}
    titolo.textContent='';    
    descrizione.textContent='';

}


function no_more_chance()
{
          for(let element of risposte){    
        element.removeEventListener("click",selectAnswer);
    }
    
}





function checkScelte(listatipi){
  
    if(listatipi.length>=3){
      no_more_chance();
      showResult(listacarattere);
    }


}

function showResult(listacarattere){
  if(listacarattere[0]===listacarattere[1] || listacarattere[0]===listacarattere[2]){

    titolo.textContent=RESULTS_MAP[listacarattere[0]].title;    
    descrizione.textContent=RESULTS_MAP[listacarattere[0]].contents;
  }
  if(listacarattere[1]===listacarattere[0] || listacarattere[1]===listacarattere[2]){

    titolo.textContent=RESULTS_MAP[listacarattere[1]].title;    
    descrizione.textContent=RESULTS_MAP[listacarattere[1]].contents;
  }
  if(listacarattere[2]===listacarattere[0] || listacarattere[2]===listacarattere[1]){

    titolo.textContent=RESULTS_MAP[listacarattere[2]].title;    
    descrizione.textContent=RESULTS_MAP[listacarattere[2]].contents;
  } else {
    titolo.textContent=RESULTS_MAP[listacarattere[0]].title;    
    descrizione.textContent=RESULTS_MAP[listacarattere[0]].contents;
  }
}

// Main


let risposte= document.querySelectorAll('.choice-grid div');
let sezione= document.querySelectorAll('.choice-grid');  
let titolo=document.querySelector('.result h1');
let descrizione=document.querySelector('.result p');
scelte=0;
listatipi=[];
listacarattere=[];

for(let element of risposte){    
  element.classList.add('not_selected_answer');
  element.addEventListener("click",selectAnswer);  
 // console.log('ciao');
}

const bottone=document.querySelector('#reset-button');
bottone.addEventListener("click",playAgain);


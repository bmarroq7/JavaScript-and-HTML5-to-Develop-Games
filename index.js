//todo: line 165  add content to the rest of the branches 
//rock > scissors 
//rock < paper  
//scissors > paper 
//an array with the game options 
const gameOptions = ['rock', 'paper', 'scissors']; 
const colors = ['blue','red', 'yellow'];
const MY_ADJ = ["User", "Cpu"]; 
let getNode; 
let myInput; 
let cpuInput; 

//to be continue feb 16 why is their an extra div 
//delet after 
let getGameSelectionContainer = document.querySelector('#gameSelection-container'); 
let getExtraDiv = getGameSelectionContainer.querySelector('div');
let getP = document.querySelector('p');

let header3; 

getExtraDiv.remove();//removes the extra element from the dom 

for(let a = 0; a < gameOptions.length; a++){
  getNode = document.querySelector(`#${gameOptions[a]}`);
  getNode.addEventListener('click', callFunction); 
}; 

function callFunction(event){
  let node = event.target; 
  myInput = node.getAttribute('id'); 

  for(let b = 0; b < gameOptions.length; b++){
    if( node.getAttribute('id') === gameOptions[b] ){
      alert( `You selected : ${node.getAttribute('id')}`); 
      //figure out why is not turning red 
      
      node.setAttribute('style','color:red;font-size:100px;'); 
      for(let c = 0; c < gameOptions.length; c++){
         getNode = document.querySelector(`#${gameOptions[c]}`);
         getNode.removeEventListener('click', callFunction); 
      }
      
      //it calls the function where the cpu chooses 
      cpuChooses(); 
    }
  }
}
//ask what the player is going to choose 
function cpuChooses(){
  let getTitle = document.querySelector('#title');
  getTitle.textContent = 'Cpu'; 
  let getNode; 
  //removes the blue color from the option that was selected 
    for(let d = 0; d < gameOptions.length; d++){
     getNode = document.querySelector(`#${gameOptions[d]}`);
     getNode.classList.toggle(`${gameOptions[d]}`); 
      
     if(getNode.getAttribute('id') === gameOptions[d]){
       getNode.setAttribute('style','color:black;font-size:100px;'); 
      }
  }
  //creates a random number 
  //let randomNumber =  Math.floor(Math.random() * 3);
  //gets the option of the cpu 
 // cpuInput = gameOptions[randomNumber];
  cpuInput = gameOptions[2];

     setTimeout(()=>{
       for(let e = 0; e < gameOptions.length; e++){
        getNode = document.querySelector(`#${gameOptions[e]}`);
        getNode.classList.toggle(`${gameOptions[e]}`);
         if(cpuInput === getNode.getAttribute('id')){
           getNode.setAttribute('style', `color:${colors[e]};font-size:100px;`); 
           //fix bugs to be continue feb 23 
         }
       }
       
       setTimeout(()=>{
       alert(`Cpu selected: ${cpuInput} `); 
       winLoseDrawSection(); 
       }, 2000)
      
  },5000);
  
}


function winLoseDrawSection(){
  let getIcons = document.querySelectorAll('i'); 
  let getGameSelectionContainer = document.querySelector('#gameSelection-container'); 
  let h1Element = document.createElement('h1');//element that containes greater,less, and equal sign 
  let getTitle = document.querySelector('#title');
  let h2Element; 
  
  
  getTitle.setAttribute("class", 'add-animation'); 
  h1Element.setAttribute("class", 'add-animation');
  
  
 
  //this branch executes if rock and scissors or if paper and rock are pick
   if(myInput === gameOptions[0] && cpuInput === gameOptions[2] || myInput === gameOptions[1] &&  cpuInput === gameOptions[0]){
     
     let getLastChild;
     let getFirstChild; 
     let myFirstLastChildArray;
     let divElements;
     
    for(let f = 0; f < getIcons.length; f++) {
         if( cpuInput !== getIcons[f].getAttribute('id') &&  myInput !== getIcons[f].getAttribute("id")){
      
            getGameSelectionContainer.removeChild(getIcons[f]); 
            getLastChild = getGameSelectionContainer.lastElementChild; 
            getFirstChild = getGameSelectionContainer.firstElementChild; 
            myFirstLastChildArray = [getFirstChild,getLastChild];
            divElements = [getExtraDiv,getExtraDiv.cloneNode()];
            h1Element.setAttribute('style', "font-size:100px;");
           
            
            getTitle.textContent = 'You Win!'; 
          
            for (let index = 0; index < 2; index++) {

              getGameSelectionContainer.appendChild(divElements[index]);
              divElements[index].appendChild(myFirstLastChildArray[index]);
              divElements[index].setAttribute('class', 'player-selection-box');
            
              h2Element = document.createElement('h2');

              divElements[index].appendChild(h2Element);
              
              h2Element.setAttribute('style', 'text-align:center;'); 
              myFirstLastChildArray[index].classList.toggle('item1' )
              h2Element.classList.toggle('class', 'item2');
      
              (myFirstLastChildArray[index].getAttribute('id') === gameOptions[0]) || (myFirstLastChildArray[index].getAttribute('id') === gameOptions[1]) ? divElements[index].lastElementChild.textContent = "User"  : divElements[index].lastElementChild.textContent = "Cpu";
              

              if(myInput === myFirstLastChildArray[index].getAttribute('id')){
                  divElements[index].lastElementChild.textContent = "User";
                  myFirstLastChildArray[index].setAttribute('style',"color:blue;font-size:100px;");
              }else{
                  divElements[index].lastElementChild.textContent = "Cpu";
                  myFirstLastChildArray[index].setAttribute('style',"color:yellow;font-size:100px;");
              }

            


             }
            
            
            getLastChild = getGameSelectionContainer.lastElementChild; 
            getGameSelectionContainer.insertBefore(h1Element,getLastChild); 
            
      
            if(myInput === gameOptions[0] && cpuInput === gameOptions[2]){
              h1Element.textContent = '>';
              getP.textContent = 'Rock beats scissors';
            }else if(myInput === gameOptions[1] &&  cpuInput === gameOptions[0]){
              h1Element.textContent = '<';
              getP.textContent = 'Paper covers rock';
            }
            //!to be continue 

          
         }
    }
  
     
  }else if(myInput === gameOptions[2] && cpuInput === gameOptions[0] || myInput === gameOptions[0] && cpuInput === gameOptions[1] ){
    
      let getLastChild;
      let getFirstChild; 
      /* add declare variables 
      *let myFirstLastChildArray;
      *let divElements;
      */
      for(let f = 0; f < getIcons.length; f++) {
         if( cpuInput !== getIcons[f].getAttribute('id') &&  myInput !== getIcons[f].getAttribute("id")){
           
           getGameSelectionContainer.removeChild(getIcons[f]);
           getLastChild = getGameSelectionContainer.lastElementChild;
           getFirstChild = getGameSelectionContainer.firstElementChild; 
           /*
            *myFirstLastChildArray = [getFirstChild,getLastChild];
            *divElements = [getExtraDiv,getExtraDiv.cloneNode()];
           */
           h1Element.textContent = '>'; 
           h1Element.setAttribute('style', "font-size:100px;")
           
        let getTitle = document.querySelector('#title');
        getTitle.textContent = 'You Lose!'; 
        getGameSelectionContainer.insertBefore(h1Element,getLastChild)
           
        //remove
         myInput === gameOptions[2] && cpuInput === gameOptions[0] ? h1Element.textContent ='>' :  h1Element.textContent = '<'; 
       
           
         myInput === gameOptions[2] ?  getLastChild.setAttribute('style',"color:red;font-size:100px;") : getFirstChild.setAttribute('style',"color:yellow;font-size:100px;");
         
           //fix bug feb 24 
         
         }
        
        
        
    }
    
  }else if(myInput === gameOptions[2] && cpuInput === gameOptions[1] || myInput === gameOptions[1] && cpuInput === gameOptions[2] ){
    
    let getLastChild;
    let getFirstChild;
    for(let f = 0; f < getIcons.length; f++) {
         if( cpuInput !== getIcons[f].getAttribute('id') &&  myInput !== getIcons[f].getAttribute("id")){
           
            getGameSelectionContainer.removeChild(getIcons[f]); 
            getFirstChild = getGameSelectionContainer.firstElementChild; 
            getLastChild = getGameSelectionContainer.lastElementChild; 
           
            h1Element.textContent = '<'; 
            h1Element.setAttribute('style', "font-size:100px;")
           
            let getTitle = document.querySelector('#title'); 
            getGameSelectionContainer.insertBefore(h1Element,getLastChild)
           
            myInput === gameOptions[2] && cpuInput === gameOptions[1] ? getTitle.textContent = 'You Win!' : getTitle.textContent = 'You Lose!';
           //to be continue feb.14
           myInput === gameOptions[2] ?  getLastChild.setAttribute('style',"color:red;font-size:100px;") : getFirstChild.setAttribute('style',"color:blue;font-size:100px;");
         }
    }
  }else if(myInput === cpuInput ){
  //to be continue 2/24 
    let getLastChild;
    for(let f = 0; f < getIcons.length; f++) {
         if( cpuInput !== getIcons[f].getAttribute('id') &&  myInput !== getIcons[f].getAttribute("id")){
           
            getGameSelectionContainer.removeChild(getIcons[f]);
            
         }
    }
           
            let getTitle = document.querySelector('#title'); 
            getTitle.textContent = 'Draw!';
    
            h1Element.textContent = '='; 
            h1Element.setAttribute('style', "font-size:100px;"); 
            getGameSelectionContainer.appendChild(h1Element); 
    
            let getFirstChildElement = getGameSelectionContainer.firstElementChild;
            //console.log(getFirstChildElement); 
            let copyElement = getFirstChildElement.cloneNode();
           
            switch(copyElement.getAttribute('id')){
              case 'rock': 
                copyElement.setAttribute("style", "color:yellow;font-size:100px;");
                break; 
              case 'paper': 
                copyElement.setAttribute("style", "color:blue;font-size:100px;");
                break; 
              case 'scissors': 
                copyElement.setAttribute("style", "color:red;font-size:100px;");
                break; 
              default: 
                alert("Error!")
                break; 
            }
            getGameSelectionContainer.appendChild(copyElement);
            //getGameSelectionContainer.insertBefore(h1Element,getLastChild);
           // console.log(getFirstChildElement); 
  }else{
    alert('Error!'); 
  }
  
  
  

}

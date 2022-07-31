let addTaskBtn = document.getElementById('btn');
let divContainer = document.getElementById('container');
let userInput = document.getElementById('bara');


addTaskBtn.addEventListener('click', function(){
  var addNewDiv = document.createElement('div');
      addNewDiv.className = 'item';
      

    var newLabel = document.createElement('label');
        newLabel.className = 'produs';
        newLabel.id = 'produs';
        newLabel.htmlFor = 'toggle';
        newLabel.innerHTML = userInput.value;
      

    var newInput = document.createElement('input');
        newInput.className = 'toggle';
        newInput.type = 'checkbox';
        
      
    
    var delBtn = document.createElement('button');
        delBtn.type = 'submit';
        delBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
        delBtn.className = 'delete';
        
        

  addNewDiv.appendChild(delBtn);
  addNewDiv.appendChild(newLabel);
  addNewDiv.appendChild(newInput);    
  divContainer.appendChild(addNewDiv);
  userInput.value = "";

  /* checkbox style functie */
  newInput.addEventListener('change', function(){
    if (this.checked) {
      addNewDiv.style.textDecoration = 'line-through';
      addNewDiv.style.backgroundImage = 'linear-gradient(90deg, rgb(184, 77, 77), rgb(39, 155, 218))';
    } else {
      addNewDiv.style.textDecoration = 'none';
      addNewDiv.style.backgroundImage = 'none';
    }
});

  /* delete new div functie */

  delBtn.addEventListener('click', function(){
    divContainer.removeChild(addNewDiv);
  });
});

 







/* var userProd = document.getElementsByClassName('container');
var userText = document.getElementById('bara');

var newDiv = document.createElement("div");
var AltNewDiv = document.createElement("div");
var newInput = document.createElement("input");
var newLabel = document.createElement("label");
var itemList = ['',''];
 

  newDiv.className = 'item';

  newLabel.htmlFor = 'toggle';
  newLabel.id = 'produs';

  newInput.id = 'toggle';
  newInput.type = 'checkbox';

document.getElementsByClassName('container')[0].appendChild(newDiv);
  
document.getElementsByClassName('item')[0].appendChild(newInput);
  
document.getElementsByClassName('item')[0].appendChild(newLabel);

/*function test() {   
  newDiv.style.display = ''
  newLabel.innerHTML = userText.value;  
  }; end comment here daca dai uncoment la tot



let click = document.getElementById('btn');
let CountClicks = 0;
click.addEventListener("click", function() {
  CountClicks += 1;
  console.log(CountClicks);
  itemList = userText.value;
  newLabel.innerHTML = itemList.lenght[0];
});  */








  
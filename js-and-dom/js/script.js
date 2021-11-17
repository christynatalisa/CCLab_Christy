let roundButton = document.getElementById('roundButton');

roundButton.addEventListener('click', roundButtonClicked);

function roundButtonClicked() {
  let rectElem = document.getElementById('rect');
  rectElem.style.borderRadius = '50px';
}




let i = 0;
i = i + 2;

console.log('My JavaScript file has loaded');
console.log('i is ' + i);




function say(what) {
  //alert(what);

  // Step 1: find the element we want to manipulate
  let elem = document.getElementById('lyrics');

  // Step 2: create a new element to be added to the DOM
  let newElem = document.createElement('p');

  // Step 2.5: change the element's content
  newElem.innerHTML = what;

  // Step 3: add the new element to our lyrics div
  elem.appendChild(newElem);


  elem = document.getElementById('heading');


  if (what == 'Harder') {
    // background-color
    elem.style.backgroundColor = 'rgb(124, 12, 12)';
  } else {
    elem.style.backgroundColor = 'blue';

  }
}

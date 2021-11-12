
console.log('Hello');

function say(what) {
  //alert(what);

  let elem = document.getElementById('lyrics');

  // create
  let newElem = document.createElement("p");

  //step3 add new element to our lyrics
  newElem.innerHTML =  what;

  document.body.appendChild(newElem);

  elem = document.getElementById('heading');
  let rectElem = document/getElementById('rect ')

  if(what == 'Harder') {
    elem.style.color ='red';
    rectElem.style.borderRadius = '0px';
  } else {
    elem.style.color = 'blue';
    rectElem.style.borderRadius = '50px'
  }
}

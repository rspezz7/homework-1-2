let myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/gilligan.jpg') {
    myImage.setAttribute ('src','images/gilligan2.jpg');
  } else {
    myImage.setAttribute ('src','images/gilligan.jpg');
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to my page, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to my page, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
  // test 
}
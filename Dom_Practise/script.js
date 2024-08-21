/*
qn 1) Create a new button element.Give it a text "click me",background color of red and text color of white.
Insert the button element inside the body tag .
// *

// let button = document.createElement('button');

// button.textContent = 'Click me';

// button.style.backgroundColor ='red';

// button.style.color ='white';

// document.querySelector('body').prepend(button);



/*
qn 2) Create a <p>tag in html ,give it a class & some styling .Now create  a new class in css and try to append this class to the <p>element.
Did you notice, how you overwrite the class name you add a new one? .Solve this problem using classList.
*/
let par = document.querySelector('p');
par.getAttribute("class");
par.setAttribute("class", "newclass");

par.classList.add("newclass");//two class added
par.classList.remove("newclass");//delete new class
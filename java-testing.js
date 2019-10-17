// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

const h3Para = document.createElement('h3');
h3Para.style.color = "blue";
h3Para.textContent = "I'm a blue H3!";

const bigDiv = document.createElement('div');
bigDiv.style.backgroundColor = "pink";
bigDiv.style.borderWidth = "1px";
bigDiv.style.borderColor = "black";
bigDiv.style.borderStyle = "solid";

const h1Para = document.createElement('h1');
h1Para.textContent = "I'm in a div";

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";



container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(h3Para);
container.appendChild(bigDiv);
bigDiv.appendChild(h1Para);
bigDiv.appendChild(para2);


//Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.
//a <p> with red text that says “Hey I’m red!”  DONE
//an <h3> with blue text that says “I’m a blue h3!”
//a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
//Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.//
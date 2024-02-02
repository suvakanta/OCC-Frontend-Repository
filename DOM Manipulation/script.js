//Accessing Elements
//by ID
//const heading= document.getElementById('heading');
//by class
// const heading = document.getElementsByClassName('heading1');
// console.log(heading);
//by tag name
 const heading = document.getElementsByTagName('h1');
console.log(heading);
const listItems = document.querySelectorAll('#list li');
console.log(listItems[1])

//MOdifying ELements
//contents using innerHTML
heading[0].innerHTML = '<em>Learing DOM Manipulation</em>';

//contents using textContent
// heading[0].textContent ='<em>All About DOM Manipulation</em>'
//attributes using setAttribute
heading[1].setAttribute('class','highlight')

//styles using the style property
const button = document.getElementById('btn');
button.style.backgroundColor = 'skyblue';
button.style.color='white'

//creating new elements dynamically
const container = document.getElementsByClassName('container');
const newParagraph = document.createElement('p');
newParagraph.textContent ="This is a new paragraph";
container[0].appendChild(newParagraph)

//remove elements dynamically
// container[0].remove();
// button.remove();

//Handling Events
button.addEventListener('click',addListItem);

function addListItem(){
    const newListItem = document.createElement('li');
    newListItem.textContent ='New List Item';
    document.getElementById('list').appendChild(newListItem);
}
// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.
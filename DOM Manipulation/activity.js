const myDiv = document.getElementById('myDiv');
const myForm = document.getElementById('myForm');
const numInput = document.getElementById('number')
const btn = document.getElementById('myBtn');

btn.addEventListener('click', checkNumber);

function checkNumber() {
    const numberValue = numInput.value;

    if (numberValue % 2 == 0) {
        myDiv.textContent = "Even";
    } else {
        myDiv.textContent = "Odd";
    }
}
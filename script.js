const decrementButton = document.getElementById('decrementButton');
const incrementButton = document.getElementById('incrementButton');
const counterValue = document.getElementById('counterValue');
const sendButton = document.getElementById('sendButton');
const numberInput = document.getElementById('numberInput');
const colorBox = document.getElementById('colorBox');
const colorPicker = document.getElementById('colorPicker');

let counter = 0;

decrementButton.addEventListener('click', () => {
    counter--;
    counterValue.textContent = counter;
});

incrementButton.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

sendButton.addEventListener('click', () => {
    const inputValue = parseInt(numberInput.value, 10);
    if (!isNaN(inputValue)) {
    counter = inputValue;
    counterValue.textContent = counter;
    }
});
colorBox.addEventListener('click', () => {
    colorPicker.click();
});

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorBox.style.backgroundColor = selectedColor;
    counterValue.style.color = selectedColor;
});



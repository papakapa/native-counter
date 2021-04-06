const content = document.getElementById('content');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

plusButton.addEventListener('click', () => {
   const currentValue = parseInt(content.innerText);
   content.innerText = (currentValue + 1).toString();
});

minusButton.addEventListener('click', () => {
    const currentValue = parseInt(content.innerText);
    content.innerText = (currentValue - 1).toString();
});
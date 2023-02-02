const displayValuePrev = document.getElementById('value-prev');
const displayValueActual = document.getElementById('value-actual');
const buttonNumber = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');

const display = new Display(displayValuePrev, displayValueActual);

buttonNumber.forEach(button => {
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML)
    });
});

buttonOperator.forEach(button => {
    button.addEventListener('click', () => {
        display.computar(button.value)
    })
})
// Buena suerte!
let totalValue; 

document.addEventListener("DOMContentLoaded", function () {
    const primaryNumber = document.getElementById('primary-number'); 
    const secondaryNumber = document.getElementById('secondary-number'); 

    let value1 = Math.floor(Math.random() * 100);
    let value2 = Math.floor(Math.random() * 100);

    totalValue = value1 + value2; 

    primaryNumber.textContent = value1;
    secondaryNumber.textContent = value2;
});

const click = document.getElementById('btn');

click.addEventListener('click', function() {
    let guessedNumber = Number(document.getElementById('guess').value); // Convertir a número
    let message = document.getElementById('message');

    if (guessedNumber === totalValue) {
        message.textContent = 'El resultado es correcto';
    } else {
        message.textContent = 'Aprende a sumar...';
    }
});

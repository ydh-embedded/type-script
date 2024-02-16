

const EingabeFeld = document.querySelectorAll('button');

EingabeFeld.forEach((button) => {
    button.addEventListener('click', () => {

    const dNumber = parseFloat(button.dataset.number);

    if (!isNaN(dNumber)) {
        const result = Quotientenwert(dNumber);
        console.log(`Quotient: ${result}`);
    } else {
        console.log('Invalid input values');
    }
  });
});



// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
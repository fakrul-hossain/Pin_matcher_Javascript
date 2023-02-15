function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}


function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate_pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display_pin');
    displayPinField.value = pin;
});


document.getElementById('calculate').addEventListener('click', function(event){
    const number= event.target.innerText;
    const typeNumberField = document.getElementById('type_numbers');
    const previousTypeNumber = typeNumberField.value;
    if (isNaN (number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    } else {

        const previousTypeNumber = typeNumberField.value;
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
});

document.getElementById('verify_pin').addEventListener('click', function(){
    displayPinField = document.getElementById('display_pin');
    const currentPin = displayPinField.value

    const typeNumberField = document.getElementById('type_numbers');
    const typeNumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin_success');

    const pinUnSuccessMessage = document.getElementById('pin_unsuccess');
    if (typeNumber === currentPin) {
        
        pinSuccessMessage.style.display = 'block'
        pinUnSuccessMessage.style.display = 'none'
    }  else{
        pinUnSuccessMessage.style.display = 'block'
        pinSuccessMessage.style.display = 'none'
    }
});


const product = 5; const price = "7"; const subTotal = product * price; const tax = subTotal/10; const total = subTotal + tax; 
const category="pen"; const performer = category+"-teller";

console.log(performer);

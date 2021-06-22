const name = document.querySelector('#name');
const password = document.querySelector('#password');
const password1 = document.querySelector('#password1');
const form = document.querySelector('#form');
const errorElement = document.querySelector('#error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (name.value === '' || name.value == null){
        messages.push('Name is required');
    }

    if (password.value.length <= 6){
        messages.push('Password must be longer than 6 characters');
    }

    if (password.value.length >= 20){
        messages.push('Password must be less than 20 characters');
    }

    if (password.value === 'password'){
        messages.push('Password cannot be \'password\'');
    }

    const specialChar = ['/', '!', '@', '#', '$', '%', '&']; 
    let specBoolean = true   
    for (char of specialChar) {
        if (password.value.includes(char) == true ) {
            specBoolean = true;
            break;
        } else {
            specBoolean = false;
        }
    }
    if (!specBoolean) {
        messages.push('Password must contain at least one  of the following: /, !, @, #, $, %, &');
    }

    let numberBoolean = true;  
    for (i = 0; i < 10; i++) {
        if (password.value.includes(String(i)) == true ) {
            numberBoolean = true;
            break;
        } else {
            numberBoolean = false;
        }
    }    
    if (!numberBoolean) {
        messages.push('Password must contain at least one number');
    }

    if (password.value != password1.value) {
        console.log(password.value);
        console.log(password1.value);
        messages.push('Passwords must match');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join('\n');
    }
})

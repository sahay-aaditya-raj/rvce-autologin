

// Check if both username and password are present in localStorage
var storedUsername = localStorage.getItem('uname');
var storedPassword = localStorage.getItem('pass');


// Create a div container
var container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
// container.style.position = 'fixed';
// container.style.bottom = '50px';
// container.style.right = '10px';
container.style.width = '200px';
container.style.backgroundColor = '#fff'; // Optional background color

// Create input fields for username and password
var usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.placeholder = 'Username';
usernameInput.style.borderRadius = '4px';
usernameInput.style.width = '100%';
usernameInput.style.marginBottom = '10px';

var passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.style.borderRadius = '4px';
passwordInput.placeholder = 'Password';
passwordInput.style.width = '100%';
passwordInput.style.marginBottom = '10px';

// Create a button element
var button = document.createElement('button');
button.textContent = 'LogIn';
button.style.width = '100%'; // Make the button full width
button.style.padding = '8px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.cursor = 'pointer';


// Append the input fields and button to the container
container.appendChild(usernameInput);
container.appendChild(passwordInput);
container.appendChild(button);



// Retrieve stored values from localStorage on page load
usernameInput.value = localStorage.getItem('uname') || '';
passwordInput.value = localStorage.getItem('pass') || '';

// Add input event listeners to update localStorage while typing
usernameInput.addEventListener('input', function() {
localStorage.setItem('uname', usernameInput.value);
});

passwordInput.addEventListener('input', function() {
localStorage.setItem('pass', passwordInput.value);
});


try{
    // getting the form
    let form = document.querySelector('form');
    // Append the container to the body of the page
    let form_inp = form.querySelector('input');
    if(form_inp){form.appendChild(container);
    }}
    
catch(err){
    console.log(err);
}

// Add a click event listener to the button
button.addEventListener('click', function() {
    var usernameValue = localStorage.getItem('uname') || '';
    var passwordValue = localStorage.getItem('pass') || '';

    if(usernameValue && passwordValue) {

        let form = document.querySelector('form');
        if(form){
            // setting username and password in the form
            let form_user = document.getElementById('ft_un');
            form_user.value = usernameValue;

            let form_pass = document.getElementById('ft_pd');
            form_pass.value = passwordValue;

            form.submit();
            form.removeChild(container);
        }

    } else {
        alert('Please enter username and password');
    }
});

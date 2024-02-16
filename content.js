// Check if both username and password are present in localStorage
var storedUsername = localStorage.getItem('uname');
var storedPassword = localStorage.getItem('pass');

try{
	let form_user = document.getElementById('ft_un');
form_user.value = localStorage.getItem('uname') || '';

let form_pass = document.getElementById('ft_pd');
form_pass.value = localStorage.getItem('pass') || '';


// Add input event listeners to update localStorage while typing
form_user.addEventListener('input', function() {
localStorage.setItem('uname', form_user.value);
});

form_pass.addEventListener('input', function() {
localStorage.setItem('pass', form_pass.value);
});	
} catch(e){
	console.log(e)
}

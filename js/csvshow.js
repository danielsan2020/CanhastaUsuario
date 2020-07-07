const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    const eye_type = togglePassword.getAttribute('class');
    if(eye_type == 'fa fa-eye-slash'){
        togglePassword.className = 'fa fa-eye'
    }else{
        togglePassword.className = 'fa fa-eye-slash'
    }
});
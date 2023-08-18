document.getElementById('btn-login').addEventListener('click', function(){

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    if(email === "hello@vai.com" && password === "hellovai"){
        
        window.location.href = "http://127.0.0.1:5500/bank.html";
    }
    else{
        alert('invalid user');
    }






})
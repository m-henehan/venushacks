function register()
{
    let email = document.getElementById('email1').value
    let password = document.getElementById('password1').value
	let password2 = document.getElementById('password2').value
	
	if(email.includes("@") && password==password2){
		firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode);
        });
		
		alert("Account successfully created! You can now log in!")
		//window.location.href = "./login.html"
	}
	
	else{
		alert("Incorrect email address or password entered.");
	}

}
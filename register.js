function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
				}
				}
				return "";
				}
				

function register()
{
    let email = document.getElementById('email1').value
    let password = document.getElementById('password1').value
	let password2 = document.getElementById('password2').value
	
	if(email.includes("@") && password==password2){
		firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
			var user = userCredential.user;
            document.cookie = "accessToken=" + user.za;
                document.cookie = "uid=" + user.uid;
                console.log("User object", user);
                alert("Account successfully created! Logging you in!");
                createUser();
                // ...
            })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode);
        });
		
	}
	
	else{
		alert("Incorrect email address or password entered.");
	}

}

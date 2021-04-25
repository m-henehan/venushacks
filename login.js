
function login()
{

let email = document.getElementById('email1').value
let password = document.getElementById('password1').value
	
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
	var user = userCredential.user;
            document.cookie = "accessToken=" + user.za;
            document.cookie = "uid=" + user.uid;
            console.log("User object", user);
            window.location.href = "./profile-page.html";
	
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
	console.log(errorCode, errorMessage);
	alert("Incorrect login details! Try again");
  });
}

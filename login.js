
function login()
{

let email = document.getElementById('email1').value
let password = document.getElementById('password1').value
	
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
	alert("now logged in!");
	
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
	console.log(errorCode, errorMessage);
	alert("Incorrect login details! Try again");
  });
}
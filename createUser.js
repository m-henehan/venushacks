function createUser(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://us-central1-accountability-buddy1.cloudfunctions.net/createUser', true);

    xhr.setRequestHeader("Content-type", "application/json");
    //Track the state changes of the request
    xhr.onreadystatechange = function()
    {
        let DONE = 4; //readyState 4 means the request is done
        let OK = 200; // status 200 is a successful return
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let docId = JSON.parse(xhr.responseText);
                document.cookie = "docid =" + docId;
                window.location.href = "./profile-page.html";
            } else {
                console.log('Error: ' + xhr.status);
            }
        }
    };
    // alert("details:  email: "+ email + "password: "+ password+ "uid: "+  uid);
    xhr.send(JSON.stringify({"firstName":document.getElementById("first").value, "lastName":document.getElementById("last").value, "email":document.getElementById("email1").value,
	"language":document.getElementById("language").value, "timezone":document.getElementById("time-zone").value,
	"why":document.getElementById("why").value, "bio":document.getElementById("bio").value, "uid" : getCookie('uid')}));
}

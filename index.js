const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors')({origin: "*"});
admin.initializeApp();


exports.createUser = functions.https.onRequest((request, response) =>
{
    cors(request, response, () => {
        //const currentTime = admin.firestore.Timestamp.now();
        //request.body.timestamp = currentTime;

        return admin.firestore().collection("users").add(request.body).then((snapshot) =>{
            console.log("saved in database");
            console.log(snapshot.id);
            // console.log(snapshot.DocumentReference.toString());
            // console.log("sending document reference id: ");
            //console.log(DocumentReference[id]);
            response.send(JSON.stringify(snapshot.id));
        });
    });
});

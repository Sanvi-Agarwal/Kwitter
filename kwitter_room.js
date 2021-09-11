// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7EM5zWdSo2qm-aikwiwEgy90Wg8wGitY",
    authDomain: "kwitter-d705f.firebaseapp.com",
    databaseURL: "https://kwitter-d705f-default-rtdb.firebaseio.com",
    projectId: "kwitter-d705f",
    storageBucket: "kwitter-d705f.appspot.com",
    messagingSenderId: "271703115762",
    appId: "1:271703115762:web:aed2490c8dea1609848d6b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();

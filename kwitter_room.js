var firebaseConfig = {
      apiKey: "AIzaSyDMz63iwpBPARxKD8U-Y-cqKm7nVqDNKQE",
      authDomain: "kwitter-174a9.firebaseapp.com",
      databaseURL: "https://kwitter-174a9-default-rtdb.firebaseio.com",
      projectId: "kwitter-174a9",
      storageBucket: "kwitter-174a9.appspot.com",
      messagingSenderId: "644735964974",
      appId: "1:644735964974:web:4175c44bcadc87cb42ccbf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name;

    function addRoom()
    {
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name "
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html" ;
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr> " ;
   document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name );
      window.location= "kwitter_page.html";
}

function logout()  {
      localStorage.removeItem("user_name") ;
      localStorage.removeitem("room_name") ;
      window.location = "index.html";
      
}
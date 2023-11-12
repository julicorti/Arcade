// setting up firebase with our website

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAW-nRcnDT5JIxRnha2LEIULq2odDi0_L4",
    projectId: "login-d5c06",
    storageBucket: "login-d5c06.appspot.com",
    messagingSenderId: "983576699770",
    appId: "1:983576699770:web:821e830b4f4b6ef4d96cc3"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    /* console.log(email, password, user) */
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
           
            // Signed in 
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Te registraste con exito',
                showConfirmButton: false,
                timer: 1500
              })
             
             
              /* window.location.href = "/page/juegos.html";  */
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error!',
                
              })
            // ..
        });
        
    }

    // Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("user").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
           
            
                console.log("No existe ese nombre")
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
            document.write("You are Signed In")
            console.log(result)
            window.location.href = "/page/juegos.html"; 
           
        })
   
        .catch((error) => {
            
          
            console.log(error.code);
            console.log(error.message)
        
        });
}
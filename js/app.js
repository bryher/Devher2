
// clic botón enviar datos
function registrar() {
 var email = document.getElementById('email').value;
 var name = document.getElementById('first_name').value;
 var apellido = document.getElementById('last_name').value;
 var password = document.getElementById('password').value;

 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
}

function ingreso() {
  var emailI = document.getElementById('emailI').value;
  var passwordI = document.getElementById('passwordI').value;

  firebase.auth().signInWithEmailAndPassword(emailI, passwordI).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
}


// Observador del usuario
function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('activo');
    activo();
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    console.log('no activo')
  }
});
}
observador();

function activo() {
  window.open("https://devher.space/", "_self")
}

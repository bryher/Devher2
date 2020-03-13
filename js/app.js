function registrar() {
  var name = document.getElementById('first_name').value;
  var apellido = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('password').value;


  firebase.auth().createUserWithEmailAndPassword(name, apellido, email, contrasena).cath(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

const btnToggle = document.querySelector('#menico');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('menu').classList.toggle('active');
  document.getElementById('menico').classList.toggle('active1');
  console.log(document.getElementById('menu'))
});

const socialToggle = document.querySelector('#menu-share');

socialToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('social-toggle').classList.toggle('active3');
  console.log(document.getElementById('social-toggle'))
});

const sunclic = document.querySelector('.sun');

sunclic.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('low').classList.toggle('brillo');
  console.log(document.getElementById('low'))
});


// verificador de usuario

// Observador del usuario
function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('activo')
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
    abrirEnPestana(url)
  }
});
}

// funcion para que se habra nueva ventana al dar click en icono de inicio de secion

function abrirEnPestana(url) {
  var a = document.createElement("a");
  a.href = url;
  a.click();
}

var url="./login-sign/";

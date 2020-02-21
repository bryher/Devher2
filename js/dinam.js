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
  document.getElementById('low2').classList.toggle('brillo');
  document.getElementById('low3').classList.toggle('brillo');
  document.getElementById('low4').classList.toggle('brillo');
  document.getElementById('low5').classList.toggle('brillo');
  document.getElementById('low6').classList.toggle('brillo');
  document.getElementById('low7').classList.toggle('brillo');
  document.getElementById('low8').classList.toggle('brillo');
  document.getElementById('low9').classList.toggle('brillo');
  document.getElementById('low10').classList.toggle('brillo');
  document.getElementById('low11').classList.toggle('brillo');
  document.getElementById('low12').classList.toggle('brillo');
  document.getElementById('low13').classList.toggle('brillo');
  document.getElementById('low14').classList.toggle('brillo');
  document.getElementById('low15').classList.toggle('brillo');
  document.getElementById('low16').classList.toggle('brillo');
  document.getElementById('low17').classList.toggle('brillo');
  document.getElementById('low18').classList.toggle('brillo');
  document.getElementById('low19').classList.toggle('brillo');
  document.getElementById('low20').classList.toggle('brillo');
  document.getElementById('low21').classList.toggle('brillo');
  console.log(document.getElementById('low'))
});

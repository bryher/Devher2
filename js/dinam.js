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

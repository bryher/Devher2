const btnToggle = document.querySelector('#menico');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('menu').classList.toggle('active');
  document.getElementById('menico').classList.toggle('active1');
  console.log(document.getElementById('menu'))
});

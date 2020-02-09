const btnToggle = document.querySelector('.icon-menu');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('menu').classList.toggle('active');
  console.log(document.getElementById('menu'))
});

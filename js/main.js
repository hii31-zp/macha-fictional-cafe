// main.js
const ham = document.getElementById('js-hamburger');
const side = document.querySelector('.side');

ham.addEventListener('click', function () {
  side.classList.toggle('is-open'); // is-open クラスを付け外し
});
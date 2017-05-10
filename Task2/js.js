console.log(document.documentElement.offsetHeight);
console.log(document.getElementsByClassName('box')[0].offsetHeight); //getElementsByClassName дает массив
console.log(document.querySelector('.box').offsetHeight); //обязательно добавляем точку перед классом
// console.log(document.documentElement.clientHeight);

// Задача 1.
// var x = document.documentElement.offsetHeight;
// var y = document.querySelector('.box').offsetHeight;
// var z = (x-y)/2;
// console.log(z);
// document.querySelector('.box').style.paddingTop = z + 'px';

// Задача 2.
f();
function f(event) {
  var x = document.documentElement.offsetHeight;
  var y = document.querySelector('.box').offsetHeight;
  var z = (x-y)/2;
  console.log(z);
  document.querySelector('.box').style.paddingTop = z + 'px';
}
window.onresize = f;

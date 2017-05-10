var main = document.querySelector('.main');
console.log(main);
main.onmousemove = function(event) {
  console.log(event);
  var two = document.querySelector('.two');
  if (event.offsetX >= 0) {
    two.style.width = event.offsetX + 'px';
  }
}

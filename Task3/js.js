// document.querySelector('#test').onmousewheel = function (event) {
//   console.log(event);
//   return false;
// }

// Задание 1. Создайте блок. Сделайте так, чтобы при прокрутке колеса мыши над ним, блок менял цвет.
document.querySelector('#test').onmousewheel = function (event) {
  var element = document.getElementById('test');
  var myColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16); //рандомный цвет
  element.style.backgroundColor = myColor;
}
// Задание 2. Создайте изображение. Добавьте возможность масштабирования изображения при прокрутке колеса мыши.
var scale = document.getElementById('image');
var x;
var y;
document.querySelector('#image').onmousewheel = function (event) {
  console.log(event.deltaY);
  if (event.deltaY>0) {
    x = document.querySelector('#image').offsetWidth*1.05;
    y = document.querySelector('#image').offsetHeight*1.05;
  } else {
    x = document.querySelector('#image').offsetWidth*0.95;
    y = document.querySelector('#image').offsetHeight*0.95;
  };
  console.log(x,y);
  document.querySelector('#image').style.width = x + 'px';
  document.querySelector('#image').style.height = y + 'px';
}
// Задание 3. Создайте вертикальный слайдер, в котором элементы прокручиваются с помощью колеса мыши. Учтите граничные условия.
var v = 0;
document.querySelector('#service_box').onmousewheel = function (event) {
  console.log(event.deltaY);
  if (event.deltaY>0) {
    document.querySelector('#service_box').style.top = -v +'px';
    v=v+10;
  } else {
    document.querySelector('#service_box').style.top = -v +'px';
    v=v-10;
  };
}
// Задание 4. Создайте блок и разместите в нем изображения одинакового размера. При прокрутке колеса мыши над блоком «активируйте» по очереди изображения по кругу. Т.е. при прокрутке колеса вокруг первого элемента возникает граница. При дальнейшей прокрутке у первого блока граница исчезает и появляется у второго блока.
var myImage = document.getElementsByClassName('round_image');
var count  = 0;
document.querySelector('#round_box').onmousewheel = function (event) {
  for (i=0; i<myImage.length; i++) {
    myImage[i].style.border = '3px solid red';
  }
  myImage[count].style.border = '3px solid green';
  if ((count+1) < myImage.length) {
    count++;
  } else {
    count = 0;
  }
}

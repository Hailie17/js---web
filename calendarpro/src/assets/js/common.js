import FastClick from "./fastclick";
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

window.addEventListener('load', function () {
  console.log('fastclick', FastClick.attach);
  
  FastClick.attach(document.body);
}, false);

// 222
document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, false);
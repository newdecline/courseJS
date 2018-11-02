let itemMenu = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let newMenuItem = document.createElement('li');
let title = document.querySelector('#title');
let input = document.querySelector('#prompt');
let adv = document.querySelector('.adv');

menu.insertBefore(itemMenu[2], itemMenu[1]);

newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let answer = prompt('Ваше отношение к технике apple?', '');
input.textContent = answer;

console.log(title);
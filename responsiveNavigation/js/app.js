let menu = document.querySelector('.menu');
let links = document.querySelector('.links');


menu.addEventListener('click',()=>{
  menu.classList.contains('open') ? menu.classList.remove('open'): menu.classList.add('open');

  links.classList.contains('open') ? links.classList.remove('open'): links.classList.add('open');
})

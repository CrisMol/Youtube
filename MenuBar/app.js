let menu = document.querySelector('.menu');
menu.addEventListener('click',()=>{
  menu.classList.contains('open') ? menu.classList.remove('open') : menu.classList.add('open');
})

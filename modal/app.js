const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const show_modal = document.querySelector('#show_modal')
const hide_modal = document.querySelector('#hide_modal')


show_modal.addEventListener('click', toggleModal);
hide_modal.addEventListener('click', toggleModal);

function toggleModal(){
  modal.classList.contains('hide') ? modal.classList.remove('hide') : modal.classList.add('hide')

  overlay.classList.contains('hide') ? overlay.classList.remove('hide') : overlay.classList.add('hide')
}

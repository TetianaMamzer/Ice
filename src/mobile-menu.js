(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeList: document.querySelector('.modal-menu__group'),
    menu: document.querySelector('[data-menu]'),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeList.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();



const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('[data-modal]')
const closeModalBtn = document.querySelector('.modal__close')

modalTrigger.addEventListener('click', openModal)

function openModal() {
  modal.classList.add('show')
  modal.classList.remove('hide')
  document.body.style.overflow = 'hidden'

  clearInterval(modalTimeout)
}

function closeModal() {
  modal.classList.add('hide')
  modal.classList.remove('show')
  document.body.style.overflow = ''
}

closeModalBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal()
  }
})

document.body.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace') {
    closeModal()
  }
});

function openModalScroll() {
  const page = document.documentElement

  if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
    openModal()

    window.removeEventListener('scroll', openModalScroll)
  }
};

window.addEventListener('scroll', openModalScroll)
Footer

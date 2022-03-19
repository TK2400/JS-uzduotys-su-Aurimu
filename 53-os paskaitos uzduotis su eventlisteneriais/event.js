const body = document.querySelector('body')
const overlay = document.querySelector('.popup-overlay')
const popup = document.querySelector('.popup')

body.addEventListener('mouseleave', abort)

function abort() {
    overlay.style.display = 'block'
    body.removeEventListener('mouseleave', abort)
}

popup.addEventListener('click', event => {
    event.stopPropagation()
})

overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
})
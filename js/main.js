const gate = document.querySelector('.gate')
const menu = document.querySelector('.menu')

gate.addEventListener('click', () => {

    gate.classList.toggle('gyre')
    menu.classList.toggle('look')
})

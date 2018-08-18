let a = document.querySelector('.toggle-sign-up-pane')
let b = document.querySelector('.toggle-sign-in-pane')
let d = document.querySelector('.sign-in-container')
let c = document.querySelector('.sign-up-container')
a.addEventListener('click', (e) => {
    a.classList.add('button-is-active')
    b.classList.remove('button-is-active')
    if (c.classList.contains('hide')) {
        c.classList.toggle('hide')
        d.classList.toggle('hide')
    }

})

b.addEventListener('click', (e) => {
    b.classList.add('button-is-active')
    a.classList.remove('button-is-active')
    if (d.classList.contains('hide')) {
        c.classList.toggle('hide')
        d.classList.toggle('hide')
    }
})
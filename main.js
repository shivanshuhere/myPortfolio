import './style.css'

// scroll animation 
const hiddenSections = document.querySelectorAll('.hidden');

const scrollObserve = new IntersectionObserver ((ele) => {
    ele.forEach( e=> {
        if (e.isIntersecting) {
            e.target.classList.add('show')
        }
        else {
            e.target.classList.remove('show')
        }
    })
})

hiddenSections.forEach(ele => scrollObserve.observe(ele))


// transparent nav when scroll 
// const navBar = document.querySelector('.nav')

// function scrollFxn () {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTo > 20 ) {
//         navBar.classList.add('nav__trans')
//     }
//     else {
//         navBar.classList.remove('nav__trans')
//     }
// }

// window.onscroll = function () {scrollFxn ()}
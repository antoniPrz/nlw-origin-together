

// ============MENU HAMBURGUESA=============

// Funcionalidad mostrar y ocultar menu de hambueguesa al hacer click
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', menuClick)
}
function menuClick() {
  nav.classList.toggle('show')
}

// Funcionalidad ir a la seccion selecionada mediante  click y ocular menu
const menuList = document.querySelectorAll(' .menu ul li a')

for (const element of menuList) {
  element.addEventListener('click', irAseccion)
}

function irAseccion() {
  nav.classList.remove('show')
}
// ======================================================================



// SCROLL SHADOW EFFECT
const header = document.querySelector('#header')
const headeHeight = header.scrollHeight

window.addEventListener('scroll',
  () => {
    (window.scrollY >= headeHeight)
      ?
      header.classList.add('scroll')
      :
      header.classList.remove('scroll')
  }
)
// ======================================================================



// BACK TO THE TOP 
const backToTop = document.querySelector(".back-to-top")
window.addEventListener("scroll", () => {
  if (window.scrollY >= 560) {
    backToTop.classList.add('show')

  } else {
    backToTop.classList.remove('show')
  }
})
// ======================================================================



// SWIPER pagination , slides, carrusell 
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
// ======================================================================

// SCROLL REVEAL
// efecto mostrar elementos cuando se hace scroll en la pagina  Scrollreveal.org
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image , #home .text ,
  #about .image, #about .text,
  #services header , #services .card,
  #testimonials header , #testimonials .testimonials ,
  #contact .text , #contact .links ,
  footer .brand , footer .social
  `
  , { interval: 100 })
// ======================================================================


//  ACTIVATE MENU CURRENT SECTION

const sections = document.querySelectorAll('main section[id]')



window.addEventListener('scroll', () => {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight


    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')

    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')

    }
  }
})
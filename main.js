


const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
// console.log(toggle)

for (const element of toggle) {
  element.addEventListener('click', menuClick)

}

function menuClick() {
  nav.classList.toggle('show')
}


const menuList = document.querySelectorAll(' .menu ul li a')

for (const element of menuList) {
  element.addEventListener('click', irAseccion)
}


function irAseccion() {
  nav.classList.remove('show')
}



// scroll shadow efect

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


// window.addEventListener('scroll', function () {
//   if (window.scrollY >= headeHeight) {
//     header.classList.add('scroll')
//   } else {
//     header.classList.remove('scroll')
//   }
// })






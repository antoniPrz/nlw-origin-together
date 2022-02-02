


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
console.log(menuList)

function irAseccion() {
  nav.classList.remove('show')
}


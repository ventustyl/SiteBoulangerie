

const navSlide = function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')


  // Changement d'état
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  }
  )
}

navSlide();



const darkMode = function () {

  const btn = document.querySelector('button')
  const body = document.querySelector('body')
  const titre = document.getElementsByTagName("h3");
  const lien = document.getElementsByTagName("a")
  btn.addEventListener("click", function () {
    body.classList.toggle("dark");
    for (let i = 0; i < titre.length; i++) {
      titre[i].classList.toggle('clair');
    }
    for (let i = 0; i < lien.length; i++ ) {
      lien[i].classList.toggle('dark');
    }
  }
  )
}
darkMode();
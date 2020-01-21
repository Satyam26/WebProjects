/* setting date */
document.getElementById('date').innerHTML = new Date().getFullYear();

/* toggle-navbar */
const nav_toggler = document.getElementById('nav-toggle');
const nav_links = document.getElementById('nav-links');

nav_toggler.addEventListener('click',() => {
  nav_links.classList.toggle('show-by-height');
});

/* navbar fixed */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',() => {
  if(window.pageYOffset > 62){
    navbar.classList.add('fixed');
  }
  else {
    navbar.classList.remove('fixed');
  }
});

/* scroll  */
const scroll_links = document.querySelectorAll('.scroll-link');
scroll_links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    nav_links.classList.remove('show-by-height');
    const id = event.target.getAttribute('href').slice(1);

    const element = document.getElementById(id);
    console.log(element);

    let position;

    if (navbar.classList.contains('fixed')){
      position = element.offsetTop - 62;
    } else {
      position = element.offsetTop - 124;
    }
    if (nav_links.classList.contains('show-by-height')) {
      if (navbar.classList.contains('fixed')) {
        position = element.offsetTop - 62 - 152;
      } else {
        position = element.offsetTop - 124 - 152;
      }
    }


    window.scrollTo({
      left: 0,
      top: position,
      behaviour: 'smooth'
    })

  })
})
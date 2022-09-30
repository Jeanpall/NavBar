/*== Funcionalidad Menu ==*/

const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('nav-close')

/* == Mostrar Menu ==*/

if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu') //* Header.scss*//
    })
}

/* == Ocultar Menu ==*/
/* Verifica si navClose Existe */
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}

/*== Funcionalidad Menu ==*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const main = document.getElementById('main')
    // Cuando demos Click en cada opcion del menu, quitaremos la clase 'show-menu'//
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*== Cambio al hacer SCROLL ==*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //Cuando el Desplazamiento es Mayor a 50//
    // Agregar la clase 'Scroll-header' a la etiqueta header//
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*== SCROLL Opciones Menu ==*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id'),
               sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
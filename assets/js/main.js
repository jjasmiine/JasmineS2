/*  ()  */

/*menu-display*/
const menuDisplay = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('menu-display')
        })
    }
}
menuDisplay('nav-toggle', 'nav-menu')




/*menu-hidden*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('menu-display')
}
navLink.forEach(nl => nl.addEventListener('click', linkAction))





/*link-scroll*/
const sections = document.querySelectorAll('section[id]')

function linkScroll() {
    const scrollY = window.pageYoffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('link-scroll')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('link-scroll')
        }
    })
}

window.addEventListener('scroll', linkScroll)




/*header-scroll - switches colors based on y axis px*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('header-scroll')
}

window.addEventListener('scroll', scrollHeader)





/*display scrolltop*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    if (this.scrollY >= 560) scrollTop.classList.add('display-scrolltop');

    else scrollTop.classList.remove('display-scrolltop')
}

window.addEventListener('scroll', scrollTop)


/*GSAP ANIMATION*/
gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 })
gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 })
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo-out', stagger: .2 })
gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo-out', stagger: .2 })
gsap.from('.nav__item', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo-out', stagger: .2 })
gsap.from('.home__social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo-out', stagger: .2 })
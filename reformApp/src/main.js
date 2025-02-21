/*===== MENU SHOW =====*/ 

const showMenu = (toggleId, navId) =>{

    const toggle = document.getElementById(toggleId),

    nav = document.getElementById(navId)

    if(toggle && nav){

        toggle.addEventListener('click', ()=>{

            nav.classList.toggle('show')

        })

    }

}

showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){

    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{

    const scrollDown = window.scrollY

  sections.forEach(current =>{

        const sectionHeight = current.offsetHeight,

              sectionTop = current.offsetTop - 58,

              sectionId = current.getAttribute('id'),

              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){

            sectionsClass.classList.add('active-link')

        }else{

            sectionsClass.classList.remove('active-link')

        }                                                    

    })

}

window.addEventListener('scroll', scrollActive)
// Alapértelmezett bezárás

/* Nyilak kezelés + dropdown Div */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skills__data").forEach(item => {
        item.addEventListener("click", function () {
            const description = this.querySelector(".skills__bar");
            const arrowIcon = this.querySelector(".skills__arrow");

            // Ha nyitva van, bezárjuk, ha zárva van, kinyitjuk
            const isOpen = description.style.display === "block";

            // Minden más panelt bezárunk
            document.querySelectorAll(".skills__bar").forEach(bar => bar.style.display = "none");
            document.querySelectorAll(".skills__arrow").forEach(icon => icon.style.transform = "rotate(180deg)");

            if (!isOpen) {
                description.style.display = "block"; // Megjelenítés
                arrowIcon.style.transform = "rotate(0deg)"; // Ikon forgatás
            }
        });
    });
document.querySelectorAll(".skills__bar").forEach(bar => bar.style.display = "none");
});

/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({

    origin: 'top',

    distance: '60px',

    duration: 2000,

    delay: 200,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 

sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 

sr.reveal('.home__social-icon',{ interval: 200}); 

sr.reveal('.skills__data, .showcase__img, .contact__input',{interval: 200}); 
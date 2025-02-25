if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/src/service-worker.js')
        .then(registration => {
            console.log('Service Worker regisztrálva:', registration);
        })
        .catch(error => {
            console.log('Service Worker regisztrálása nem sikerült:', error);
        });
    });
}

/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId),

        nav = document.getElementById(navId)

    if (toggle && nav) {

        toggle.addEventListener('click', () => {

            nav.classList.toggle('show')

        })

    }

}

showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {

    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {

    const scrollDown = window.scrollY

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 58,

            sectionId = current.getAttribute('id'),

            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')



        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {

            sectionsClass.classList.add('active-link')

        } else {

            sectionsClass.classList.remove('active-link')

        }

    })

}

window.addEventListener('scroll', scrollActive)

/* DropDown Menus(Divs) */
document.querySelectorAll(".skills__data").forEach(item => {
    item.addEventListener("click", function() {
        let description = this.querySelector(".skills__description");
        let allDescriptions = document.querySelectorAll(".skills__description");
        let arrow = this.querySelector(".skills__arrow");

        allDescriptions.forEach(desc => {
            if (desc !== description) {
                desc.classList.remove("active");
                let arrowToReset = desc.closest(".skills__data").querySelector(".skills__arrow");
                if (arrowToReset) {
                    arrowToReset.style.transform = "rotate(0deg)";
                }
            }
        });
        
        description.classList.toggle("active");

        if (description.classList.contains("active")) {
            arrow.style.transform = "rotate(180deg)"; 
        } else {
            arrow.style.transform = "rotate(0deg)";
        }
    });
});


/*----------*/

/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({

    origin: 'top',

    distance: '60px',

    duration: 2000,

    delay: 200,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});

sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });

sr.reveal('.home__social-icon', { interval: 200 });

sr.reveal('.skills__data, .showcase__img, .contact__input', { interval: 200 }); 
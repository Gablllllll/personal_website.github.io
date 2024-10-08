/* MENU SHOW 3 line bar that shows and hide */ 
/*bx menu*/
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

/* REMOVE MENU MOBILE  */
/* hides the menu bar */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
/*loops the live action that hides the menu*/
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
/*select all HTML elements in the document that have the class nav__link*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

/* scrolled starting from top = pageoffset*/
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        /*If the scroll position is within this range, it adds the class active, responsive */
        /*active responsiveness when active */
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            /*base on id */
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
/* clear value on submit */
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values of name, email, and message
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform any validation here if needed

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Show the success message
    alert("Your message has been sent successfully!");
});
/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 100})
sr.reveal('.home__img', {origin:'right', delay: 100})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 100})
sr.reveal('.about__subtitle', {delay: 100})
sr.reveal('.about__profession', {delay: 100})
sr.reveal('.about__text', {delay: 100})
sr.reveal('.about__social-icon', {delay: 100, interval: 100})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 100})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 100})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 100})
sr.reveal('.contact__input', {delay: 100})
sr.reveal('.contact__button', {delay: 100})





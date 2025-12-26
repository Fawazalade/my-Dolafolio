/*=============== HOME SPLIT TEXT ===============*/
const { animate, stagger } = anime;

// Function to split text into characters
function splitText(selector, options = {}) {
  const element = document.querySelector(`.${selector}`);
  if (!element) return { chars: [] };

  const text = element.textContent;
  const chars = text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    return span;
  });

  element.innerHTML = '';
  chars.forEach(char => element.appendChild(char));

  return { chars };
}

const { chars: chars1 } = splitText('home__profession-1', { chars: true });
const { chars: chars2 } = splitText('home__profession-2', { chars: true });

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }, 

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab)=>{
  tab.addEventListener('click', () =>{
    const targetSelector= tab.dataset.target,
          targetContent = document.querySelector(targetSelector)

      //Disable all content and active tabs
      tabContents.forEach((content) => content.classList.remove('work__active'))
      tabs.forEach((t) => t.classList.remove('work__active'))

      //Active the tab and corresponding content
      tab.classList.add('work__active')
      targetContent.classList.add('work__active')

  })
})
/*=============== SERVICES ACCORDION ===============*/


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn');
       copyEmail = document.getElementById('contact-email').textContent;

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyEmail).then(() =>{
    copyBtn.textContent = 'Copied!';

    setTimeout(() => {
      copyBtn.textContent = 'Copy Email';
    }, 2000);
  })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear = document.getElementById('footer-year');
      const currentYear = new Date().getFullYear();

      // Set the current year in the footer each year
       textYear.textContent = currentYear;

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
  //we get the position by scrolling down 
  const scrollY = window.scrollY;

  sections.forEach(section =>{
    const id = section.id,  //id of each section
          top = section.offsetTop - 50,  //Distance from top edge
          height = section.offsetHeight, //Element height
          link = document.querySelector('.nav__menu a[href*=' + id + ']'); //id nav link
    
    if(!link) return; //If link is not found, exit the function

    link.classList.toggle('active-link', scrollY > top && scrollY <= top + height); 

})
}
window.addEventListener('scroll', scrollActive)
/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0 // store mouse position

const cursorMove = () => {
  //position the cursor
  cursor.style.left = mouseX + 'px'
  cursor.style.top = mouseY + 'px'
  cursor.style.transform = 'translate(-50%, -50%)'

  //update cursor animation
  requestAnimationFrame(cursorMove)
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY 
})

cursorMove() 

/* Hide custom cursor on links */
const a = document.querySelectorAll('a')

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hide-cursor')
  }) 

  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor')
  })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true //Animations repeat
})

sr.reveal(`.home__image, .projects__container, .work__container, .footer__container`)
sr.reveal(`.home__data`, {delay: 900, origin: 'bottom'})
sr.reveal(`.home__info`, {delay: 1200, origin: 'bottom'})
sr.reveal(`.home__social, .home_cv`, {delay: 1500})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__image`, {origin: 'right'})
sr.reveal(`.services__card`, {interval: 100})
// JS MENU FIXO COM TROCA DE BACKGROUND

window.addEventListener('scroll', function(){
		const header = document.querySelector('header');
		header.classList.toggle("fixedMenuTop" , window.scrollY > 100);    
	});

	function ToggleMenu(){
		const menuToggle = document.querySelector('.menuToggle');
		const navigation = document.querySelector('.navigation');
		menuToggle.classList.toggle('active');
		navigation.classList.toggle('active');
	}






// JS MENU NAVBAR RESPONSIVO

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
   
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    
   
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent(); 
    }
    return this;
   
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();





  
// JS IMAGES ANIMATES

function debounce(func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 3;
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    // } else {
    //   element.classList.remove(animationClass); (****se add essa linha, a animação também será inversa. Entra ao descer e sai quando passa a imagem)
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}



// INICIO JS MODAL

const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.boxPortfolio');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const closeBtn = document.getElementById('close-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})


zoomBtn.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    })
})

function currentImageDisplay(position){
    imageBox.style.background = `url(images/img${currentImageIdx}.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function(){
    currentImageIdx--;
    if(currentImageIdx === 0){
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function(){
    currentImageIdx++;
    if(currentImageIdx === 5){
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
})

closeBtn.addEventListener('click', function(){
    imageView.style.display = "none";
    imageBox.style.display = "none";
});




// INICIO JS MODAL Position Images

var counter = 1;
    setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
      if(currentImageIdx === 6){
        currentImageIdx = 1;
    }
}, 5000);
let mySwiper;
const breakpoint = window.matchMedia( '(min-width:768px)' );
const breakpointChecker = function() {
  if ( breakpoint.matches === true ) {
     if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
     return;
  } else if ( breakpoint.matches === false ) {
     return enableSwiper();
  }
};
const enableSwiper = function() {
  mySwiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
          delay: 2000,
          disableOnInteraction: true,
      },
    });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();

let expantButton = document.querySelector('.s-expand-button')
let expand = document.querySelector('.s-nav--minimalize')

expantButton.onclick = function() {
  expand.classList.toggle('s-nav--expanded');
};
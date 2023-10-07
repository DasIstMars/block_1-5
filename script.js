const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 500,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
  });
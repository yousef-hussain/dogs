/* ############################# start header ############################# */
const header = document.querySelector("header")
const searchBox = document.querySelector(".search-content");
const searchInput = document.querySelector(".search-input");


window.addEventListener('scroll', () => {
  if ( window.scrollY > 50) {
    header.classList.add("active");
  } else {
    
    header.classList.remove("active");
  }
});

searchBox.addEventListener("click", () => {
  searchInput.focus()
})

/* ############################# end header ############################# */
/* ############################# start main ############################# */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 1500,
  // lazy: {
  //   enabled: true,
  // },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/* ############################# end main ############################# */













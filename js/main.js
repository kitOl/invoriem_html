$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // nav: true,
    loop: true,
    dots: false,
    autoWidth: true,
    responsive: {
      0: {
        margin: 30,
      },
      1001: {
        margin: 48,
      },
    },
  });
});

const closeMobileNav = document.querySelector(".mobile-nav__btn");
const openMobileNav = document.querySelector("#openMobileNav");
const MobileNav = document.querySelector(".mobile-nav");

closeMobileNav.onclick = function () {
  MobileNav.classList.add("none");
  document.body.classList.toggle("no-scroll");
};
openMobileNav.onclick = function () {
  MobileNav.classList.remove("none");
  document.body.classList.toggle("no-scroll");
};

const videoBtn = document.querySelector("#btn-video");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");
videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoPicture.classList.add("hidden");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");

    video.play();
  } else {
    video.pause();
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
  }
});

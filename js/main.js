$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    // nav: true,
    margin: 48,
  });
});

const videoBtn = document.querySelector("#btn-video");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoPicture.classList.add("none");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");

    video.play();
  } else {
    video.pause();
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
  }
});

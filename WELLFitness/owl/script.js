$(document).ready(function () {
  $(".car1").owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    stagePadding: 100,
  });
});

$(document).ready(function () {
  $("#car2").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<img src='img/banner/arrow.svg'>",
      "<img src='img/banner/arrow2.svg'>",
    ],
  });
});

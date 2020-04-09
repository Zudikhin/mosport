$(document).ready(function () {
  "use strict";
  $(".header__mobile__btn").click(function () {
    $(this).toggleClass("active");

    $(".header__mobile__nav").toggleClass("active");

    if ($(".header__mobile__nav").hasClass("active")) {
      $(".modal").css("display", "block");
      $("body").css("overflow", "hidden");
    } else {
      $(".modal").css("display", "none");
      $("body").css("overflow", "auto");
    }
  });

  var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });

  // $(".slick_slider").slick({
  //   dots: false,
  //   vertical: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   verticalSwiping: true,
  //   infinite: false,
  //   prevArrow: false,
  //   nextArrow: false,
  // });

  // function mouseWheel(slider) {
  //   $(".slick_slider".on('wheel', { slider: slider }, mouseWheelHandler)
  // }
  // function mouseWheelHandler(event) {
  //   event.preventDefault()
  //   const $slider = event.data.$slider
  //   const delta = event.originalEvent.deltaY
  //   if(delta > 0) {
  //     $slider.slick('slickPrev')
  //   }
  //   else {
  //     $slider.slick('slickNext')
  //   }
  // }

  // $(".friends__content").scroll(function (event) {

  //   console.log($(this).scrollTop());
  // });

  // var lastScrollTop = 0;
  // $(".friends__content").scroll(function (event) {
  //   var st = $(this).scrollTop();
  //   if (st > lastScrollTop) {
  //     $(this)
  //       .children()
  //       .each(function (index, element) {
  //         console.log(element);
  //       });
  //   } else {
  //     console.log("scroll vverh");
  //   }
  //   lastScrollTop = st;
  // });

  // $(".friends__content").scroll(function () {
  //   var clientHeight = $(this)[0].scrollHeight;
  //   var scrollTop = $(this)[0].scrollTop;
  //   var scrolled = (scrollTop / clientHeight) * 100;
  //   $("#myBar").css("width", scrolled + "%");
  // });

  $(".modal").click(function () {
    $(this).css("display", "none");
    $(".header__mobile__nav").removeClass("active");
    $(".header__mobile__btn").removeClass("active");
    $("body").css("overflow", "auto");
  });

  $(".news__slider").slick({
    prevArrow: $(".news__slider-prev"),
    nextArrow: $(".news__slider-next"),
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          variableWidth: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });

  $(".about__slider").slick({
    prevArrow: $(".about__slider-prev"),
    nextArrow: $(".about__slider-next"),
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          variableWidth: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });
});

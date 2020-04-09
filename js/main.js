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
    mousewheel: true,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  swiper.on("slideChange", function () {
    var dropProgress = $(this)[0].progress;
    var progress = dropProgress * 100;
    if (progress < 10) {
      $(".progress").css("width", 10 + "%");
    } else if (progress > 89) {
      $(".progress").css("width", 100 + "%");
    } else {
      $(".progress").css("width", progress + "%");
    }
  });

  // direction: 'horizontal',
  // 	loop: false,
  // 	slidesPerView:'auto',
  // 	spaceBetween: 0,
  // 	freeMode: true,
  // 	freeModeSticky: true,
  // 	freeModeMomentum: true,
  // 	mousewheel: {
  //     releaseOnEdges: true
  // 	},
  // 	grabCursor: true,
  // 	keyboard: {
  // 	  enabled: true,
  // 	},
  //   })

  // var lastScrollTop = 0;
  // $(".swiper-container").scroll(function (event) {
  //   var st = $(this).scrollTop();
  //   if (st > lastScrollTop) {
  //     $(".swiper-button-prev").click();
  //   } else {
  //     $(".swiper-button-next").click();
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

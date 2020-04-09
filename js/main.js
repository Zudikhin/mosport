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
    if (progress < 20) {
      $(".bar").css("width", 20 + "%");
      $("#friends_ship").css("left", 10 + "%");
    } else if (progress > 89) {
      $(".bar").css("width", 100 + "%");
      $("#friends_ship").css("left", 90 + "%");
    } else {
      $(".bar").css("width", progress + "%");
      $("#friends_ship").css("left", progress - 10 + "%");
    }
  });

  $(".main__item").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background: "url(" + $(this).data("bg") + ")",
        "background-position": "50% 0%",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      });
    }
  });

  $(".main__slider").slick({
    infinite: true,
    autoplay: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    dots: true,
    customPaging: function (slider, i) {
      return '<a class="dot"></a>';
    },
  });

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

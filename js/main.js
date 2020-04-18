$(document).ready(function () {
  "use strict";
  $(".header__mobile__btn").click(function () {
    $(this).toggleClass("active");

    $(".header__mobile__nav").toggleClass("active");

    if ($(".header__mobile__nav").hasClass("active")) {
      $(".header__fake-modal").css("display", "block");
      $("body").css("overflow", "hidden");
    } else {
      $(".header__fake-modal").css("display", "none");
      $("body").css("overflow", "auto");
    }
  });

  // $(".drop_item-mob").click(function () {
  //   $(this).toggleClass("active");
  //   $(".drop_downmenu-mob").toggleClass("active");
  // });

  $(".dropdown_item-desk").hover(function () {
    $(this).toggleClass("active");
    $(".drop_downmenu-desk").toggleClass("active");
  });

  $("body").click(function (e) {
    var div = $(".header__mobile__nav ul");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".drop_downmenu-mob").removeClass("active");
      $(".drop_item-mob").removeClass("active");
    }
  });

  $("body").click(function (e) {
    var dropDesk = $(".header__desktop");
    if (!dropDesk.is(e.target) && dropDesk.has(e.target).length === 0) {
      $(".drop_downmenu-desk").removeClass("active");
      $(".dropdown_item-desk").removeClass("active");
    }
  });

  var swiper = new Swiper(".swiper-friends", {
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

  $(".reviews__for_content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".reviews__nav",
  });
  $(".reviews__nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".reviews__for_content",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  $(".review__btn-next").click(function () {
    $(".reviews__for_content").slick("slickNext");
  });

  $(".review__btn-prev").click(function () {
    $(".reviews__for_content").slick("slickPrev");
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
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    dots: true,
    customPaging: function (slider, i) {
      return '<a class="dot"></a>';
    },
  });

  $(".header__fake-modal").click(function () {
    $(this).css("display", "none");
    $(".header__mobile__nav").removeClass("active");
    $(".header__mobile__btn").removeClass("active");
    $("body").css("overflow", "auto");
  });

  $(".news__slider").slick({
    prevArrow: $(".news__slider-prev"),
    nextArrow: $(".news__slider-next"),
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
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
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
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

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    customPaging: function (slider, i) {
      return '<a class="dot"></a>';
    },
  });

  var swiperDesk = [];

  $(".swiper-dynasty-desk").each(function (index) {
    var mySwiperDesk = new Swiper($(this)[0], {
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
    swiperDesk.push(mySwiperDesk);
  });

  $.each(swiperDesk, function (index, value) {
    value.on("slideChange", function () {
      var dropProgress = $(this)[0].progress;
      var progress = dropProgress * 100;
      if (progress < 20) {
        $(".bar-dynasty-desk").css("width", 20 + "%");
        $(".ship-dynasty-desk").css("left", 10 + "%");
      } else if (progress > 89) {
        $(".bar-dynasty-desk").css("width", 100 + "%");
        $(".ship-dynasty-desk").css("left", 90 + "%");
      } else {
        $(".bar-dynasty-desk").css("width", progress + "%");
        $(".ship-dynasty-desk").css("left", progress - 10 + "%");
      }
    });
  });

  var SwiperModal = [];

  $(".swiper-dynasty-mobile").each(function (index) {
    var mySwiper = new Swiper($(this)[0], {
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
    SwiperModal.push(mySwiper);
  });

  $.each(SwiperModal, function (index, value) {
    value.on("slideChange", function () {
      var dropProgress = $(this)[0].progress;
      var progress = dropProgress * 100;
      if (progress < 20) {
        $(".bar-dynasty").css("width", 20 + "%");
        $(".ship-dynasty").css("left", 10 + "%");
      } else if (progress > 89) {
        $(".bar-dynasty").css("width", 100 + "%");
        $(".ship-dynasty").css("left", 90 + "%");
      } else {
        $(".bar-dynasty").css("width", progress + "%");
        $(".ship-dynasty").css("left", progress - 10 + "%");
      }
    });
  });

  $(".description").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background: "#00B7C6 url(" + $(this).data("bg") + ")",
        "background-position": "right bottom",
        "background-repeat": "no-repeat",
        "background-size": "75% 60%",
      });
    }
  });

  $(".modal-content").each(function () {
    if ($(window).width() <= 767) {
      if ($(this).attr("data-bg")) {
        $(this).css({
          background: "#00b7c6 url(" + $(this).data("bg") + ")",
          "background-position": "100px bottom",
          "background-repeat": "no-repeat",
          "background-size": "100% 50%",
        });
      }
    } else {
      if ($(this).attr("data-bg")) {
        $(this).css({
          background: "#00b7c6 url(" + $(this).data("bg") + ")",
          "background-position": "200px  400px",
          "background-repeat": "no-repeat",
          "background-size": "70% 50%",
        });
      }
    }
  });

  $(".modal").on("shown.bs.modal", function (e) {
    $.each(SwiperModal, function (index, value) {
      value.update();
    });
    $(".slider-for").slick("slickPrev");
    $(".slider-nav").slick("slickPrev");
  });

  setTimeout(function () {
    $(".name__family").first().trigger("click");
  }, 10);

  //$(".name__family")[2].trigger("click");

  $(".name__family").click(function () {
    $(".name__family").removeClass("active");
    $(this).addClass("active");
    var data = $(this).attr("data-target");
    $(".description").each(function (index, element) {
      if (data == element.id) {
        $(".description").css("display", "none");
        $(`#${element.id}`).css("display", "block");
        $.each(swiperDesk, function (index, value) {
          value.update();
          value.slideTo(1);
        });
        $(".slider-for").slick("slickPrev");
        $(".slider-nav").slick("slickPrev");
      }
    });
  });

  $("#theme-phone").mask("+7 (999)999-99-99");

  $(".news-details__cat-ship .item").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background:
          "linear-gradient(0deg, rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(" +
          $(this).data("bg") +
          ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%",
      });
    }
  });

  $(".media-news .item").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background:
          "linear-gradient(0deg, rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(" +
          $(this).data("bg") +
          ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%",
      });
    }
  });

  $(".other-news__content h4").each(function () {
    var defaultText = $(this)[0].innerHTML;
    if (defaultText.length > 40) {
      var shortText =
        $.trim(defaultText).substring(0, 30).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(shortText);
    }
  });

  $(".media__slider-gallery .content").slick({
    infinite: true,
    arrows: false,
  });

  $(".media__slider-btns .prev").click(function () {
    $(".media__slider-gallery .content").slick("slickPrev");
  });

  $(".media__slider-btns .next").click(function () {
    $(".media__slider-gallery .content").slick("slickNext");
  });

  $(".media__slider-gallery .content .item .img").on("click", function () {
    $(".imagepreview").attr("src", $(this).find("img").attr("src"));
    $("#imagemodal").modal("show");
  });

  $(".gallery__item").on("click", function () {
    $(".imagepreview").attr("src", $(this).find("img").attr("src"));
    $("#imagemodal").modal("show");
  });

  $(".other-video .item").click(function () {
    var link = $(this).children();
    $(".main__video").empty();
    link.clone().appendTo(".main__video");
    $(".main__video video").attr("controls", "controls");
    $(".main__video video")[0].play();

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".main__video").offset().top - $(window).height() / 2,
      },
      1000
    );
  });

  var $window = $(window);

  $window.scroll(function () {
    var $video = $(".main__video video");
    var $topOfVideo = $video.offset().top;
    var $bottomOfVideo = $video.offset().top + $video.outerHeight();

    var $topOfScreen = $window.scrollTop();
    var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
    if ($bottomOfScreen > $bottomOfVideo && $topOfScreen < $topOfVideo) {
      $video[0].play();
    } else {
      $video[0].pause();
    }
  });

  // $(".elements-gride").isotope({
  //   itemSelector: ".element-item",
  //   masonry: {
  //     // use outer width of grid-sizer for columnWidth
  //     columnWidth: 100,
  //     horizontalOrder: true,
  //   },
  // });

  // $(".centre__list-item").click(function (e) {
  //   e.preventDefault();
  //   $(".centre__list-item").removeClass("active");
  //   $(this).addClass("active");
  //   var id = $(this).attr("id");
  //   $(".centre__info .content").removeClass("active");
  //   $(".centre__info .content[data-target=" + id + "]").addClass("active");
  //   $(".about-main__content-title").removeClass("active");
  //   $(".about-main__content-title[data-target=" + id + "]").addClass("active");
  // });

  // $(".shift__list-item").click(function (e) {
  //   e.preventDefault();
  //   $(".shift__list-item").removeClass("active");
  //   $(this).addClass("active");
  //   var id = $(this).attr("id");
  //   $(".shift__info .content").removeClass("active");
  //   $(".shift__info .content[data-target=" + id + "]").addClass("active");
  // });
});

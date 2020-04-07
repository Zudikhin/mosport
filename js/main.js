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

  $(".modal").click(function () {
    $(this).css("display", "none");
    $(".header__mobile__nav").removeClass("active");
    $(".header__mobile__btn").removeClass("active");
    $("body").css("overflow", "auto");
  });
});

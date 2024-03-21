
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
//ドロワーメニュー
$("#MenuButton").click(function () {
  // $(".drawer-menu").toggleClass("is-show");
  // $(".drawer-menu").toggleClass("is-show");
  $(".js-drawer-open").toggleClass("open");
  $(".drawer-menu").toggleClass("open");
  $("html").toggleClass("is-fixed");

});

$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger").click(function () {
    $(this).toggleClass("is-active");
    $("html").toggleClass("is-fixed");
    $(".js-sp-nav").toggleClass("is-active");
  });
});


});

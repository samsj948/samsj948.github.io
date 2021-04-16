
(function($) {
  $(function() {
    $('.navigation').on('click', function() {
      $(this).toggleClass('nav-is-visible');
    });
    $('.navigation__link').on('click', function() {
      $('nav').removeClass('nav-is-visible');
    });
  });
})(jQuery)
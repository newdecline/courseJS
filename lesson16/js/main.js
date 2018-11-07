$(window).ready(function() {
  $('.modal').css('marginTop', '-50rem');
  $('a[href="#sheldure"], a[href="#tour"], .contact').on('click', function() {
    $('.overlay').fadeToggle();
    $('.modal').animate({
      'marginTop': '5rem',
      'opacity': 'show',
    }, 1000);
  });

  $('.close').on('click', function() {
    $('.overlay').fadeToggle();
    $('.modal').animate({
      'marginTop': '-50rem',
      'opacity': 'hide',
    }, 1000);
  });

});
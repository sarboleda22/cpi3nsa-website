$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('.navbar').removeClass("bg-transparent");
    $('.navbar').addClass("bg-white");
    $('.navbar').removeClass("navbar-dark");
    $('.navbar').addClass("navbar-light");
    // Add extra styles
    $('.navbar').addClass("navbar-custom");
    /* $('.navbar .navbar-brand img').attr('src','static/images/logo.png'); */
  }
  else {
    $('.navbar').removeClass("navbar-custom");
    $('.navbar').addClass("bg-transparent");
    $('.navbar').removeClass("bg-white");
    $('.navbar').addClass("navbar-dark");
    $('.navbar').removeClass("navbar-light");
    /* $('#desktop-logo').attr('src','static/images/logo-white.png'); */
  }
});

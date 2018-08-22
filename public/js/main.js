(function($) {
  "use strict"; // Start of use strict

  ///////////////////////////
  // Preloader
  $(window).on('load', function() {
    $("#preloader").delay(600).fadeOut();
  });

  ///////////////////////////

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 40)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //////////     For Mobile Swipe    ////////////
  var touchStartX = null;

  $('.carousel').each(function () {
    var $carousel = $(this);
    $(this).on('touchstart', function (event) {
        var e = event.originalEvent;
        if (e.touches.length == 1) {
            var touch = e.touches[0];
            touchStartX = touch.pageX;
        }
    }).on('touchmove', function (event) {
        var e = event.originalEvent;
        if (touchStartX != null) {
            var touchCurrentX = e.changedTouches[0].pageX;
            if ((touchCurrentX - touchStartX) > 60) {
                touchStartX = null;
                $carousel.carousel('prev');
            } else if ((touchStartX - touchCurrentX) > 60) {
                touchStartX = null;
                $carousel.carousel('next');
            }
        }
    }).on('touchend', function () {
        touchStartX = null;
    });
  });
  //////////     For Mobile Swipe    ////////////

  // hover link
  $(".arrow-link").hover(
    function () {
         $(this).find(".arrow-link-arrow").attr("src","/icon/arrows_right_double-yellow.svg");
    },
    function () {
        $(this).find(".arrow-link-arrow").attr("src","/icon/arrows_right_double-red.svg");
    }
  );

  // hover link

  // if ( $(window).width() >= 992 ) {
  //   var dropdownWidth = $('.nav-item-hover-dropdown').width();
  //   $(".nav-item-dropdown-content").css({"width":dropdownWidth+"px"});
  // }

  // homepage-news-link
  $(".homepage-news-link-block-edu").hover(
    function () {
         $(this).attr("src","/images/home/1-2 icon.png");
    },
    function () {
        $(this).attr("src","/images/home/1-1 icon.png");
    }
  );

  $(".homepage-news-link-block-imm").hover(
    function () {
         $(this).attr("src","/images/home/2-2 icon.png");
    },
    function () {
        $(this).attr("src","/images/home/2-1 icon.png");
    }
  );

  $(".homepage-news-link-block-live").hover(
    function () {
         $(this).attr("src","/images/home/3-2 icon.png");
    },
    function () {
        $(this).attr("src","/images/home/3-1 icon.png");
    }
  );

  $(".homepage-news-link-block-work").hover(
    function () {
         $(this).attr("src","/images/home/4-2 icon.png");
    },
    function () {
        $(this).attr("src","/images/home/4-1 icon.png");
    }
  );
  // homepage-news-link

  // homepage-service-circle
  $(".homepage-service-block-circle-img--1").hover(
    function () {
         $(this).attr("src","/images/home/wyse home icon/5-1-icon.png");
    },
    function () {
        $(this).attr("src","/images/home/wyse home icon/5-2-icon.png");
    }
  );
  $(".homepage-service-block-circle-img--2").hover(
    function () {
         $(this).attr("src","/images/home/wyse home icon/6-1-icon.png");
    },
    function () {
        $(this).attr("src","/images/home/wyse home icon/6-2-icon.png");
    }
  );
  $(".homepage-service-block-circle-img--3").hover(
    function () {
         $(this).attr("src","/images/home/wyse home icon/7-1-icon.png");
    },
    function () {
        $(this).attr("src","/images/home/wyse home icon/7-2-icon.png");
    }
  );
  $(".homepage-service-block-circle-img--4").hover(
    function () {
         $(this).attr("src","/images/home/wyse home icon/8-1-icon.png");
    },
    function () {
        $(this).attr("src","/images/home/wyse home icon/8-2-icon.png");
    }
  );
  $(".homepage-service-block-circle-img--5").hover(
    function () {
         $(this).attr("src","/images/home/wyse home icon/9-1-icon.png");
    },
    function () {
        $(this).attr("src","/images/home/wyse home icon/9-2-icon.png");
    }
  );
  // homepage-service-circle

  // navbar dropdown menu
  $(".nav-dropdown-toggle").click( function() {
      $(this).toggleClass("nav-dropdown-toggle--show");
  });
  if ( $(window).width() >= 992 ) {
    $(".nav-dropdown").hover(
      function () {
        //$(this).addClass("show");
        $(this).children(".nav-dropdown-toggle").addClass("nav-dropdown-toggle--show");
        $(this).children(".dropdown-menu").addClass("show");
      },
      function () {
        $(this).children(".nav-dropdown-toggle").removeClass("nav-dropdown-toggle--show");
        $(this).children(".dropdown-menu").removeClass("show");
      }
    );
  }

  // navbar dropdown menu

})(jQuery); // End of use strict

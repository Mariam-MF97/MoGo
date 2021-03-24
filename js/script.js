
$('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
});
  
$('.responsive').slick({
  autoplay: true,
  infinite: true,
  speed: 300,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(window).scroll(function () {
  if ($(this).scrollTop() > $('#header').height() ) {
      $('body').addClass("fixed-nav");
  } else {
      $('body').removeClass("fixed-nav");
  }
});

$('#my_nav a').on('click',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top-20
  }, 500, 'swing', function () {
      window.location.hash = target;
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50 && $(this).scrollTop() < $('#header').height() ) {
      $('.navbar').addClass('d-none');
  } else {
      $('.navbar').removeClass('d-none');

  }
});

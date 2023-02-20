$(function () {

  //  burger menu  //

  $('.burger').on('click', function () {
    $('.burger,.menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.menu__list a').on('click', function () {
    $('.burger,.menu__list').removeClass('active');
    $('body').removeClass('lock');
  });




  //  slider revews  //

  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow slick-arrow-prev "><use xlink: href = "images/sprite.svg#arrow-left"></use></svg></button>',

    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow slick-arrow-next"><use xlink: href = "images/sprite.svg#arrow-left"></use></svg ></button>',
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });



  //  accordion  //
  //  клас 'one', відкритий буде тільки один спойлер  //

  $('.accordion__item-top').click(function () {

    if ($('.accordion__item-top').hasClass('one')) {
      $('.accordion__item-top').not($(this)).removeClass('active');
      $('.accordion__item-content').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);

  });




  //  fixed header  //

  $(window).scroll(function () {
    var menu = $('.menu');
    if ($(this).scrollTop() > 1) {
      menu.addClass('menu-fixed');
    } else {
      menu.removeClass('menu-fixed');
    }
  });




  //  Плавний скрол  //

  $(".footer__logo,.logo, .main-section__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });





  //  tabs  //

  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link_active');
    $(this).addClass('tabs__link_active');


    $('.tabs__content-item').removeClass('tabs__content-item_active');
    $($(this).attr('href')).addClass('tabs__content-item_active');

  });



  
  //=======================//



});
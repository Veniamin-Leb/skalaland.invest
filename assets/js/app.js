$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    dots: true
  });
  $('.fead__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    dots: true,
  });
  $('.slider__des-large').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__des-small'
  });
  $('.slider__des-small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider__des-large',
    dots: false,
    arrow: false,
    infinite:true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true
  });
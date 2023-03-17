$(function () {
  $('.design-slider').slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    //   nextArrow:
    //     '<button class="slick-next" type="button"><img src="/images/arrow_righth.svg" alt=""></button>',
    //   prevArrow:
    //     '<button class="slick-prev" type="button"><img src="/images/arrow_left.svg" alt=""></button>',
    prevArrow:
      '<img class="arrow arrow-right" src="/images/arrow_right.svg" alt="">',
    nextArrow:
      '<img class="arrow arrow-left" src="/images/arrow_left.svg" alt="">',
    responsive: [
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          autoplay: false,
          dots: false,
          arrows: false,
        }
      }
    ]
  })
});

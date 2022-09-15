let nav = $("#navbar")
let main = $("#main");
let crest = $("#crest");
let burger = $("#burger")
let mobile = $("#mobile");
let mainH;
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function(){
  mainH = main.innerHeight();
  scrollPos = $(this).scrollTop();


  if (scrollPos > mainH) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

burger.on("click", function(event){
  event.preventDefault();
  mobile.toggleClass("hidden");
  crest.toggleClass("rot");
});

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

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


function openCity2(evt, cityName2) {
  // Declare all variables
  var i, tabcontent2, tablinks2;

  // Get all elements with class="tabcontent" and hide them
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
      tabcontent2[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
      tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName2).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen2").click();





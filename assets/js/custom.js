$(document).ready(function(){




// SLICK SLIDER START

$('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 15000,
    fade: true,
    dots: true,
});

// SLICK SLIDER END


// OWL CAROUSEL START

$(".your-class").owlCarousel({
    items: 5,
    loop: true,
    nav:false,
    responsive : {
          // breakpoint from 0 up
          0 : {
              items: 2
          },
          // breakpoint from 480 up
          480 : {
              items: 2
          },
          // breakpoint from 768 up
          768 : {
              items: 3
          },
          // breakpoint from 992 up
          992 : {
              items: 5
          }
      }
});


var owl = $('.owl-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.nextBtn').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.prevBtn').click(function() {
	    owl.trigger('prev.owl.carousel', [300]);
	});

// OWL CAROUSEL END


// WINDOW SCROLL START

// $(window).scroll(function () {
// var sc = $(window).scrollTop()
// if (sc > 10) {
//     $(".header").addClass("header-bg")
// } else {
//     $(".header").removeClass("header-bg")
// }
// });

// WINDOW SCROLL END

// CUSTOM SELECT START
$('select').each(function(){
var $this = $(this), selectOptions = $(this).children('option').length;

$this.addClass('hide-select'); 
$this.wrap('<div class="select"></div>');
$this.after('<div class="custom-select"></div>');

var $customSelect = $this.next('div.custom-select');
$customSelect.text($this.children('option').eq(0).text());

var $optionlist = $('<ul />', {
    'class': 'select-options'
}).insertAfter($customSelect);

for (var i = 0; i < selectOptions; i++) {
    $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
    }).appendTo($optionlist);
}

var $optionlistItems = $optionlist.children('li');

$customSelect.click(function(e) {
    e.stopPropagation();
    $('div.custom-select.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.select-options').hide();
    });
    $(this).toggleClass('active').next('ul.select-options').slideToggle();
});

$optionlistItems.click(function(e) {
    e.stopPropagation();
    $customSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $optionlist.hide();
});

$(document).click(function() {
    $customSelect.removeClass('active');
    $optionlist.hide();
});

});
// CUSTOM SELECT END








});




$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer","Fresher","Technician", "Blogger", "Designer", "Freelancer","Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer","Fresher" ,"Technician", "Blogger", "Designer", "Freelancer","Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
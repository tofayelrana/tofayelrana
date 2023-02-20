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

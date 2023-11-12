//sticky navbar set start here
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 84) {
        $('.nav-sec-2').addClass("sticky");

    } else {
        $('.nav-sec-2').removeClass("sticky");
    }
});
//sticky navbar set ends here





(function ($) {
    "use strict";

    $(document).ready(function () {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 5; //এখানে কতটুকু scroll করার পর icon show হবে
        var duration = 550; //এখানে scroll to top এর speed set
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            } //এখানে html এর ওই progress-wrap ক্লাস টাকে target করতে হবে আর অখানে active-progress class টা add হবে
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);//এখানে এই জাইগাই scrollTop: 0 দেওয়া হয়েছে যাতে icon এ ক্লিক করলে direct top 0 তে চলে যাবে আর আপনি যদি চান অখানে 200 অথবা 300 অথবা আরো বেশি value দিতে পারেন তাহলে ওই জাইগাই direct চলে যাবে
            return false;
        })


    });

})(jQuery);












//আচ্ছা এখানে প্রথম থেকে js code serially ই আছে কিন্তু সেশে গিয়ে এক্টার মাথার উপরে আরেকটার apply করানো লাগছে কেননা কাজ করছিলো না

//এটা first top navbar এর 
function clearSearch() {
    const searchInput = document.querySelector('.frm-posi input[type="text"]');
    searchInput.value = '';
}

//এটা second top navbar এর 
function clearSearch() {
    const searchInput = document.querySelector('.frm-cus2 input[type="text"]');
    searchInput.value = '';
}

//এটা 1st carousel এর জন্য শুরু
$('.carousel-cus').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    rewind: true,
    autoplaySpeed: 500,
    lazyLoad: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



// এটা 2nd carousel
$('.owl-carousel-2').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    margin: 0,
    navContainer: '#MyNavs',
    navText: ['<i class="fa-solid fa-angle-left fa-beat-fade" style="color: #0f0f0f;"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade" style="color: #0c0d0d;"></i>'],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})



const owlCarousel = $('.owl-carousel-2').owlCarousel({
    // Your Owl Carousel configuration options
    
});

const carouselNav = document.querySelector('#MyNavs');

carouselNav.addEventListener('mouseenter', () => {
    owlCarousel.trigger('stop.owl.autoplay');
});

carouselNav.addEventListener('mouseleave', () => {
    owlCarousel.trigger('play.owl.autoplay', []);
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered");
        }
    );
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).siblings(".seudo-con").addClass("parent-hovered-2");
        },
        function () {
            $(this).siblings(".seudo-con").removeClass("parent-hovered-2");
        }
    );
});


$(document).ready(function () {
    $(".seudo-con").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered-3");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered-3");
        }
    );
});



//third burger carousel start

$('.owl-carousel-3').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    margin: 0,
    navContainer: '#MyNavsThree',
    navText: ['<i class="fa-solid fa-angle-left fa-beat-fade" style="color: #0f0f0f;"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade" style="color: #0c0d0d;"></i>'],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

const owlCarouselThree = $('.owl-carousel-3').owlCarousel({
    // Your Owl Carousel configuration options

});

const carouselNavThree = document.querySelector('#MyNavsThree');

carouselNavThree.addEventListener('mouseenter', () => {
    owlCarouselThree.trigger('stop.owl.autoplay');
});

carouselNavThree.addEventListener('mouseleave', () => {
    owlCarouselThree.trigger('play.owl.autoplay', []);
});




$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered");
        }
    );
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).siblings(".seudo-con").addClass("parent-hovered-2");
        },
        function () {
            $(this).siblings(".seudo-con").removeClass("parent-hovered-2");
        }
    );
});


$(document).ready(function () {
    $(".seudo-con").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered-3");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered-3");
        }
    );
});




//others product carousel
$('.owl-carousel-4').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    margin: 0,
    navContainer: '#MyNavsFour',
    navText: ['<i class="fa-solid fa-angle-left fa-beat-fade" style="color: #0f0f0f;"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade" style="color: #0c0d0d;"></i>'],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})


const owlCarouselFour = $('.owl-carousel-4').owlCarousel({
    // Your Owl Carousel configuration options

});

const carouselNavFour = document.querySelector('#MyNavsFour');

carouselNavFour.addEventListener('mouseenter', () => {
    owlCarouselFour.trigger('stop.owl.autoplay');
});

carouselNavFour.addEventListener('mouseleave', () => {
    owlCarouselFour.trigger('play.owl.autoplay', []);
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered");
        }
    );
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).siblings(".seudo-con").addClass("parent-hovered-2");
        },
        function () {
            $(this).siblings(".seudo-con").removeClass("parent-hovered-2");
        }
    );
});


$(document).ready(function () {
    $(".seudo-con").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered-3");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered-3");
        }
    );
});


//toast products carousel

$('.owl-carousel-6').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    margin: 0,
    navContainer: '#MyNavsSix',
    navText: ['<i class="fa-solid fa-angle-left fa-beat-fade" style="color: #0f0f0f;"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade" style="color: #0c0d0d;"></i>'],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

const owlCarouselSix = $('.owl-carousel-6').owlCarousel({
    // Your Owl Carousel configuration options

});

const carouselNavSix = document.querySelector('#MyNavsSix');

carouselNavSix.addEventListener('mouseenter', () => {
    owlCarouselSix.trigger('stop.owl.autoplay');
});

carouselNavSix.addEventListener('mouseleave', () => {
    owlCarouselSix.trigger('play.owl.autoplay', []);
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered");
        }
    );
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).siblings(".seudo-con").addClass("parent-hovered-2");
        },
        function () {
            $(this).siblings(".seudo-con").removeClass("parent-hovered-2");
        }
    );
});


$(document).ready(function () {
    $(".seudo-con").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered-3");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered-3");
        }
    );
});

//pastry cake products carousel
$('.owl-carousel-sixth').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    margin: 0,
    navContainer: '#MyNavsSixth',
    navText: ['<i class="fa-solid fa-angle-left fa-beat-fade" style="color: #0f0f0f;"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade" style="color: #0c0d0d;"></i>'],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

const owlCarouselSixth = $('.owl-carousel-sixth').owlCarousel({
    // Your Owl Carousel configuration options

});

const carouselNavSixth = document.querySelector('#MyNavsSixth');

carouselNavSixth.addEventListener('mouseenter', () => {
    owlCarouselSixth.trigger('stop.owl.autoplay');
});

carouselNavSixth.addEventListener('mouseleave', () => {
    owlCarouselSixth.trigger('play.owl.autoplay', []);
});

$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered");
        }
    );
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).siblings(".seudo-con").addClass("parent-hovered-2");
        },
        function () {
            $(this).siblings(".seudo-con").removeClass("parent-hovered-2");
        }
    );
});


$(document).ready(function () {
    $(".seudo-con").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered-3");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered-3");
        }
    );
});


//biscuit products 
$('.owl-carousel-seventh').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    margin: 0,
    navContainer: '#MyNavsSeventh',
    navText: ['<i class="fa-solid fa-angle-left fa-beat-fade" style="color: #0f0f0f;"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade" style="color: #0c0d0d;"></i>'],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

const owlCarouselSeventh = $('.owl-carousel-seventh').owlCarousel({
    // Your Owl Carousel configuration options

});

const carouselNavSeventh = document.querySelector('#MyNavsSeventh');

carouselNavSeventh.addEventListener('mouseenter', () => {
    owlCarouselSeventh.trigger('stop.owl.autoplay');
});

carouselNavSixth.addEventListener('mouseleave', () => {
    owlCarouselSeventh.trigger('play.owl.autoplay', []);
});

$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered");
        }
    );
});


$(document).ready(function () {
    $(".cart-icon").hover(
        function () {
            $(this).siblings(".seudo-con").addClass("parent-hovered-2");
        },
        function () {
            $(this).siblings(".seudo-con").removeClass("parent-hovered-2");
        }
    );
});


$(document).ready(function () {
    $(".seudo-con").hover(
        function () {
            $(this).parent(".con").addClass("parent-hovered-3");
        },
        function () {
            $(this).parent(".con").removeClass("parent-hovered-3");
        }
    );
});




//sweet product
$('.owl-carousel-ten').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    margin: 0,
    navContainer: '#MyNavsTen',
    navText: ['<i class="fa-solid fa-angle-left fa-beat-fade" style="color: #0f0f0f;"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade" style="color: #0c0d0d;"></i>'],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

$('.owl-carousel-last').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    margin: 0,
    navContainer: '#MyNavsLast',
    navText: ['<i class="fa-solid fa-angle-left fa-beat-fade" style="color: #0f0f0f;"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade" style="color: #0c0d0d;"></i>'],
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})






const owlCarouselTen = $('.owl-carousel-ten').owlCarousel({
    // Your Owl Carousel configuration options

});

const carouselNavten = document.querySelector('#MyNavsTen');

carouselNavten.addEventListener('mouseenter', () => {
    owlCarouselTen.trigger('stop.owl.autoplay');
});

carouselNavten.addEventListener('mouseleave', () => {
    owlCarouselTen.trigger('play.owl.autoplay', []);
});






//এটা last carousel এর




const owlCarouselLast = $('.owl-carousel-last').owlCarousel({
    // Your Owl Carousel configuration options

});

const carouselNavLast = document.querySelector('#MyNavsLast');

carouselNavLast.addEventListener('mouseenter', () => {
    owlCarouselLast.trigger('stop.owl.autoplay');
});

carouselNavLast.addEventListener('mouseleave', () => {
    owlCarouselLast.trigger('play.owl.autoplay', []);
});



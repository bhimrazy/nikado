/* Theme JS */

(function($) {
    "use strict";


    /* -------------------------------------------------
        1. Mobile Menu
    ------------------------------------------------- */
    $('.main-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu',
        meanRevealPosition: "right"
    }); 

    /* ----------------------------------------------
        nice-select-menu
    ---------------------------------------------- */
    $('.nice-select-menu').niceSelect();


    /* ----------------------------------------------
        slider-carousel-active
    ---------------------------------------------- */
    $('.slider-carousel-active').owlCarousel({
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* ----------------------------------------------
        slider-2-carousel-active
    ---------------------------------------------- */
    $('.slider-2-carousel-active').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* ----------------------------------------------
        product-carousel-active
    ---------------------------------------------- */
    $('.product-carousel-active').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })

    
    /* ----------------------------------------------
        product-carousel-active-2
    ---------------------------------------------- */
    $('.product-carousel-active-2').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 5,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
    
    /* ----------------------------------------------
        product-carousel-active-3
    ---------------------------------------------- */
    $('.product-carousel-active-3').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 3,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    
    /* ----------------------------------------------
        product-carousel-active-4
    ---------------------------------------------- */
    $('.product-carousel-active-4').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 2,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    })
    
    /* ----------------------------------------------
        sidebar-product-carousel-active-1
    ---------------------------------------------- */
    $('.sidebar-product-carousel-active-1').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    
    /* ----------------------------------------------
        deal-carousel-active
    ---------------------------------------------- */
    $('.deal-carousel-active').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    
    /* ----------------------------------------------
        blog-carousel-active
    ---------------------------------------------- */
    $('.blog-carousel-active').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 3,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    
    /* ----------------------------------------------
        blog-carousel-active-2
    ---------------------------------------------- */
    $('.blog-carousel-active-2').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            }
        }
    })

    
    /* ----------------------------------------------
        brand-carousel-active
    ---------------------------------------------- */
    $('.brand-carousel-active').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-1.png'>","<img src='images/icons/arrow-right-1.png'>"],
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 6,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    })
    

    /* ----------------------------------------------
        banner-call-to-action-carousel-active
    ---------------------------------------------- */
    $('.banner-call-to-action-carousel-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<img src='images/icons/arrow-left-2.png'>","<img src='images/icons/arrow-right-2.png'>"],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* ------------------------------------------------------
        Product details tab carousel (Single product page)
    ------------------------------------------------------ */
    $('.product-details-tab-carousel-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        item: 3,
        responsive: {
            0: {
                items: 3
            },
            480: {
                items: 4
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    })

    /* tab active */
    $('.product-details-small a').on('click', function(e) {
        e.preventDefault();
        
        var $href = $(this).attr('href');
        
        $('.product-details-small a').removeClass('active');
        $(this).addClass('active');
        
        $('.product-details-large .tab-pane').removeClass('active');
        $('.product-details-large ' + $href).addClass('active');
    })



    /* ------------------------------------------------------
        modal-tab-carousel-active
    ------------------------------------------------------ */
    $('.modal-tab-carousel-active').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        item: 4,
        responsive: {
            0: {
                items: 3
            },
            480: {
                items: 4
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })


    /* ----------------------------------------------
        post-image-carousel-active (Blog Page)
    ---------------------------------------------- */
    $('.post-image-carousel-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    /* ----------------------------------------------
        Countdown
    ---------------------------------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Mint</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    }); 


    /* ----------------------------------------------
        Tooltip
    ---------------------------------------------- */
    $('[data-toggle="tooltip"]').tooltip(); 


    /* -------------------------------------------------
       5. Counter
    ------------------------------------------------- */
    var counter = $('.counter');
    counter.counterUp({
        delay: 10,
        time: 500
    });

    /* ----------------------------------------------
        EasyZoom
    ---------------------------------------------- */
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();


    /* ----------------------------------------------
        Cart Plus Minus Button
    ---------------------------------------------- */
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } 
        else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } 
            else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    /* ----------------------------------------------
        Price Slider / jQuery ul range slider
    ---------------------------------------------- */
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 3000,
      values: [ 75, 3000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );



    /* ----------------------------------------------
        featured-product-widget-carousel-active
    ---------------------------------------------- */
    $('.featured-product-widget-slick-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<div class='slick-prev slick-arrow'><img src='images/icons/arrow-right-1.png'></div>",
        nextArrow: "<div class='slick-next slick-arrow'><img src='images/icons/arrow-left-1.png'></div>",
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            { 
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            }
        ]
    })

    
    /*--------------------------------------
      showlogin toggle function
    ------------------------------------- */
     $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
     }); 
        
     $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
     });

    /*--------------------------------------------
      accordion toggle function
    -------------------------------------------- */
    $('.payment-accordion').find('.payment-accordion-toggle').on('click', function(){
      //Expand or collapse this panel
      $(this).next().slideToggle(500);
      //Hide the other panels
      $(".payment-content").not($(this).next()).slideUp(500);

    });
    
    /* -------------------------------------------------------
     accordion active class for style
    ----------------------------------------------------------*/
    $('.payment-accordion-toggle').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    }); 


    /* ----------------------------------------------
        ScrollUp
    ---------------------------------------------- */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '800', // Distance from top before showing element (px)
        topSpeed: 900, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    });




    

})(jQuery);

/* ********************************************
    STICKY sticky-header
******************************************** */
    var hth = $('.header-top-area').height();
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > hth){  
            $('#sticky-header').addClass("sticky");
        }
        else{
            $('#sticky-header').removeClass("sticky");
        }
    });
/* ********************************************************* */
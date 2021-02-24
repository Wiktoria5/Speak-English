$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$('.js-tab-trigger').click(function () {
var id = $(this).attr('data-tab'),
    content = $('.js-tab-content[data-tab="' + id + '"]');

$('.js-tab-trigger.active').removeClass('active'); 
$(this).addClass('active'); 

$('.js-tab-trigger');
$(this).addClass('active');

$('.js-tab-content.active').removeClass('active');
content.addClass('active'); 
});


    $('.block_title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });

$(function () {
    var link = $('.m-menu-link');
    var close = $('.close-menu');
    var menu = $('.m-menu');
    var mainBlock = $('.m-menu');
    link.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('m-menu_active');
    });
    close.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('m-menu_active');
    });
    mainBlock.find('li').on('click', function() {
        mainBlock.removeClass('m-menu_active');
      })
});


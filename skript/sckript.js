$(document).ready(function(){
    $('.header_number').click(function(){
        $('.butt').toggleClass('butt-act');
    });


    $('.burger_menu').click(function () {
        $('.burger_menu div').toggleClass('burg_act')
    });


    $('.slide_one').owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: 5000,
        nav:false,
        loop:true,
        dots:false
    });
    $('.banner_prev').on('click', function () {
        $('.banner .owl-nav .owl-prev').click();
    })
    $('.banner_next').on('click', function () {
        $('.banner .owl-nav .owl-next').click();
    });


    $('.slide_two').owlCarousel({
        // margin:auto,
        loop:true,
        items:5,
        dots:true,
        dotsEach: 2,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{ 
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            1042:{
                items: 4
            },
            1567:{
                items:5
            }
        }
    })
    $('.brend_prev').on('click', function () {
        $('.brend .owl-nav .owl-prev').click();
    })
    $('.brend_next').on('click', function () {
        $('.brend .owl-nav .owl-next').click();
    });

    $('.slide_tree').owlCarousel({
        margin:30,
        items: 4,
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsEach: 2,
        responsive:{ 
            0:{
                margin: 0,
                items: 1
            },
            768:{
                margin:10,
                items: 2
            },
            1042:{
                items: 3
            },
            1567:{
                items:4
            }
        }
    });
    $('.product_prev').on('click', function () {
        $('.products_slider .owl-nav .owl-prev').click();
    })
    $('.product_next').on('click', function () {
        $('.products_slider .owl-nav .owl-next').click();
    });
    $('.slide_four').owlCarousel({
        margin: 20,
        items: 1,
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000
    });
    $('.header_number').click(function () {
        $('.header_number-active').toggleClass('header_number-active--act')
    })
    $('.image_hover').on('click', function () {
        $('.instagram_image a').fencybox({

        });
    })
});
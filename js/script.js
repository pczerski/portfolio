'use strict';

$(document).ready(function () {
    $(window).scroll();
});

$(window).scroll(function () {
    changeMenu();
});

var root = $('html, body');
$('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    root.animate({
        scrollTop: $(href).offset().top - 50
    }, 500);
});

function changeMenu() {
    var navHeight = $('#main-nav').height();
    var currentPosition = $(window).scrollTop();
    
    if ($(window).scrollTop() > navHeight) {
        $('#main-nav').addClass('menu-class');
        $('#main-nav').css({transition: 'all .5s'});
    } else {
        $('#main-nav').removeClass('menu-class');
    }
};
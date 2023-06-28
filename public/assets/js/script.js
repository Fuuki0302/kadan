$( function() {

$(window).scroll(function () {
    if($(window).scrollTop() > 60) {
        $('#js-header').addClass('is-show');
        $('.js-navLink').addClass('is-show');
        $('.p-header-img__first').addClass('is-show')
        $('.p-header-img__second').addClass('is-show')
        $('.p-header__burger--inline').addClass('is-show')
    } else {
        $('#js-header').removeClass('is-show');
        $('.js-navLink').removeClass('is-show');
        $('.p-header-img__first').removeClass('is-show');
        $('.p-header-img__second').removeClass('is-show');
        $('.p-header__burger--inline').removeClass('is-show');

    }
});

// smooth
$(function(){
    $('a[href^="#"]').on("click", function() {
    var speed = 600;
    var header_height = $("header").height();
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - header_height;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
});

// ハンバーガー
    $('#js-button').on('click',function() {
    $(this).toggleClass('is-active');
});

    $('#js-button').on('click',function() {
    $('#drawer-navJs').toggleClass('is-active');
});

    $('#js-button').on('click',function() {
    $('.p-header__overlay').toggleClass('is-active');
});


// 予約

$('.reserve-content').on('click',function() {
    $(this).toggleClass('is-active');
});

// モーダルウィンドウ
$(function () {
$(".js-modal-open").on("click", function () {
    $(".js-modal").fadeIn();
    return false;
});
$(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
});
});

//Grid  // タブ切り替え
$(function() {
    $('.p-tab').on('click', function() {
    $('.p-tab, .p-info-grid').removeClass('active');
    
    $(this).addClass('active');
    
    var index = $('.p-tab').index(this);
    $('.p-info-grid').eq(index).addClass('active');
    });
});

});








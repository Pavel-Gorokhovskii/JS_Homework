$('.bars').click(function () {
    $('nav').toggleClass('active');
    $('.bars').toggleClass('active');
    $('body').toggleClass('lock');
});

$('.fa-search').click(function () {
    $('.content__toolbar_searchBx').toggleClass('active');
});
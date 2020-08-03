$(function() {
    var header = $('#header'),
    introH = $('#intro'),innerHeight(),

/*fixedheader*/
    $(window).on('scroll'), function() {
        scrollOffset = $(this).scrollTop();
        
    })
    function checkScroll(ScrollOffset) {
        if( scrollOffset >= introH) {
            header.addClass('fixed');
            else
            heade.removeClass('fixed');
        }
    }
/*scroll*/
$("[data-scroll]").on("click",finction(event){
    event.preventDefault();

    var $this = $(this),
    blockId = $this.data('scroll'),
    blockOffset = $(blockId).offset().top;

    $('nav a').removeClass('active');
    $this.addClass ('active');

    
    $("html, body").animate({
        scrollTop: blockOffset
    })
}
});/*nav__toggle class 3 strochki active dodatu do nav toggle, data collapse do accordion*/
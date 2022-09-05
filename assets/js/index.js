jQuery( document ).ready( function(){

    //sticky header
    jQuery( window ).on("scroll", function(){
        if(jQuery(window).scrollTop() > 0){
            jQuery( '.contact-header' ).addClass( 'hide' );
        }else{
            jQuery( '.contact-header' ).removeClass( 'hide' );
        }
    });

    jQuery( window ).on("scroll", function(){
        if(jQuery(window).scrollTop() > 0){
            jQuery( '.main-header' ).addClass( 'scroll' );
        }else{
            jQuery( '.main-header' ).removeClass( 'scroll' );
        }
    });

    // disable button until checkbox is clicked
    jQuery('input[type="checkbox"]').click(function(){
        if(jQuery(this).prop("checked") == true){
            jQuery( '.disable-btn' ).prop('disabled', false);
        }
        else if(jQuery(this).prop("checked") == false){
            jQuery( '.disable-btn' ).prop('disabled', true);
        }
    });

    // jQuery( '.scrollTo' ).click(function(){
    //     var getElement = $(this).attr('href');

    // });

    // jQuery(document).ready(function($) {
    //     $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    //       e.preventDefault();
    //       var target = this.hash,
    //           $target = $(target);
      
    //       $('html, body').stop().animate( {
    //         'scrollTop': $target.offset().top-40
    //       }, 900, 'swing', function () {
    //         window.location.hash = target;
    //       } );
    //     } );
    //   } );
});
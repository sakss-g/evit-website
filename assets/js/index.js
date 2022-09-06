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

    // scroll to top
    jQuery( window ).on("scroll", function(){
        if(jQuery(window).scrollTop() > 0){
            jQuery( '.scroll-to-top' ).removeClass( 'remove' );
        }else{
            jQuery( '.scroll-to-top' ).addClass( 'remove' );
        }
    });

    jQuery( document ).on( 'click', '.video-button-container', function(){
        jQuery( '.main-header' ).addClass( 'only-video' );
        jQuery( '.scroll-to-top' ).addClass( 'only-video' );

        var lightBoxVideo = document.getElementById("vid");
        document.getElementById('light').style.display = 'block';
        document.getElementById('fade').style.display = 'block';
        lightBoxVideo.play();
    });

    jQuery( document ).on( 'click', '.boxclose', function(){
        jQuery( '.main-header' ).removeClass( 'only-video' );
        jQuery( '.scroll-to-top' ).removeClass( 'only-video' );

        var lightBoxVideo = document.getElementById("vid");
        document.getElementById('light').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
        lightBoxVideo.pause();
    });

    // init Isotope
    // jQuery('.inspiration-body').isotope({
    //     itemSelector: '.inspiration-img-wrapper',
    //     layoutMode: 'fitRows'
    // });
    // // filter items on button click
    // jQuery('.inspiration-category ul li a').on( 'click', 'button', function() {
    //     // var filterValue = jQuery(this).attr('data-filter');
    //     // $grid.isotope({ filter: filterValue });
    //     $('.inspiration-category ul li a').removeClass('active');
    //     $(this).addClass('active');

    //     var selector = $(this).attr('data-filter');
    //     $('.inspiration-body').isotope({
    //         filter: selector
    //     });
    //     return false;

    // });

    // init Isotope
    // var $grid = $('.inspiration-body').isotope({
    //     // options
    // });
    // // filter items on button click
    // $('.inspiration-category ul').on( 'click', 'a', function(e) {
    //     e.preventDefault();
    //     var filterValue = $(this).attr('data-filter');
    //     $grid.isotope({ filter: filterValue });
    // });

});
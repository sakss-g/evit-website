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
    var $grid = $('.inspiration-body').isotope({});
    
    // filter items on button click
    jQuery('.inspiration-category ul').on( 'click', 'a', function(e) {
        e.preventDefault();

        jQuery('.inspiration-category ul li a').removeClass('active');
        jQuery(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    jQuery(window).resize(function(){
        if(jQuery(window).width() <= 768) {
            jQuery('.footer-info ul').addClass('fhide');
            jQuery('.footer-contact ul').addClass('fhide');
        }else{
            jQuery('.footer-info ul').removeClass('fhide');
            jQuery('.footer-contact ul').removeClass('fhide');
        }
    });

    jQuery('.footer-info-header .fa-circle-plus').click(function(){
        jQuery('.footer-info ul').toggleClass('fhide');
    });

    jQuery('.footer-contact-header .fa-circle-plus').click(function(){
        jQuery('.footer-contact ul').toggleClass('fhide');
    });

    const menuItems = document.querySelector('.menu-items');
    jQuery('.fa-bars').click(function(){
        jQuery( '.menu-items' ).addClass( 'hshow' );
        jQuery( '.scroll-to-top' ).addClass( 'remove' );
    });

    jQuery('.fa-xmark').click(function(){
        if(jQuery(window).width() <= 1024) {
            console.log('aaaaaaaaa');
            jQuery( '.menu-items' ).removeClass( 'hshow' );
            jQuery( '.menu-items' ).addClass( 'hhide' );
        }
    });

    jQuery(window).resize(function(){
        if(jQuery(window).width() >= 1024) {
            console.log('sssssssss');
            jQuery( '.menu-items' ).removeClass( 'hhide' );

        }
    });
});
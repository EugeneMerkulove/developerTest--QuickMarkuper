$(document).ready(function() {
    jQuery('.masonry-item').hover(
        function() {
            $(this).find('.masonry-cover-container').fadeIn();

        },
        function() {
            $(this).find('.masonry-cover-container').fadeOut();
        }
    );

    $('#masonry-container').imagesLoaded( function() {
        console.log('картинки загружены')
        $('.masonry-container').masonry({
            itemSelector: '.masonry-item',
            columnWidth: '.sizer',
            percentPosition: true,
            gutter: 30
          });
    });
});


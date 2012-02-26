$( function() {
   var  winHeight = $(window).height(),
        headerHeight = $('.header').outerHeight();

     $('.main')
        .css('overflow-y', 'scroll')
        .css('margin-top', headerHeight)
        .height(winHeight - headerHeight);
});

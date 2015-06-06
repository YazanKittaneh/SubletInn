(function($){

  $(document).ready(function() {

      $("#owl-demo").owlCarousel({
        autoPlay : 3000,
        stopOnHover : false,
        navigation:false,
        paginationSpeed : 1000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
        transitionStyle:"fade"
        simpleItem: true;
      });

  });
})(jQuery);

  $(document).ready(function() { 
    $('.hero-content h3').click(function(){
      subText = $(this).text();
       $(this).text(subText + "!");
    });

   var onHeroHoverAction = function(event) {
    $(this).css('color', '#E83270');
   };

   var offHeroHoverAction = function(event) {
    $(this).css('color', '#FFFFFF');
   };

   $('.hero-content h3').hover(onHeroHoverAction, offHeroHoverAction);
 
   var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };
 
   $('.selling-points .point').hover(onHoverAction, offHoverAction);

   $('.selling-points .point h5').click(function(){
      $(this).css('font-size', '36px');
   });

   // $( ".selling-points .point h5" ).toggle(function() {
   //    $(this).css('font-size', '36px');;
   //  }, function() {
   //    $(this).css('font-size', '24px');
   //  });

    $('.hero-content h1').click(function(){
      $(this).fadeOut(1000, function(){
        $('.hero-content h1').show();
      });
    });
  });
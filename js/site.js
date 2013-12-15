$(document).ready(function() {
   $('#facebook').mouseenter(function() {
       $(this).animate({
           padding: '+=5px'
       });
   });
   $('#facebook').mouseleave(function() {
       $(this).animate({
           padding: '-=5px'
       }); 
   });
   $('#facebook').click(function() {
       $(this).toggle(300);
   }); 
});
$(document).ready(function() {
   $('#twitter').mouseenter(function() {
       $(this).animate({
           padding: '+=5px'
       });
   });
   $('#twitter').mouseleave(function() {
       $(this).animate({
           padding: '-=5px'
       }); 
   });
   $('#twitter').click(function() {
       $(this).toggle(300);
   }); 
});
$(document).ready(function() {
   $('#you').mouseenter(function() {
       $(this).animate({
           padding: '+=5px'
       });
   });
   $('#you').mouseleave(function() {
       $(this).animate({
           padding: '-=5px'
       }); 
   });
   $('#you').click(function() {
       $(this).toggle(300);
   }); 
});

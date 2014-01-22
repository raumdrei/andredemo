$(document).ready(function(){
    
   $('.simulator_select').live('click', function(){
       var my_div = '.'+$(this).attr('rel');
       $(my_div).fadeIn(300);
       
       $('.active_device').removeClass('active_device');
       $(this).addClass('active_device');
       
   });
    
});
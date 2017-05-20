$(function(){
	            $(".room").click(function() {
	                $(this).siblings( ".hide_text" ).toggle("slow");
	            });
	            /*hide/show menu*/
	            $('.menuToggle').on('click', function(){
					$('.menu').toggle(300, function(){
	    				if($(this).css('display') ==='none'){
	        				$(this).removeAttr('style');
	        			}
	    });
	});
});



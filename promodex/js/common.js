//button to Top
$(function() {
 
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
    } else {
    $('#toTop').fadeOut();
}
});
 
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    }); 
});
$( ".new-layout p" ).hover(
  function() {
    $( this ).siblings("img").css( "border-color", "#4289e2" );
  }, function() {
    $( this ).siblings("img").css( "border-color", "#d7f3f5"  );
  }
);



$(document).ready(function(){
  $('.select').styler();

  $('.burger-menu').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
    } else {
        $(this).addClass('opened');
      }
  });



  $('.grid').masonry({
    // options
    itemSelector: '.grid-item'
  });
})
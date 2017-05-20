$(document).ready(function() {
	$(".courses .img-responsive").click(function(){
        $(".course_detail ").show();
    });
    $(".close").click(function(){
        $(".course_detail ").hide();
    });
    /*admin-prog-show-hiden*/
    $(".admin_visible").click(function(){
        ($(".category_admin").show()) && ($(".category_proprammer").hide())});
    $(".prog_visible").click(function(){
        ($(".category_proprammer").show()) && ($(".category_admin").hide());     
    });
});
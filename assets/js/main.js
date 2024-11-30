
$(document).ready(function() {
    $("h4").mouseenter(function() {
        $(this).find("a").show();
    });
    $("h4").mouseleave(function() {
        $(this).find("a").hide();
    }).mouseleave();
});



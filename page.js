
$(".nav-item").click(function(event){
    $(".active" ).removeClass("active");
    $("#" + event.target.id).addClass("active");
})

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navprime'
  })




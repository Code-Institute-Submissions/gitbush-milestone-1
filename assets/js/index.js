// Jquery learnt from Jquery module in Code Institutes course

// Use Jquery to only show modal on form submit
$(".form-navbar , .contact-form").on("submit", function(e){
    $("#registerModal").modal("show");
    e.preventDefault();
});



/*
* Smooth scrolling to top when to-top icon is clicked
* Learnt from https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
*/
$('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
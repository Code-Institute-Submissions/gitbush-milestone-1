// Jquery learnt from Jquery module in Code Institutes course

// Use Jquery to only show modal on form submit
$(".form-navbar").on("submit", function(e){
    $("#registerModal").modal("show");
    e.preventDefault();
});
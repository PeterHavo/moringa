


$(document).ready(function(){
    $(".test").click(function(){
        $('.footer_roll').toggle("slow");
    })
     $(".test2").click(function(){
        $('.footer_roll2').toggle("slow");
    })
      $('.test3').click(function(){
        $('.footer_roll3').toggle("slow");
    })
       $('.test4').click(function(){
        $('.footer_roll4').toggle("slow");
    })

});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_bottom = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span_bottom.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
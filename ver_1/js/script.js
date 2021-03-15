// Can also be used with $(document).ready()
$(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    rtl: true
  });
});


///////////////////
$(function(){
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4
});
})

//////////
function alert(){
	Swal.fire("Congrats!", "You added product into your cart!", "success")
}





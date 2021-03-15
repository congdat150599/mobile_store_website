$(function(){
$('.multiple-item').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5
});
})


///////////////////
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.info_quantity input');
jQuery('.info_quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

//////////////////
let image_thum = document.querySelectorAll('.img_body .pro_content .item');
var imageItem = document.getElementById('zoom_small');
var zoom_small = document.getElementById('zoom_small');
var zoom_large = document.getElementById('zoom_large');

for(let i=0; i < image_thum.length;i++){
	image_thum[i].addEventListener('click', function(){
		var img = image_thum[i].innerHTML;
		var img_src = image_thum[i].src;
		console.log(img_src);
		imageItem.innerHTML = img;
		zoom_small.href = img_src;
		zoom_large.src = img_src;
	});
}

///////////////

function viewMore(){
	var more = document.getElementById('more');
	var btn_view = document.getElementById('btn_view');
	var btn_view_more = document.querySelector('.btn_view_more');
	var dot = document.getElementById('dots');
	var gradient = document.getElementById('gradient');

	if (dots.style.display === "none") {
	    dots.style.display = "inline";
	    btn_view.innerHTML = "View More"; 
	    btn_view_more.style.position = "inherit";
	    more.style.display = "none";
	    gradient.style.display = "inline";
	}else {
	    dots.style.display = "none";
	    btn_view.innerHTML = "View Less"; 
	    more.style.display = "inline";
	    gradient.style.display = "none";
	    btn_view_more.style.position = "absolute";
	}
}


console.log(more);
console.log(btn_view);
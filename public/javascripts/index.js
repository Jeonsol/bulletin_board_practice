document.querySelector('.new').addEventListener('click', function() {
	document.querySelector('.layer_area').style.display = "block"
})
var buttons = document.querySelectorAll('button');
buttons.forEach(function(item) {
	item.addEventListener('click', function() {
		document.querySelector('.layer_area').style.display = "none"
	})
})

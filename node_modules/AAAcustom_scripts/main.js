$(function(){
	$(document).keypress(
		function(event){
			if (event.which == '13') {
				event.preventDefault();
			}
		});
	$('.todo').on('keyup', function(e){
		if (e.keyCode === 13){
			$('#main').submit()
		}
	});
	$('.item').on('click', function(e){
		var item = this.innerHTML;
		this.remove()
		var data = JSON.parse($('.hid').val());

		var index = data.indexOf(item);
		if (index !== -1) data.splice(index, 1);

		$('.hid').val(JSON.stringify(data))		
	});
});
$(document).ready(
	function() {
		console.dir($('input'));

		$('.signUp').on('click', function() {
			$('.modal-window').show();
			$('#signIn').hide();
			$('.layer').show()
		})
		$('#cancel').on('click', function() {
			$('input').val('');
			$('input[type="checkbox"]').prop("checked", false);
			$('.modal-window').hide();
		})
// типо форма
		$('input').on('change', function() {
			if ($('input[type="text"]').val() && $('input[type="email"]').val() &&
				$('input[type="password"]').val() && 
				$('input[type="checkbox"]').prop("checked")) {
				$('.layer').hide()
				$('#signIn').show();
			}
		})

		$('#signIn').on('click', function() {
			if ($('input[type="text"]').val() && $('input[type="email"]').val() &&
				$('input[type="password"]').val() && 
				$('input[type="checkbox"]').prop("checked")) {
				$('input[type="checkbox"]').prop("checked", false);
				$('.modal-window').hide();
				$('input').val('');
				$('#thank').show();
			} else {
				$('input').val('');
				$('.modal-window').hide();
			}
		})
//---------------
		$('#Thcancel').on('click', function() {
			$('#thank').hide();
		})

		$('#sendAddress').on('click', function() {
			if ($('#mail').val()){
				$('#thank').show();
				$('#mail').val('')
			}
		})
		$('.drop').on('click', function(e) {
			e.stopPropagation();
			$('.drop-menu').show();
		})

		$('body').on('click', function(e) {
			$('.drop-menu').hide();
		})

		$('.mobile__menu').on('click', function() {
			$('.mobile__menu').hide();
			$('.alpha__header__mobile').fadeIn();
		})
		$('.close').on('click', function() {
			$('.alpha__header__mobile').fadeOut();
			$('.mobile__menu').fadeIn();
		})
				
});
$(document).ready(function(){

	$('#interactive').find('button')
		.on('click', function(){
			
			var $value = $(this).text();	
			//console.log($value);
			var $attr = $(this).parent().attr('id');
			//console.log($attr);
			
			$('#' + $attr).find('button').removeClass('active');
			$(this).addClass('active');

			$('#interactive').find('.contenedor')
				.css($attr, $value);

		});

	$('#interactive').find('input')
		.on('keyup', function(){

			var $value = $(this).val();
			//console.log($value);
			var $attr = $(this).parents('.container-buttons').attr('id');
			//console.log($attr);
			var $item = $(this).attr('data-item');
			//console.log($item);

			$('#interactive').find('.' + $item )
				.css($attr, $value);

		});

	
	$('#interactive').find('.codegen')
		.on('click', function(){
			var $modal = $('#interactive').find('#modal-box');
			var $container = $('.contenedor').attr('style');
			var $item1 = $('.item1').attr('style');
			var $item2 = $('.item2').attr('style');
			var $item3 = $('.item3').attr('style');

			var template = '<div class="close-box">[cerrar x]</div>\
							<div class="flex-styles">\
								<span>.container</span>\
								<p>{:container:}</p>\
								<span>.item1</span>\
								<p>{:item1:}</p>\
								<span>.item2</h2>\
								<p>{:item2:}</p>\
								<span>.item3</span>\
								<p>{:item3:}</p>\
							</div>';

			var codegen = template
			.replace(':container:', $container)
			.replace(':item1:', $item1)
			.replace(':item2:', $item2)
			.replace(':item3:', $item3)

			var $modal = $('#interactive').find('#modal-box');
			$modal.html(codegen);	
			$modal.slideDown('slow');

			$('#interactive').find('.close-box')
					.on('click', function(){
						$modal.slideUp('slow');
					});

		});
		
});
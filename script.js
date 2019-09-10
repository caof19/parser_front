$(()=> {

	var cat = $('#cat li');
	var state = false;

	// setCat(['First category'])

	//select li
	$('#cat').on('click', '.cat', function() {
			if(!$(this).hasClass('sel')){
				$(this).addClass('sel');
				if(!state){
					$(this).children().children().addClass('sel');
				}
			} else {
				$(this).removeClass('sel');
				$(this).children().children().removeClass('sel');
			}
			if(state){
				$(this).removeClass('sel');	
			}
			state = false;
	})

	$('#cat').on('click', '.precat', function() {
		$(this).parent().parent().removeClass('sel');
		if(!$(this).hasClass('sel')) {
			$(this).addClass('sel');
		} else {
			$(this).removeClass('sel');
		}
		state = true;
	})

	//enter letter in input
	$('#search').on('keyup', function() {
		var searchText = $(this).val();

		cat.removeClass('hidden');

		if(searchText) {
		
			cat.each(function() {
				if(!$(this).text().toLowerCase().includes(searchText.toLowerCase()))
				{
					$(this).addClass('hidden');
				}
			})
		} else {
			cat.removeClass('hidden');			
		}
	})


	//send form
	$('.sub').on('click', function(e) {
		e.preventDefault();
		var category = [];

		cat.each(function() {
		if($(this).hasClass('sel')) {
				category.push($(this).attr('data-val'))	
			}
		})
		
		var col = $('#col').val();
		var sort = $('#sort').val();
		var date = $('#date').val();
		var dir = $('input[name="condition"]:checked').val();
		var quan = $('#quantity').val();

		$.ajax({
			type: 'POST',
			url: '',
			data: {
				'category[]': category,
				'column[]': col,
				'sort': sort,
				'date': date,
				'sortBy': dir,
				'quantity': quan
			},
			success: function(date){
				$('<a>', {href:'"https://google.com"', text:'Ссылка на скачивание'}).appendTo('.result')
			}
		})
	})


	//select category
	function setCat(arr) {
		arr.forEach( function(elem) {
				// cat.addClass('sel')
				$('#cat li[data-val="'+elem+'"]').addClass('sel');
				console.log('#cat li[data-val="'+elem+'"]')
		})
	}
})
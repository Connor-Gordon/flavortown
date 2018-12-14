$(document).ready(function(){

// tab section
	$('#tab2, #tab3').hide()
	$('.tabList li:nth-child(1) a').addClass('active')
	$('.tabList, .tabContainer').css('visibility', 'visible')
	$('.tabList').on('click', 'li a', function(e){
		e.preventDefault()
		var href=$(this).attr('href')
		$('.tabContainer div').hide()
		$(href).fadeIn()
		$('.tabList li a').revomeClass('active')
		$(this).addClass('active')
	})

	let menuInfo = $.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
		console.log(data)
	})



})



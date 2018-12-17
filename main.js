
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
		$('.tabList li a').removeClass('active')
		$(this).addClass('active')
	})


// menu section from api
	
	var appTemplate = ''
    $.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
        data.appetizers.forEach(function(item){
            appTemplate += `
                <ul id="appText">
                    <li id="appName">
                    	<div class="flex">${item.name}
                    	<div>$${item.price}</div>
                    </li>
                    <li id="appDesc">${item.description}</li>
                </ul>
            `
        })
        var appContent = document.getElementById('apps')
        appContent.innerHTML = appTemplate
        console.log(appTemplate)
    
	})

    var entreeTemplate = ''
    $.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
        data.entrees.forEach(function(item){
            entreeTemplate += `
                <ul id="entreeText">
                    <li id="entreeName">
                    	<div class="flex">${item.name}
                    	<div>$${item.price}</div>
                    </li>
                    <li id="entreeDesc">${item.description}</li>
                </ul>
            `
        })
        var entreeContent = document.getElementById('entrees')
        entreeContent.innerHTML = entreeTemplate
        console.log(entreeTemplate)
    })

    var dessertTemplate = ''
    $.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
        data.desserts.forEach(function(item){
            dessertTemplate += `
                <ul id="dessertText">
                    <li id="dessertName">
                    	<div class="flex">${item.name}
                    	<div>$${item.price}</div>
                    </li>
                    <li id="dessertDesc">${item.description}</li>
                </ul>
            `
        })
        var dessertContent = document.getElementById('desserts')
        dessertContent.innerHTML = dessertTemplate
        console.log(dessertTemplate)
    })
})

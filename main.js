
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

// todays special
	// let specialTemplate
	
 //    $.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
 //        specialTemplate = `
 //        <ul>
 //        	<li>${data.entrees[0].name}</li>
 //        	<li>${data.entrees[0].description}</li>
 //        </ul>`

 //        let specialContent = document.getElementById('#food-desc')
 //        specialContent.innerHTML += specialTemplate
 //        console.log(specialTemplate)
        
 //   })

// menu section from api
	
	// let appTemplate = ""
 //    $.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
 //        data.appetizers.forEach(function(item){
 //            appTemplate = `
 //                <ul id="appetizertext">
 //                    <li id="appetizername">${item.name}</li>
 //                    <li id="appetizerprice">$${item.price}</li>
 //                    <li id="appetizerdesc">${item.description}</li>
 //                    <li id="appetizerextra">${item.extra}</li>
 //                </ul>
 //            `
 //        })
 //        let appContent = document.getElementById('menu')
 //        appContent.innerHTML = appTemplate
 //        console.log(appTemplate)
 //    })

// let isSpicy = ""

// if(item.extra.spicy){
// 	return isSpicy
// }


// menu section from menu.js
	
	var searchTemplate = ""

	menu.appetizers.forEach(function(menuItem){
		
		searchTemplate += 
		`<div id="menuDiv">
			<ul class="templateList">
				<li class="templateName"> ${menuItem.name}</li>
				<li class="templateDescription"> ${menuItem.description}</li>
				<li class="templatePrice"> ${menuItem.price}</li>
				<li class="templateExtra"> </li>
			</ul>		
		</div>`

			var elements = document.getElementById("menu")
			elements.innerHTML = searchTemplate
	
	})

	




})

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
s
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

document.querySelector('ul.tabs li').addEventListener('click', );

function changeTab () {

}
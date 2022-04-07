document.querySelector('#tabBtn').addEventListener('click', clickBtn);

function clickBtn(e) {
	e.preventDefault;
	console.log(e.target);
	
	let tab_id = e.target.getAttribute('data-tab');

	const tabsGroup = document.querySelectorAll('.tab-link');
	const tabContentGroup = document.querySelectorAll('.tab-content');
	console.log(tabsGroup);

	tabsGroup.forEach(function(e) {
		e.classList.remove('current');
	})
	tabContentGroup.forEach(function(e) {
		e.classList.remove('current');
	})

	e.target.classList.add('current');
	document.querySelector("#" + tab_id).classList.add('current');
}
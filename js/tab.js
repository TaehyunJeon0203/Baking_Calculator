document.querySelector('#tabBtn').addEventListener('click', clickBtn);

function clickBtn(e) {
	e.preventDefault;
	
	let tab_id = e.target.getAttribute('data-tab');

	const tabsGroup = document.querySelectorAll('.tab-link');
	const tabContentGroup = document.querySelectorAll('.tab-content');

	tabsGroup.forEach(element => element.classList.remove('current'));
	tabContentGroup.forEach(element => element.classList.remove('current'));

	e.target.classList.add('current');
	document.querySelector("#" + tab_id).classList.add('current');
}
document.querySelectorAll('ul.tabs li').addEventListener('click', clickBtn);

function clickBtn() {
	console.log("click");
	console.log(this);
	let tab_id = this.getAttribute('data-tab');
	console.log("#" + tab_id);

	document.querySelector('ul.tabs li').classList.remove('current');
	document.querySelector('.tab-content').classList.remove('current');

	this.classList.add('current');
	document.querySelector("#" + tab_id).classList.add('current');
}
let navBlock = document.querySelector('.nav-block');
let navToggle = document.querySelector('.nav--toggle');

if (navToggle) {
	navToggle.addEventListener('click', function () {
		navToggle.classList.toggle('active');
		navBlock.classList.toggle('active');
	})
}
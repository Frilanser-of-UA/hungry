function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// меню бургер
const iconManu = document.querySelector('.manu__icon');
if (iconManu) {
	const manuWrapper = document.querySelector('.manu__wrapper');
	iconManu.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		iconManu.classList.toggle('_active');
		manuWrapper.classList.toggle('_active');
	});
}
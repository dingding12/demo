window.addEventListener('onorientationchange', setRem);
window.addEventListener('resize',setRem);

setRem()
function setRem() {
	var html = document.querySelector('html');
	var width = html.getBoundingClientRect().width;
	html.style.fontSize = width / 16 + 'px';
}
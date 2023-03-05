const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

// load header.html
fetch('/views/components/header/header.html')
	.then(response => response.text())
	.then(data => {
		header.innerHTML = data;
	});

// load body.html
fetch('body.html')
	.then(response => response.text())
	.then(data => {
		main.innerHTML = data;
	});

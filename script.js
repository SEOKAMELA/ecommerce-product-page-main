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


// Get a reference to the image element
const productImage = document.getElementById('product-image');

// Set the src attribute to the URL of the image you want to display
productImage.src = 'images/image-product-1.jpg';

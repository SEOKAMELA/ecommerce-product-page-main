// Fetch HTML file and replace the content of the body
fetch('header.html')
	.then(response => response.text())
	.then(data => {
		var parser = new DOMParser();
		var htmlDoc = parser.parseFromString(data, 'text/html');
		var header = htmlDoc.querySelector('.header');
		document.body.replaceChild(header, document.querySelector('.header'));
	})
	.catch(error => console.log(error));

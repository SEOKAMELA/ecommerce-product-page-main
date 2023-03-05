// fetch("header.html")
// 	.then(response => response.text())
// 	.then(data => {
// 		document.getElementById("header").innerHTML = data;
// 	});

//   // Fetch CSS file and apply styles
// fetch('header.css')
// .then(response => response.text())
// .then(data => {
//   var style = document.createElement('style');
//   style.textContent = data;
//   document.head.appendChild(style);
// })
// .catch(error => console.log(error));


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

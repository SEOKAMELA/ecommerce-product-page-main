const header = document.createElement('header');
header.innerHTML = `
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
`;
document.body.insertBefore(header, document.body.firstChild);
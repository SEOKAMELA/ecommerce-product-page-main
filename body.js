const productImage = document.getElementById("product-image");
productImage.src = "images/image-product-1.jpg";


const thumbnailImageUrls = [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg"
  ];
  
  const thumbnailRow = document.querySelector(".thumbnail-row");
  
  thumbnailImageUrls.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Product thumbnail";
    thumbnailRow.appendChild(img);
  });
  
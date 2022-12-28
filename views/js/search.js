// let viewedProductElement;

// const viewProduct = (element) => {
//   viewedProductElement = element;
//   const rect = element.getBoundingClientRect()
//   element.style.positon = 'fixed';
//   gsap.to(element, {
//     width: '100vw',
//     height: '100vh',
//     borderRadius: 0,
//     x: -rect.left,
//     y: -rect.top
//   })
// }

// let searchInp = document.getElementById('searchInp');
// let products = document.getElementById('products');
let productDivs = document.querySelectorAll('.product')

// let productDetail = document.getElementById('productDetail');
// let productDetailImg = document.getElementById('productDetailImg');
// let productNameTitle = document.getElementById('productNameTitle');
// let productInfoPara = document.getElementById('productInfoPara');
// let productPrice = document.getElementById('productPrice');

let addToCartBtn = document.getElementById('addToCartBtn');
for (let i = 0; i < productDivs.length; i++) {
  productDivs[i].onclick = () => {
    productDetail.style.display = `block`;
  }
}
addToCartBtn.onclick = () => {
    productDetail.style.display = `none`;
  
}


// fetch(`/searchBody?q=${searchInp.value}`)
// .then(res => res.text())
// .then(data => {
//   const doc = (new DOMParser()).parseFromString(data, "text/html");
//   // const productElems = doc.querySelectorAll('div.sg-row');
//   const productElems = doc.querySelectorAll('div.a-setion');
//   const productImageElems = doc.querySelectorAll('img.s-image');
//   const productNameElems = doc.querySelectorAll('span.a-text-normal');
//   const productPriceElems = doc.querySelectorAll('span.a-price-whole');
  
//   console.log(productNameElems);
//   console.log(productElems.length);
//   for (let i = 0; i < productElems.length; i++) {
//     let productElem = document.createElement('div');
//     productElem.classList.add('product');
    
//     let productImg = document.createElement('img');
//     productImg.src = productImageElems[i].src;
//     productElem.appendChild(productImg);
    
//     let productInfo = document.createElement('div');
//     productInfo.classList.add('productInfo');
    
//     productInfo.innerHTML = `
//       <div class="productTitle">
//         ${productNameElems[i].innerHTML}
//       </div>
//       <div class="productPrice">
//         ${productPriceElems[i].innerText}&#x20B9; <span class="priceInfo">Per Unit</span>
//       </div>`
    
//     productElem.appendChild(productInfo);
    
    
//     products.appendChild(productElem)
//   }
// })
// .catch(err => {
//   console.log(err);
// })
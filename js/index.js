const allProducts=[
    {
      productId:1,
      productName: `Men`,
      productColor: `Red`,
      productSize: `L`,
      productDescription:'Details here',
      productActualPrice: 50,
      productAvailable: true,
      productDiscountedPrice: 39,
      productRating: 4,
      productImageName:'formal-men.png',
    },
    {
        productId:2,
        productName: `Women 2`,
        productColor: `Red`,
        productSize: `M`,
        productDescription:'Details here 2',
        productActualPrice: 50,
        productAvailable: true,
        productDiscountedPrice: 39,
        productRating: 4,
        productImageName:'formal-men.png',
      },
      {
        productId:3,
        productName: `Baby & Kids 3`,
        productColor: `Black`,
        productSize: `L`,
        productDescription:'Details here 2',
        productActualPrice: 50,
        productAvailable: true,
        productDiscountedPrice: 39,
        productRating: 4,
        productImageName:'formal-men.png',
      }
]

function getProductListsAsHTML (singleProduct)
{
let productList=
`<article class='product'>
<header class='images'>
  <img src='img/${singleProduct.productImageName}' alt='${singleProduct.productName}'>
</header>
<lable class='productPrice'>CAD $${singleProduct.productActualPrice}</lable> <br>
<lable class='productName'>${singleProduct.productName}</lable> <br>
<a href='${singleProduct.productId}'>See More</a>
</article>`

    return productList;
}

function searchProducts()
{
    document.getElementById('products').innerHTML=allProducts.map(getProductListsAsHTML).join('\n');
}

let buttonSearchProducts= document.getElementById("buttonSearch");
buttonSearchProducts.addEventListener("click",searchProducts);
searchProducts();
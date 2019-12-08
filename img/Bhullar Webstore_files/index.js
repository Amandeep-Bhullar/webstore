const allProducts = [
  {
    productId:1,
    productName: `Men`,
    productColor: `y`,
    productSize: `L`,
    productDescription:'Details here',
    productType:1,
    productCategory:1,
    productActualPrice: 30,
    productAvailable: true,
    productDiscountedPrice: 10,
    productRating: 4,
    productImageName:'men-formal-&blue.jpg',
  },
  {
    productId:2,
    productName: `Women 2`,
    productColor: `w`,
    productSize: `M`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 45,
    productAvailable: true,
    productDiscountedPrice: 29,
    productRating: 2,
    productImageName:'women-formal-green2.jpg',
  },
  {
    productId:3,
    productName: `Baby & Kids 3`,
    productColor: `b`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:2,
    productCategory:3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-casual-black.gif',
  },
  {
    productId:4,
    productName: `Sale 4`,
    productColor: `b`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-formal-yellow.jpg',
  },
  {
    productId:5,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-formal-white.jpg',
  }
  ,
  {
    productId:6,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-formal-red.jpg',
  }
  ,
  {
    productId:7,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-casual-yellow.jpg',
  },
  {
    productId:8,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-casual-black.jpg',
  },
  {
    productId:9,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-formal-red-shirt.jpg',
  },
  {
    productId:10,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-formal-blue.jpg',
  },
  {
    productId:11,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-formal-black.gif',
  },
  {
    productId:12,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-casual-shirt-black.jpg',
  },
  {
    productId:13,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-formal-blue2.jpg',
  },
  {
    productId:14,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'women-casual-green.jpg',
  },
  {
    productId:15,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-formal-black3.jpg.gif',
  },
  {
    productId:16,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-casual-black.jpg',
  },
  {
    productId:17,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-casual-white.jpg',
  },
  {
    productId:18,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-casual-yellow.jpg',
  },
  {
    productId:19,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-casual-blue.jpg',
  },
  {
    productId:20,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-boy.jpg',
  },
  {
    productId:21,
    productName: `Baby & Kids 5`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Details here 2',
    productType:1,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-casual-jacket-blue.gif',
  }
];


function getProductListsAsHTML(singleProduct)
{
let productList = `
  <article class='product'>
    <header class='images'>
      <img src='img/${singleProduct.productImageName}' alt='${singleProduct.productName}'>
    </header>
    
    <lable class='productName'>${singleProduct.productName}</lable> <br>
 
    <lable class='productPrice'><del> CAD $  ${singleProduct.productActualPrice}</del> </lable> <br>
    CAD $ ${singleProduct.productDiscountedPrice}</lable> <br>
    <button type='button' class='button'>Add to Cart </button>  | <button type='button' class='btnSeeMore button'>See More</button>
    <div class='productDetails'>
    ${singleProduct.productDescription} <br> 
    Color : ${singleProduct.productColor}<br>
    Size : ${singleProduct.productSize} <br>
    <lable>${singleProduct.productType}</lable> <br>
    <lable>${singleProduct.productCategory}</lable> <br>
    <lable>${singleProduct.productAvailable}</lable> <br>
    <lable>${singleProduct.productRating}</lable><br>
    </div>

  </article>`;
  
  return productList;
}


////not done yet.......start from here
// function filterProducts()
// {
//   //let productType='1'; //dropDownProductType.options[employeeTypeCodeDropdownList.selectedIndex].value;
//     document.getElementById('products').innerHTML=allProducts.slice[0,3].map(getProductListsAsHTMLByFilter).join('\n');
// }
//new thing justwill check tomorrow
// function getProductListsAsHTMLByFilter (singleProduct)
// {
//   let productType=1; 
//   if(singleProduct.productType==productType)
//   {
    //
//let resultFromSearch=allProducts.filter(c=>c.productImageName.toLowerCase().includes(whatToSEarch))/
   /* //alert(singleProduct.productType);
let productList=
`<article class='product'>
<header class='images'>
  <img src='img/${singleProduct.productImageName}' alt='${singleProduct.productName}'>
</header>
<lable class='productPrice'>CAD $${singleProduct.productActualPrice}</lable> <br>
<lable class='productName'>${singleProduct.productName}</lable> <br>
<a href='${singleProduct.productId}'>See More</a>
</article>`
  }
    return productList;
}*/
/*
//for toggle button for the single product
const toggleCourseView = event => {
  document.getElementById('courses').classList.toggle('grid-view');
}
*/
//1 function,2 parameters,3return,4description(describe these things on th function or inside the function)

//submitTheFilter is for the filtering by the submit button with id of filterForm
const submitTheFilter=event=>{//documet.getElementById('')
  document.getElementById('').submit();
}

function filterProducts(event, arrToFilter)
{
  event.preventDefault();
  // dropDownProductType
  // dropDownProductCategory

  const dropDownListType = parseInt(event.target.elements.dropDownProductType.value);//filter by type
  const dropDownListCategory = parseInt(event.target.elements.dropDownProductCategory.value); //filter by category

  // Copy the incoming Array (just in case)
  let arrToShow = arrToFilter.slice();

  if (dropDownListType) {
    // Filter by dropDownListType
    arrToShow = arrToShow.filter(prod => +prod.productType ===+dropDownListType);
  }
  if (dropDownListCategory) {
    // Filter by dropDownListCategory
    console.log(dropDownListCategory);
    arrToShow = arrToShow.filter(prod => +prod.productCategory == +dropDownListCategory);
  }

  showSomeProducts(arrToShow);

}
// Toggle button
let getButton = document.querySelector(".btn");
let element = document.querySelector(".main-navbar");
let temp = true;
getButton.addEventListener('click',function(){
  temp = !temp; //Toggling temp variable to == true to false OR false to true ;
  if(!temp){ //If temp variable is false
    element.style.display = "none" // If temp is False
  }else{
    element.style.display = "block" // If temp is true
  } 
});



function showSomeProducts(arr)
{
  document.getElementById('products').innerHTML = arr.map(getProductListsAsHTML).join('\n');
}
window.addEventListener('load', () => {
  document.getElementById("dropDownProductType").addEventListener('change', event => console.log('Change'))
  const formSearchProducts = document.getElementById("formQuickFind");
  formSearchProducts.addEventListener("submit", event => filterProducts(event, allProducts));
  showSomeProducts(allProducts);
});

// Toggle Product Details
let getButtonSeeMore = document.querySelector(".btnSeeMore");
let elementProductDetails = document.querySelector(".productDetails");
let tempSeeMore = true;
getButtonSeeMore.addEventListener('click',function(){
  tempSeeMore = !tempSeeMore; //Toggling tempSeeMore variable to == true to false OR false to true ;
  if(!tempSeeMore){ //If tempSeeMore variable is false
    elementProductDetails.style.display = "none" // If tempSeeMore is False
  }else{
    elementProductDetails.style.display = "block" // If tempSeeMore is true
  } 
});

































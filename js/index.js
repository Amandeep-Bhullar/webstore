
let btnSeeMore=document.getElementById("btnSeeMore");

const allProducts = [
  {
    productId:1,
    productName: `Slim Fit Light Blue Suit Blazer`,
    productColor: `Blue`,
    productSize: `Small`,
    productDescription:'Slim Fit Light Blue Suit Blazer',
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
    productName: `Kenneth Cole New York Fencer Melton Coat`,
    productColor: `Green`,
    productSize: `Medium`,
    productDescription:'Kenneth Cole New York Fencer Melton Wool Maxi Coat',
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
    productName: `Trixxi Long Sleeve Smocked Dress`,
    productColor: `Black`,
    productSize: `Small`,
    productDescription:'Trixxi Long Sleeve Smocked Dress (Big Girls)',
    productType:1,
    productCategory:3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-casual-black.gif',
  },
  {
    productId:4,
    productName: `Slim Fit Yellow Suit Blazer`,
    productColor: `Yellow`,
    productSize: `Large`,
    productDescription:'Slim Fit Yellow Suit Blazer',
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
    productName: `Slim Fit Blazer With Contrast Lapel`,
    productColor: `Blue`,
    productSize: `Medium`,
    productDescription:'Slim Fit Blue Suit Blazer With Contrast Lapel',
    productType:1,
    productCategory:1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-formal-white.jpg',
  }
  ,
  {
    productId:6,
    productName: `Women Elegant Two Button Business Suit`,
    productColor: `Red`,
    productSize: `Large`,
    productDescription:'Women Elegant Two Button Business Suits Tops Outwear ',
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
    productName: `Slouchy Soft Brushed Casual Basic`,
    productColor: `Yellow`,
    productSize: `Medium`,
    productDescription:'Slouchy Soft Brushed Casual Basic',
    productType:2,
    productCategory:3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-casual-yellow.jpg',
  },
  {
    productId:8,
    productName: `Casual Round Neck Loose Fit Short Sleeve`,
    productColor: `Black`,
    productSize: `Medium`,
    productDescription:'Casual Round Neck Loose Fit Short Sleeve T-Shirt Blouse Tops',
    productType:2,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-casual-black.jpg',
  },
  {
    productId:9,
    productName: `Mens Dress Shirts Regular Fit Long Sleeve`,
    productColor: `Red`,
    productSize: `Medium`,
    productDescription:' Mens Dress Shirts Regular Fit Long Sleeve Men Shirt',
    productType:1,
    productCategory:1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-formal-red-shirt.jpg',
  },
  {
    productId:10,
    productName: `Office Workwear Sheath Dress`,
    productColor: `Blue`,
    productSize: `Large`,
    productDescription:'Office Workwear Sheath Dress',
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
    productName: `Neck Floor-Length Lace Chiffon `,
    productColor: `Black`,
    productSize: `Large`,
    productDescription:'Neck Floor-Length Lace Chiffon ',
    productType:1,
    productCategory:3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-formal-black.gif',
  },
  {
    productId:12,
    productName: `Short Sleeve Tie Front Knot Casual Loose Fit `,
    productColor: `Black`,
    productSize: `Small`,
    productDescription:'Short Sleeve Tie Front Knot Casual Loose Fit ',
    productType:2,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-casual-shirt-black.jpg',
  },
  {
    productId:13,
    productName: `Suits Slim Fit Formal Dress Clothes`,
    productColor: `Blue`,
    productSize: `Medium`,
    productDescription:'Suits Slim Fit Formal Dress Clothes',
    productType:1,
    productCategory:1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-formal-blue2.jpg',
  },
  {
    productId:14,
    productName: `Long Sleeve Round Neck Dress`,
    productColor: `w`,
    productSize: `L`,
    productDescription:'Long Sleeve Round Neck Dress',
    productType:2,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'women-casual-green.jpg',
  },
  {
    productId:15,
    productName: `Lace Glitter Vintage Pageant Prom Dress`,
    productColor: `Black`,
    productSize: `Large`,
    productDescription:'Tulle Lace Glitter Vintage Pageant Prom Dress',
    productType:1,
    productCategory:3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-formal-black3.jpg.gif',
  },
  {
    productId:16,
    productName: `Casual Round Neck Loose Fit Short Sleeve`,
    productColor: `Black`,
    productSize: `Small`,
    productDescription:'Casual Round Neck Loose Fit Short Sleeve',
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
    productName: `Adult Long Sleeve Tee`,
    productColor: `White`,
    productSize: `Large`,
    productDescription:'Adult Long Sleeve Tee',
    productType:2,
    productCategory:1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-casual-white.jpg',
  },
  {
    productId:18,
    productName: `Women 2 Piece Sport Outfits Long Sleeve`,
    productColor: `Yellow`,
    productSize: `Small`,
    productDescription:'Women 2 Piece Sport Outfits Long Sleeve',
    productType:2,
    productCategory:2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'woman-casual-yellow.jpg',
  },
  {
    productId:19,
    productName: `Classy Vintage Swing Kids Party Dress`,
    productColor: `Blue`,
    productSize: `Small`,
    productDescription:'Classy Vintage Swing Kids Party Dress',
    productType:1,
    productCategory:3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-girl-casual-blue.jpg',
  },
  {
    productId:20,
    productName: `Long Sleeve Button-Down Oxford Shirt`,
    productColor: `White`,
    productSize: `Large`,
    productDescription:'Long Sleeve Solid Button-Down Oxford Shirt',
    productType:1,
    productCategory:3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'kid-boy.jpg',
  },
  {
    productId:21,
    productName: `Winter Sherpa Denim Jacket Windbreaker`,
    productColor: `Blue`,
    productSize: `Large`,
    productDescription:'Winter Sherpa Denim Jacket Windbreaker',
    productType:2,
    productCategory:1,
    productActualPrice: 60,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName:'men-casual-jacket-blue.gif',
  }
];

function toggleShowMoreDetails(productId)
{
  let productDiv=document.getElementById(`productDetails${productId}`);
  
  if(productDiv.style.display==='none'){
    productDiv.style.display='block';
  } else{
    productDiv.style.display='none';
  }
}


function getProductListsAsHTML(singleProduct)
{
let productList = `
  <article class='product'>
    <header class='images'>
      <img src='img/${singleProduct.productImageName}' alt='${singleProduct.productName}'>
    </header>
    
    <h4 class='productName'>${singleProduct.productName}</h4>
    <h4 class='productPrice'><del> CAD $  ${singleProduct.productActualPrice}</del> </h4> 
    <h4 class='blink'> Sale CAD $ ${singleProduct.productDiscountedPrice}</h4>
    <button type='button' class='button'>Add to Cart </button>  | <button id='btnSeeMore' onclick='toggleShowMoreDetails(${singleProduct.productId})' class='btn-see-more button'>See More</button>

    <div id='productDetails${singleProduct.productId}' class='product-details'>
    <h4>${singleProduct.productDescription} </h4>
    <h4>Color : ${singleProduct.productColor}</h4>
    <h4>Size : ${singleProduct.productSize} </h4>
    <h4>${singleProduct.productType}</h4> 
    <h4>${singleProduct.productCategory}</h4> 
    <h4>${singleProduct.productAvailable}</h4> 
    <h4>${singleProduct.productRating}</h4>
    </div>
  </article>`;
  
  return productList;
}



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

//start from sorting not working yet
//Declare variable for sorting
// Sort Products
// let textBoxSearch=document.getElementById("textBoxSearch");

// function sortProducts(event, arrToSort)
// {
//   event.preventDefault();
//   const searchProduct = event.target.elements.textBoxSearch.value;
//   // Copy the incoming Array (just in case)
//   let arrToShow = arrToSort.slice();
//   if (searchProduct ) {
//     // Filter by Namw
//     arrToShow = arrToShow.filter(prod => +prod.productName ===+searchProduct);
//   }
//   showSomeProducts(arrToShow);
// }
// Sort Products not working yet
// let allProducts=allProducts;
// let sortProducts=allProducts.split(/\W+/).filter(sortProduct=>sortProducts.lengh>2);
// sortProducts.sort((dropDownProductType,dropDownProductCategory)=>dropDownProductType.length-dropDownProductCategory.length);
// console.log(sortProducts);


// Toggle button to hide and show the main navbar
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




//Show the detail of the product with onclick of see more button
const handleClickOfMore = event => {
  if (!event.target.matches('btnSeeMore')) {
    return;
  }
  const courseid = parseInt(event.target.dataset.courseid);
  addItemToCart(courseid);
}

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































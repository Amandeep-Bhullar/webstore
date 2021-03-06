
let btnSeeMore = document.getElementById("btnSeeMore");
let cartCounter = 0;
const allProducts = [
  {
    productId: 1,
    productName: `Slim Fit Light Blue Suit Blazer`,
    productColor: ['Blue', 'White', 'Red'],
    productSize: `Small`,
    productDescription: 'Slim Fit Light Blue Suit Blazer',
    productType: 1,
    productCategory: 1,
    productActualPrice: 30,
    productAvailable: true,
    productDiscountedPrice: null,
    productRating: 4,
    productImageName: 'men-formal-&blue.jpg',
  },
  {
    productId: 2,
    productName: `Kenneth Cole New York Fencer Melton Coat`,
    productColor: [`Green`],
    productSize: `Medium`,
    productDescription: 'Kenneth Cole New York Fencer Melton Wool Maxi Coat',
    productType: 1,
    productCategory: 2,
    productActualPrice: 45,
    productAvailable: false,
    productDiscountedPrice: 29,
    productRating: 2,
    productImageName: 'women-formal-green2.jpg',
  },
  {
    productId: 3,
    productName: `Trixxi Long Sleeve Smocked Dress`,
    productColor: [`Black`],
    productSize: `Small`,
    productDescription: 'Trixxi Long Sleeve Smocked Dress (Big Girls)',
    productType: 1,
    productCategory: 3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'kid-girl-casual-black.gif',
  },
  {
    productId: 4,
    productName: `Slim Fit Yellow Suit Blazer`,
    productColor: [`Yellow`],
    productSize: `Large`,
    productDescription: 'Slim Fit Yellow Suit Blazer',
    productType: 1,
    productCategory: 1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'men-formal-yellow.jpg',
  },
  {
    productId: 5,
    productName: `Slim Fit Blazer With Contrast Lapel`,
    productColor: ['Blue'],
    productSize: `Medium`,
    productDescription: 'Slim Fit Blue Suit Blazer With Contrast Lapel',
    productType: 1,
    productCategory: 1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'men-formal-white.jpg',
  }
  ,
  {
    productId: 6,
    productName: `Women Elegant Two Button Business Suit`,
    productColor: [`Red`],
    productSize: `Large`,
    productDescription: 'Women Elegant Two Button Business Suits Tops Outwear ',
    productType: 1,
    productCategory: 2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: null,
    productRating: 4,
    productImageName: 'woman-formal-red.jpg',
  }
  ,
  {
    productId: 7,
    productName: `Slouchy Soft Brushed Casual Basic`,
    productColor: [`Yellow`],
    productSize: `Medium`,
    productDescription: 'Slouchy Soft Brushed Casual Basic',
    productType: 2,
    productCategory: 3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'kid-girl-casual-yellow.jpg',
  },
  {
    productId: 8,
    productName: `Casual Round Neck Loose Fit Short Sleeve`,
    productColor: [`Black`],
    productSize: `Medium`,
    productDescription: 'Casual Round Neck Loose Fit Short Sleeve T-Shirt Blouse Tops',
    productType: 2,
    productCategory: 2,
    productActualPrice: null,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'woman-casual-black.jpg',
  },
  {
    productId: 9,
    productName: `Mens Dress Shirts Regular Fit Long Sleeve`,
    productColor: [`Red`],
    productSize: `Medium`,
    productDescription: ' Mens Dress Shirts Regular Fit Long Sleeve Men Shirt',
    productType: 1,
    productCategory: 1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'men-formal-red-shirt.jpg',
  },
  {
    productId: 10,
    productName: `Office Workwear Sheath Dress`,
    productColor: ['Blue'],
    productSize: `Large`,
    productDescription: 'Office Workwear Sheath Dress',
    productType: 1,
    productCategory: 2,
    productActualPrice: 60,
    productAvailable: true,
    productDiscountedPrice: 40,
    productRating: 4,
    productImageName: 'woman-formal-blue.jpg',
  },
  {
    productId: 11,
    productName: `Neck Floor-Length Lace Chiffon `,
    productColor: [`Black`],
    productSize: `Large`,
    productDescription: 'Neck Floor-Length Lace Chiffon ',
    productType: 1,
    productCategory: 3,
    productActualPrice: 150,
    productAvailable: true,
    productDiscountedPrice: null,
    productRating: 4,
    productImageName: 'kid-girl-formal-black.gif',
  },
  {
    productId: 12,
    productName: `Short Sleeve Tie Front Knot Loose Fit `,
    productColor: [`Black`],
    productSize: `Small`,
    productDescription: 'Short Sleeve Tie Front Knot Loose Fit ',
    productType: 2,
    productCategory: 2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'woman-casual-shirt-black.jpg',
  },
  {
    productId: 13,
    productName: `Suits Slim Fit Formal Dress Clothes`,
    productColor: ['Blue'],
    productSize: `Medium`,
    productDescription: 'Suits Slim Fit Formal Dress Clothes',
    productType: 1,
    productCategory: 1,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'men-formal-blue2.jpg',
  },
  {
    productId: 14,
    productName: `Long Sleeve Round Neck Dress`,
    productColor: [[`White`]],
    productSize: `L`,
    productDescription: 'Long Sleeve Round Neck Dress',
    productType: 2,
    productCategory: 2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'women-casual-green.jpg',
  },
  {
    productId: 15,
    productName: `Lace Glitter Vintage Pageant Prom Dress`,
    productColor: [`Black`],
    productSize: `Large`,
    productDescription: 'Tulle Lace Glitter Vintage Pageant Prom Dress',
    productType: 1,
    productCategory: 3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'kid-girl-formal-black3.jpg.gif',
  },
  {
    productId: 16,
    productName: `Casual Round Neck Loose Fit Short Sleeve`,
    productColor: [`Black`],
    productSize: `Small`,
    productDescription: 'Casual Round Neck Loose Fit Short Sleeve',
    productType: 1,
    productCategory: 2,
    productActualPrice: 120,
    productAvailable: true,
    productDiscountedPrice: null,
    productRating: 4,
    productImageName: 'woman-casual-black.jpg',
  },
  {
    productId: 17,
    productName: `Adult Long Sleeve Tee`,
    productColor: [`White`],
    productSize: `Large`,
    productDescription: 'Adult Long Sleeve Tee',
    productType: 2,
    productCategory: 1,
    productActualPrice: 130,
    productAvailable: true,
    productDiscountedPrice: 100,
    productRating: 4,
    productImageName: 'men-shirt-brown9.jpg',
  },
  {
    productId: 18,
    productName: `Women 2 Piece Sport Outfits Long Sleeve`,
    productColor: [`Yellow`],
    productSize: `Small`,
    productDescription: 'Women 2 Piece Sport Outfits Long Sleeve',
    productType: 2,
    productCategory: 2,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'woman-casual-yellow.jpg',
  },
  {
    productId: 19,
    productName: `Girls logo denim short playsuit`,
    productColor: ['Blue'],
    productSize: `Small`,
    productDescription: 'Girls logo denim short playsuit',
    productType: 1,
    productCategory: 3,
    productActualPrice: 50,
    productAvailable: true,
    productDiscountedPrice: 39,
    productRating: 4,
    productImageName: 'kid-casual-blue10.jpg',
  },
  {
    productId: 20,
    productName: `lassic,body-defining slim fit suit`,
    productColor: ['Blue'],
    productSize: `Large`,
    productDescription: 'lassic,body-defining slim fit suit',
    productType: 1,
    productCategory: 3,
    productActualPrice: 120,
    productAvailable: true,
    productDiscountedPrice: null,
    productRating: 4,
    productImageName: 'kid-formal-blue10.jpg',
  },
  {
    productId: 21,
    productName: `Winter Sherpa Denim Jacket Windbreaker`,
    productColor: ['Blue'],
    productSize: `Large`,
    productDescription: 'Winter Sherpa Denim Jacket Windbreaker',
    productType: 2,
    productCategory: 1,
    productActualPrice: 60,
    productAvailable: true,
    productDiscountedPrice: 50,
    productRating: 4,
    productImageName: 'men-casual-brown-leather-tab-collar-zip-jacket10.jpg',
  },
  {
    productId: 22,
    productName: `Office Workwear Sheath Dress`,
    productColor: ['Blue'],
    productSize: `Large`,
    productDescription: 'Office Workwear Sheath Dress',
    productType: 1,
    productCategory: 2,
    productActualPrice: 155,
    productAvailable: true,
    productDiscountedPrice: 95,
    productRating: 4,
    productImageName: 'women-formal-white9.jpg',
  },
  {
    productId: 23,
    productName: `Wool Blend Blue Multi Plaid Belted Coat `,
    productColor: [`Black`],
    productSize: `Small`,
    productDescription: 'Wool Blend Blue Multi Plaid Belted Coat',
    productType: 1,
    productCategory: 2,
    productActualPrice: 70,
    productAvailable: true,
    productDiscountedPrice: 49,
    productRating: 4,
    productImageName: 'women-formal-black-jacket10.jpg',
  },
  {
    productId: 24,
    productName: `Slim Fit Light Blue Suit Blazer`,
    productColor: ['Blue'],
    productSize: `Small`,
    productDescription: 'Slim Fit Light Blue Suit Blazer',
    productType: 2,
    productCategory: 1,
    productActualPrice: 30,
    productAvailable: true,
    productDiscountedPrice: null,
    productRating: 4,
    productImageName: 'men-casual-shirt-royalblue9.jpg',
  }
];

// See more details toggle button
function toggleShowMoreDetails(productId) {
  let productDiv = document.getElementById(`productDetails${productId}`);

  if (productDiv.style.display === 'none') {
    productDiv.style.display = 'block';
  } else {
    productDiv.style.display = 'none';
  }
}

//Getting single product information
function getProductListsAsHTML(singleProduct) {

  let price = `<h4 class='productPrice'>CAD $  ${singleProduct.productActualPrice}</h4>`;
  let available = ``;

  if (!singleProduct.productAvailable) {
    available = 'not-available'
    price = `<h4>Not available</h4>`;
  } else if (singleProduct.productDiscountedPrice) {
    price = `<h4 class='productPrice'><del> CAD $  ${singleProduct.productActualPrice}</del> </h4> 
    <h4 class='blink'> Sale CAD $ ${singleProduct.productDiscountedPrice}</h4>`
  }

  let radios = '';
  for (const color of singleProduct.productColor) {
    radios += `<input style="margin-left:10px;" type="radio" name="${singleProduct.productId}color" id="${singleProduct.productId}"> ${color}`
  }

  let productList = `
  <article id='products' class='product ${available}'>
    <header class='images'>
      <img src='img/${singleProduct.productImageName}' alt='${singleProduct.productName}'>
    </header>
    
    <h4 class='productName'>${singleProduct.productName}</h4>
    ${price}
    <button type='button' id='btnAddToCart' onclick='addProductsToCart(${singleProduct.productId})' class='button'>Add to Cart </button>  | <button id='btnSeeMore' onclick='toggleShowMoreDetails(${singleProduct.productId})' class='btn-see-more button'>See More</button>

    <div id='productDetails${singleProduct.productId}' class='product-details'>
    <h4>Description:${singleProduct.productDescription} </h4>
    <h4>Color : ${
    radios
    }
      </h4>
    <h4>Size : ${singleProduct.productSize} </h4>
    <h4>Product Type:${singleProduct.productType}</h4> 
    <h4>Product Category:${singleProduct.productCategory}</h4> 
    <h4>Product Availability:${singleProduct.productAvailable}</h4> 
    <h4>Product Rating:${singleProduct.productRating}</h4>
    </div>
  </article>`;

  return productList;
}

//Function for add to cart
function addProductsToCart() {
  cartCounter++;
  document.getElementById("lblProductCart").innerHTML = cartCounter;
}


//submitTheFilter is for the filtering by the submit button with id of filterForm
const submitTheFilter = event => {//documet.getElementById('')
  document.getElementById('').submit();
}


//Function of filter product by dropdown list of quick find for tablet and big screen
function filterProducts(event, arrToFilter) {
  event.preventDefault();
  const dropDownListType = parseInt(event.target.elements.dropDownProductType.value);//filter by type
  const dropDownListCategory = parseInt(event.target.elements.dropDownProductCategory.value); //filter by category
  const dropDownByPrice = parseInt(event.target.elements.dropDownSortByPrice.value); //sort by Price
  const dropDownSortName = parseInt(event.target.elements.dropDownSortByName.value); //sort by ASC DSC order
  // Copy the incoming Array (just in case)
  let arrToShow = arrToFilter.slice();
  if (dropDownByPrice) {
    if (dropDownByPrice == 1) // Lowest To Highest by price. highest to lowest
    {
      arrToShow = arrToShow.sort((x, y) => (x.productDiscountedPrice < y.productDiscountedPrice ? -1 : 1));
    }
    else {
      arrToShow = arrToShow.sort((x, y) => (x.productDiscountedPrice < y.productDiscountedPrice ? 1 : -1));
    }
  }
  if (dropDownListType) {
    // Filter by dropDownListType
    arrToShow = arrToShow.filter(prod => +prod.productType === +dropDownListType);
  }
  if (dropDownListCategory) {
    // Filter by dropDownListCategory
    console.log(dropDownListCategory);
    arrToShow = arrToShow.filter(prod => +prod.productCategory == +dropDownListCategory);
  }
  showSomeProducts(arrToShow);
}


//filter the products according to product type in mobile version
// Filter product by dropdown list of quick find for Mobile
function filterProductsM(event, arrToFilter) {
  event.preventDefault();
  const dropDownListType = parseInt(event.target.elements.dropDownProductTypeM.value);//filter by type
  const dropDownListCategory = parseInt(event.target.elements.dropDownProductCategoryM.value); //filter by category
  // Copy the incoming Array (just in case)
  let arrToShow = arrToFilter.slice();
  if (dropDownListType) {
    // Filter by dropDownListType
    arrToShow = arrToShow.filter(prod => +prod.productType === +dropDownListType);
  }
  if (dropDownListCategory) {
    // Filter by dropDownListCategory
    console.log(dropDownListCategory);
    arrToShow = arrToShow.filter(prod => +prod.productCategory == +dropDownListCategory);
  }
  showSomeProducts(arrToShow);
}


// Filter product by SearchBox
function filterProductsBySearchBox(event, arrToFilter) {
  event.preventDefault();
  const searchTextBox = event.target.elements.textBoxSearch.value.toLowerCase();
  // Copy the incoming Array (just in case)
  let arrToShow = arrToFilter.slice();
  if (searchTextBox) {
    // Filter by dropDownListType
    arrToShow = arrToShow.filter(prod => prod.productName.toLowerCase().includes(searchTextBox.trim()));
  }
  showSomeProducts(arrToShow);
}



// Toggle button to hide and show the main navbar in mobile and tablet
let getButton = document.querySelector(".btn");
let element = document.querySelector(".main-navbar");
let temp = true;
getButton.addEventListener('click', function () {
  temp = !temp; //Toggling temp variable to == true to false OR false to true ;
  if (!temp) { //If temp variable is false
    element.style.display = "none" // If temp is False
  } else {
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

function showSomeProducts(arr) {
  document.getElementById('products').innerHTML = arr.map(getProductListsAsHTML).join('\n');
}


//........execution.........
window.addEventListener('load', () => {
  //filter the products according to product type in mobile version
  document.getElementById("dropDownProductTypeM").addEventListener('change', event => console.log('Change'))
  const formSearchProductsM = document.getElementById("formQuickFindM");
  formSearchProductsM.addEventListener("submit", event => filterProductsM(event, allProducts));

  //filter the products according to product type
  document.getElementById("dropDownProductType").addEventListener('change', event => console.log('Change'))
  const formSearchProducts = document.getElementById("formQuickFind");

  //sort the products according to product price
  document.getElementById("dropDownSortByPrice").addEventListener('change', event => console.log('Change'))
  formSearchProducts.addEventListener("submit", event => filterProducts(event, allProducts));

  // sort by name is not working
  //document.getElementById("dropDownSortByName").addEventListener('change', event => console.log('Change'))
  //formSearchProducts.addEventListener("submit", event => filterProducts(event, allProducts));


  //search the products according to the name of product
  document.getElementById("textBoxSearch").addEventListener('change', event => console.log('Change'))
  const formSearchTextBox = document.getElementById("formMainSearch");
  formSearchTextBox.addEventListener("submit", event => filterProductsBySearchBox(event, allProducts));

  showSomeProducts(allProducts);
});















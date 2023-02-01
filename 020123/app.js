// import {products} from './products.js';


const fetchData = async () => {
  try {
    const resp = await fetch("https://dummyjson.com/products");
    const products = await resp.json();
    return products;
  } catch (error) {
    console.log(error);
  };
};

let products;
fetchData().then(data => {
  console.log(data)
  products = data.products;
  console.log(products);
  displayProducts(products);
  displayCategoryButtons();
})



const sectionCenter = document.querySelector('.section-center');
const buttonContainer = document.querySelector('.btn-container');

// Loop through the products, and create an HTML blueprint, display on the page.
const displayProducts = (products) => {
  // Blueprint the HTML structure for all product items
  const allProducts = Object.values(products).map((product)=>{
    return `
    <div class="product-item">
    <img src="${product.thumbnail}" alt="${product.title}" class="photo">
    <div class="item-info">
    <header>
    <h4>${product.title}</h4>
    </header>
    <p class="item-text">
    ${product.description}
    </p>
    <footer class="price">
    <h4>$${product.price}</h4>
    </footer>
    </div>
    </div>
    `
  }) 
  
  // Replace the inner HTML of .secion-center with category buttons
  sectionCenter.innerHTML = allProducts.join('');
}

// Extract all categories to an array, createa an HTML structure, display on the page
const displayCategoryButtons = () => {
  // Extract all categories to an array
  const categories = Object.values(products).reduce((acc, item)=>{
    if(!acc.includes(item.category)){
      acc.push(item.category)
    }
    return acc;
  },['all'])
  
  // Blueprint the button structure for all category items
  const allCategories = categories.map((category)=>{
    return `<button type="button" class="filter-btn">${category}</button>`
  })
  
  // Replace the inner HTML of .btn-container with category buttons
  buttonContainer.innerHTML = allCategories.join('');

  // Add event listener to all catergory buttons
  const filterButtons = buttonContainer.querySelectorAll('.filter-btn');

  filterButtons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
      // console.log(e.target.innerHTML);
      if(e.target.innerHTML === 'all'){
        displayProducts(products);
      } else {
        const filteredProducts = products.filter((product) => e.target.innerHTML === product.category)
        displayProducts(filteredProducts)
      }
    });
  });
}

// Invoke functions
window.addEventListener('DOMContentLoaded', ()=>{
  displayProducts(products);
  displayCategoryButtons();
})




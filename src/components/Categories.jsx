import React ,{useContext} from 'react';
import './style.css';
  import { CartContext } from '../context/Context';
const Categories= () => {

  const categories = [
    { label: 'All Categories', value: '' },
    { label: 'Smartphones', value: 'smartphones' },
    { label: 'Laptops', value: 'laptops' },
    { label: 'Fragrances', value: 'fragrances' },
    { label: 'Skincare', value: 'skincare' },
    { label: 'Groceries', value: 'groceries' },
    { label: 'Mens-Shoes', value: 'mens-shoes' },
    { label: 'Mens-Shirts', value: 'mens-shirts' },
    { label: 'Mens-Watches', value: 'mens-watches' },
    { label: 'Home-decoration', value: 'home-decoration' },
    { label: 'Furniture', value: 'furniture' },
    { label: 'Womens-dresses', value: 'womens-dresses' },
    { label: 'Womens-shoes', value: 'womens-shoes' },
    { label: 'Womens-watches', value: 'womens-watches' },
    { label: 'Womens-jewellery', value: 'womens-jewellery' },
  ];


 const {
   
   dispatchCart,
 } = useContext(CartContext);
const handleCategoryChange = (category) => {
 
  dispatchCart({ type: 'FETCH_SEARCH_RESULTS', payload: [] });
  const productContainerDiv = document.getElementById('productContainer');
  if (productContainerDiv) {
    productContainerDiv.scrollIntoView({ behavior: 'smooth' });
  }
  dispatchCart({ type: 'SET_SELECTED_CATEGORY', payload: category });


  console.log(category);
};



  return (
    <div className='categories-container'>
      <div className='categories'>
        {categories.map((category) => (
          <button
            key={category.value}
            value={category.value}
            className='category-item'
            onClick={(e) => handleCategoryChange(e.target.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;

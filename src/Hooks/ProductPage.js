


// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import AddProductPage from './AddProductForm';
// import './product.css';

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products?limit=8');
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getProducts();
//   }, []);

//   const handleProductAdded = (product) => {
//     // Logic to handle the newly added product
//     console.log('New product:', product);
//   };

//   return (
//     <div id="products">
       
//       <Link to="/add-product" className="add-product-button">Add Product</Link>

//       <div className='product'>

//       {products.map((item) => (
        
//         <Link to={`/product/${item.id}`} key={item.id} className="product-link">
//           <div className="main">
//             <img src={item.thumbnail} alt={item.title} />
//             <h2>{item.title}</h2>
//             <p>{item.price}</p>
//             <p>{item.discountPercentage}</p>
//           </div>
//         </Link>
//       ))}
//        </div>
     

//       {/* <AddProductPage onProductAdded={handleProductAdded} /> */}
     
//     </div>
//   );
// };

// export default ProductPage;

import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
// import AddroductPage from './AddProductForm'; // Commented out to resolve the ESLint warning
import './product.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=8');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  // const handleProductAdded = (product) => {
  //   // Logic to handle the newly added product
  //   console.log('New product:', product);
  // };

  return (
    <div id="products">
      <Link to="/add-product" className="add-product-button">Add Product</Link>

      <div className='product'>
        {products.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="product-link">
            <div className="main">
              <img src={item.thumbnail} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p>{item.discountPercentage}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* <AddProductPage onProductAdded={handleProductAdded} /> */}
     
    </div>
  );
};

export default ProductPage;


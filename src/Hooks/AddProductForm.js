


import React, { useState } from 'react';

const AddProductPage = ({ onProductAdded }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the product data
    const productData = {
      title: productName,
      /* other product data */
    };

    try {
      // Send a POST request to the endpoint
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Call the onProductAdded function with the new product details
        onProductAdded(productData);

        // Reset the form inputs
        setProductName('');
        setProductPrice('');
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Failed to add product', error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productPrice">Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProductPage;


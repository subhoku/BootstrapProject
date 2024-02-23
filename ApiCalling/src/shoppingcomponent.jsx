import React, { useState, useEffect } from 'react';

function ShoppingComponent() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        data.unshift('All Products');
        setCategories(data); // Fixed the placement of setCategories
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <label>Select a Category</label>
      <select className="form-select" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Select...</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && <p>Selected category: {selectedCategory}</p>}
    </div>
  );
}

export default ShoppingComponent;

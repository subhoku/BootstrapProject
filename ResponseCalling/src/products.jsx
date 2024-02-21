export default function DataBinding() {
  // Products array with 3 objects
  var products = [
    {
      Name: "Samsung TV",
      Price: 54323.23,
    },
    {
      Name: "Sony",
      Price: 154323.23,
    },
    {
      Name: "Micromax",
      Price: 24323.23,
    },
    {
      Name: "Sony",
      Price: 154323.23,
    },
    
  ];

  // Use map to create an array of JSX elements
  const productRows = products.map((product, index) => (
    <div key={index} className="product-row">
      <span className="product-name">{product.Name}</span>
      <span className="product-price">${product.Price.toFixed(2)}</span>
    </div>
  ));

  return (
    <div className="container">
      <h2>Product Table</h2>
      {productRows}
    </div>
  );
}



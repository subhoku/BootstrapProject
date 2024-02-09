// src/App.js

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import BillingSoftComp from './BillingSoftComp';// Import the new component

function App() {
  const items = ['Samosa', 'VadaPav', 'PaniPuri', 'Kachori', 'Dosa','Masala Dosa'];

  return (
    <div><center>
      <Header />
      <BillingSoftComp items={items} /> {/* Render the new component */}
      </center> </div>
  );
}

export default App;

// src/billingsoftComp.jsx

import React from 'react';

const BillingSoftComp = ({ items }) => {
  return (
    <div className="billingsoftware">
      <center>
        <input id="display" type="text" />
      </center>
      <div id="buttonsContainer">
        {items.map((itemname, index) => (
          <button key={index} className="button">
            {itemname}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BillingSoftComp;

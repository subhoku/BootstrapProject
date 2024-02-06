import React from "react";
import './App.css';
function ElectronicProducts(){
 let electronics=["mobile", "pC", "laptop", "tablet","Luxury Products","Food"];
    return(
        <>
        <h1>Electronic Product List</h1>
        <ul className="list-group" class="bg-color">
          {electronics.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
        </>
    );
}
export default ElectronicProducts
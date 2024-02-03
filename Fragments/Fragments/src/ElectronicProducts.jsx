import React from "react";

function ElectronicProducts(){
 let electronics=["mobile", "pC", "laptop", "tablet","Food"];
    return(
        <>
        <h1>Electronic Product List</h1>
        <ul className="list-group">
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
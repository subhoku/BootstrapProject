import React from "react";

function ElectronicProducts(){
 let electronics=["mobile", "pC", "laptop", "tablet"];
    return(
        <>
        <h1>Electronic Product List</h1>
        <ul className='list-group'>
    <li className="list-group-item">Mobile</li>
    <li className="list-group-item">PC</li>
    <li className="list-group-item">Laptop</li>
    </ul>
        </>
    );
}
export default ElectronicProducts
import { error } from "console";
import React, { useEffect, useState } from "react";
type product = {
    brand: string,
    category: string,
    discountPercentage: number
    id:number
  }
type props = { product: product }
const ArrayExample: React.FC<props> = (props) => {
  
    const prod: product = props.product;
    
    return <>
        
        <table>
            <thead>
                <th>Brand</th>
                <th>Brand</th>
                <th>Brand</th>
            </thead>
            <tr>
                <td>{ prod.brand}</td>
                <td>{ prod.category}</td>
                <td>{ prod.discountPercentage}</td>
            </tr>
        </table>
        <button > Export</button>
        </>
};

export default ArrayExample;
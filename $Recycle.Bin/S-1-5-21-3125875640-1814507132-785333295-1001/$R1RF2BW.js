import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const ProductDetails=()=>{

    const[singleProdct,setSingleProduct]=useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData=async()=>{
        const data=await fetch("https://fakestoreapi.com/products/1");
        const resData=await data.json();
        setSingleProduct(resData);
    }
    


    return (
        <div className='product'>
        {/* <img src={image}  className='productImage'/>
        <p >{title}</p>
         <h4>Rating:{rating.rate}</h4>
         <h4>Price:{price}</h4> */}
        < h1>product opening in new page</h1>
     </div>
    )
}
export default ProductDetails;
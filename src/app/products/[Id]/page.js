import React from 'react';

export const generateMetadata = async ({params}) => {
 const title = await new Promise((res)=>{
  setTimeout(()=>{
    res(`iphone ${params.Id}`)
  },1000)
 })
  return {
    title: `Product ${title}`
  };
};

function ProductDetails({ params }) {
  return (
    <div>ProductDetails {params.Id}</div>
  );
}

export default ProductDetails;

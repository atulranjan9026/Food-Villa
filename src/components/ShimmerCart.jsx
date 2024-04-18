import React from 'react'
import "./Shimmer.css";
import axios from "axios";
import { Shimmer } from "react-shimmer";

const ShimmerCart = ()=>{
    const hover=()=>{
        return (
        <div className='cardShimmer'  >
        {/* <Skeleton circle={true} height={100} width={100} /> */}
        <h2 ><Shimmer circle={true} height={300} width={250}/></h2>
        {/* <h2 ><Shimmer /></h2>
        <h3><Shimmer /></h3>
        <h4><Shimmer /></h4>
        <h4> <Shimmer /></h4> */}
        </div>)
    }
  return(
  <>
       <div className='listShimmer'>       
        {Array.from({ length: 16 }).map((_, index) => (
          <React.Fragment key={index}>
            {hover()}
          </React.Fragment>
        ))}
      </div>
  </>
) }

export default ShimmerCart;

// const ShimmerCart = ()=>{
// return (<>
// <h1>Atul</h1></>)
// }
// export default ShimmerCart;
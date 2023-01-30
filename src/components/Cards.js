import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Star from "../elements/Star";
import { addToCart } from "../redux/actions/cartAction";

const Cards = ({data}) => {
  const dispatch = useDispatch()
  const quantity = 1
  const handleClick = ()=>{
    dispatch(addToCart(data, quantity))
  }
  return (
    <div className="p-2 mx-4 rounded">
      <Link to={`product/${data.id}`} state={data}>
      <div className="">
        <img src={data?.image} className="w-full md:h-80 h-56 rounded" alt="Product for testing" />
      </div>
      </Link>
      <div>
        <div className="flex justify-between py-1">
        <Link to={`product/${data.id}`} state={data}>
          <h2 className="font-bold text-2xl text-gray-700 overflow-hidden h-8">{data?.title}</h2>
        </Link>
          <span className="font-bold text-2xl text-gray-700">₹{data?.price}</span>
        </div>
        <h3 className="text-sm py overflow-hidden">{data?.category}</h3>
        <div className="flex text-sm items-center py-1">
          <Star />
          <Star />
          <Star />
          <Star />
          <span>{`(${data?.rating?.count})`}</span>
        </div>
        <div className="flex justify-between">          
        <button onClick={()=>handleClick()} className="my-2 px-5 md:px-8 py-2 border border-[#05b514] text-[#05b514] rounded-full font-semibold hover:text-white hover:bg-[#05b514] hover:delay-150 transition">
          Add to Cart
        </button>
        <button className="my-2 px-5 md:px-12 items-center py-2 border flex border-[#05b514] hover:text-[#05b514] rounded-full font-semibold text-white bg-[#05b514] hover:bg-transparent hover:delay-150 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
          Add to Wishlist
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

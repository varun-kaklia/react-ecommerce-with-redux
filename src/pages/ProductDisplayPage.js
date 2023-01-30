import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Star from '../elements/Star'
import { addToCart } from '../redux/actions/cartAction'

const ProductDisplayPage = () => {
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    const {state} = useLocation()
    console.log("State",state)
    const handleClick = ()=>{
        dispatch(addToCart(state, quantity))
    }
  return (
    <div className='p-4'>
        <div className='md:grid md:grid-cols-2'>
            <div className='p-2'>
                <div>
                    <img src={`${state?.image}`} alt='Product1'  className='rounded-md px-1 w-full md:h-[70vh]'/>
                </div>
                <div className='flex p-2 py-4 overflow-scroll md:overflow-auto'>
                    <img src={`${state?.image}`} alt='Product1' className='rounded-md w-full pr-2 h-[10vh]'/>
                    <img src={`${state?.image}`} alt='Product1' className='rounded-md w-full px-2 h-[10vh]'/>
                    <img src={`${state?.image}`} alt='Product1' className='rounded-md w-full px-2  h-[10vh]'/>
                    <img src={`${state?.image}`} alt='Product1' className='rounded-md w-full pl-2 h-[10vh]'/>
                </div>
            </div>
            <div className='md:px-14 px-4 py-2'>
                <h2 className='text-gray-700 text-3xl font-bold'>{state?.title}</h2>
                <div className='py-2 md:pr-60'>
                <span className=' text-gray-700 text-sm font-semibold'>{state?.category}</span>
                </div>
                <div className='flex items-center'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <span>{`(${state?.rating?.count})`}</span>
                </div>
                <div className="h-[1px] w-full bg-gray-200 my-4">
                </div>
                <div>
                    <h3 className='font-semibold text-3xl'>₹{state?.price}</h3>
                </div>
                <div className="h-[1px] w-full bg-gray-200 my-4">
                </div>
                <div className='md:flex'>
                <div className='bg-gray-200 rounded-full md:w-[25%] text-center px-6 py-3 justify-center'>
                    <button className='px-1 font-bold' onClick={()=>quantity <= 1 ? null: setQuantity(quantity-1)}>-</button>
                    <input type="number" placeholder={quantity} onChange={(e)=>setQuantity(e.target.value)} className='bg-gray-200 text-black text-center w-16 outline-none' />
                    <button className='px-1 font-bold' onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
                <span className='px-8 block py-2 md:py-0'>Only <span className='text-red-500'>12 items</span> left! <br className='hidden md:block'/> Don't miss it</span>
                </div>
                <div className='py-4 md:grid md:grid-cols-2 grid-cols-1 md:w-[70%]'>
                    <button className='bg-[#05b514] text-gray-100 py-4 my-2 md:my-0 w-full md:mr-2 mr-0 rounded-full hover:text-[#05b514] hover:bg-transparent border border-[#05b514] hover:transition hover:delay-150 font-semibold' onClick={()=>handleClick()}>Add To Cart</button>
                    <button className='hover:bg-[#05b514] flex justify-center items-center hover:text-gray-100 md:my-0 md:ml-2 ml-0 my-2 py-4 w-full rounded-full text-[#05b514] bg-transparent border border-[#05b514] hover:transition hover:delay-150 font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    Add to Wishlist
                    </button>
                </div>
                <div className="h-[1px] w-full bg-gray-200 my-4">
                </div>
                <div>
                    <h4 className='text-2xl font-semibold'>Description</h4>
                    <span>{state?.description}</span>
                </div>
                <div className="h-[1px] w-full bg-gray-200 my-4">
                </div>
                <div className='py-4 md:w-[70%]'>
                    <div className='p-4 w-full border border-gray-400 rounded shadow'>
                        <div className='flex p-2 w-full col-span-6'>
                            <div className='pr-2'>
                                <img src='images/delivery-truck.png' alt='Free Delivery' className='w-8 h-8'/>
                            </div>
                            <div className='block'>
                                <span className='font-semibold'>Free Delivery</span><br/>
                                <span className='text-sm underline'>Please Check Postal code before delivery</span>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-gray-200 my-4">
                        </div>
                        <div className='flex p-2 w-full col-span-6'>
                            <div className='pr-2'>
                                <img src='images/delivered.png' alt='Return Delivery' className='w-8 h-8'/>
                            </div>
                            <div className='block'>
                                <span className='font-semibold'>Return Delivery</span><br/>
                                <span className='text-sm'>Free 30 Days Returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplayPage
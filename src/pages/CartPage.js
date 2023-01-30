import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, addToCart } from '../redux/actions/cartAction'

const CartPage = () => {
    const {cartItems} = useSelector((state)=>state.cartReducer)
    const dispatch = useDispatch()
    console.log("Cart Items", cartItems)
    const newValue = cartItems.reduce((x, item) => x + item.totalPrice, 0);
    const subTotal = Math.trunc(newValue)
    const completeHandleClick = ()=>{
        localStorage.removeItem("cartItems", JSON.stringify(cartItems));
        window.location.href="/"
    }
    const handleDelete = (item)=>{
        dispatch(deleteFromCart(item))
    }
  return (
    <div>
        <h1 className='p-2 text-center font-semibold text-2xl'>Cart</h1>
        <div className='md:grid grid-cols-2'>
            <div>
            <h3 className='text-center font-semibold text-2xl'>Items List</h3>
            {
                cartItems?.map((item)=>{
                    return(
                        <div key={item?.id} className="flex border w-full shadow-sm rounded p-2 items-center">
                            <h2 className='font-semibold w-[50%]'>{item?.title}</h2>
                            <div className='md:w-[25%] text-center px-4 py-3 justify-center'>
                                <button className='py-2 px-4 font-bold bg-gray-200 rounded-full' onClick={()=>item?.quantity <= 1 ? null:dispatch(addToCart(item, item.quantity - 1))}>-</button>
                                <input type="number" placeholder={item?.quantity} className=' text-black text-center w-16 outline-none' />
                                <button className='py-2 px-4 font-bold bg-gray-200 rounded-full' onClick={()=>dispatch(addToCart(item, item.quantity + 1))}>+</button>
                            </div>
                            <span className='px-2'>₹{item.price?item?.price * item?.quantity: item?.product?.price * item?.quantity}</span>
                            <div>
                                <button onClick={()=>handleDelete(item)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className='px-6 md:py-0 py-4'>
                <h3 className='text-center font-semibold text-2xl'>SubTotal</h3>
                <div className='flex justify-between md:px-[25%] px-4'>
                <span className='font-semibold text-xl'>Sub Total of All Items</span>
                <span className='font-semibold text-xl'>₹{subTotal?subTotal:0}</span>
                </div>
                <div className='text-center'>
                <button className='px-6 py-2 bg-[#05b514] rounded-full border-[#05b514] border text-gray-100 hover:bg-transparent hover:text-[#05b514] transition hover:delay-100' onClick={()=>completeHandleClick()}>Complete Purchase</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage
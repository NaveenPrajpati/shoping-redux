import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { cartitemR } from '../redux/slices/cartSlice';

export default function ItemCart() {
    const sele = useSelector((state) => state.cart);
    const dispatch=useDispatch();
  return (
    <div className='flex justify-around'>
        <div className=''>
        {sele.cartit.map(itm=><div className='bg-slate-100 m-1 w-[300px] p-3 h-[300px] rounded-lg'>
      <img src={itm.images} alt="" />
       <p className='font-bold'>{itm.title}</p>
      <div className='flex justify-between mt-4'>
        <p className='font-bold text-purple-600'>₹{itm.price}</p>
        <button onClick={()=>dispatch(cartitemR(itm.id))} className='font-bold bg-white rounded-md px-1 text-purple-500'>Remove</button>
      </div>
      
      </div>)}

    </div>

    <div className=''></div>
    </div>
  )
}

import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { cartitem } from '../redux/slices/cartSlice';


export default function Item() {
  const sele = useSelector((state) => state.home);
  const dispatch=useDispatch();

  return (
    <div className='flex flex-wrap justify-around'>
      {sele.data.map(itm=><div className='bg-slate-100 m-1 w-[300px] p-3 h-[300px] rounded-lg'>
      <img src={itm.images} alt="" />
       <p className='font-bold'>{itm.title}</p>
      <div className='flex justify-between mt-4'>
        <p className='font-bold text-purple-600'>₹{itm.price}</p>
        <button onClick={()=>dispatch(cartitem(itm))} className='font-bold bg-white rounded-md px-1 text-purple-500'>Add to cart</button>
      </div>
      
      </div>)}
    </div>
  )
}

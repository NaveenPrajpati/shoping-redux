import React from 'react'
import { Link } from 'react-router-dom'
import { BiCartAlt } from "react-icons/bi";
import { useSelector,useDispatch } from 'react-redux'
import { cartitem } from '../redux/slices/cartSlice';


export default function Navbar() {
    const sele = useSelector((state) => state.cart);
   
    return (
        <nav className='w-full bg-slate-300 py-2'>
            <div className="w-[80%] mx-auto flex  justify-between items-center">

            <Link to="/"><h2>navbar</h2></Link>
                
                <div className='flex items-center'>
                    <label>your cart</label>
                    <Link to="/cart"><BiCartAlt className='text-purple-900 inline-block'/><span>{(sele.cartit||[]).length}</span></Link>
                </div>
            </div>

        </nav>
    )
}

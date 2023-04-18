import React, { useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners'
import axios from 'axios';
import Item from '../components/Item';
import { useDispatch, useSelector } from 'react-redux';
import { load,data} from '../redux/slices/homeSlice';

export default function Home() {


  const dispatch = useDispatch();
  const selector = useSelector((state) => state.home);

  async function getData() {
    dispatch(load(true))
    console.log("fetch start")
    await axios.get("https://api.escuelajs.co/api/v1/products")
      .then(res => {
        console.log(res.data)
        dispatch(data(res.data));        
      })
    dispatch(load(false))
   
  }

  useEffect(()=>{
     getData();
  },[])



  return (
    <div> <h1>Home</h1>
      {selector.loading && <MoonLoader
        color="#36d7b7"
      />}
<Item></Item>
    </div>
  )
}

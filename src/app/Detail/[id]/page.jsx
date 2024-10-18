'use client'
import {} from 'tailwindcss'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import './Detail.css'

function Detail() {

 const {id} =useParams();

 
  const [datas,setDatas]= useState([]);
 
  useEffect(() => {

    
    const fetchProducts = async () => {
     
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json(); 
        setDatas(data);  
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);  
      }
  
  }
    fetchProducts();
  }, [id]);
 
  return (
    <div className="detail">
      <h2 className="head "> Details</h2>
       
          <div>
         
         <img src={datas.thumbnail}/>  
         <p><span style={{fontWeight:'900', color: '#330906'}}>Title: </span>{datas.title}</p>
         <p><span style={{fontWeight:'900', color: '#330906'}}>Category: </span>{datas.category}</p>
          <p><span style={{fontWeight:'900', color: '#330906'}}>Description: </span>{datas.description}</p>
          <p><span style={{fontWeight:'900', color: '#330906'}}>Price: </span>{datas.price}</p>
           
          </div>
     
    </div>
  )
};

export default Detail;


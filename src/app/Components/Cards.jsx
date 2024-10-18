'use client'
import { Button, Card } from "react-bootstrap";
import './Cards.css'
import { useEffect, useState } from "react";
import Link from "next/link";

function Cards() {
  const [datas,setDatas]= useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
     
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json(); 
        setDatas(data.products);  
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);  
      }
    };
    fetchProducts();
  }, []);
  // console.log(datas);
  return (
    <div className="main">
     
{datas.length > 0 ? (
        datas.map(display => (
          <div className="card">
            <img src={display.thumbnail} alt={display.title} />
            <h6 className='head'>{display.title}</h6>
            <p className="para">Price : {display.price}</p>
            <Button className="button"><Link href={`/Detail/${display.id}`}>View Details</Link></Button>
            {/* <Button className="button"><Link href='/Detail'>View more</Link></Button> */}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};

export default Cards;
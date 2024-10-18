'use client'

import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { useAuth } from "./Context";


function Banner() {
  const { user} = useAuth();
  return (
    <div>

{user ? (
               <div style={{backgroundColor:'#f5ecd5',height:'400px',padding:'5%'}}>
               <Link href="/User" style={{float:'right'}}>Profile</Link>
               <Link href="/Home" style={{float:'right',marginRight:'5%'}}>Products</Link>
              
             
       
              <h2 style={{textAlign:'center',fontSize:'34px',color:'#330906',paddingTop:'10%'}}>Home</h2>
              
             </div>
            ) : (
              <div style={{backgroundColor:'#f5ecd5',height:'400px',padding:'5%'}}>
              
              <Link href="/Login" style={{float:'right',marginRight:'5%'}}>Login</Link>
            
      
             <h2 style={{textAlign:'center',fontSize:'34px',color:'#330906',paddingTop:'10%'}}>Home</h2>
             
            </div>
            )}
      
    
    </div>
  )
};

export default Banner;


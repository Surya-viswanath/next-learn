"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Signup() {
  const[name,setName]= useState('');
  const[phone,setPhone]= useState('');
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');
  const handlename=(e)=>{
    setName(e.target.value);
  }
  const handlephone=(e)=>{
    setPhone(e.target.value);
  }
  const handleemail=(e)=>{
    setEmail(e.target.value);
  }
  const handlepassword=(e)=>{
    setPassword(e.target.value);
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name, 
          email: email,
          phone: phone,
          password: password,  
          expiresInMins: 30, 
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Created successful:', data);
       
      } else {
        console.error('failed:', data.message);
      }
    } catch (error) {
      console.error('Error submitting the signup form:', error);
    }
  };
  return (
    <div>
      
    
      <Form style={{width:'500px',margin:'5% 30%',border:'1px solid black', borderRadius:'5px',padding:'3%',backgroundColor:'#f5ecd5'}}>
       <h2 style={{fontSize:'34px',textAlign:'center',color:'#330906',marginBottom:'5%'}}>Create your Account</h2> 

       <Form.Group className="mb-3" style={{display:'flex'}}>
       <Form.Label htmlFor="name" style={{marginTop:'10px'}}>Name: </Form.Label>
      <Form.Control
        type="name"
        id="name"
        placeholder="enter name"
        onChange={handlename}
        style={{marginLeft:'33px'}}
      />
       </Form.Group>
      <Form.Group className="mb-3" style={{display:'flex'}}>
       <Form.Label htmlFor="email" style={{marginTop:'10px'}}>Email: </Form.Label>
      <Form.Control
        type="email"
        id="email"
        placeholder="enter email"
        onChange={handleemail}
        style={{marginLeft:'40px'}}
      />
      </Form.Group>
      <Form.Group className="mb-3" style={{display:'flex'}}>
       <Form.Label htmlFor="phone" style={{marginTop:'10px'}}>Phone: </Form.Label>
      <Form.Control
        type="phone"
        id="phone"
        placeholder="enter your number"
        onChange={handlephone}
        style={{marginLeft:'33px'}}
      />
       </Form.Group>
      <Form.Group className="mb-3" style={{display:'flex'}}>
       <Form.Label htmlFor="inputPassword5" style={{marginTop:'10px'}}>Password: </Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        placeholder="enter password"
        onChange={handlepassword}
        aria-describedby="passwordHelpBlock"
        style={{marginLeft:'10px'}}
      />
      </Form.Group>
      <Button type="submit" onClick={handleSubmit} style={{marginRight:'110px',backgroundColor:'#330906',border:'none',borderRadius:'5px'}}>Create</Button>
      Already have an account?<Link href="/Login" style={{color:'#330906'}}>Login</Link>
      </Form>
    </div>
  )
};

export default Signup;
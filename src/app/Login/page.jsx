"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../Components/Context";

function Login() {
  const[name,setName]= useState('');
  const[password,setPassword]= useState('');
  const router = useRouter();
  
  const { login } = useAuth();
  const handlename=(e)=>{
    setName(e.target.value);
  }
  const handlepassword=(e)=>{
    setPassword(e.target.value);
  }

    
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: name, 
        password: password,  
        expiresInMins: 30, 
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('Login successful:', data);
      login(data);
      router.push('/Home'); 
     
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Error submitting the login form:', error);
  }
};

  return (
    <div>
      
    
      <Form style={{width:'500px',margin:'5% 30%',border:'1px solid black', borderRadius:'5px',padding:'3%',backgroundColor:'#f5ecd5'}}>
       <h2 style={{fontSize:'34px',textAlign:'center',color:'#330906',marginBottom:'5%'}}>Login</h2> 
      <Form.Group className="mb-3" style={{display:'flex'}}>
       <Form.Label htmlFor="name" style={{marginTop:'10px'}}>Username: </Form.Label>
      <Form.Control
        type="name"
        id="name"
        placeholder="enter user name"
        value={name}
        onChange={handlename}
        style={{marginLeft:'10px'}}
      />
      </Form.Group>
      <Form.Group className="mb-3" style={{display:'flex'}}>
       <Form.Label htmlFor="inputPassword5" style={{marginTop:'10px'}}>Password: </Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        placeholder="enter password"
        aria-describedby="passwordHelpBlock"
        onChange={handlepassword}
        value={password}
        style={{marginLeft:'10px'}}
      />
      </Form.Group>
      <Button type="submit" onClick={handleSubmit} style={{marginRight:'130px',backgroundColor:'#330906',border:'none',borderRadius:'5px'}}>Login</Button>
      Don't have an account?<Link href="/Signup" style={{color:'#330906'}}>Signup</Link>
      </Form>
    </div>
  )
};

export default Login;
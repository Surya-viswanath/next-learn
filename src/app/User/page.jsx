'use client'

import { Button } from "react-bootstrap";
import { useAuth } from "../Components/Context";
import Link from "next/link";


function page() {
  const { user, logout } = useAuth();


  if (!user) {
    if (typeof window !== 'undefined') {
        window.location.href = '/';
    }
    return <p>Redirecting...</p>;
}
  console.log(user);
  return (
    <div style={{width:'400px',marginLeft:'18%',padding:'3%',justifyContent:'center',justifyItems:'center',backgroundColor:'#f5ecd5',border:'1px solid black',borderRadius:'5px'}}>
      <img src={user.image}/>
      <p>First Name:{user.firstName}</p>
      <p>Second Name:{user.lastName}</p>
      <p>User Name:{user.username}</p>
      <p>Email:{user.email}</p>
      <p>Gender :{user.gender}</p>
      <div style={{marginTop:'40px'}}>
      <Button onClick={logout} style={{backgroundColor:'#330906',border:'none',marginRight:'100px'}}>Logout</Button>
      <Button  style={{backgroundColor:'#330906',border:'none'}}><Link href='/'>Edit</Link></Button>
      </div>
    </div>
  )
};

export default page;
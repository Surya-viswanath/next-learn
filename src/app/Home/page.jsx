import Link from "next/link";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";

import Content from "../Components/Content";
import Menu from "../Components/Menu";
import '../Style.css'

function Home() {
  return (
    <div>
      <div>
      <nav className='menu'>
      <Link href="/Home" className='link'>Products</Link>
        <Link href="/" className='link'>Home</Link>
        <Link href="/About" className='link'>About</Link>
        <Link href="/User" className='link'>Profile</Link>
        
      </nav>
     </div>
     <div>
     <Cards />
     </div>
      
  
 
    </div>
  )
};

export default Home;
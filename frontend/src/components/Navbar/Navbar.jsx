import React, {useContext, useState, useEffect} from 'react';
import logo from '../../assets/lo.png';
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import profile from "../../assets/woman.png"


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState('');

  const {getTotal,token,setToken} = useContext(StoreContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    // This will ensure the component re-renders when the token changes
  }, [token]);

  const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
  }

  return (
    <div className='container  w-full '>
      <div className='w-full  flex justify-between items-center gap-2 '>
        <div className='pt-0'>
        <Link to='/'> <img src={logo} alt="" className='h-20 w-30 pl-5 pt-3 ' /></Link>
        </div>
        <div className='hidden md:block'>
          <ul className='flex justify-between items-center gap-8 cursor-pointer'>
          <Link to='/'>  <li onClick={()=> setMenu('Home')} className={menu==='Home'? 'border-b border-black' : ''}>Home</li></Link>
            <li onClick={()=> setMenu('Menu')} className={menu==='Menu'? 'border-b border-black' : ''}>Menu</li>
            <li onClick={()=> setMenu('Contact-Us')} className={menu==='Contact-Us'? 'border-b border-black' : ''}>Contact-Us</li>
          </ul>
        </div>
        <div  className='  mr-6 flex justify-between items-center gap-7 '>
          <img src={search} alt="" className='h-10 w-15' />
          <div >
          <div className= {getTotal() ? 'w-2 h-2 bg-gray-800 rounded-full ml-8' :' ' }></div>
          <Link to='/cart'><img src={cart} alt="" className='h-10 w-15'/></Link>
          </div>
          {(!token) ?<div className='border border-black rounded-xl p-2 w-20 hover:bg-gray-200'>
            <h1 className='text-center' onClick={()=>setShowLogin(true)} >Sign In</h1> 
          </div> : 
          <div className='group relative'>
            <img src={profile} alt="" className='h-9 w-8 ' />
            <ul className='absolute text-center right-1 z-[9999] hidden w-[80px] rounded-md bg-white p-2 text-black group-hover:block shadow-md bg-grey-200 cursor-pointer'>
              <li>Orders</li>
              <li onClick={logout}>LogOut</li>
            </ul>
          </div>}
          
          </div>
      
      </div>
    </div>
  )
}

export default Navbar

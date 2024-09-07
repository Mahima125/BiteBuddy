import React, { useContext, useState } from 'react'
import cross from '../../assets/remove.png';
import { StoreContext } from '../context/StoreContext.jsx';
import axios from "axios";

const LoginPopup = ({setShowLogin}) => {
  
  const {url,token, setToken} = useContext(StoreContext);

  const [currentState, setCurrentState] = useState('Sign up');
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data =>({... data, [name]:value}))
  }
  
  const onLogin = async (event)=>{
    event.preventDefault()         //so that page doesnt reload
    
    let newUrl = url;
    if (currentState === 'Login'){
      newUrl += "/api/user/login"
    }else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data);

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false)
    }else{
      alert(response.data.message);
    }

  }
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  w-auto  h-auto ">
    <div  className='rounded-[30px]  bg-gray-200 p-7 '>
      <div className=' text-2xl font-bold text-center '>
      {currentState==='Sign up'? <p>Sign Up</p> : <p>Login</p> }
      <img src={cross} onClick={()=>{setShowLogin(false)}} className='h-6 w-6 absolute top-4 right-4' alt="" /> 
      </div>
      <form onSubmit={onLogin}>
      <div className='flex flex-col justify-center items-center gap-5 m-8 font-bold'>
        
          {currentState==='Sign up'? <label className='flex gap-4'>Name: <input name='name' onChange={onChangeHandler} value={data.name} type="text"   placeholder='Your name'  required /> </label>: ''}
          
          <label className='flex gap-4'>E-mail: <input  name='email' onChange={onChangeHandler} value={data.email} type="email"  placeholder='Your email' required /></label>
          <label className='flex gap-2'>Password: <input  name='password' onChange={onChangeHandler} value={data.password} type="password"  placeholder='Password' required /></label>
        
      </div>
      <div className='flex m-4 justify-center items-center'>
        <button  type='submit' className='bg-white rounded-full p-3 font-bold hover:scale-110 transition-transform duration-300'>{currentState==="Sign up" ? 'Create account': 'Login'}</button>
      </div>
      </form>
      <div className='flex gap-3 m-4 '>
        <input type="checkbox" required />
        <p>By continuing, I agree to the terms of use & privacy policy </p>
      </div>
      <div  className='flex justify-center items-center '>
      {currentState==='Login' ? <p>Create a new account? <span onClick={()=>{setCurrentState("Sign up")}} className=' underline italic hover:cursor-pointer hover:font-bold ' >Click here</span></p> : <p>Already have an account? <span onClick={()=>{setCurrentState("Login")}} className=' underline italic hover:cursor-pointer hover:font-bold '>Login here</span></p> }
      </div>
    </div>
    </div>
  )
}

export default LoginPopup

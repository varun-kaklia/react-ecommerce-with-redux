import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [emailError,setEmailError] = useState(false)
    const [email,setEmail] = useState('Please Enter Email')
    const [passwordError,setPasswordError] = useState(false)
    const [password,setPassword] = useState('Please Enter Your Password')
    const navigate = useNavigate()
    const user = localStorage.getItem('user').toString()
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[])
    const handleLogin = async()=>{
        const handleFetch = await axios.post(`https://ladyflorencepublicschool.in/public/api/admin/login?email=${email}&password=${password}`,{Headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }})
        const response = await handleFetch.json()
        if(response.code ===200 && response.status===1){
            localStorage.setItem('user',JSON.parse(response))
            window.location.href="/dashboard"
        }
    }

  return (
    <div className=''>
        <h2 className='text-center text-3xl font-bold'>Login</h2>
        <div className=''>
            <div className='justify-center md:px-[35%] px-[5%] my-4'>
                <label className='block text-2xl'>Email</label>
                <input type='email' placeholder={email} onChange={(e)=>setEmail(e.target.value)} className='border border-[#05b514] rounded py-3 px-4 w-full' />
            </div>
            <div className='justify-center md:px-[35%] px-[5%] my-4'>
                <label className='block text-2xl'>Password</label>
                <input type='password' placeholder={password} onChange={(e)=>setPassword(e.target.value)} className='border border-[#05b514] rounded py-3 px-4 w-full' />
            </div>
            <div className='text-center my-4'>
            <button className='md:w-[20%] w-2/3 py-4 font-semibold text-xl bg-[#05b514] hover:bg-transparent border-[#05b514] hover:transition hover:delay-100 text-gray-100 hover:text-[#05b514] border rounded-full' onClick={()=>handleLogin()}>
                Login
            </button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
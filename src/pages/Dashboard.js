import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const user = localStorage.getItem('user').toString()
  console.log('user',user)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[user])
  return (
    <div className='text-center'>
    <h1 className=''>Dashboard</h1>
    <div>Hello {user ? user?.data?.name: "Unknown"}</div>
    <button className='md:w-[20%] my-4 w-2/3 py-4 font-semibold text-xl bg-[#05b514] hover:bg-transparent border-[#05b514] hover:transition hover:delay-100 text-gray-100 hover:text-[#05b514] border rounded-full' onClick={()=>localStorage.removeItem('user')}>Logout</button>
    </div>
  )
}

export default Dashboard
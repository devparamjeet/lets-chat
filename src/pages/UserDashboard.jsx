import React from 'react'
import { useOutletContext } from 'react-router-dom'

const UserDashboard = () => {

  const { user } = useOutletContext()

  return (
    <div className='w-full h-full bg-amber-500'>
      <img src="/chatbg.png" alt="lets-chat"  className='w-full h-full object-cover object-bottom'/>
    </div>
  )
}

export default UserDashboard

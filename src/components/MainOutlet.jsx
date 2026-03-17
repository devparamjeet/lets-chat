import React from 'react'
import { Outlet } from 'react-router-dom'

const MainOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default MainOutlet

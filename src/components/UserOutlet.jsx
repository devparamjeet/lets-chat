import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const UserOutlet = () => {

    let user_id = JSON.parse(localStorage.getItem("user_id"))
    // console.log(user_id)

    const [user, setUser] = useState({})

    useEffect(() => {
        let fetchUser = async () => {
            let resp = await fetch('https://api.skillsvarz.com/api/user/' + user_id)
            let res = await resp.json()
            // console.log(res)
            setUser(res)
        }
        fetchUser()
    },[user_id])

    return (
        <div className='flex h-screen w-full'>
            <Sidebar user={user} />
            <Outlet context={{ user }} />
        </div>
    )
}

export default UserOutlet

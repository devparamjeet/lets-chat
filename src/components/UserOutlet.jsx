import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { ToastContainer } from 'react-toastify'

const UserOutlet = () => {

    let user_id = JSON.parse(localStorage.getItem("user_id"))
    // console.log(user_id)

    const [user, setUser] = useState({})
    const [chatId, setChatId] = useState("")
    const [friendName, setFriendName] = useState("")

    useEffect(() => {
        let fetchUser = async () => {
            let resp = await fetch('https://api.skillsvarz.com/api/user/' + user_id)
            let res = await resp.json()
            // console.log(res)
            setUser(res)
        }
        fetchUser()
    }, [user_id])

    // console.log(chatId);
    

    return (
        <div className='flex h-screen w-full'>
            <Sidebar user={user} setFriendName={setFriendName} chatId={chatId} setChatId={setChatId}/>
            <Outlet context={{ user , chatId, setChatId, friendName }} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default UserOutlet

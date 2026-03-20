import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const UserProfile = () => {

    const { user } = useOutletContext()

    const [userData, setUserData] = useState({})
    const [isEdit, setIsEdit] = useState(true)

    useEffect(() => {
        setUserData(user)
    }, [user])


    let handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    let handleEdit = () => {
        isEdit ? setIsEdit(false) : setIsEdit(true)
    }

    let handleCancel = () =>{
        setUserData(user)
        setIsEdit(true)
    }

    return (
        <div>
            {/* {user.name} Profile */}
            <label htmlFor="name">Your Name</label><br />
            <input onChange={handleChange} disabled={isEdit} type="text" id='name' name='name' value={userData.name} />

            <br />
            <label htmlFor="email"> Your Email</label><br />
            <input onChange={handleChange} disabled={isEdit} type="email" id='email' name='email' value={userData.email} />

            <br />
            <label htmlFor="phone">Your Phone</label><br />
            <input onChange={handleChange} disabled={isEdit} type="number" id='phone' name='phone' value={userData.phone} />

            <br />
            <label htmlFor="username">username</label><br />
            <input onChange={handleChange} disabled={isEdit} type="text" id='username' name='username' value={userData.username} placeholder='enter your username..' />

            <br />


            <button onClick={handleEdit}>{isEdit ? 'Edit Profile' : 'Save Changes'}</button>
            {isEdit ? <></> : <button onClick={handleCancel}>Cancel</button>}
        </div>
    )
}

export default UserProfile

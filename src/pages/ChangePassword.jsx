import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { toast } from 'react-toastify'

const ChangePassword = () => {

    let redirect = useNavigate();
    const { user } = useOutletContext()
    const [resetPass, setResetPass] = useState({
        password: "",
        cpassword: ""
    })

    let handleInput = (event) => {
        setResetPass({ ...resetPass, [event.target.name]: event.target.value })
    }

    let changePass = async () => {
        if (resetPass.password === resetPass.cpassword) {
            // toast.success("Pass match")
            let url = "https://api.skillsvarz.com/api/user/"+user._id
            let resp = await fetch(url,{
                method : 'PATCH',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({ password : resetPass.password})
            })

            if(resp.status === 200 || resp.status === 201){
                toast.success("Password Changed")
                setTimeout(()=>{
                    redirect('/login')
                },1000)
            }
            else toast.error("Something went wrong!!")

        }


        else toast.error("Confirm pass not match")
    }


    return (
        <div>
            <label htmlFor="password">Password</label>
            <input onChange={handleInput} type="password" name="password" id="password" placeholder='Enter your password...' />

            <br />
            <label htmlFor="cpassword">Confirm Password</label>
            <input onChange={handleInput} type="password" name="cpassword" id="cpassword" placeholder='Enter your confirm password...' />

            <br />

            <button onClick={changePass}>Change Password</button>

        </div>
    )
}

export default ChangePassword

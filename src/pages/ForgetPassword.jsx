import { KeyRound, Lock, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ForgetPassword = () => {

    let redirect = useNavigate()

    const [resetPass, setResetPass] = useState({
        otp:"",
        email: "",
        password: "",
        cpassword: ""
    })
    const [isOTPSend, setIsOTPSend] = useState(false)

    let handleInput = (event) => {
        setResetPass({ ...resetPass, [event.target.name]: event.target.value })
    }

    let changePass = async () => {
        let data = {
            otp: resetPass.otp,
            newPassword: resetPass.password
        }

        let url = "https://api.skillsvarz.com/api/reset-password"
        let resp = await fetch(url,{
            method :'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })

        let res = await resp.json();

        if(resp.status === 200 || resp.status === 201){
            toast.success("Password Changed Successfully")
            setTimeout(()=>{
                redirect('/login')
            },1000)
        }
        else toast.error(res?.error ? res.error : "Failed to Change Password")

        // toast.warning("To be Continue...")
    }

    let sendOTP = async () => {

        let url = "https://api.skillsvarz.com/api/forgot-password"
        let resp =await fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' :' application/json'
            },
            body : JSON.stringify({"email": resetPass.email})
        })

        let res = await resp.json()

        if(resp.status === 200 || resp.status === 201){
            toast.success("OTP Sent to registered Email")
            setIsOTPSend(true)
        }
        else toast.error(res?.error ? res.error : "Try Again")


    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    {isOTPSend ? "Reset Password" : "Forgot Password"}
                </h2>

                {isOTPSend ? (
                    <>
                        {/* OTP Field */}
                        <div className="mb-4 relative">
                            <KeyRound className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                onChange={handleInput}
                                type="number"
                                name="otp"
                                placeholder="Enter OTP"
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4 relative">
                            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                onChange={handleInput}
                                type="password"
                                name="password"
                                placeholder="Enter new password"
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4 relative">
                            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                onChange={handleInput}
                                type="password"
                                name="cpassword"
                                placeholder="Confirm password"
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            onClick={changePass}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Change Password
                        </button>
                    </>
                ) : (
                    <>
                        {/* Email */}
                        <div className="mb-4 relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                onChange={handleInput}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            onClick={sendOTP}
                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Send OTP
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ForgetPassword

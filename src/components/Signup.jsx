import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {

    const [signup, setSignup] = useState({
        uname: "",
        uemail: "",
        umobile: "",
        pass: "",
        cpass: ""
    })

    let handleChange = (event) => {
        setSignup({ ...signup, [event.target.name]: event.target.value })
    }

    let handleSignup = async () => {

        let newData = {
            email : signup.uemail,
            name : signup.uname,
            password : signup.pass,
            phone : signup.umobile
        }
        console.log(newData);
        
        
        let URL = "https://api.skillsvarz.com/api/users"
        let resp = await fetch(URL,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newData)
        })

        console.log(resp);
        let res = await resp.json()
        console.log(res);

    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Create an Account
                    </h2>

                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="uname" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                        </label>
                        <input
                            onChange={handleChange}
                            name="uname"
                            type="text"
                            id="uname"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="uemail" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Email
                        </label>
                        <input
                            onChange={handleChange}
                            name="uemail"
                            type="email"
                            id="uemail"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label htmlFor="umobile" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Phone No.
                        </label>
                        <input
                            onChange={handleChange}
                            name="umobile"
                            type="number"
                            id="umobile"
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="pass" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Password
                        </label>
                        <input
                            onChange={handleChange}
                            name="pass"
                            type="password"
                            id="pass"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label htmlFor="cpass" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            onChange={handleChange}
                            name="cpass"
                            type="password"
                            id="cpass"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                        />
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleSignup}
                        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
                    >
                        Register Now
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-400 text-sm">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Login */}
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-green-600 font-medium hover:underline">
                            Login Now
                        </Link>
                    </p>

                </div>
            </div>
        </>

    )
}

export default Signup

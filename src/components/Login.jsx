import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

    let redirect = useNavigate();

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })


    let handleLogin = async () => {
        // toast.success("Login Feature")

        let loginData = {
            email: login.username,
            password: login.password
        }


        let URL = "https://api.skillsvarz.com/api/login"
        let resp = await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        let res = await resp.json()
        // console.log(res)

        if (resp.status === 200 || res.status === 201) {
            localStorage.setItem("user_id", JSON.stringify(res.user._id))
            toast.success(res.message)
            setTimeout(() => {
                redirect("/user")
            }, 1000)
        }

        else toast.error(res.error)

    }

    // console.log(login)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login to Your Account
                </h2>

                {/* Username */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        onChange={(event) => {
                            setLogin({ ...login, username: event.target.value });
                        }}
                        placeholder="Enter your username or email..."
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(event) => {
                            setLogin({ ...login, password: event.target.value });
                        }}
                        placeholder="Enter your password..."
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    />
                </div>
                <Link to="/forget-password">Forget Password ?</Link>

                {/* Button */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>


                {/* Divider */}
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-400 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Register */}
                <p className="text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                        Register Now
                    </Link>
                </p>

            </div>
        </div>

    )
}

export default Login

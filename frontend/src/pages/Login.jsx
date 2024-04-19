import React from 'react'
import { useNavigate } from 'react-router-dom';
import eye from '../assets/eye.png'

const Login = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center p-8 rounded-lg">
                <h1 className="text-white text-3xl mb-6">Hi, Welcome! 👋</h1>

                <input
                    type="email"
                    placeholder="Email Address"
                    className="mb-4 w-80 p-2 bg-input bg-opacity-10 border border-inputStroke text-white text-opacity-50 placeholder-gray-400 rounded-md"
                />
                <div className="relative mb-2 w-80">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 bg-input bg-opacity-10 border border-inputStroke text-white placeholder-gray-400 rounded-md pr-10" // pr-10 to add padding inside the input on the right
                    />
                    <img src={eye} alt="Show Password" className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer pr-2" />
                </div>
                <a href="#" className="self-end text-gray-400 font-Inter font-regular text-sm mb-6">
                    Forgot password?
                </a>

                <button onClick={() => navigateTo('/chat')} className="bg-gold text-textLightBlack font-Inter font-semibold px-4 py-2 rounded-md mb-4 w-80">
                    Log in
                </button>

                <p className="text-gray-400 text-sm">
                    Don’t have an account?{' '}
                    <a onClick={() => navigateTo('/signup')} className="text-gold cursor-pointer">
                        Create one
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login

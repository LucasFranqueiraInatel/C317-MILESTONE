import React from 'react'
import { useNavigate } from 'react-router-dom';
import eye from '../assets/eye.png' // Ensure you have an eye icon for the visibility toggle

export const Signup = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md  p-6 rounded-lg">
                <h2 className="text-white font-poppins font-bold text-2xl font-bold mb-4">Create account</h2>
                <p className="text-white font-Inter font-regular mb-6">
                    Please create an account with your dealer email address.
                </p>
                <form className="">
                    
                    <input type="text" placeholder="Name" className="mb-3 w-80 p-2 bg-input bg-opacity-10 border border-inputStroke text-white text-opacity-50 placeholder-gray-400 rounded-md" />
                    <input type="text" placeholder="Phone" className="mb-3 w-80 p-2 bg-input bg-opacity-10 border border-inputStroke text-white text-opacity-50 placeholder-gray-400 rounded-md" />
                    <input type="text" placeholder="Email Address" className="mb-3 w-80 p-2 bg-input bg-opacity-10 border border-inputStroke text-white text-opacity-50 placeholder-gray-400 rounded-md" />
                    <input type="confirm email" placeholder="Confirm Email" className="mb-3 w-80 p-2 bg-input bg-opacity-10 border border-inputStroke text-white text-opacity-50 placeholder-gray-400 rounded-md" />
                    <input type="password" placeholder="Password" className="mb-3 w-80 p-2 bg-input bg-opacity-10 border border-inputStroke text-white text-opacity-50 placeholder-gray-400 rounded-md" />
                    <input type="confirm passowrd" placeholder="Confirm Password" className="mb-3 w-80 p-2 bg-input bg-opacity-10 border border-inputStroke text-white text-opacity-50 placeholder-gray-400 rounded-md" />

                    <button type="" className="w-80 bg-gold p-3 rounded-md text-textLightBlack font-bold">Create and Login</button>
                </form>
                <p className="text-gray-400 text-xs text-center mt-4">
                    By creating an account or signing you <br/> agree to our <a href="#" className="text-yellow-600">Terms and Conditions</a>
                </p>
            </div>
        </div>
    )
}

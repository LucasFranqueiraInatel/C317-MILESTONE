import React from 'react'
import { useNavigate } from 'react-router-dom';

const Chat_page = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md  p-6 rounded-lg">
                <h2 className="text-white font-poppins font-bold text-2xl font-bold mb-4">Create account</h2>
                <p className="text-white font-Inter font-regular mb-6">
                     Write a message.
                </p>
                <form className="">
                    <input type="text" placeholder="Mensage" className="mb-3 w-80 p-2 bg-input bg-opacity-10 border border-inputStroke text-white text-opacity-50 placeholder-gray-400 rounded-md" />
                </form>
            </div>
         </div>
    );
}

export default Chat_page;
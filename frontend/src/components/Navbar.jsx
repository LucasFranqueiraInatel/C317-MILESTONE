// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-black text-white h-28 flex items-center justify-start">
            <h1 className="text-2xl font-poppins w-80 text-lightGreen bg-lightBlack h-28 flex justify-center items-center border-b border-lightGreen select-none">
                <span className="font-bold mr-2">IWS</span>
                <span className="font-normal">CHATBOT</span>
            </h1>
        </div>

    );
};

export default Navbar;

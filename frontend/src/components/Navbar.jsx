// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-black text-white h-20 flex items-center justify-start">
            <h1 className="text-xl font-poppins text-lightGreen bg-lightBlack h-20 px-10 flex justify-center items-center border-b border-lightGreen select-none">
                <span className="font-bold mr-2">IWS</span>
                <span className="font-normal">CHATBOT</span>
            </h1>
        </div>

    );
};

export default Navbar;
